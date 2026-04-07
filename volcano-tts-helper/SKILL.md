---
name: volcano-tts-helper
description: 默认语音回复与火山 TTS 配置 skill。用户提到语音回复、tts、念出来、读给我听、火山 TTS、音色切换、voiceType、语速、音调、音量、当前音色、可用音色、重启网关、情侣感语音、陪伴感语音、讲故事音色、唱歌音色时使用。默认优先走火山 TTS，失败时再回退到系统内置 TTS。
---

# 火山TTS助手

用这个 skill 处理当前工作区里的火山引擎 TTS 配置与切换。

## 默认策略

- 当用户要“语音回复 / 念出来 / tts / 读给我听”时，默认优先使用火山 TTS 这条本地 skill 工作流。
- 默认陪伴 / 情侣感 / 温柔聊天，优先 `温柔淑女` 或 `甜宠少御`。
- 默认正常聊天，优先 `开朗青年` 或 `儒雅青年`。
- OpenClaw 内置 `messages.tts.provider` 只作为系统合法配置和兜底，不把 `volcengine-tts` 当作网关内置 provider。
- 如果火山链路不可用，再回退到系统内置 TTS。

## 快速流程

1. 先读：`/root/.openclaw/workspace/skills/volcano-tts-helper/references/local-tts.md`
2. 如果用户问当前音色或当前火山配置：检查
   - `/root/.openclaw/settings/tts.json`
   - `/root/.openclaw/openclaw.json`
   - `/root/.openclaw/workspace/skills/volcano-tts-helper/config/defaults.json`
3. 如果用户要求切换火山音色：修改 `/root/.openclaw/openclaw.json` 里的 `plugins.entries.volcengine-tts.config.voiceType`
4. 如果用户要求调整火山说话风格：优先修改
   - `/root/.openclaw/workspace/skills/volcano-tts-helper/config/defaults.json` 里的 `defaultInstruction`
   - `/root/.openclaw/workspace/skills/volcano-tts-helper/config/defaults.json` 里的 `defaultContextText`
   只有在确实需要时再改：
   - `speedRatio`
   - `pitchRatio`
   - `volumeRatio`
5. 如果用户只是说“直接发语音 / 念出来 / 语音回复 / tts”，默认优先使用火山引擎 TTS。
6. 默认优先顺序：
   - 第一优先：火山 TTS / 本地火山链路
   - 第二优先：OpenClaw 原生 `tts` 工具（仅在火山链路不可用、审批受阻或用户明确要求快速直发时回退）
7. 本地火山链路使用：
   - `node /root/.openclaw/workspace/skills/volcano-tts-helper/scripts/synthesize-volcano-tts.mjs --text '要说的话'`
8. 如果走脚本生成成功，再把输出的 mp3 路径作为音频发到目标会话。
9. 修改配置生效后，如有必要再执行：
   - `openclaw gateway restart`
10. 最后回复用户：当前默认语音策略、当前音色、改了哪个文件

## 当前推荐使用方法（2026-04 更新）

### A. 日常直接发语音
当用户只是要：
- 语音发我
- 念出来
- 读给我听
- tts

默认优先：
- 使用火山引擎 TTS

回退条件：
- 火山链路不可用
- 当前审批受阻，用户更在意快速收到语音
- 用户明确说“直接发就行，不挑火山音色”

此时再回退到：
- OpenClaw 原生 `tts` 工具

### B. 火山音色 / 火山高级风格控制
当用户明确要：
- 火山 TTS
- 某个火山音色
- 某个火山 voiceType
- 豆包 2.0 instruction / contextText 风格
- 本地 mp3 文件

继续走本地火山链路：
- 插件配置文件：`/root/.openclaw/openclaw.json`
- 默认风格文件：`/root/.openclaw/workspace/skills/volcano-tts-helper/config/defaults.json`
- 本地脚本：`/root/.openclaw/workspace/skills/volcano-tts-helper/scripts/synthesize-volcano-tts.mjs`

