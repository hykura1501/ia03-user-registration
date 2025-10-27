# IA03 - User Registration System

A complete user registration system with NestJS backend and React frontend using shadcn/ui components.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/hykura1501/ia03-user-registration.git
cd ia03-user-registration

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Environment Setup

Create `.env` file in `backend/` directory:

```env
MONGODB_URI=mongodb+srv://hykura:123456789%40123@hykura.rwjtpqe.mongodb.net/awad-ia03?appName=hykura
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 4. Access the Application

**Local Development:**
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000

**Live Demo:**
- **Frontend**: [https://ia03-user-registration-ecru.vercel.app/](https://ia03-user-registration-ecru.vercel.app/)
- **Backend API**: [https://ia03-user-registration-lswm.onrender.com](https://ia03-user-registration-lswm.onrender.com)

## 📁 Project Structure

```
ia03/
├── backend/          # NestJS API
│   ├── src/
│   │   ├── user/     # User module
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
├── frontend/         # React + Vite
│   ├── src/
│   │   ├── pages/    # Home, Login, SignUp
│   │   ├── components/ui/  # shadcn/ui
│   │   └── services/ # API calls
│   └── package.json
└── README.md
```

## 🛠️ Tech Stack

**Backend:**
- NestJS + TypeScript
- MongoDB + Mongoose
- bcryptjs (password hashing)
- class-validator (validation)

**Frontend:**
- React 19 + TypeScript
- Vite + Tailwind CSS
- shadcn/ui components
- React Hook Form + Zod
- React Query (API state)

## 📋 API Endpoints

### POST /user/register
Register a new user.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "statusCode": 201,
  "message": "User registered successfully",
  "data": {
    "_id": "user_id",
    "email": "user@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## ✅ Features

- ✅ User registration with validation
- ✅ Password hashing & security
- ✅ Beautiful UI with shadcn/ui
- ✅ Form validation & error handling
- ✅ API integration with React Query
- ✅ Responsive design
- ✅ Toast notifications
- ✅ Ready for deployment

## 📝 Usage

**Live Demo:**
1. Visit [https://ia03-user-registration-ecru.vercel.app/](https://ia03-user-registration-ecru.vercel.app/)
2. Click "Sign Up" to register
3. Fill in email and password
4. Submit to create account
5. Use "Login" page (UI only)

**Local Development:**
1. Open http://localhost:5173
2. Click "Sign Up" to register
3. Fill in email and password
4. Submit to create account
5. Use "Login" page (UI only)

---

**Created for AWDA IA03 Assignment** | NestJS + React + MongoDB