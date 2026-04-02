# volcano-tts-helper-public

公开版的 OpenClaw 火山引擎 TTS helper skill。

## 包含内容
- `volcano-tts-helper/SKILL.md`
- `volcano-tts-helper/references/local-tts.md`
- `volcano-tts-helper/references/send-voice-policy.md`
- `volcano-tts-helper/scripts/synthesize-volcano-tts.mjs`

## 不包含内容
本公开版刻意不包含以下敏感配置：
- `/root/.openclaw/openclaw.json`
- `/root/.openclaw/settings/tts.json`
- 任何 appId / accessToken / botToken / gateway token / git token
- 任何用户私密配置与账号信息

## 使用说明
这个公开版主要用于分享：
- 火山 TTS skill 用法
- 默认与回退策略
- 本地脚本结构

如需真正运行，请自行准备并注入你自己的火山引擎配置。
