# CakeDuel 蛋糕对决游戏

## 简介
CakeDuel 是一款卡牌对战游戏，玩家通过出牌进行策略对决。

## 资源说明
- `cards/` - 标准分辨率卡牌图片
- `cards-hd/` - 高分辨率卡牌图片
- `heads/` - 角色头像
- `waggle/` - 动画帧图
- `*.jpg/png` - 游戏场景素材（桌布、token 等）

## Astro 封装
本应用已按岛屿架构重构为 Astro 组件：
- `index.astro` - 应用入口组件
- `icons/` - 应用图标
- `src/` - 游戏核心 JS/CSS 与静态资源

## 使用方式
在顶层 `APPS/index.astro` 中导入并拼接：
```astro
import CakeDuel from './cakeduel/index.astro';
```