### C. 当前默认风格配置位置
- 默认火山提示词：`/root/.openclaw/workspace/skills/volcano-tts-helper/config/defaults.json`
- 当前字段：`defaultInstruction`
- 当前字段：`defaultContextText`

### D. 当前链路原则
- 默认语音发送：优先火山引擎 TTS
- 火山不可用或审批卡住时：再回退原生 `tts`
- 不再把火山提示词拼进正文朗读
- 火山 2.0 风格参数应与正文分开传递

## 本地关键事实

- 系统内置 TTS provider 需要保持合法值（如 `edge`），不要写成 `volcengine-tts`
- 火山 TTS 的主配置文件：`/root/.openclaw/openclaw.json`
- 火山配置入口：`plugins.entries.volcengine-tts`
- 当前本地默认音色：`zh_female_wanwanxiaohe_moon_bigtts`
- `/root/.openclaw/settings/tts.json` 可作为本地火山工作流选择器保留，但不要再把它理解为网关内置 provider 注册入口

## 口令理解规则

当用户说下面这种话时：

- `切换火山TTS到温柔淑女`
- `用甜宠少御发语音`
- `改成开朗青年音色`
- `换个更像女友聊天的音色`

默认理解为：修改 `voiceType`。

如果用户说的是中文别名，而不是精确 voice id，就去 `references/local-tts.md` 里做映射。

## 默认推荐策略

如果用户只是要推荐，不指定严格音色：

- 陪伴 / 情侣感 / 温柔分享：优先 `邻家女孩 2.0`、`魅力女友 2.0`；保守一点可用 `小何 2.0`
- 正常聊天：优先 `小何 2.0`、`Vivi 2.0`
- 成熟稳一点：优先 `擎苍` 或 `霸气青叔`
- 可爱一点：优先 `小萝莉`、`甜美小源 2.0` 或 `甜美桃子 2.0`
- 如果用户强调“更像真人聊天/更自然/更陪伴”，优先考虑“豆包语音合成模型 2.0”音色，而不是只在传统音色上硬调参数。

## 豆包语音合成 2.0 能力理解

对于 `zh_female_xiaohe_uranus_bigtts`、`zh_female_vv_uranus_bigtts`、`zh_female_linjianvhai_uranus_bigtts`、`zh_female_meilinvyou_uranus_bigtts` 等 2.0 音色，优先按下面的思路理解：

1. **语音指令**
   - 用户可以直接用自然语言描述希望的整体说话方式。
   - 例如：`温柔一点`、`带点撒娇`、`暧昧一点`、`像悄悄话一样`、`用 asmr 的感觉说`、`低沉沙哑一点`。
   - 这类控制优先级高于单纯的 `speedRatio/pitchRatio/volumeRatio`。

2. **引用上文**
   - 如果用户要求“承接上一句语气”“带着上文语境来念”，应理解为：给模型提供只引用、不合成的上文内容，用于帮助模型理解当前情绪和停顿。
   - 这类能力尤其适合聊天陪伴、多轮对话、连续语音回复。

3. **语音标签**
   - 用于某个句子前的局部细节增强，例如表情、心理、动作、旁白等。
   - 当前只对部分音色开放，不要默认所有 2.0 音色都支持。
   - 适合剧情演绎、角色扮演、小说片段，不适合默认日常聊天都开启。

## 推荐口令理解

如果用户这样说，默认按下面理解：

- `用小何2.0，温柔一点念` → 2.0 音色 + 语音指令
- `用邻家女孩2.0，像悄悄话一样说` → 2.0 音色 + 语音指令
- `用魅力女友2.0，带一点暧昧感` → 2.0 音色 + 语音指令
- `引用我上一句的话来念` → 启用“引用上文”能力
- `这一句加个旁白感` / `前面加个动作描述` → 语音标签（先确认当前音色是否支持）

## 2.0 当前推荐使用方式

### 一、最常用的默认思路

