# Login 登录 / 认证

NoriOS 的登录与认证模块（better-auth，离线版已替换为常驻 authed 的 no-op Provider）。

## 内容
- `icons/` —— 预留图标目录
- `src/`
  - `LoginPage-*.js` / `LoginScreen-*.js` —— 登录界面
  - `authClient-*.js` —— better-auth 客户端
  - `ConvexAuthProvider-*.js` —— 离线认证 Provider
- `README.md` —— 本文件