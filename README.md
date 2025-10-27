# User Registration API with React Frontend

A complete User Registration System built with NestJS backend and React frontend using shadcn/ui components.

## Features

### Backend (NestJS)
- User registration with email and password
- Password hashing using bcryptjs
- MongoDB integration with Mongoose
- Input validation using class-validator
- CORS enabled for frontend communication
- Error handling with meaningful messages

### Frontend (React + Vite)
- Modern React application with TypeScript
- Beautiful UI using shadcn/ui components
- Form validation using React Hook Form and Zod
- API integration using React Query
- Responsive design with Tailwind CSS
- Toast notifications for user feedback

## Tech Stack

### Backend
- NestJS
- MongoDB with Mongoose
- bcryptjs for password hashing
- class-validator for validation
- TypeScript

### Frontend
- React 19
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router DOM
- React Hook Form
- React Query (TanStack Query)
- Zod for validation

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the backend directory:
```
MONGODB_URI=mongodb+srv://hykura:123456789%40123@hykura.rwjtpqe.mongodb.net/awad-ia03?appName=hykura
PORT=3001
```

4. Start the development server:
```bash
npm run start:dev
```

The backend will be available at `http://localhost:3001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## API Endpoints

### POST /user/register
Register a new user.

**Request Body:**
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

## Project Structure

```
ia03/
├── backend/
│   ├── src/
│   │   ├── user/
│   │   │   ├── dto/
│   │   │   │   └── create-user.dto.ts
│   │   │   ├── user.controller.ts
│   │   │   ├── user.module.ts
│   │   │   ├── user.schema.ts
│   │   │   └── user.service.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/
│   │   ├── hooks/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   └── SignUp.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## Usage

1. Start both backend and frontend servers
2. Open `http://localhost:5173` in your browser
3. Navigate to the Sign Up page to register a new user
4. Use the Login page to simulate user login (UI only)

## Deployment

The application is designed to be deployed on platforms like:
- Backend: Railway, Render, or Heroku
- Frontend: Vercel, Netlify, or GitHub Pages

Make sure to update the API_BASE_URL in the frontend service to point to your deployed backend URL.

## License

This project is created for educational purposes as part of the AWDA IA03 assignment.