- **普通聊天 / 单条语音**：优先 `2.0 音色 + 语音指令`
- **连续聊天 / 承接上一句语气**：`2.0 音色 + 语音指令 + contextText`
- **剧情演绎 / 角色感更强**：`2.0 音色 + 语音指令`，必要时再补 `contextText`
- **不要一上来先硬调** `speedRatio / pitchRatio / volumeRatio`，除非试听后确认真的需要微调

### 二、用户视角怎么解释最简单

如果用户问“2.0 应该怎么用”，优先这样说：

1. 先选一个 2.0 音色
2. 再写一句自然语言提示词（语音指令）
3. 如果想让它承接上文语气，再补一段上下文
4. 大部分场景先用提示词就够了，上下文是增强项，不是默认必开项

### 三、默认提示词与默认上下文的存放方式

为了避免污染插件 schema，当前**默认 2.0 提示词不再写入**：

- `/root/.openclaw/openclaw.json`
- `plugins.entries.volcengine-tts.config`

而是单独保存在：

- `/root/.openclaw/workspace/skills/volcano-tts-helper/config/defaults.json`

字段含义：

- `defaultInstruction`：默认语音指令 / 默认提示词 / 默认说话方式
- `defaultContextText`：默认上下文说明 / 默认场景补充（只用于帮助理解语境，不直接朗读）

### 四、为什么不能直接写进 openclaw.json

因为插件 schema 文件：

- `/root/.openclaw/extensions/volcengine-tts/openclaw.plugin.json`

配置了：

- `additionalProperties: false`

所以 `plugins.entries.volcengine-tts.config` 只允许 schema 里已经声明的字段。
如果把 `instruction / prompt / emotion / contextText / context` 这类自定义字段直接写进去，会导致：

- `openclaw doctor`
- 网关配置校验

报错：

- `invalid config: must NOT have additional properties`

### 五、当前安全落地方案

当前本地已经改成：

1. **插件主配置** 继续只保留合法字段（如 `voiceType / speedRatio / pitchRatio / volumeRatio / language`）
2. **默认 2.0 提示词** 单独保存在：
   - `/root/.openclaw/workspace/skills/volcano-tts-helper/config/defaults.json`
3. **本地合成脚本**：
   - `/root/.openclaw/workspace/skills/volcano-tts-helper/scripts/synthesize-volcano-tts.mjs`
   会优先读取 `defaults.json`
4. **插件主链路**：
   - `/root/.openclaw/extensions/volcengine-tts/index.js`
   现在也会读取 `defaults.json`
5. 如果调用时显式传了 `instruction / prompt / emotion / contextText / context`，则优先覆盖默认值

### 六、当前生效范围

现在已经是：

- **本地合成脚本** `synthesize-volcano-tts.mjs` 会自动读取 `defaults.json`
- **OpenClaw 插件主链路** `volcengine-tts/index.js` 也会自动读取 `defaults.json`

也就是说，当前默认提示词方案已经从“只对测试脚本生效”，升级成了：

- **脚本生效**
- **插件主链路也生效**

### 七、当前实际执行逻辑

当前火山 / 豆包 2.0 的逻辑顺序是：

1. **基础音色与比例参数** 从 `/root/.openclaw/openclaw.json` 读取
   - `voiceType`
   - `speedRatio`
   - `pitchRatio`
   - `volumeRatio`
   - `language`
2. **默认提示词与默认上下文** 从 `/root/.openclaw/workspace/skills/volcano-tts-helper/config/defaults.json` 读取
   - `defaultInstruction`
   - `defaultContextText`
3. **单次调用临时参数**（如果有）优先覆盖默认值
   - `instruction`
   - `prompt`
   - `emotion`
   - `contextText`
   - `context`
4. 最终再拼成请求文本发给火山 TTS / 豆包 2.0

### 八、现在怎么用最稳

#### A. 想长期固定一种 2.0 说话风格
直接改：

