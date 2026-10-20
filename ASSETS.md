# 素材与来源 · v1.7.0

项目不依赖在线模型、贴图、字体、音频或 CDN。可编辑的模型与纹理生成源码随项目交付。

| 素材 | 位置 | 制作方式 |
| --- | --- | --- |
| 底座、站房、树木和道具 | src/world-model.js、src/life.js | 原创车削、挤出、样条管线、分枝与连续网格 |
| 轨道、机车、客车、车轮与连杆 | src/train.js | 原创程序几何与联动机构 |
| 六位室外人物 | src/life.js | 原创分关节模型与动作 |
| 圣诞老人、飞天麋鹿、礼物雪橇 | src/christmas-visitors.js | 原创几何，含马具、铜铃、鹿角、七件礼盒与缰绳 |
| 降落伞包裹与落地礼物 | src/station-story.js | 原创伞面、绳索、包装与投递路线 |
| 两位室内旅客、茶杯、书、火炉 | src/story-details.js | 原创几何、翻页、程序火焰与茶汽 |
| 猫与知更鸟 | src/story-details.js | 原创几何与关节活动 |
| 砖石、胡桃木、雪面和霜花 | src/craft.js | 本地 Canvas 程序纹理与凹凸贴图 |
| 铭牌、钟面、站牌 | src/craft.js、src/world-model.js | 本地 Canvas 排版与刻度 |
| 雪片、细雪、烟汽与体积光 | src/atmosphere.js、src/story-details.js、src/lighting.js | GLSL 粒子、积分光束与程序纹理 |
| 灯下微尘、炉膛余烬、圣诞星屑 | src/particle-effects.js | 原创程序点精灵着色器、三维轨迹和固定粒子池，无外部图像 |
| Christmas at Winter Station | assets/winter-station-music.mp3 | 原创 C 大调 104 BPM 音乐盒小圆舞曲，55.385 秒 |
| Winter Platform Ambience | assets/winter-station-ambience.mp3 | 原创滤波噪声、蒸汽和合成钟声，40 秒 |
| Winter Express Whistle | assets/train-whistle.mp3 | 原创三管蒸汽汽笛、气声与回响，4.8 秒 |
| 事件铃声、鸟鸣、行车声 | src/audio.js | 原创 Web Audio 谐波、频率滑音与滤波噪声，运行时生成 |
| Three.js r170 | app.bundle.js | MIT；许可证位于 vendor/THREE-LICENSE.txt |
| 字体 | 用户系统提供 | Georgia / Times New Roman / Segoe UI / Microsoft Yahei；未分发字体文件 |

三段 MP3 的制作源为 tools/make-audio.mjs，不使用下载的采样。离线单文件内嵌全部音频和程序生成逻辑。截图由实际浏览器保存，未经生成式修图。

本轮室内门、五金、衣帽钩、踢脚线和补充陈设均为原创程序几何，仍由 src/world-model.js 交付；机位与横竖屏构图位于 src/interior-camera.js，无新增外部素材。
