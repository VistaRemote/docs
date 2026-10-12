# 域名变更声明：一层 `remote-*`.vistacast.dev

**生效：** 2026-04  
**范围：** 新服务器部署、Web Client/Admin 镜像、Electron Agent/Viewer、Android APK（`latest`）

## 为什么改

Cloudflare 免费 Universal SSL 只覆盖 `vistacast.dev` 与 `*.vistacast.dev`（一层）。  
`app.remote.vistacast.dev` 这类三级名要橙云 CDN / 抗打，必须买 Advanced Certificate Manager。  
压成一层子域后：**免费证书 + 橙云代理**，同时保留品牌官网 `remote.vistacast.dev`。

## 矩阵

| 用途 | 旧 | 新（现行） |
|------|----|------------|
| Client | `https://app.remote.vistacast.dev` | `https://remote-app.vistacast.dev` |
| Admin | `https://admin.remote.vistacast.dev` | `https://remote-admin.vistacast.dev` |
| API / 信令 | `https://api.remote.vistacast.dev` · `wss://…/signaling` | `https://remote-api.vistacast.dev` · `wss://…/signaling` |
| 官网 / 下载 | `https://remote.vistacast.dev` | 不变 |
| 文档站 | `https://docs.remote.vistacast.dev` | 暂不变（GitHub Pages，非橙云产品面） |

## 运维规则

1. **重新部署 / 新机器**：`hosts` / `site.json` 只写新名；DNS 为 `remote-app` / `remote-admin` / `remote-api` 橙云指向源站。
2. **重新打包**：`config/environments/prod.env` + `pnpm pack:prod -- --publish`；禁止再烤旧三级名。
3. **兼容**：编排仓可将旧名 301 到新名；安装包与 SPA 不以旧名为准。
4. **IdP**：更新 Logto「VistaRemote Client / Admin」redirect 与 logout URI。

## 真源

- Meta-Repo：`config/environments/prod.env`
- 编排仓：`LuminaryWorksDeployment` `docs-site/docs/client-releases.md`、`hosts/*/host.yaml`
- MetaRepo 契约：`LuminaryWorks/deploy/vistaremote-clients.md`
