# Login and pairing

## Controller (Web / Android)

1. Open the Web Client (`https://app.example.com` or local `http://localhost:5173`) or the Android APK
2. Sign in on the **VistaRemote branded login page** (`/login`) — required before pairing or remote control
   - **Preferred (unified identity)**: primary “Sign in / Register” → LuminaryWorks Logto (OIDC); this page is the product Headless entry (not Logto’s hosted UI as the main surface)
   - **Local / private mode C / offline**: expand “Local account” for email + password
3. Enter the Agent **pairing code** (6–8 digits). Codes are **one-shot** (`PAIRING_CONSUMED`); a class cannot share one code.
4. Wait for video, then control with mouse/keyboard

Production signaling requires a short-lived **Signaling Ticket** (issued on join; Agents get `agentSignalingTicket` when creating a pairing session).

Anonymous pairing join returns `401 UNAUTHORIZED`.

## Trial and plans

- New users get a **7-day `standard_7d` trial** (once per user per product)
- After trial, free tier keeps **1:1 P2P**; SFU needs upgrade
- v1.0 billing is **Admin plan grants** (real payments in v1.1)

## Troubleshooting

| Symptom | Hint |
| :--- | :--- |
| Cannot sign in | Check API URL; user may be disabled; IdP must be reachable for SSO |
| Pairing asks to log in | Session expired — sign in again |
| Pairing fails | Code expired or invalid |
| No video | TURN / UDP firewall; cellular needs TURN |
