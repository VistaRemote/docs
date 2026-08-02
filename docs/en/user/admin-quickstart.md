# Admin quickstart

URL: `https://admin.example.com` (bootstrap user from `VISTAREMOTE_ADMIN_*`).

## Common tasks

| Action | Notes |
| :--- | :--- |
| Users → change plan | free / pro / enterprise |
| Users → disable / enable | Disabled users cannot log in |
| Users → reset password | One-time temporary password |
| Devices | Registered agents / heartbeats |
| Sessions | Active rooms; force disconnect |
| Audit | Persisted admin actions |

## Security

- Rotate Admin password and all JWT secrets before go-live
- Keep Signaling Ticket required in production
- Run `deploy/scripts/backup-postgres.sh` regularly
