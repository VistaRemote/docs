# 登录与配对

## 主控端（Web / Android）

1. 打开 Web Client（`https://app.example.com` 或本地 `http://localhost:5173`）或安装 Android APK
2. 进入 **VistaRemote 品牌登录页**（`/login`）完成登录 / 注册（须登录后才能配对与远控）
   - **推荐（统一身份）**：主按钮「登录 / 注册」走 LuminaryWorks 统一账号。第一次注册验证邮箱；之后用邮箱和密码登录。需要时可以绑定验证器（含微软 Authenticator，应用免费）。
   - **本地 / 私有化离线**：展开「本地账号」使用邮箱 + 密码
3. 输入 Agent 显示的 **6–8 位配对码**（码为一次性：`PAIRING_CONSUMED`，**不能**全班共用一个码）
4. 等待画面出现后即可键鼠控制

多机并行、专一/分屏与「返回远控」说明见：[多机远控工作区](./multi-computer-workspace.md)。

生产环境信令必须携带短期 **Signaling Ticket**（join 接口自动签发；Agent 在创建配对会话时获得 `agentSignalingTicket`）。

未登录调用配对 join 会返回 `401 UNAUTHORIZED`。

## 试用与套餐

- 新用户享有 **7 天试用**（含 SFU 与部分 Pro 能力）
- 试用结束后，免费档保留 **1:1 P2P**；SFU、录制与 AI 按套餐开通
- 用户支付完成后权益生效；管理员也可在管理台调整套餐

## 故障排查

| 现象 | 建议 |
| :--- | :--- |
| 无法登录 | 检查 API 域名与账号是否被 Admin 禁用；统一登录需 IdP 可达 |
| 配对失败 / 提示先登录 | 确认已登录并刷新；Token 过期需重新登录 |
| 配对码错误 | 确认码未过期且未被消费；Server 已重启后需 Agent 重新生成码 |
| 有配对无画面 | 检查 TURN / 防火墙 UDP；蜂窝网必须 TURN |
