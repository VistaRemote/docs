# Multi-computer workspace

After pairing, you land in the **multi-computer control workspace** (`/control`). You can keep several computers connected at once (capped by your plan’s session allowance, maximum 8).

## Viewer vs Web browser

Prefer the **desktop Viewer** for day-to-day remote control (LAN P2P, less background throttling, capture permissions). The Web Client at `http://localhost:5173/control` uses the same UI, but browser ICE / focus / permission limits often make input unreliable — use it for local UI checks, not as the primary control path.

## Three concepts (do not mix them up)

| Name | Layer | Meaning |
| :--- | :--- | :--- |
| **Solo** | View layout | One large stage; switch other connected PCs with tabs |
| **Mosaic** | View layout | All connected PCs previewed together; click a tile to send keyboard/mouse there |
| **Sync** | Input scope | Keyboard/mouse fan out to multiple PCs (needs Enterprise group-control entitlement). This is **not** the same as mosaic preview |

Defaults: one computer → Solo; two or more → Mosaic. You can override in the toolbar; disconnecting all resets to the automatic default.

## Leaving and returning

Session state lives outside the router. Visiting Home, Add-computer pairing, or Settings does **not** disconnect (unless you sign out, close the window, or disconnect explicitly).

- Home shows **Back to remote control**
- Other pages show a blue strip: remote control in progress → return
- On the add-computer page, use **Cancel — back to remote control**

Use a Viewer / Web Client that loads the latest client build; restarting only the Server does not refresh the Viewer UI.

## Shortcuts

- `Ctrl+1` … `Ctrl+8` (or `Cmd` on macOS): focus the 1st–8th connected computer

## Mosaic and bandwidth

With three or more full desktops open, non-focused tiles prefer the Fluent quality preset to save bandwidth; the focused tile keeps the quality you chose in the toolbar.
