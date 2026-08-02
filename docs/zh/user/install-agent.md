# 安装桌面 Agent（Windows）

VistaRemote **v1.0** 被控端为 Windows Agent。

## 下载

1. 打开官网 [Download](/download)（或仓库 Release）
2. 推荐：**VistaRemote-Agent-1.0.0-win-setup.exe**（NSIS 安装包）
3. 亦可使用 Portable：`VistaRemote-Agent-1.0.0-win.exe`

> 安装包可能未代码签名。若 SmartScreen 提示「未知发布者」，选择「仍要运行」。

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

详见 [登录与配对](./login-and-pairing.md)。
