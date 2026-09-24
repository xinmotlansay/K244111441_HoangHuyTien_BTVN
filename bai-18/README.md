# Bài 18 — Khách hàng theo nhóm

Chạy `npm install`, sau đó `npm start` và mở địa chỉ terminal hiển thị.
Chạy `npm run build` để biên dịch.

- `public/assets/data/customers.json`: dữ liệu hai nhóm VIP và Normal.
- `public/assets/avatars/`: năm ảnh từ đề bài.
- `src/app/customer.service.ts`: đọc JSON bằng HttpClient.
- `src/app/customer-group/`: ngFor ngoài duyệt nhóm, ngFor trong duyệt khách hàng.
- `provideHttpClient()` được đăng ký trong AppModule.
- AsyncPipe nhận dữ liệu HTTP và cập nhật giao diện; có trạng thái đang tải và lỗi.
