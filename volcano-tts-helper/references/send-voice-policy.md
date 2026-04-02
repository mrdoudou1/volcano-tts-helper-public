# send-voice-policy.md

## 默认语音发送策略（降低审批版）

以后当用户说：
- 语音发我
- 念出来
- tts
- 读给我听
- 发语音

默认优先走：
- OpenClaw 原生 `tts` 工具

原因：
- 不需要 `exec` 跑本地脚本
- 通常不会触发 gateway 主机命令审批
- 更适合高频直接语音回复

## 什么时候才走本地火山脚本

只有以下情况才使用：
- 用户明确指定“火山 TTS”
- 用户明确要求指定火山音色 / voiceType
- 用户明确要求豆包 2.0 的 instruction / contextText 能力
- 用户要求生成本地 mp3 文件
- 原生 `tts` 工具效果不满足，需要切回火山链路

脚本路径：
`/root/.openclaw/workspace/skills/volcano-tts-helper/scripts/synthesize-volcano-tts.mjs`

## 对用户的解释口径

如果用户问为什么现在不审批：
- 因为当前默认改成了原生 TTS 发送，不再先跑主机上的本地合成脚本。

如果用户问为什么某次又审批了：
- 因为那次用了本地火山脚本或其他需要 `exec` 的路径。
