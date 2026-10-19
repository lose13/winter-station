# 素材与来源

本项目不依赖在线素材、在线字体、在线音频或 CDN。

| 素材 | 交付位置 | 制作方式 |
| --- | --- | --- |
| 底座、站房、树、道具和装饰模型 | `src/world-model.js`、`src/life.js` | 原创程序几何：车削、挤出、样条管线、连续网格、圆角件和枝叶扇面 |
| 机车、客车、弧形轨道模型 | `src/train.js` | 原创程序几何，包含轮辐、连杆、管线和铆钉 |
| 六位微缩人物 | `src/life.js` | 原创分关节模型与手工动作，未使用外部人物文件 |
| 胡桃木、砖石、抹灰、雪面纹理 | `src/craft.js` | 固定随机种子的 1024×1024 Canvas 纹理及凹凸贴图 |
| 标牌、钟面、车身铭牌 | `src/craft.js`、`src/world-model.js` | 本地 Canvas 排版及刻度绘制 |
| 烟汽与灯晕纹理 | `src/atmosphere.js` | 本地程序径向渐变云团 |
| 雪花 | `src/atmosphere.js` | GLSL 绘制柔软雪片与旋转六角晶形 |
| Christmas at Winter Station | `assets/winter-station-music.mp3` | 原创 C 大调小圆舞曲，104 BPM，谐和音乐盒、尼龙弦拨奏和轻盈低音；55.385 秒 |
| Winter Platform Ambience | `assets/winter-station-ambience.mp3` | 原创滤波噪声、蒸汽与合成钟声；40 秒；交叠边界循环 |
| Winter Express Whistle | `assets/train-whistle.mp3` | 原创三管蒸汽汽笛合成、气压音高变化、气声和回响；4.8 秒 |
| Three.js r170 | `app.bundle.js` | MIT；许可证保存在 `vendor/THREE-LICENSE.txt` |
| 字体 | 系统提供 | Georgia / Times New Roman / Segoe UI / Microsoft Yahei；未分发字体文件 |

音频合成源：`tools/make-audio.mjs`。可在不下载任何样本的情况下重新生成三段音频。模型和纹理的完整生成源码已随项目交付，单文件运行版也内嵌全部生成逻辑。

Three.js 物理材质与环境反射 API 的实现参考：[MeshPhysicalMaterial](https://threejs.org/docs/pages/MeshPhysicalMaterial.html)、[PMREMGenerator](https://threejs.org/docs/pages/PMREMGenerator.html)。
