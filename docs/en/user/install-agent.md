# Install Desktop Agent (Windows)

VistaRemote **v1.0** host app is the Windows Agent.

## Download

1. Open the site [Download](/download) page (or GitHub Releases)
2. Prefer **VistaRemote-Agent-1.0.0-win-setup.exe** (NSIS)
3. Or portable: `VistaRemote-Agent-1.0.0-win.exe`

> Builds may be unsigned. If SmartScreen warns, choose **Run anyway**.

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

See [Login and pairing](./login-and-pairing.md).
