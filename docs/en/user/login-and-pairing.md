# Login and pairing

## Controller (Web / Android)

1. Open the Web Client (`https://app.example.com` or local `http://localhost:5173`) or the Android APK
2. Sign in on the **VistaRemote branded login page** (`/login`) — required before pairing or remote control
   - **Preferred (shared account)**: “Sign in / Register” uses the LuminaryWorks account. The first registration verifies email; later sign-ins use email and password. An authenticator can be added when wanted, including Microsoft Authenticator (the app is free).
   - **Local / offline**: expand “Local account” for email + password
3. Enter the Agent **pairing code** (6–8 digits). Codes are **one-shot** (`PAIRING_CONSUMED`); a class cannot share one code.
4. Wait for video, then control with mouse/keyboard

For multi-computer layout (Solo / Mosaic), Sync, and how to return after leaving the workspace, see [Multi-computer workspace](./multi-computer-workspace.md).

Production signaling requires a short-lived **Signaling Ticket** (issued on join; Agents get `agentSignalingTicket` when creating a pairing session).

Anonymous pairing join returns `401 UNAUTHORIZED`.

## Trial and plans

- New users get a **7-day trial** (includes SFU and part of Pro)
- After the trial, the free tier keeps **1:1 P2P**. SFU, recording, and AI follow the plan
- Entitlements apply after payment. An admin can also change the plan in the console

## Troubleshooting

| Symptom | Hint |
| :--- | :--- |
| Cannot sign in | Check API URL; user may be disabled; IdP must be reachable for SSO |
| Pairing asks to log in | Session expired — sign in again |
| Pairing fails | Code expired or invalid |
| No video | TURN / UDP firewall; cellular needs TURN |
