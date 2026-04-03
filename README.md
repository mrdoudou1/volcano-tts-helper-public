# volcano-tts-helper-public

公开版的 **OpenClaw 火山引擎 TTS helper skill**，专门用于在 OpenClaw 工作区里接入火山引擎 / 豆包语音合成能力，支持更自然、更有情绪的中文语音回复。

这个仓库是**可公开分享的无敏感版本**：保留 skill、参考文档和本地合成脚本，不包含任何私密 token、账号配置或网关主配置。

## 项目定位

适合这些场景：

- 想在 OpenClaw 里接入火山引擎 TTS
- 想保留一套可复用、可公开分享的 skill 模板
- 想做“陪伴感 / 情侣感 / 讲故事 / 角色感”更强的语音回复
- 想使用豆包语音合成模型 2.0 的 instruction / contextText 能力
- 想把本地最佳实践整理成一个干净的公开仓库

## 特性

- **OpenClaw skill 化封装**：不是零散脚本，而是一套可维护的 skill 结构
- **支持火山 / 豆包 2.0 能力**：可用自然语言控制语气、风格、陪伴感
- **支持本地脚本合成 mp3**：适合调试、试听、导出本地语音文件
- **支持默认风格配置**：可长期固定“温柔 / 撒娇 / 日常聊天”等说话方式
- **支持中文昵称切音色**：方便把“温柔淑女 / 甜宠少御 / 邻家女孩 2.0”映射到 voiceType
- **兼容 OpenClaw 主配置约束**：把默认 instruction / contextText 从主配置剥离，避免 schema 校验报错
- **默认策略清晰**：日常直接发语音可优先原生 TTS，明确指定火山能力时再走本地脚本

## 仓库结构

```text
volcano-tts-helper-public/
├─ README.md
└─ volcano-tts-helper/
   ├─ SKILL.md
   ├─ references/
   │  ├─ local-tts.md
   │  └─ send-voice-policy.md
   └─ scripts/
      └─ synthesize-volcano-tts.mjs
```

## 包含内容

### `volcano-tts-helper/SKILL.md`

主 skill 文档，说明：

- 什么时候优先走火山 TTS
- 什么时候回退到 OpenClaw 原生 `tts`
- 如何切换音色 / 调整风格 / 修改默认策略
- 配置文件分别放在哪里
- 豆包语音合成模型 2.0 的推荐使用方式

### `volcano-tts-helper/references/local-tts.md`

本地参考文档，包含：

- OpenClaw 主配置路径说明
- `voiceType / speedRatio / pitchRatio / volumeRatio` 对应字段
- 中文昵称 → voiceType 映射
- 豆包语音合成模型 2.0 常用音色
- 传统在线音色补充
- emotion 参数参考
- 常见陪伴感 / 男友感 / 女友感 / 可爱系音色建议

### `volcano-tts-helper/references/send-voice-policy.md`

语音发送策略说明，核心是：

- 日常“念出来 / 发语音 / tts”优先原生工具，减少审批和 exec 依赖
- 只有明确需要火山音色 / 本地 mp3 / 2.0 高级能力时才走本地火山脚本

### `volcano-tts-helper/scripts/synthesize-volcano-tts.mjs`

本地 Node.js 合成脚本，支持：

- 从 `/root/.openclaw/openclaw.json` 读取火山 TTS 配置
- 从 `config/defaults.json` 读取默认 instruction / contextText
- 单次传参覆盖默认值
- 自动输出 mp3 文件路径

## 不包含内容

本公开版**刻意不包含**以下敏感配置：

- `/root/.openclaw/openclaw.json`
- `/root/.openclaw/settings/tts.json`
- 任何 `appId`
- 任何 `accessToken`
- 任何 bot token / gateway token / git token
- 任何用户私密账号信息
- 任何私有工作区专用路径配置（除公开示例所需说明外）

如果你要真正跑起来，需要自行准备并注入你自己的火山引擎配置。

## 使用方式

### 1. 放入 OpenClaw workspace

把 `volcano-tts-helper/` 复制到你的工作区 skills 目录，例如：

```bash
~/.openclaw/workspace/skills/volcano-tts-helper
```

### 2. 准备火山 TTS 插件配置

在你的 OpenClaw 主配置里启用本地插件，例如：

- `plugins.allow` 里包含 `volcengine-tts`
- `plugins.entries.volcengine-tts.enabled = true`
- `plugins.entries.volcengine-tts.config` 里写入：
  - `appId`
  - `accessToken`
  - `cluster`
  - `voiceType`
  - `endpoint`
  - `speedRatio`
  - `pitchRatio`
  - `volumeRatio`
  - `language`

> 注意：`messages.tts.provider` 建议保持 OpenClaw 合法内置值（例如 `edge`），把火山链路作为本地插件 / 脚本工作流来用，而不是强行替代系统内置 provider。

### 3. 配置默认风格（可选）

你可以增加一个本地文件：

```json
{
  "defaultInstruction": "请用温柔、自然、带一点撒娇和陪伴感的语气说这段话。",
  "defaultContextText": "这是亲密关系中的日常聊天场景，整体自然、顺耳、有陪伴感。"
}
```

推荐文件位置：

```text
volcano-tts-helper/config/defaults.json
```

这样可以把长期默认提示词和上下文从 `openclaw.json` 分离出去，避免主配置 schema 校验时报：

```text
must NOT have additional properties
```

### 4. 运行本地合成脚本

