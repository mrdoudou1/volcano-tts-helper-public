#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const DEFAULTS_PATH = '/root/.openclaw/workspace/skills/volcano-tts-helper/config/defaults.json';

function parseArgs(argv) {
  const out = {
    text: '',
    output: '',
    voiceType: '',
    appId: '',
    accessToken: '',
    cluster: '',
    endpoint: '',
    language: '',
    speedRatio: '',
    volumeRatio: '',
    pitchRatio: '',
    instruction: '',
    prompt: '',
    emotion: '',
    contextText: '',
    context: ''
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--text') out.text = argv[++i] || '';
    else if (a === '--output') out.output = argv[++i] || '';
    else if (a === '--voiceType') out.voiceType = argv[++i] || '';
    else if (a === '--appId') out.appId = argv[++i] || '';
    else if (a === '--accessToken') out.accessToken = argv[++i] || '';
    else if (a === '--cluster') out.cluster = argv[++i] || '';
    else if (a === '--endpoint') out.endpoint = argv[++i] || '';
    else if (a === '--language') out.language = argv[++i] || '';
    else if (a === '--speedRatio') out.speedRatio = argv[++i] || '';
    else if (a === '--volumeRatio') out.volumeRatio = argv[++i] || '';
    else if (a === '--pitchRatio') out.pitchRatio = argv[++i] || '';
    else if (a === '--instruction') out.instruction = argv[++i] || '';
    else if (a === '--prompt') out.prompt = argv[++i] || '';
    else if (a === '--emotion') out.emotion = argv[++i] || '';
    else if (a === '--contextText') out.contextText = argv[++i] || '';
    else if (a === '--context') out.context = argv[++i] || '';
  }
  return out;
}

function loadDefaults() {
  try {
    const raw = JSON.parse(fs.readFileSync(DEFAULTS_PATH, 'utf8'));
    return {
      defaultInstruction: typeof raw.defaultInstruction === 'string' ? raw.defaultInstruction : '',
      defaultContextText: typeof raw.defaultContextText === 'string' ? raw.defaultContextText : ''
    };
  } catch {
    return { defaultInstruction: '', defaultContextText: '' };
  }
}

function loadConfig() {
  const cfgPath = '/root/.openclaw/openclaw.json';
  const raw = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
  const pcfg = raw?.messages?.tts?.providers?.['volcengine-tts'] || {};
  const defaults = loadDefaults();
  return {
    appId: pcfg.appId || '',
    accessToken: pcfg.accessToken || '',
    cluster: pcfg.cluster || 'volcano_tts',
    voiceType: pcfg.voiceType || 'zh_female_wanwanxiaohe_moon_bigtts',
    endpoint: pcfg.endpoint || 'https://openspeech.bytedance.com/api/v1/tts',
    speedRatio: Number(pcfg.speedRatio ?? 1),
    volumeRatio: Number(pcfg.volumeRatio ?? 1),
    pitchRatio: Number(pcfg.pitchRatio ?? 1),
    language: pcfg.language || 'zh-CN',
    instruction: defaults.defaultInstruction,
    prompt: '',
    emotion: '',
    contextText: defaults.defaultContextText,
    context: ''
  };
}

function isDoubao2Voice(voiceType = '') {
  return typeof voiceType === 'string' && (
    voiceType.includes('_uranus_bigtts') || voiceType.startsWith('saturn_')
  );
}

function normalizeText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function buildRequestText(text) {
  return normalizeText(text);
}

function buildExtraRequestFields(cfg) {
  const instruction = normalizeText(cfg.instruction || cfg.prompt);
  const context = normalizeText(cfg.contextText || cfg.context);

  if (!isDoubao2Voice(cfg.voiceType)) return {};

  return {
    ...(instruction ? { instruction } : {}),
    ...(context ? { context } : {})
  };
}

async function main() {
  const args = parseArgs(process.argv);
  const cfg = { ...loadConfig(), ...Object.fromEntries(Object.entries(args).filter(([,v]) => v !== '')) };
  const text = args.text || '';
  if (!text.trim()) throw new Error('Missing --text');
  if (!cfg.appId || !cfg.accessToken) throw new Error('Volcano TTS missing appId/accessToken in messages.tts.providers.volcengine-tts');

  const requestText = buildRequestText(text);
  const extraRequestFields = buildExtraRequestFields(cfg);
  const payload = {
    app: { appid: cfg.appId, token: cfg.accessToken, cluster: cfg.cluster },
    user: { uid: 'openclaw-skill' },
    audio: {
      voice_type: cfg.voiceType,
      encoding: 'mp3',
      speed_ratio: Number(cfg.speedRatio || 1),
      volume_ratio: Number(cfg.volumeRatio || 1),
      pitch_ratio: Number(cfg.pitchRatio || 1),
      language: cfg.language || 'zh-CN',
      ...(cfg.emotion ? { emotion: cfg.emotion } : {})
    },
    request: {
      reqid: crypto.randomUUID(),
      text: requestText,
      text_type: 'plain',
      operation: 'query',
      with_frontend: 1,
      frontend_type: 'unitTson',
      ...extraRequestFields
    }
  };

  const resp = await fetch(cfg.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer;${cfg.accessToken}`
    },
    body: JSON.stringify(payload)
  });

  if (!resp.ok) throw new Error(`Volcano TTS HTTP ${resp.status}`);
  const json = await resp.json();
  if (json?.code !== 3000 || !json?.data) throw new Error(`Volcano TTS failed: ${json?.message || json?.code || 'unknown error'}`);

  const outFile = args.output || path.join('/root/.openclaw/workspace/tmp/volcano-tts', `volcano-tts-${Date.now()}.mp3`);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, Buffer.from(json.data, 'base64'));
  process.stdout.write(outFile + '\n');
}

main().catch((err) => {
  console.error(err?.stack || String(err));
  process.exit(1);
});
