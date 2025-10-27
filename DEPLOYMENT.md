# Deployment Guide

This guide explains how to deploy both the backend and frontend applications.

## Backend Deployment (NestJS)

### Option 1: Railway

1. Go to [Railway](https://railway.app)
2. Sign up/Login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Choose the `backend` folder as the root directory
6. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: 3001 (optional, Railway will assign one)
7. Deploy!

### Option 2: Render

1. Go to [Render](https://render.com)
2. Sign up/Login with GitHub
3. Click "New" → "Web Service"
4. Connect your repository
5. Configure:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm run start:prod`
6. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
7. Deploy!

### Option 3: Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI="your-mongodb-uri"
   ```
5. Deploy: `git push heroku main`

## Frontend Deployment (React + Vite)

### Option 1: Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add environment variable:
   - `VITE_API_URL`: Your deployed backend URL
7. Deploy!

### Option 2: Netlify

1. Go to [Netlify](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Select your repository
5. Configure:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variable:
   - `VITE_API_URL`: Your deployed backend URL
7. Deploy!

### Option 3: GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## Environment Variables

### Backend
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (optional)

### Frontend
- `VITE_API_URL`: Backend API URL

## Testing Deployment

1. Test backend API:
   ```bash
   curl -X POST https://your-backend-url.com/user/register \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","password":"password123"}'
   ```

2. Test frontend:
   - Open your deployed frontend URL
   - Try registering a new user
   - Check browser console for any errors

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure your backend allows your frontend domain
2. **API Connection**: Verify the `VITE_API_URL` environment variable
3. **Build Failures**: Check that all dependencies are installed
4. **Database Connection**: Verify MongoDB URI is correct

### Debugging

1. Check deployment logs
2. Test API endpoints directly
3. Verify environment variables
4. Check browser console for frontend errors
