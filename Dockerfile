# 1. Aşama – Build ortamı
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# 2. Aşama – Sadece çalıştırılacak dosyaları kopyala
FROM node:18-slim
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
CMD ["npm", "start"]

