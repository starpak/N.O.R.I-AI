# Browser 浏览器应用

NoriOS 桌面里的「虚构互联网」浏览器。

## 内容
- `icons/` —— 浏览器应用图标
- `src/` —— 浏览器模块源码（Astro 封装）
  - `BrowserApp-*.js` —— 浏览器主模块
  - `BrowserPageView-*.js` —— 页面视图（iframe 沙箱 + arcade 桥）
  - `BrowserApp-*.css` —— 样式
  - `webAssets/` —— 虚构互联网站点资源（concord / doodle / driftnet / meridian_post / pulse）

## 说明
- 通过 `index.astro` 挂载到桌面。
- iframe 使用 srcdoc + sandbox（opaque origin），并通过 `window.arcade` postMessage 桥与桌面通信。