- `/root/.openclaw/workspace/skills/volcano-tts-helper/config/defaults.json`

例如：

```json
{
  "defaultInstruction": "请用温柔、自然、带一点撒娇和陪伴感的语气说话。",
  "defaultContextText": "这是亲密关系里的日常聊天场景，整体自然、顺耳、有陪伴感。"
}
```

#### B. 想临时换一次语气
调用时直接传新的：

- `instruction`
- 或 `contextText`

这一轮会覆盖默认值，但不会改掉 `defaults.json` 里的长期默认。

#### C. 想换音色
改：

- `/root/.openclaw/openclaw.json`
- `plugins.entries.volcengine-tts.config.voiceType`

#### D. 想微调音高 / 语速 / 音量
改：

- `speedRatio`
- `pitchRatio`
- `volumeRatio`

但 2.0 场景下，优先级通常低于“音色 + 语音指令”。

### 九、改完后是否需要重启

- 改 `openclaw.json`：**通常需要重启网关**
- 改插件代码 `index.js`：**需要重启网关**
- 改 `defaults.json`：为了让插件主链路稳定读到最新值，**建议也重启一次网关**；本地脚本单独运行时通常直接生效

推荐命令：

```bash
systemctl --user restart openclaw-gateway.service
```

## 注意事项

- 不要改无关的 OpenClaw 配置。
- 修改时优先做最小精确编辑。
- 改完后明确告诉用户修改了哪个文件。
- 如果用户说的音色名有歧义，只问一个简短澄清问题。
- 对 2.0 音色，优先把“语气变化”理解成语音指令能力，而不是只靠传统参数硬调。

## 给别人复用：本地是怎么改好的

这一段是给后续维护者/其他人看的，说明当前这套火山 TTS 是怎么接进 OpenClaw 的。

### 1）核心思路

当前这套做法不是把 `volcengine-tts` 当成 OpenClaw 官方内置 provider 来注册，而是：

- **网关主配置里启用本地插件**：`plugins.entries.volcengine-tts`
- **消息层 TTS provider 保持系统合法值**：主配置里建议仍保留 `messages.tts.provider = edge` 作为系统兜底
- **本地选择器 `/root/.openclaw/settings/tts.json`** 可以写成 `volcengine-tts`，作为当前工作流的本地选择标记
- 真正发音时，优先走本地 `volcengine-tts` 插件 / 脚本链路；失败时再回退系统内置 TTS

也就是说：

- `openclaw.json` 决定插件有没有启用、参数是什么
- `settings/tts.json` 决定“当前偏向哪条本地 TTS 工作流”
- `messages.tts.provider` 仍要保持 OpenClaw 支持的合法 provider，避免把网关主配置改坏

### 2）怎么“注册”火山 TTS 插件

当前本地是**路径安装**的方式，已经注册在：

- `plugins.installs.volcengine-tts.source = path`
- `plugins.installs.volcengine-tts.sourcePath = /root/.openclaw/extensions/volcengine-tts`

也就是说，这个插件不是从 npm 拉的，而是本地目录安装进去的。

后续如果别人要复用，关键是保证：

1. 本地插件目录存在：
   - `/root/.openclaw/extensions/volcengine-tts`
2. `openclaw.json` 里允许加载这个插件：
   - `plugins.allow` 里包含 `volcengine-tts`
3. `plugins.entries.volcengine-tts.enabled = true`
4. `plugins.installs.volcengine-tts` 正确指向本地插件目录

当前配置结构长这样：

```json
{
  "plugins": {
    "allow": ["openclaw-weixin", "telegram", "volcengine-tts"],
    "entries": {
      "volcengine-tts": {
        "enabled": true,
        "config": {
          "appId": "你的 appId",
          "accessToken": "你的 accessToken",
          "cluster": "volcano_tts",
          "voiceType": "zh_female_meilinvyou_uranus_bigtts",
          "endpoint": "https://openspeech.bytedance.com/api/v1/tts",
          "speedRatio": 1,
          "volumeRatio": 1,
          "pitchRatio": 1,
          "language": "zh-CN"
        }
      }
    },
    "installs": {
      "volcengine-tts": {
        "source": "path",
        "sourcePath": "/root/.openclaw/extensions/volcengine-tts",
        "installPath": "/root/.openclaw/extensions/volcengine-tts",
        "version": "1.0.0"
      }
    }
  }
}
```

