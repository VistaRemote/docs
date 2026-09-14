# Install Desktop Agent (Windows)

VistaRemote **v1.0** host app is the Windows Agent.

## Download

Preferred entry (marketing site):

- **[https://remote.vistacast.dev/download](https://remote.vistacast.dev/download)**

Public binary repo (source stays private):

- Releases: [VistaRemote/downloads](https://github.com/VistaRemote/downloads/releases/latest)
- NSIS installer: `VistaRemote-Agent-1.0.0-win-setup.exe`
- Portable: `VistaRemote-Agent-1.0.0-win.exe`

> Builds are **unsigned**. If SmartScreen warns, choose **Run anyway**.

## Production config

Create `.env` next to the executable:

```env
VISTAREMOTE_API_URL=https://api.example.com
VISTAREMOTE_SIGNALING_URL=wss://api.example.com/signaling
```

## Usage

1. Start Agent and confirm API reachability
2. Note the **pairing code**
3. Sign in on Web / Android controller and enter the code

Android controller APK is on the same page: `VistaRemote-1.0.0.apk` (allow unknown sources / sideload).

See [Login and pairing](./login-and-pairing.md).

**Developers / ops**: local E2E — Meta repo [`plan/mvp-e2e-runbook.md`](https://github.com/VistaRemote/vibeCode/blob/main/plan/mvp-e2e-runbook.md). One-shot pack + publish to the public bucket: `pnpm pack:publish`.
