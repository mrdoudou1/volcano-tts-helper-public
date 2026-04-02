# 火山TTS本地参考

## 本地配置文件

- 主配置：`/root/.openclaw/openclaw.json`
- TTS 选择器：`/root/.openclaw/settings/tts.json`
- 插件入口：`plugins.entries.volcengine-tts`
- 音色键：`plugins.entries.volcengine-tts.config.voiceType`
- 语速键：`plugins.entries.volcengine-tts.config.speedRatio`
- 音量键：`plugins.entries.volcengine-tts.config.volumeRatio`
- 音调键：`plugins.entries.volcengine-tts.config.pitchRatio`

## 当前已知本地状态

- 系统内置 TTS provider 需要保持 OpenClaw 支持的合法值（建议 `edge` 作为兜底）
- 火山 TTS 默认走本地 skill 工作流，而不是网关内置 provider 注册
- 当前默认音色记录：`zh_female_wanwanxiaohe_moon_bigtts`
- 语言：`zh-CN`
- endpoint：`https://openspeech.bytedance.com/api/v1/tts`
- cluster：`volcano_tts`

## 中文名 → voiceType 映射

### 当前系统展示名 / 官方常用名
- 湾湾小何 → `zh_female_wanwanxiaohe_moon_bigtts`
- 小何 / 小何 2.0 → `zh_female_xiaohe_uranus_bigtts`
- Vivi / Vivi 2.0 → `zh_female_vv_uranus_bigtts`
- 知性灿灿 → `saturn_zh_female_cancan_tob`
- 可爱女生 → `saturn_zh_female_keainvsheng_tob`
- 调皮公主 → `saturn_zh_female_tiaopigongzhu_tob`
- 爽朗少年 → `saturn_zh_male_shuanglangshaonian_tob`
- 天才同桌 → `saturn_zh_male_tiancaitongzhuo_tob`
- 云舟 → `zh_male_m191_uranus_bigtts`
- 小天 → `zh_male_taocheng_uranus_bigtts`
- Tim → `en_male_tim_uranus_bigtts`
- Dacey → `en_female_dacey_uranus_bigtts`
- Stokie → `en_female_stokie_uranus_bigtts`
- 刘飞 2.0 → `zh_male_liufei_uranus_bigtts`
- 魅力苏菲 2.0 → `zh_male_sophie_uranus_bigtts`
- 清新女声 2.0 → `zh_female_qingxinnvsheng_uranus_bigtts`
- 知性灿灿 2.0 → `zh_female_cancan_uranus_bigtts`
- 撒娇学妹 2.0 → `zh_female_sajiaoxuemei_uranus_bigtts`
- 甜美小源 2.0 → `zh_female_tianmeixiaoyuan_uranus_bigtts`
- 甜美桃子 2.0 → `zh_female_tianmeitaozi_uranus_bigtts`
- 爽快思思 2.0 → `zh_female_shuangkuaisisi_uranus_bigtts`
- 佩奇猪 2.0 → `zh_female_peiqi_uranus_bigtts`
- 邻家女孩 2.0 → `zh_female_linjianvhai_uranus_bigtts`
- 少年梓辛/Brayan 2.0 → `zh_male_shaonianzixin_uranus_bigtts`
- 猴哥 2.0 → `zh_male_sunwukong_uranus_bigtts`
- Tina老师 2.0 → `zh_female_yingyujiaoxue_uranus_bigtts`
- 暖阳女声 2.0 → `zh_female_kefunvsheng_uranus_bigtts`
- 儿童绘本 2.0 → `zh_female_xiaoxue_uranus_bigtts`
- 大壹 2.0 → `zh_male_dayi_uranus_bigtts`
- 黑猫侦探社咪仔 2.0 → `zh_female_mizai_uranus_bigtts`
- 鸡汤女 2.0 → `zh_female_jitangnv_uranus_bigtts`
- 魅力女友 2.0 → `zh_female_meilinvyou_uranus_bigtts`
- 流畅女声 2.0 → `zh_female_liuchangnv_uranus_bigtts`
- 儒雅逸辰 2.0 → `zh_male_ruyayichen_uranus_bigtts`

