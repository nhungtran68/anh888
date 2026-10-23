# Triển khai ANH888 lên Vercel

## 1. Liên kết mã nguồn
- GitHub: https://github.com/nhungtran68/anh888
- Vercel → Add New Project → Import Git Repository → `nhungtran68/anh888`.
- Framework: **Next.js**; Root Directory: `./`; Build: `npm run build`.
- Git branch: `main`.
- Bản này là **MVP tái dựng** từ master prompt do mã nguồn Sites trước đó không truy cập được trong phiên hiện tại. **Chưa thay thế toàn bộ các chức năng sâu của bản Sites cũ**.
- Source này chưa có lockfile; sau lần cài dependency đầu tiên cần commit `package-lock.json`. Không coi bản chưa cài/build thử là đã hoàn tất nghiệm thu.

## 2. Environment Variables (Vercel, Production)
Chỉ cần biến công khai:
```text
NEXT_PUBLIC_SUPABASE_URL=https://rxvrrjpwweibxriindoh.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<publishable key từ Supabase Dashboard>
NEXT_PUBLIC_APP_URL=https://<tên-site>.vercel.app
```
Không đặt `service_role` trong `NEXT_PUBLIC_`. Không commit tệp `.env.local`. API key tạo ảnh, tài khoản ngân hàng và thanh toán không nằm trong repository.

## 3. Supabase
- Project ref: `rxvrrjpwweibxriindoh` (connection Anh888).
- Database ANH888 đã được cấu hình trực tiếp qua connector, **không cần chạy lại các migration**.
- Storage bucket riêng tư: `anh888-private`.
- Dashboard → Authentication → URL Configuration: cập nhật Site URL thành URL website đang chạy; Redirect URLs bổ sung URL origin thật và `https://<tên-site>.vercel.app/**` khi cần.
- Dùng Supabase Auth email/password. Nếu bật xác minh email, người dùng phải xác minh email trước.

## 4. Admin đầu tiên
1. Mở website → Tài khoản → Đăng ký.
2. Đăng ký email `daitaigroup@gmail.com` và xác minh email.
3. Đăng nhập → Tài khoản → **Kích hoạt Admin lần đầu**.
4. Nút gọi RPC `bootstrap_first_admin` và kiểm tra email được xác minh trong allowlist. Nếu đã có Admin, RPC sẽ từ chối.
5. Đăng nhập lại / tải lại trang rồi mở `/admin`.

## 5. Tình trạng tính năng
- Đã có: giao diện tiếng Việt, đăng nhập/đăng ký/đặt lại mật khẩu email, phần vai trò, 12 phong cách, tối đa 10 người, upload ảnh riêng tư sang Supabase Storage, tạo bản ghi dự án và người, trang tài khoản, trang shop/CTV/xưởng/admin ở mức khung.
- **Chưa có:** worker tạo ảnh AI thật; xử lý nhiều ảnh trên cùng một người; kiểm định độ nét/tính giống thực tế; mockup tự động; file in sản xuất; giỏ hàng và thanh toán thật; affiliate/creator/workshop workflows end-to-end; bảng giá được xưởng xác nhận; đối soát thật; upload private R2.
- Giá 30.000–600.000đ chỉ là **bảng giá tham khảo**, chưa gán sản phẩm và chưa mở thanh toán.
- Các màn hình giới thiệu Shop, CTV, xưởng là placeholder có thông báo rõ ràng, không giả lập giao dịch.
- Giao diện mới không phải source code nguyên bản của site Sites cũ.

## 6. Kiểm tra thủ công
1. Vercel build thành công và không có lỗi React/Next trong log.
2. Trang chủ, `/tao-anh`, `/tai-khoan`, `/admin`, `/shop`, `/xuonginan` mở trực tiếp được.
3. Đăng ký user mới, xác minh mail, đăng nhập, reset password.
4. Upload ảnh từng người, lưu dự án, kiểm tra row trong `photo_projects`, `project_people`, `assets`, `asset_people` và object trong Storage.
5. Kiểm tra không đọc được dự án/tệp của tài khoản khác.
6. Kiểm tra chưa thể phát sinh phí tạo ảnh và thanh toán vì nhà cung cấp chưa được cấu hình.

## 7. Ghi chú vận hành
Đừng xuất bản công khai cho khách thanh toán hoặc tạo AI có phí cho đến khi backend xử lý AI/printing/payment hoàn chỉnh và qua kiểm thử end-to-end.