```bash
node /root/.openclaw/workspace/skills/volcano-tts-helper/scripts/synthesize-volcano-tts.mjs --text '你好呀，今天想让我陪你做什么？'
```

如果成功，会输出一个本地 mp3 文件路径。

## 2026-04 当前推荐策略

### 日常直接语音

当用户只是说：

- 念出来
- 发语音
- tts
- 语音回复
- 读给我听

推荐优先：

- **OpenClaw 原生 `tts` 工具**

原因：

- 更快
- 不需要额外 `exec`
- 审批更少
- 更适合高频使用

### 明确指定火山能力

当用户明确要求：

- 火山 TTS
- 指定火山音色
- 指定 `voiceType`
- 使用豆包 2.0 的 instruction
- 使用 contextText / 引用上文
- 生成本地 mp3 文件

推荐走：

- **本地火山脚本 / 本地火山 skill 工作流**

## 豆包语音合成模型 2.0 用法

当前更推荐把 2.0 音色理解成“**音色 + 自然语言说话指令**”，而不是只调传统比例参数。

### 核心能力

#### 1. 语音指令

可以直接写自然语言来描述说话方式，例如：

- 温柔一点
- 带一点撒娇
- 像悄悄话一样
- 更像女友聊天
- 带一点开心和激动
- 用 ASMR 的感觉说

#### 2. 引用上文

把前文作为语境输入，帮助模型承接情绪、停顿和说话氛围，但不直接朗读前文。

适合：

- 多轮聊天
- 连续语音回复
- 陪伴感场景
- 承接上一句情绪

#### 3. 语音标签

用于局部细节增强，例如：

- 表情
- 动作
- 心理活动
- 旁白感

> 注意：语音标签并不是所有 2.0 音色都支持，不建议默认全开。

## 推荐音色

### 陪伴 / 情侣感

优先推荐：

- 邻家女孩 2.0
- 魅力女友 2.0
- 小何 2.0
- 温柔淑女
- 甜宠少御

### 正常日常聊天

优先推荐：

- 小何 2.0
- Vivi 2.0
- 开朗青年
- 儒雅青年

### 可爱 / 软萌

优先推荐：

- 撒娇学妹 2.0
- 甜美小源 2.0
- 甜美桃子 2.0
- 小萝莉

### 成熟稳重 / 男声

优先推荐：

- 擎苍
- 霸气青叔
- 儒雅逸辰 2.0
- 刘飞 2.0

## 常见中文昵称示例

- 温柔淑女 → `BV104_streaming`
- 甜宠少御 → `BV113_streaming`
- 开朗青年 → `BV004_streaming`
- 儒雅青年 → `BV102_streaming`
- 擎苍 → `BV701_streaming`
- 小何 2.0 → `zh_female_xiaohe_uranus_bigtts`
- Vivi 2.0 → `zh_female_vv_uranus_bigtts`
- 邻家女孩 2.0 → `zh_female_linjianvhai_uranus_bigtts`
- 魅力女友 2.0 → `zh_female_meilinvyou_uranus_bigtts`
- 甜美小源 2.0 → `zh_female_tianmeixiaoyuan_uranus_bigtts`

更完整的音色表请查看：

- `volcano-tts-helper/references/local-tts.md`

## 常见问题

### 1. 为什么不把 instruction / contextText 直接写进 openclaw.json？

因为很多插件 schema 会设置：

```json
{
  "additionalProperties": false
}
```

如果直接往 `plugins.entries.volcengine-tts.config` 里塞未声明字段，可能导致：

- `openclaw doctor` 报错
- 网关配置校验失败
- 网关启动异常

所以更稳的做法是：

- 合法字段继续放 `openclaw.json`
- 默认提示词和上下文单独放 `defaults.json`

### 2. 改完配置后要不要重启？

通常建议重启：

```bash
openclaw gateway restart
```

如果你改了这些内容，最好重启：

- `voiceType`
- `speedRatio`
- `pitchRatio`
- `volumeRatio`
- 插件入口配置
- 插件代码
- `defaults.json`（为了插件主链路稳定读取）

### 3. 原生 TTS 和火山 TTS 应该怎么分工？

比较稳的思路是：

- **系统内置 provider**：保留合法值，作为兜底
- **火山 TTS**：作为高质量、本地增强的语音工作流

这样兼顾：

- 系统稳定性
- 高级语音能力
- 审批成本
- 调试灵活性

## 适合继续扩展的方向

这个公开仓库后续可以继续补：

- `config/defaults.example.json`
- 更完整的 README 示例截图
- 常见 OpenClaw 集成方式
- 常见报错与排障手册
- 更多官方音色更新
- 直接发送语音到 Telegram / WeChat 的完整工作流示例

## 安全提醒

请不要把以下内容提交到公开仓库：

- 火山引擎 appId / accessToken
- OpenClaw 网关 token
- Telegram / WeChat bot token
- 私人聊天记录
- 任何真实账号密钥

如果你要分享可运行示例，建议只保留：

- 文档
- skill
- 映射表
- 脚本模板
- `.example` 配置文件

## 致谢

这个仓库用于整理和公开分享 OpenClaw + 火山引擎 TTS 的本地最佳实践，目标不是做一个“官方 SDK”，而是做一套**真正能给 AI 助手拿来用、拿来改、拿来复用**的工作流模板。

如果你也在折腾 OpenClaw 语音、陪伴感 TTS、豆包 2.0 音色，欢迎 fork、补充、改进。
