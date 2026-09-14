# 安装桌面 Agent（Windows）

VistaRemote **v1.0** 被控端为 Windows Agent。

## 下载

推荐入口（官网）：

- **[https://remote.vistacast.dev/download](https://remote.vistacast.dev/download)**

公开安装包仓库（源码仓保持私有）：

- Releases： [VistaRemote/downloads](https://github.com/VistaRemote/downloads/releases/latest)
- NSIS 安装包：`VistaRemote-Agent-1.0.0-win-setup.exe`
- 便携版：`VistaRemote-Agent-1.0.0-win.exe`

> 安装包**未代码签名**。若 SmartScreen 提示「未知发布者」，选择「仍要运行」。

## 配置生产 API

在安装目录（或 Portable 同级）创建 `.env`：

```env
VISTAREMOTE_API_URL=https://api.example.com
VISTAREMOTE_SIGNALING_URL=wss://api.example.com/signaling
```

## 使用

1. 启动 Agent，确认已能访问 API
2. 窗口显示 **配对码**（及可选二维码）
3. 在 Web / Android 主控登录后输入配对码即可控制

Android 主控 APK 同页下载：`VistaRemote-1.0.0.apk`（需允许「未知来源」侧载）。

详见 [登录与配对](./login-and-pairing.md)。

**开发者 / 运维**：本地端到端验收见 Meta 仓库 [`plan/mvp-e2e-runbook.md`](https://github.com/VistaRemote/vibeCode/blob/main/plan/mvp-e2e-runbook.md)。一键打包并发布到公开仓：`pnpm pack:publish`。
