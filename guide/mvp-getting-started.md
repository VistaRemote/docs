# MVP 快速上手（配对 → 画面）

## 一键环境

```powershell
cd d:\www\VistaRemote
.\dev-mvp.ps1
```

自动打开 **Server**、**Web** 两个窗口；末尾应显示 `OK: signaling e2e passed`。

| 服务 | 地址 |
|------|------|
| API | http://localhost:3000/health |
| 配对 | http://localhost:5173/pairing |
| 信令 | ws://127.0.0.1:3000/signaling |

## 三步连接

1. **Agent**：`desktop\release\agent\VistaRemote-Agent-0.1.0-win.exe` → 允许选屏 → 记下配对码与 **会话 ID 后 8 位**
2. **配对**：浏览器打开配对页，输入码 → 进入会话
3. **校验**：网页 `sess:` 后 8 位 = Agent 会话 ID 后 8 位；Agent `sent-offer`，网页 `streaming`

## 多显示器说明（MVP）

当前 **MVP-B 仅支持单屏**：Agent 会自动采集**主显示器**。若你有两块或更多屏幕，副屏内容**暂时无法**单独选择或同时查看。

后续版本规划（详见 [多屏 Spec](../../spec/multi-display-spec.md)）：

| 版本 | 能力 |
|------|------|
| **MD-1** | 像向日葵一样，连接前**选择要控制的屏幕** |
| **MD-2** | 会话中切换屏幕；未观看的屏降低编码负载 |
| **MD-3** | 像 TeamViewer 一样，多窗口各显示一块屏 |

## 仍无画面？

- 点会话页 **「重新连接」**
- 看 **诊断区**：房间应有 `agent_*` 与 `ctrl_*` 两个 peer
- **不要**用旧 `/session` 书签；Agent 重启后必须 **重新配对**
- Server 窗口保持打开；修改代码后重新 `.\dev-mvp.ps1`

## 规范与路线图

- [MVP 核心链路 Spec](../../spec/mvp-core-flow-spec.md)
- [多显示器 Spec](../../spec/multi-display-spec.md) · [多屏迭代计划](../../plan/multi-display-iteration-roadmap.md)
- [版本迭代计划](../../plan/mvp-iteration-roadmap.md)
