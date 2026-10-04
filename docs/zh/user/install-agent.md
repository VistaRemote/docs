# 安装桌面 Agent（Windows）

被控端为 Windows Agent。

## 下载

推荐入口（官网）：

- **[https://remote.vistacast.dev/download](https://remote.vistacast.dev/download)**

公开安装包仓库（源码仓保持私有）：

- Releases： [VistaRemote/downloads](https://github.com/VistaRemote/downloads/releases/latest)
- Windows 安装程序与便携版
- Android 主控 APK（需允许「未知来源」侧载）

> 安装包**未代码签名**。若 SmartScreen 提示「未知发布者」，选择「仍要运行」。

## 配置生产 API

在安装目录（或 Portable 同级）创建 `.env`：

```ini
VISTAREMOTE_API_URL=https://api.example.com
VISTAREMOTE_SIGNALING_URL=wss://api.example.com/signaling
```

## 使用

1. 启动 Agent，确认已能访问 API
2. 窗口显示 **配对码**（及可选二维码）
3. 在 Web / Android 主控登录后输入配对码即可控制

详见 [登录与配对](./login-and-pairing.md)。
