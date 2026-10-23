# ANH888 — Ảnh gia đình và xưởng in

Ứng dụng Next.js 16 + React + TypeScript + Supabase, giao diện tiếng Việt ưu tiên điện thoại.

**Tình trạng:** MVP **tái dựng từ Master Prompt**, không phải bản sao đầy đủ của source Sites cũ. Có thể đưa repo này vào Vercel để build thử, nhưng **chưa được kiểm thử build trong phiên hiện tại** và **chưa hoạt động như nền tảng thương mại hoàn chỉnh**. Đã tạo giao diện, xác thực, lưu dự án ảnh riêng tư; API tạo ảnh/trả phí/đặt in vẫn tắt.

## Chạy local

```bash
npm install
cp .env.example .env.local
# Điền NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY trong .env.local
npm run dev
```

Repo chưa có lockfile do môi trường dựng này không tải được gói npm. **Tạo/commit `package-lock.json` sau `npm install`, rồi kiểm tra `npm run build`.**

## Triển khai
Xem [docs/DEPLOY.md](docs/DEPLOY.md).

## Cơ sở dữ liệu
Supabase project `rxvrrjpwweibxriindoh` đã có bảng và RLS. Không chạy lại migrations lịch sử.

## Bảo mật
Không đưa secret key/service-role key lên GitHub hoặc browser. Ảnh được lưu vào bucket Supabase `anh888-private`. Chỉ cho upload MIME JPEG/PNG/WebP 20 MB theo chính sách Storage. Tài khoản Admin đầu tiên phải có email xác minh `daitaigroup@gmail.com`.

## Các hạng mục tiếp tục
1. Kiểm tra build Vercel và sửa lỗi runtime nếu có.
2. Kết nối hoàn thiện API/worker AI, quote/credit/reconciliation.
3. Worker tạo mockup và file in.
4. Backend server-side checkout, creator/affiliate/workshop finance.
5. Security audit đa tài khoản và end-to-end test.

**Không tuyên bố đạt production.** Hệ thống nền Supabase có nhiều bảng nhưng các màn hình thương mại hiện mới là bản khung.
