# Build stage
FROM node:22-alpine AS builder 
WORKDIR /app
ARG VITE_API_BASE_URL
COPY . .
RUN echo "VITE_API_BASE_URL=$VITE_API_BASE_URL" > .env
RUN npm install
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