### 3）怎么修改音色 / 语速 / 音调 / 音量

主要改这里：

- 文件：`/root/.openclaw/openclaw.json`
- 路径：`plugins.entries.volcengine-tts.config`

常改字段：

- `voiceType`：音色
- `speedRatio`：语速
- `pitchRatio`：音调
- `volumeRatio`：音量
- `language`：语言

比如把音色切到“温柔淑女”，本质上就是把：

```json
plugins.entries.volcengine-tts.config.voiceType
```

改成对应的 voice id（例如 `BV104_streaming`）。

如果用户说中文昵称，不知道实际 id，就去：

- `references/local-tts.md`

里面查中文名 → voiceType 的映射。

### 4）怎么增加白名单

这里说的“白名单”，当前实际有两层：

#### A. 插件白名单

让 OpenClaw 允许加载这个插件，需要在：

- `/root/.openclaw/openclaw.json`
- `plugins.allow`

里加入：

```json
"volcengine-tts"
```

如果不在 `plugins.allow` 里，就算写了 `plugins.entries.volcengine-tts`，网关也可能不会按预期加载。

#### B. 渠道/账号白名单（如果要控制谁能用）

如果是 Telegram 群、账号、来源控制，那不是改 TTS 插件本身，而是改渠道配置，例如：

- `channels.telegram.accounts.<account>.allowFrom`
- 或对应 channel 的 `groupPolicy / dmPolicy`

也就是说：

- **插件能不能加载** → 看 `plugins.allow`
- **哪些人/群能不能触发** → 看 channel 自己的 allowlist / policy

不要把这两种白名单混在一起。

### 5）本地选择器是怎么配的

当前本地还有一个选择器文件：

- `/root/.openclaw/settings/tts.json`

现在内容是：

```json
{
  "tts": {
    "provider": "volcengine-tts"
  }
}
```

这个文件在当前工作区里更适合被理解成：

- **本地偏好 / 工作流选择器**
- 而不是 OpenClaw 网关官方 provider 注册入口

因为主网关配置里，`messages.tts.provider` 仍然保持合法内置值（比如 `edge`）会更稳。

### 6）改完后怎么生效

改完配置后，通常执行：

```bash
openclaw gateway restart
```

如果只是读配置或查当前音色，不一定需要重启；
但只要改了 `voiceType`、比例参数、插件启用状态，最好重启一次网关。

### 7）推荐给别人复用的最小步骤

1. 准备本地插件目录：`/root/.openclaw/extensions/volcengine-tts`
2. 在 `openclaw.json` 的 `plugins.allow` 里加入 `volcengine-tts`
3. 写好 `plugins.entries.volcengine-tts.enabled = true`
4. 配好 `appId / accessToken / endpoint / cluster / voiceType`
5. 保持 `messages.tts.provider` 为系统支持的合法值（建议 `edge`）
6. 可选：在 `/root/.openclaw/settings/tts.json` 里标记当前本地默认工作流为 `volcengine-tts`
7. 执行 `openclaw gateway restart`

### 8）当前这套方案的经验结论

- 最稳的方式是：**火山走本地插件/脚本，系统 provider 保持合法内置值兜底**
- 不要直接把 `messages.tts.provider` 改成一个未被 OpenClaw 官方主流程识别的 provider，容易让系统行为变得不稳定
- 中文昵称和 voice id 最好维护在 `references/local-tts.md`，这样后续切音色不需要到处翻文档
- “白名单”要分清楚：插件加载白名单是 `plugins.allow`，渠道访问白名单是 channel 配置
