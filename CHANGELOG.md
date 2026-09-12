# Changelog

本文件遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)。
跨仓里程碑见 Meta-Repo [CHANGELOG.md](https://github.com/VistaRemote/vista-remote/blob/main/CHANGELOG.md)。

## [Unreleased]

### Added

- FAQ（中/英，1.45–1.47）：System `enforce` 无 webhook 密钥告警；Orders/Users 筛写回 URL；`pnpm assert:prod-env`；MinIO 端点（链至 `docs/deploy/docker`）
- 用户指南：生产支付就绪核对（mock → sandbox → production；env 仅名称；系统页标志；错误签名 401；commerce 禁 simulate-paid）。微信/支付宝商户进件为 owner-ops，不随仓交付。（**1.46.0**）
- 用户指南：Mesh 会话工具与 VistaRemote 的对应表；FAQ 说明不是完整 MeshCentral RMM
- Admin **1.45.0**：登录已登录回控制台；审计 `pairing.create` / `pairing.join` 动作芯片；监控墙 Spec 提示条（多路 SFU **仍开**）
- **1.47.0**：System 页 `enforce` + 未配置 webhook 密钥告警；Orders/Users 列表筛选项 URL 双向同步；owner simulate-paid 单测与 i18n
- **1.49.0**：中央 Entitlement `order.fulfilled` 签名入站（HMAC `x-lw-signature`）；Go-Live static bake / smoke；Membership `qrPayload` QR。**≠** 生产商户进件已交付

### Changed

- 支付文档诚实表述：Entitlement adapter 已存在 ≠ live 商户启用；DNS/进件仍为 owner-ops
- 部署文档：**1.47.0** 扩充 `pnpm assert:prod-env` 与 MinIO 端点表（`docs/deploy/docker`）；Go-Live 链至生产支付就绪页（**1.46.0**；非 PSP 已交付）

## [0.1.0] - 2026-05-24

### Added

- 初版仓库脚手架
