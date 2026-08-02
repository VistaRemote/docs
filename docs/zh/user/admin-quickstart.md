# Admin 运维入门

地址：`https://admin.example.com`（默认账号见部署环境变量 `VISTAREMOTE_ADMIN_*`）。

## 常用操作

| 功能 | 说明 |
| :--- | :--- |
| 用户 → 改套餐 | free / pro / enterprise（权益立即生效） |
| 用户 → 禁用 / 启用 | 禁用后无法登录 |
| 用户 → 重置密码 | 显示一次性临时密码 |
| 设备 | 查看 register/heartbeat 设备 |
| 会话 | 活跃房间；强制断开 |
| 审计 | 登录、改套餐、强断等落库记录 |

## 安全提示

- 首次上线立即修改 Admin 密码与全部 JWT 密钥
- 生产默认强制 Signaling Ticket，勿随意关闭
- 定期运行 `deploy/scripts/backup-postgres.sh`
