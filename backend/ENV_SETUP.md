# Environment Variables Setup

## Tạo file .env

Tạo file `.env` trong thư mục `backend` với nội dung:

```env
MONGODB_URI=mongodb+srv://hykura:123456789%40123@hykura.rwjtpqe.mongodb.net/awad-ia03?appName=hykura
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## Environment Variables cho Vercel

Khi deploy lên Vercel, thêm các environment variables sau:

1. Vào Vercel Dashboard
2. Chọn project của bạn
3. Vào Settings > Environment Variables
4. Thêm các biến sau:

- `MONGODB_URI`: `mongodb+srv://hykura:123456789%40123@hykura.rwjtpqe.mongodb.net/awad-ia03?appName=hykura`
- `PORT`: `3001`
- `NODE_ENV`: `production`
- `FRONTEND_URL`: URL của frontend đã deploy

## Cách tạo file .env

```bash
cd backend
echo "MONGODB_URI=mongodb+srv://hykura:123456789%40123@hykura.rwjtpqe.mongodb.net/awad-ia03?appName=hykura" > .env
echo "PORT=3001" >> .env
echo "NODE_ENV=development" >> .env
echo "FRONTEND_URL=http://localhost:5173" >> .env
```

## Kiểm tra

Sau khi tạo file .env, chạy:

```bash
npm run start:dev
```

Ứng dụng sẽ chạy trên port 3001 và kết nối với MongoDB.
