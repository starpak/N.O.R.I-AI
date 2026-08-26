# Pictionary 你画我猜游戏

## 简介
Pictionary 是一款多人绘画猜词游戏，玩家通过绘画来表达词语，其他玩家猜测答案。

## 资源说明
- `drawings.json` - 预定义绘画数据
- `*.js` - 游戏核心逻辑与渲染引擎

## Astro 封装
本应用已按岛屿架构重构为 Astro 组件：
- `index.astro` - 应用入口组件
- `icons/` - 应用图标
- `src/` - 游戏核心 JS 与静态资源

## 使用方式
在顶层 `APPS/index.astro` 中导入并拼接：
```astro
import Pictionary from './pictionary/index.astro';
```
