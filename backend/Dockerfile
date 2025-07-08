# 1. Dùng image Node.js chính thức làm nền tảng
FROM node:20

# 2. Tạo thư mục chứa source code trong container
WORKDIR /app

# 3. Copy file cấu hình npm (package.json, lock file)
COPY package*.json ./

# 4. Cài đặt dependencies
RUN npm install

# 5. Copy toàn bộ mã nguồn vào container
COPY . .

# 6. Expose port (ví dụ app lắng nghe ở cổng 3000)
EXPOSE 3000

# 7. Chạy app khi container khởi động
CMD ["npm", "run", "start"]