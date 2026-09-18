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

## 多显示器说明

| 场景 | 行为 |
|------|------|
| **单屏** | 默认采集**主显示器**（`isPrimary`），无选屏 UI |
| **多屏（已交付）** | **选屏**（MD-1）→ 会话中**热切换**（MD-2）→ **多窗口**各绑一块屏（MD-3，P2P≤**2** 路） |
| **≥3 路 / SFU** | 未交付；第三块及以上屏用工具栏切屏，或等后续 SFU Multi-Stream |

### 已知限制

- P2P 并行最多 **2** 路画面；同时开多窗口不会超过 2
- 合屏（stitched）、原生 Dirty Rect（MD-4）、跨会话 SFU 监控墙多 producer 仍属后续
- 用户操作细则见 [远程控制 · 多显示器](../docs/zh/user/remote-control.mdx)（[EN](../docs/en/user/remote-control.mdx)）

阶段与 Spec：[多屏 Spec](../../spec/multi-display-spec.md) · [多屏迭代计划](../../plan/multi-display-iteration-roadmap.md)

## 仍无画面？

- 点会话页 **「重新连接」**
- 看 **诊断区**：房间应有 `agent_*` 与 `ctrl_*` 两个 peer
- **不要**用旧 `/session` 书签；Agent 重启后必须 **重新配对**
- Server 窗口保持打开；修改代码后重新 `.\dev-mvp.ps1`

## 规范与路线图

- [MVP 核心链路 Spec](../../spec/mvp-core-flow-spec.md)
- [多显示器 Spec](../../spec/multi-display-spec.md) · [多屏迭代计划](../../plan/multi-display-iteration-roadmap.md)
- [版本迭代计划](../../plan/mvp-iteration-roadmap.md)
