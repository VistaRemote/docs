# 登录与配对

## 主控端（Web / Android）

1. 打开 Web Client（`https://app.example.com` 或本地 `http://localhost:5173`）或安装 Android APK
2. 进入 **VistaRemote 品牌登录页**（`/login`）完成登录 / 注册（须登录后才能配对与远控）
   - **推荐（统一身份）**：主按钮「登录 / 注册」→ LuminaryWorks Logto（OIDC）；本页为产品品牌 Headless 入口，不使用 Logto 托管页作为主 UI
   - **本地 / 私有化 C / 开发离线**：展开「本地账号」使用邮箱 + 密码
3. 输入 Agent 显示的 **6–8 位配对码**
4. 等待画面出现后即可键鼠控制

生产环境信令必须携带短期 **Signaling Ticket**（join 接口自动签发；Agent 在创建配对会话时获得 `agentSignalingTicket`）。

未登录调用配对 join 会返回 `401 UNAUTHORIZED`。

## 试用与套餐

- 新用户默认 **14 天试用**（含部分 Pro 能力）
- 试用结束后免费档保留 **1:1 P2P**；SFU 等需升级
- 付费首版由 **Admin 手工改套餐**（真实支付见 v1.1）

## 故障排查

| 现象 | 建议 |
| :--- | :--- |
| 无法登录 | 检查 API 域名与账号是否被 Admin 禁用；统一登录需 IdP 可达 |
| 配对失败 / 提示先登录 | 确认已登录并刷新；Token 过期需重新登录 |
| 配对码错误 | 确认码未过期；Server 已重启后码仍应在库中 |
| 有配对无画面 | 检查 TURN / 防火墙 UDP；蜂窝网必须 TURN |
