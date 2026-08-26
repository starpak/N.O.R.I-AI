# Dock 停靠栏

NoriOS 桌面底部的应用停靠栏（Dock），聚合展示各应用的图标入口。

## 内容
- `icons/` —— Dock 相关图标（预留）
- `src/` —— `QfrDock-*.js` QFR 停靠栏模块
- `README.md` —— 本文件

## 说明
- Dock 栏**单独重构**为独立的 Astro 组件，再由顶层 `index.astro` 拼接到桌面。
- 每个应用的 `index.astro` 导出后，由 Dock 统一收集入口。