### 豆包语音合成模型 2.0 常用推荐
- 小何 2.0 → `zh_female_xiaohe_uranus_bigtts`
- Vivi 2.0 → `zh_female_vv_uranus_bigtts`
- 邻家女孩 2.0 → `zh_female_linjianvhai_uranus_bigtts`
- 魅力女友 2.0 → `zh_female_meilinvyou_uranus_bigtts`
- 撒娇学妹 2.0 → `zh_female_sajiaoxuemei_uranus_bigtts`
- 甜美小源 2.0 → `zh_female_tianmeixiaoyuan_uranus_bigtts`
- 甜美桃子 2.0 → `zh_female_tianmeitaozi_uranus_bigtts`
- 清新女声 2.0 → `zh_female_qingxinnvsheng_uranus_bigtts`

### 豆包语音合成模型 2.0 全量常用映射（当前已整理到本地）
- Vivi 2.0 → `zh_female_vv_uranus_bigtts`
- 小何 2.0 → `zh_female_xiaohe_uranus_bigtts`
- 云舟 2.0 → `zh_male_m191_uranus_bigtts`
- 小天 2.0 → `zh_male_taocheng_uranus_bigtts`
- 刘飞 2.0 → `zh_male_liufei_uranus_bigtts`
- 魅力苏菲 2.0 → `zh_male_sophie_uranus_bigtts`
- 清新女声 2.0 → `zh_female_qingxinnvsheng_uranus_bigtts`
- 知性灿灿 2.0 → `zh_female_cancan_uranus_bigtts`
- 撒娇学妹 2.0 → `zh_female_sajiaoxuemei_uranus_bigtts`
- 甜美小源 2.0 → `zh_female_tianmeixiaoyuan_uranus_bigtts`
- 甜美桃子 2.0 → `zh_female_tianmeitaozi_uranus_bigtts`
- 爽快思思 2.0 → `zh_female_shuangkuaisisi_uranus_bigtts`
- 佩奇猪 2.0 → `zh_female_peiqi_uranus_bigtts`
- 邻家女孩 2.0 → `zh_female_linjianvhai_uranus_bigtts`
- 少年梓辛 / Brayan 2.0 → `zh_male_shaonianzixin_uranus_bigtts`
- 猴哥 2.0 → `zh_male_sunwukong_uranus_bigtts`
- Tina老师 2.0 → `zh_female_yingyujiaoxue_uranus_bigtts`
- 暖阳女声 2.0 → `zh_female_kefunvsheng_uranus_bigtts`
- 儿童绘本 2.0 → `zh_female_xiaoxue_uranus_bigtts`
- 大壹 2.0 → `zh_male_dayi_uranus_bigtts`
- 黑猫侦探社咪仔 2.0 → `zh_female_mizai_uranus_bigtts`
- 鸡汤女 2.0 → `zh_female_jitangnv_uranus_bigtts`
- 魅力女友 2.0 → `zh_female_meilinvyou_uranus_bigtts`
- 流畅女声 2.0 → `zh_female_liuchangnv_uranus_bigtts`
- 儒雅逸辰 2.0 → `zh_male_ruyayichen_uranus_bigtts`
- Tim → `en_male_tim_uranus_bigtts`
- Dacey → `en_female_dacey_uranus_bigtts`
- Stokie → `en_female_stokie_uranus_bigtts`
- 可爱女生 → `saturn_zh_female_keainvsheng_tob`
- 调皮公主 → `saturn_zh_female_tiaopigongzhu_tob`
- 爽朗少年 → `saturn_zh_male_shuanglangshaonian_tob`
- 天才同桌 → `saturn_zh_male_tiancaitongzhuo_tob`

### 大模型音色的特点
- 上述 2.0 音色来自“豆包语音合成模型 2.0”路线，通常比传统固定风格音色更适合聊天陪伴。
- 文档标注能力一般包含：`情感变化`、`指令遵循`、`ASMR`。
- 这类音色更适合通过“文案上下文 + 说话风格描述”去引导语气，而不只是硬调 `speedRatio/pitchRatio/volumeRatio`。
- 做陪伴聊天推荐优先试听：`小何 2.0`、`邻家女孩 2.0`、`魅力女友 2.0`。

### 豆包语音合成 2.0 的三类核心能力
1. **语音指令**
   - 作用：控制整段语音的整体情绪、语气、语速、音调、方言、ASMR 等。
   - 形式更接近自然语言提示词，例如：`温柔一点`、`带点撒娇`、`像悄悄话一样`、`低沉沙哑一点`。
