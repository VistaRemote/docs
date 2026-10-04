# Install Desktop Agent (Windows)

The host app is the Windows Agent.

## Download

Preferred entry (marketing site):

- **[https://remote.vistacast.dev/download](https://remote.vistacast.dev/download)**

Public binary repo (source stays private):

- Releases: [VistaRemote/downloads](https://github.com/VistaRemote/downloads/releases/latest)
- Windows installer and portable build
- Android controller APK (allow unknown sources / sideload)

> Builds are **unsigned**. If SmartScreen warns, choose **Run anyway**.

## Production config

Create `.env` next to the executable:

```ini
VISTAREMOTE_API_URL=https://api.example.com
VISTAREMOTE_SIGNALING_URL=wss://api.example.com/signaling
```

## Usage

1. Start Agent and confirm API reachability
2. Note the **pairing code**
3. Sign in on Web / Android controller and enter the code

See [Login and pairing](./login-and-pairing.md).
