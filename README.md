# User Management Admin

Vue + FastAPI + PostgreSQL user management admin panel.

## Features

- Register / Login
- JWT authentication
- Admin / User roles
- Users list
- Activate / Deactivate users
- Inactive users cannot login
- Forgot / Reset password
- Protected routes

## Stack

Frontend: Vue 3, TypeScript, Vite, Vue Router  
Backend: FastAPI, SQLAlchemy, PostgreSQL, JWT, Resend

## Run

### Frontend

```bash
npm install
npm run dev
```

Create `.env` from `.env.example`.

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Create `backend/.env` from `backend/.env.example`.

Frontend: `http://localhost:5173`  
Backend: `http://127.0.0.1:8000`

## Roles

**Admin:** view users, activate/deactivate users  
**User:** dashboard access only

## Note

Password reset uses Resend. Test mode may only send emails to the verified account email.