2. **引用上文**
   - 作用：把上文作为理解语境的参考输入，但不朗读上文。
   - 适合聊天陪伴、多轮对话、承接上一句情绪和停顿。
3. **语音标签**
   - 作用：给局部句子加表情/心理/动作/旁白等细节增强。
   - 当前是抢鲜能力，只对部分音色开放，不适合默认对所有音色启用。

### 实际使用建议
- 想要“更像真人聊天”时，优先：**选对 2.0 音色 + 语音指令**。
- 想要“承接上句话情绪”时，再加：**引用上文**。
- 想要“某一句特别演一下”时，才考虑：**语音标签**。
- `speedRatio/pitchRatio/volumeRatio` 仍可保留，但对 2.0 音色更适合作为微调，而不是主控制方式。

### 本地常用快捷口令映射
- 温柔淑女 → `BV104_streaming`
- 甜宠少御 → `BV113_streaming`
- 开朗青年 → `BV004_streaming`
- 儒雅青年 → `BV102_streaming`
- 阳光青年 → `BV123_streaming`
- 质朴青年 → `BV100_streaming`
- 擎苍 → `BV701_streaming`
- 反卷青年 → `BV120_streaming`
- 通用赘婿 → `BV119_streaming`
- 古风少御 → `BV115_streaming`
- 霸气青叔 → `BV107_streaming`
- 阳光男声 → `VC_BV056_streaming`
- 通用女声 → `VC_BV001_streaming`
- 小萝莉 → `VC_BV064_streaming`
- 甜美小源 → `VC_BV405_streaming`

### 传统在线音色 1.0 / 常用旧版补充
- 灿灿 → `BV700_streaming`
- 擎苍 → `BV701_streaming`
- 通用女声 → `BV001_streaming`
- 通用男声 → `BV002_streaming`
- 阳光青年 → `BV123_streaming`
- 反卷青年 → `BV120_streaming`
- 通用赘婿 → `BV119_streaming`
- 古风少御 → `BV115_streaming`
- 霸气青叔 → `BV107_streaming`
- 质朴青年 → `BV100_streaming`
- 温柔淑女 → `BV104_streaming`
- 开朗青年 → `BV004_streaming`
- 甜宠少御 → `BV113_streaming`
- 甜美小源 → `BV405_streaming`
- 亲切女声 → `BV007_streaming`
- 知性女声 → `BV009_streaming`
- 诚诚 → `BV419_streaming`
- 童童 → `BV415_streaming`
- 亲切男声 → `BV008_streaming`
- 译制片男声 → `BV408_streaming`
- 懒小羊 → `BV426_streaming`
- 清新文艺女声 → `BV428_streaming`
- 鸡汤女声 → `BV403_streaming`
- 智慧老者 → `BV158_streaming`
- 慈爱姥姥 → `BV157_streaming`
- 说唱小哥 → `BR001_streaming`
- 活力解说男 → `BV410_streaming`
- 影视解说小帅 → `BV411_streaming`
- 解说小帅-多情感 → `BV437_streaming`
- 影视解说小美 → `BV412_streaming`
- 纨绔青年 → `BV159_streaming`
- 直播一姐 → `BV418_streaming`
- 沉稳解说男 → `BV142_streaming`
- 潇洒青年 → `BV143_streaming`
- 阳光男声 → `BV056_streaming`
- 活泼女声 → `BV005_streaming`
- 小萝莉 → `BV064_streaming`
- 奶气萌娃 → `BV051_streaming`
- 动漫海绵 → `BV063_streaming`
- 动漫海星 → `BV417_streaming`
- 动漫小新 → `BV050_streaming`
- 天才童声 → `BV061_streaming`
- 促销男声 → `BV401_streaming`
- 促销女声 → `BV402_streaming`
- 磁性男声 → `BV006_streaming`
- 新闻女声 → `BV011_streaming`
- 新闻男声 → `BV012_streaming`
- 知性姐姐-双语 → `BV034_streaming`
- 温柔小哥 → `BV033_streaming`

### 豆包语音合成模型 1.0 / emotion 参数总表

