<a id="top"></a>

# volcano-tts-helper-public

[![GitHub stars](https://img.shields.io/github/stars/mrdoudou1/volcano-tts-helper-public?style=flat-square)](https://github.com/mrdoudou1/volcano-tts-helper-public/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mrdoudou1/volcano-tts-helper-public?style=flat-square)](https://github.com/mrdoudou1/volcano-tts-helper-public/network)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![OpenClaw](https://img.shields.io/badge/OpenClaw-skill-blue?style=flat-square)](https://github.com/openclaw/openclaw)

> 🗣️ 一个面向 **OpenClaw** 的公开版火山引擎 / 豆包 TTS helper skill。  
> 🎙️ 用来整理 **音色映射、默认策略、本地合成脚本、2.0 能力说明**，方便自己复用，也方便别人直接拿去改。

<p align="center">
  <strong>适合：</strong> OpenClaw 语音回复、陪伴感 TTS、情侣感语音、豆包 2.0 音色、本地 mp3 合成、可公开分享的 skill 模板
</p>

---

## 🧭 目录

[项目介绍](#intro) ·
[适用场景](#scenes) ·
[核心特性](#features) ·
[仓库结构](#structure) ·
[快速开始](#quickstart) ·
[配置说明](#config) ·
[豆包 2.0 用法](#doubao2) ·
[推荐音色](#voices) ·
[FAQ](#faq) ·
[后续计划](#roadmap) ·
[安全说明](#security) ·
[致谢](#thanks)

---

<a id="intro"></a>

## 📖 项目介绍

这个仓库是我整理出来的一套 **OpenClaw + 火山引擎 TTS** 公开版工作流。

它不是官方 SDK，也不是一个完整插件市场项目，而是更偏实战一点的东西：

- 把本地已经跑通的 **skill 结构** 整理出来
- 把常用 **voiceType 映射** 和中文昵称整理出来
- 把 **豆包语音合成模型 2.0** 的实际用法写清楚
- 把“什么时候走原生 TTS，什么时候走火山脚本”这类策略沉淀下来

如果你也在折腾这些：

- OpenClaw 语音回复
- 火山引擎 TTS 接入
- 陪伴感 / 女友感 / 日常聊天风格
- 本地脚本生成 mp3
- 一套可以公开发 GitHub、不泄露配置的 skill 模板

那这个仓库基本就是为这个用途准备的。

<p align="right"><a href="#top">回到顶部</a></p>

---

<a id="scenes"></a>

## 🎯 适用场景

### 1. 想在 OpenClaw 里接火山 TTS

你已经有 OpenClaw，在想怎么把火山 / 豆包语音能力接进去，并且希望它能长期维护，不是一次性的测试脚本。

### 2. 想做更自然的语音回复

比如：

- 温柔聊天
- 陪伴感回复
- 情侣感语音
- 讲故事 / 角色扮演
- 比系统默认 TTS 更像真人说话

### 3. 想用豆包语音合成模型 2.0

尤其是：

- instruction（自然语言控制语气）
- contextText（给上下文）
- 更自然的情绪和停顿
- 更适合陪伴聊天的音色

### 4. 想把本地经验整理成一个干净的公开仓库

保留：

- skill
- 文档
- 脚本
- 映射表

不公开：

- appId
- accessToken
- openclaw 主配置
- 私人账号信息

<p align="right"><a href="#top">回到顶部</a></p>

---

<a id="features"></a>

## ✨ 核心特性

- **skill 化整理**：不是一堆散乱脚本，而是一套可维护的 OpenClaw skill 目录结构
- **支持火山 / 豆包 2.0 能力**：不仅能换音色，还能用自然语言控制说话方式
- **支持本地脚本合成 mp3**：方便试听、调试、导出本地语音文件
- **默认风格分离**：把默认 instruction / contextText 从主配置拆出来，避开 schema 校验问题
- **音色映射完整**：支持中文昵称 → voiceType，切换更方便
- **默认策略清楚**：日常语音和高级火山链路分层明确
- **公开版无敏感信息**：适合直接放 GitHub，不会把 token 和私有配置一起带出去

<p align="right"><a href="#top">回到顶部</a></p>

---

<a id="structure"></a>

## 🗂️ 仓库结构

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

### 各文件作用

#### `volcano-tts-helper/SKILL.md`

主 skill 文档，定义：

- 默认策略
- 快速流程
- 配置位置
- 音色切换规则
- 豆包 2.0 推荐用法
- 默认风格放哪里
- 改完后是否要重启

#### `volcano-tts-helper/references/local-tts.md`

本地参考资料，内容比较全，主要包括：

- OpenClaw 主配置路径
- voiceType / speedRatio / pitchRatio / volumeRatio 对应字段
- 中文昵称 → voiceType 映射
- 豆包语音合成模型 2.0 常用音色
- 传统在线音色补充
- emotion 参数参考
- 常见陪伴感 / 男友感 / 女友感 / 可爱系音色推荐

#### `volcano-tts-helper/references/send-voice-policy.md`

这个文件专门讲“**日常发语音怎么选路径**”。

核心思路：

- 普通“念出来 / 发语音 / tts”优先原生工具
- 明确指定火山音色 / 2.0 instruction / 本地 mp3 时再走火山本地脚本

这样做的好处是：

- 审批更少
- 响应更快
- 日常使用体验更稳

#### `volcano-tts-helper/scripts/synthesize-volcano-tts.mjs`

本地 Node.js 合成脚本，支持：

- 从 `/root/.openclaw/openclaw.json` 读取火山配置
- 从 `defaults.json` 读取默认 instruction / contextText
- 命令行临时参数覆盖默认值
- 自动把结果写成 mp3 并输出路径

<p align="right"><a href="#top">回到顶部</a></p>

---

<a id="quickstart"></a>

## 🚀 快速开始

### 第 1 步：把 skill 放进工作区

把 `volcano-tts-helper/` 放到你的 OpenClaw workspace：

```bash
~/.openclaw/workspace/skills/volcano-tts-helper
```

### 第 2 步：准备火山插件配置

你需要在 OpenClaw 主配置里启用本地插件，例如：

- `plugins.allow` 包含 `volcengine-tts`
- `plugins.entries.volcengine-tts.enabled = true`
- `plugins.entries.volcengine-tts.config` 中填写火山参数

常见字段：

- `appId`
- `accessToken`
- `cluster`
- `voiceType`
- `endpoint`
- `speedRatio`
- `pitchRatio`
- `volumeRatio`
- `language`

### 第 3 步：建议保留合法内置 provider 兜底

比较稳的做法是：

- `messages.tts.provider` 继续保持 OpenClaw 支持的合法值（例如 `edge`）
- 火山 TTS 作为 **本地增强链路** 使用

不要一上来就把系统主 provider 硬改成一个不被主流程识别的值，否则更容易把整体 TTS 行为搞乱。

### 第 4 步：可选配置默认风格

你可以增加：

```json
{
  "defaultInstruction": "请用温柔、自然、带一点撒娇和陪伴感的语气说这段话。",
  "defaultContextText": "这是亲密关系里的日常聊天场景，整体自然、顺耳、有陪伴感。"
}
```

推荐位置：

```text
volcano-tts-helper/config/defaults.json
```

### 第 5 步：重启网关

```bash
openclaw gateway restart
```

### 第 6 步：测试本地合成

```bash
node /root/.openclaw/workspace/skills/volcano-tts-helper/scripts/synthesize-volcano-tts.mjs --text '你好呀，今天想让我陪你做什么？'
```

如果成功，脚本会输出一个本地 mp3 路径。

<p align="right"><a href="#top">回到顶部</a></p>

---

<a id="config"></a>

## ⚙️ 配置说明

### 1. 主配置放什么

主配置 `openclaw.json` 里建议只放 **插件合法字段**，比如：

- `voiceType`
- `speedRatio`
- `pitchRatio`
- `volumeRatio`
- `language`
- `appId`
- `accessToken`
- `endpoint`
- `cluster`

### 2. 默认风格放什么

像下面这些，不建议直接写进插件主配置：

- `instruction`
- `prompt`
- `contextText`
- `context`
- `emotion`

更稳的做法是单独放到：

```text
volcano-tts-helper/config/defaults.json
```

例如：

```json
{
  "defaultInstruction": "请用有一点激动开心、软软撒娇的台湾女生语气说这段话。",
  "defaultContextText": ""
}
```

### 3. 为什么要分开

因为很多插件 schema 会限制：

```json
{
  "additionalProperties": false
}
```

如果你直接往 `plugins.entries.volcengine-tts.config` 里塞没声明的字段，容易触发：

- `openclaw doctor` 报错
- 配置校验失败
- 网关无法正常加载配置

### 4. 改完是否要重启

通常建议重启。尤其是改了这些以后：

- `voiceType`
- `speedRatio`
- `pitchRatio`
- `volumeRatio`
- 插件入口配置
- 插件代码
- `defaults.json`

命令：

```bash
openclaw gateway restart
```

<p align="right"><a href="#top">回到顶部</a></p>

---

<a id="doubao2"></a>

## 🎤 豆包语音合成模型 2.0 用法

这一块其实是我比较看重的，因为 2.0 音色和传统音色的思路不太一样。

传统思路往往是：

- 选个音色
- 调语速
- 调音调
- 调音量

但 2.0 更好的玩法是：

- **先选对音色**
- **再写自然语言 instruction**
- 必要时补 `contextText`
- 把比例参数当微调，不当主控制方式

### 核心能力

#### 1. 语音指令

可以直接写你想让它怎么说：

- 温柔一点
- 带一点撒娇
- 像悄悄话一样
- 更像女友聊天
- 低沉一点
- 有点开心和激动
- 用 ASMR 的感觉说

#### 2. 引用上文

适合：

- 多轮聊天
- 承接上一句情绪
- 连续发语音
- 陪伴感对话

它的作用不是把上文读出来，而是让模型理解“现在该怎么接着说”。

#### 3. 语音标签

这是更细一点的增强能力，适合：

- 某一句想更有情绪
- 想加一点旁白 / 动作 / 心理活动感
- 剧情演绎或角色感更强的场景

但别默认全开，因为不是所有音色都支持。

### 当前推荐策略

#### 日常直接语音

如果用户只是说：

- 念出来
- 发语音
- 语音回复
- tts
- 读给我听

优先：

- **OpenClaw 原生 `tts` 工具**

因为：

- 更快
- 不需要额外 exec
- 审批更少
- 高频使用更顺手

#### 明确指定火山能力

如果用户明确要求：

- 火山 TTS
- 指定火山音色
- 指定 voiceType
- 使用 2.0 instruction
- 使用 contextText
- 导出本地 mp3

再走：

- **本地火山脚本 / 本地火山 skill 工作流**

<p align="right"><a href="#top">回到顶部</a></p>

---

<a id="voices"></a>

## 🎧 推荐音色

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

### 常见中文昵称示例

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

完整映射请直接看：

- `volcano-tts-helper/references/local-tts.md`

<p align="right"><a href="#top">回到顶部</a></p>

---

<a id="faq"></a>

## ❓ FAQ

### 1. 为什么不把 instruction / contextText 直接写进 openclaw.json？

因为插件 schema 很可能限制了额外字段，直接塞进去容易报错。

更稳的做法是：

- 合法字段放 `openclaw.json`
- 默认 instruction / contextText 放 `defaults.json`

### 2. 改完配置后一定要重启吗？

严格说不是所有改动都必须重启，但为了避免你以为生效了其实没生效，**建议改完就重启一次**。

```bash
openclaw gateway restart
```

### 3. 原生 TTS 和火山 TTS 怎么分工更合理？

我更推荐：

- **原生 TTS**：负责高频、快速、少审批
- **火山 TTS**：负责高质量、强风格、需要指定音色或 2.0 能力的场景

这样更稳，也更省事。

### 4. 这个仓库为什么不直接放完整可运行配置？

因为公开仓库最怕把：

- token
- appId
- accessToken
- bot 配置
- 私有路径

这些一起发出去。这个仓库的目标是：**公开结构和方法，不公开你的密钥和私人配置。**

<p align="right"><a href="#top">回到顶部</a></p>

---

<a id="roadmap"></a>

## 🛣️ 后续计划

后面有空的话，我想继续补这些：

- `config/defaults.example.json`
- README 截图或流程图
- 常见 OpenClaw 集成案例
- Telegram / WeChat 直接发语音示例
- 常见报错排障手册
- 更多官方新音色更新

如果你也在用这套，欢迎直接 fork 或提 PR。

<p align="right"><a href="#top">回到顶部</a></p>

---

<a id="security"></a>

## 🔐 安全说明

请不要把这些东西提交到公开仓库：

- 火山引擎 `appId` / `accessToken`
- OpenClaw 网关 token
- Telegram / WeChat bot token
- 私人聊天记录
- 任何真实账号密钥

如果你要分享一个能复用的版本，建议只保留：

- 文档
- skill
- 脚本模板
- 映射表
- `.example` 配置文件

<p align="right"><a href="#top">回到顶部</a></p>

---

<a id="thanks"></a>

## 🙌 致谢

这个仓库主要是为了把 **OpenClaw + 火山引擎 TTS** 这套本地实践整理出来，省得每次都从零重新摸。

它不是那种“写得很标准但根本没人真拿来用”的文档，我更希望它是：

- 自己以后还会回来翻
- 别人 fork 之后能真跑起来
- 遇到问题时能直接帮上忙

如果你也在折腾 OpenClaw 语音、陪伴感 TTS、豆包 2.0 音色，欢迎拿去改。

<p align="right"><a href="#top">回到顶部</a></p>
