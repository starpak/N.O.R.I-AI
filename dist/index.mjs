/**
 * NoriOS 本地后端入口（开发中）
 *
 * 目标：理解并复刻前端 AI 的完整调用链路：
 *   前端 fetch/Convex client → 本后端 → AI 服务 → 返回 → 前端解析
 */
import http from "node:http";

const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ ok: true, message: "NoriOS local backend placeholder" }));
});

server.listen(port, host, () => {
  console.log(`NoriOS local backend: http://${host}:${port}`);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.once(signal, () => server.close(() => process.exit(0)));
}
