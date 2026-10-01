# VistaRemote 文档站

## 使用边界

这些文档公开供人阅读，也允许搜索引擎索引。**不允许**用于训练 AI，也不允许把文档交给 AI 去生成一套同类产品。详见 [AI-USE.md](./AI-USE.md)。


基于 [Rspress 2](https://rspress.rs/)（**Rspack 生态**）的技术文档：架构、部署、API、产品优势与二开指南。

| Metadata | Value |
| :--- | :--- |
| **仓库** | `VistaRemote/docs` |
| **许可证** | [Polyform Noncommercial 1.0.0](LICENSE) (Polyform-NC) |

## 环境要求

- Node.js >= 24.0.0（推荐 24.11 LTS，见 `.nvmrc`）
- pnpm >= 9

## 开发

```bash
pnpm install
pnpm dev
```

浏览器打开终端提示的地址（默认 `http://localhost:13401`，避免占用 Web Client 常用的 `:3000`）。

生产文档域名：[https://docs.remote.vistacast.dev](https://docs.remote.vistacast.dev)

因部分网络/浏览器直连 GitHub Pages 会出现 `ERR_CONNECTION_CLOSED`，**对外域名经 Cloudflare Pages 边缘分发**（构建产物与 GitHub Actions 同源）。可访问镜像：[https://vistaremote-docs.pages.dev](https://vistaremote-docs.pages.dev)

Cloudflare DNS（`vistacast.dev`）请改为：

```text
类型: CNAME
名称: docs.remote
目标: vistaremote-docs.pages.dev
代理状态: 已代理（橙云）   ← 必须开，不要灰云指 github.io
```

不要再指向 `vistaremote.github.io`（浏览器会 CONNECTION_CLOSED）。GitHub Actions 仍构建；工作流同时部署到 Cloudflare Pages。


## 构建

```bash
pnpm build
pnpm preview
```

静态产物在 `doc_build/`。推送到 `main` / `dev` 后由 `.github/workflows/docs.yml` 部署到 GitHub Pages。

## 推荐阅读

| 读者 | 文档 |
| :--- | :--- |
| 老板 / IT 负责人 | [技术选型优势](./docs/zh/architecture/tech-advantages.mdx) · [产品定位](./docs/zh/architecture/positioning.mdx) |
| 开发者 | [跨端技术栈](./docs/zh/architecture/cross-platform-stack.mdx) · [开发者手册](./docs/zh/guide/developer-handbook.mdx) |
| 运维 | [Docker 部署](./docs/zh/deploy/docker.mdx) |

## 目录

| 路径 | 说明 |
| :--- | :--- |
| `docs/zh/` | 简体中文（默认） |
| `docs/en/` | English |
| `spec/` | 本仓库 Spec 镜像 |

## Spec

Meta-Repo [spec/docs-spec.md](https://github.com/VistaRemote/vibeCode/blob/main/spec/docs-spec.md)

## 变更与安全

[CHANGELOG.md](./CHANGELOG.md) · [SECURITY.md](./SECURITY.md) · [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
