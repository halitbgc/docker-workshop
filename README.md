# Docker Workshop Projesi

Bu proje, Docker resmi dokümantasyonundaki ["Get Started Workshop"](https://docs.docker.com/get-started/workshop/) adımlarının uygulanmasıyla oluşturulmuştur.

## İçerik

- Node.js uygulaması
- Dockerfile ile containerize edilmiştir
- `docker-compose.yml` kullanılarak çoklu servis kurulumu yapılmıştır
- Veritabanı servisi olarak MySQL entegrasyonu yapılmıştır
- Volume, bind mount, network ve environment değişkenleri uygulanmıştır

## Başlatmak için

```bash
docker-compose up --build