#### 中文音色 emotion
- 开心 → `happy`
- 悲伤 → `sad`
- 生气 → `angry`
- 惊讶 → `surprised`
- 恐惧 → `fear`
- 厌恶 → `hate`
- 激动 → `excited`
- 冷漠 → `coldness`
- 中性 → `neutral`
- 沮丧 → `depressed`
- 撒娇 → `lovey-dovey`
- 害羞 → `shy`
- 安慰鼓励 → `comfort`
- 咆哮 / 焦急 → `tension`
- 温柔 → `tender`
- 讲故事 / 自然讲述 → `storytelling`
- 情感电台 → `radio`
- 磁性 → `magnetic`
- 广告营销 → `advertising`
- 气泡音 → `vocal-fry`
- 低语 / ASMR → `ASMR`
- 新闻播报 → `news`
- 娱乐八卦 → `entertainment`
- 方言 → `dialect`

#### 英文音色 emotion
- 中性 → `neutral`
- 愉悦 → `happy`
- 愤怒 → `angry`
- 悲伤 → `sad`
- 兴奋 → `excited`
- 对话 / 闲聊 → `chat`
- 低语 / ASMR → `ASMR`
- 温暖 → `warm`
- 深情 → `affectionate`
- 权威 → `authoritative`

### 豆包语音合成模型 1.0 / 多情感与对话音色补充
- 冷酷哥哥（多情感） → `zh_male_lengkugege_emo_v2_mars_bigtts`
- 甜心小美（多情感） → `zh_female_tianxinxiaomei_emo_v2_mars_bigtts`
- 高冷御姐（多情感） → `zh_female_gaolengyujie_emo_v2_mars_bigtts`
- 傲娇霸总（多情感） → `zh_male_aojiaobazong_emo_v2_mars_bigtts`
- 广州德哥（多情感） → `zh_male_guangzhoudege_emo_mars_bigtts`
- 京腔侃爷（多情感） → `zh_male_jingqiangkanye_emo_mars_bigtts`
- 邻居阿姨（多情感） → `zh_female_linjuayi_emo_v2_mars_bigtts`
- 优柔公子（多情感） → `zh_male_yourougongzi_emo_v2_mars_bigtts`
- 儒雅男友（多情感） → `zh_male_ruyayichen_emo_v2_mars_bigtts`
- 俊朗男友（多情感） → `zh_male_junlangnanyou_emo_v2_mars_bigtts`
- 北京小爷（多情感） → `zh_male_beijingxiaoye_emo_v2_mars_bigtts`
- 柔美女友（多情感） → `zh_female_roumeinvyou_emo_v2_mars_bigtts`
- 阳光青年（多情感） → `zh_male_yangguangqingnian_emo_v2_mars_bigtts`
- 魅力女友（多情感） → `zh_female_meilinvyou_emo_v2_mars_bigtts`
- 爽快思思（多情感） → `zh_female_shuangkuaisisi_emo_v2_mars_bigtts`
- 深夜播客 → `zh_male_shenyeboke_emo_v2_mars_bigtts`
- Tina老师 → `zh_female_yingyujiaoyu_mars_bigtts`
- 温柔女神 → `ICL_zh_female_wenrounvshen_239eff5e8ffa_tob`
- Vivi → `zh_female_vv_mars_bigtts`
- 亲切女声（月球版） → `zh_female_qinqienvsheng_moon_bigtts`
- 机灵小伙 → `ICL_zh_male_shenmi_v1_tob`
- 元气甜妹 → `ICL_zh_female_wuxi_tob`
- 知心姐姐 → `ICL_zh_female_wenyinvsheng_v1_tob`
- 阳光阿辰 → `zh_male_qingyiyuxuan_mars_bigtts`
- 快乐小东 → `zh_male_xudong_conversation_wvae_bigtts`
- 冷酷哥哥 → `ICL_zh_male_lengkugege_v1_tob`
- 纯澈女生 → `ICL_zh_female_feicui_v1_tob`
- 初恋女友 → `ICL_zh_female_yuxin_v1_tob`
- 贴心闺蜜 → `ICL_zh_female_xnx_tob`
- 温柔白月光 → `ICL_zh_female_yry_tob`
- 炀炀 → `ICL_zh_male_BV705_streaming_cs_tob`
- 开朗学长 → `en_male_jason_conversation_wvae_bigtts`
- 魅力苏菲 → `zh_female_sophie_conversation_wvae_bigtts`
- Candice → `en_female_candice_emo_v2_mars_bigtts`
- Serena → `en_female_skye_emo_v2_mars_bigtts`
- Glen → `en_male_glen_emo_v2_mars_bigtts`
- Sylus → `en_male_sylus_emo_v2_mars_bigtts`
- Corey → `en_male_corey_emo_v2_mars_bigtts`
- Nadia → `en_female_nadia_tips_emo_v2_mars_bigtts`
- 贴心妹妹 → `ICL_zh_female_yilin_tob`
- 甜美桃子 → `zh_female_tianmeitaozi_mars_bigtts`
- 清新女声 → `zh_female_qingxinnvsheng_mars_bigtts`
- 知性女声 → `zh_female_zhixingnvsheng_mars_bigtts`
- 清爽男大 → `zh_male_qingshuangnanda_mars_bigtts`
- 邻家女孩 → `zh_female_linjianvhai_moon_bigtts`
- 渊博小叔 → `zh_male_yuanboxiaoshu_moon_bigtts`
- 阳光青年（月球版） → `zh_male_yangguangqingnian_moon_bigtts`
- 甜美小源（月球版） → `zh_female_tianmeixiaoyuan_moon_bigtts`
- 清澈梓梓 → `zh_female_qingchezizi_moon_bigtts`
- 解说小明 → `zh_male_jieshuoxiaoming_moon_bigtts`
- 开朗姐姐 → `zh_female_kailangjiejie_moon_bigtts`
- 邻家男孩 → `zh_male_linjiananhai_moon_bigtts`
- 甜美悦悦 → `zh_female_tianmeiyueyue_moon_bigtts`
- 心灵鸡汤 → `zh_female_xinlingjitang_moon_bigtts`
- 知性温婉 → `ICL_zh_female_zhixingwenwan_tob`
- 暖心体贴 → `ICL_zh_male_nuanxintitie_tob`
- 开朗轻快 → `ICL_zh_male_kailangqingkuai_tob`
- 活泼爽朗 → `ICL_zh_male_huoposhuanglang_tob`
- 率真小伙 → `ICL_zh_male_shuaizhenxiaohuo_tob`
- 温柔小哥（Mars版） → `zh_male_wenrouxiaoge_mars_bigtts`
- 灿灿 / Shiny → `zh_female_cancan_mars_bigtts`
- 爽快思思 / Skye → `zh_female_shuangkuaisisi_moon_bigtts`
- 温暖阿虎 / Alvin → `zh_male_wennuanahu_moon_bigtts`
- 少年梓辛 / Brayan → `zh_male_shaonianzixin_moon_bigtts`
- 温柔文雅 → `ICL_zh_female_wenrouwenya_tob`
- 沪普男 → `zh_male_hupunan_mars_bigtts`
- 鲁班七号 → `zh_male_lubanqihao_mars_bigtts`
- 林潇 → `zh_female_yangmi_mars_bigtts`
- 玲玲姐姐 → `zh_female_linzhiling_mars_bigtts`
- 春日部姐姐 → `zh_female_jiyejizi2_mars_bigtts`
- 唐僧 → `zh_male_tangseng_mars_bigtts`
- 庄周 → `zh_male_zhuangzhou_mars_bigtts`
- 猪八戒 → `zh_male_zhubajie_mars_bigtts`
- 感冒电音姐姐 → `zh_female_ganmaodianyin_mars_bigtts`
- 直率英子 → `zh_female_naying_mars_bigtts`
- 女雷神 → `zh_female_leidian_mars_bigtts`
- 粤语小溏 → `zh_female_yueyunv_mars_bigtts`
- 豫州子轩 → `zh_male_yuzhouzixuan_moon_bigtts`
- 呆萌川妹 → `zh_female_daimengchuanmei_moon_bigtts`
- 广西远舟 → `zh_male_guangxiyuanzhou_moon_bigtts`
- 双节棍小哥 → `zh_male_zhoujielun_emo_v2_mars_bigtts`
- 湾湾小何 → `zh_female_wanwanxiaohe_moon_bigtts`
- 湾区大叔 → `zh_female_wanqudashu_moon_bigtts`
- 广州德哥（月球版） → `zh_male_guozhoudege_moon_bigtts`
- 浩宇小哥 → `zh_male_haoyuxiaoge_moon_bigtts`
- 北京小爷（月球版） → `zh_male_beijingxiaoye_moon_bigtts`
- 京腔侃爷 / Harmony → `zh_male_jingqiangkanye_moon_bigtts`
- 妹坨洁儿 → `zh_female_meituojieer_moon_bigtts`
- 纯真少女 → `ICL_zh_female_chunzhenshaonv_e588402fb8ad_tob`
- 奶气小生 → `ICL_zh_male_xiaonaigou_edf58cf28b8b_tob`
- 精灵向导 → `ICL_zh_female_jinglingxiangdao_1beb294a9e3e_tob`
- 闷油瓶小哥 → `ICL_zh_male_menyoupingxiaoge_ffed9fc2fee7_tob`
- 黯刃秦主 → `ICL_zh_male_anrenqinzhu_cd62e63dcdab_tob`
- 霸道总裁 → `ICL_zh_male_badaozongcai_v1_tob`
- 妩媚可人 → `ICL_zh_female_ganli_v1_tob`
- 邪魅御姐 → `ICL_zh_female_xiangliangya_v1_tob`
- 嚣张小哥 → `ICL_zh_male_ms_tob`
- 油腻大叔 → `ICL_zh_male_you_tob`
- 孤傲公子 → `ICL_zh_male_guaogongzi_v1_tob`
- 胡子叔叔 → `ICL_zh_male_huzi_v1_tob`
- 性感魅惑 → `ICL_zh_female_luoqing_v1_tob`
- 病弱公子 → `ICL_zh_male_bingruogongzi_tob`
- 邪魅女王 → `ICL_zh_female_bingjiao3_tob`
- 傲慢青年 → `ICL_zh_male_aomanqingnian_tob`
- 醋精男生 → `ICL_zh_male_cujingnansheng_tob`
- 爽朗少年 → `ICL_zh_male_shuanglangshaonian_tob`
- 撒娇男友 → `ICL_zh_male_sajiaonanyou_tob`
- 温柔男友 → `ICL_zh_male_wenrounanyou_tob`
- 温顺少年 → `ICL_zh_male_wenshunshaonian_tob`
- 粘人男友 → `ICL_zh_male_naigounanyou_tob`
- 撒娇男生 → `ICL_zh_male_sajiaonansheng_tob`
- 活泼男友 → `ICL_zh_male_huoponanyou_tob`
- 甜系男友 → `ICL_zh_male_tianxinanyou_tob`
- 活力青年 → `ICL_zh_male_huoliqingnian_tob`
- 开朗青年（ICL版） → `ICL_zh_male_kailangqingnian_tob`
- 冷漠兄长 → `ICL_zh_male_lengmoxiongzhang_tob`

### 其他常见音色
- 活泼女声 → `VC_BV005_streaming`
- 磁性男声 → `VC_BV006_streaming`
- 知性女声 → `VC_BV009_streaming`
- 新闻女声 → `VC_BV011_streaming`
- 温柔小哥 → `VC_BV033_streaming`
- 知性姐姐-双语 → `VC_BV034_streaming`
- 活泼幼教-双语 → `VC_BV057_streaming`
- 天才童声 → `VC_BV061_streaming`
- 动漫海绵 → `VC_BV063_streaming`
- 西安佟掌柜 → `VC_BV210_streaming`
- 北京小伙儿 → `VC_BV222_streaming`
- 影视解说小帅 → `VC_BV411_streaming`
- 动漫海星 → `VC_BV417_streaming`
- 懒小羊 → `VC_BV426_streaming`
- 容嬷嬷 → `VC_BV430_streaming`
- 天真萌娃-Lily → `VC_BV506_streaming`
- 慵懒女声-Ava → `VC_BV511_streaming`

## 支持歌唱模式的音色

- 通用女声 → `VC_BV001_streaming`
- 小萝莉 → `VC_BV064_streaming`
- 甜美小源 → `VC_BV405_streaming`
- 阳光男声 → `VC_BV056_streaming`

## 修改后操作

改完 `voiceType` 或比例参数后，执行：

```bash
openclaw gateway restart
```
