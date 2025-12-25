# Click AI | Workshop Solopreneur Landing Page

Thiết kế Landing Page chuyên nghiệp theo phong cách Apple UI dành cho Workshop "AI Infrastructure for Solopreneur".

## Cấu trúc thư mục (Minimal Repository)
- `/index.html`: File HTML duy nhất chứa toàn bộ cấu trúc và style (CSS-in-HTML).
- `/index.tsx`: Toàn bộ logic ứng dụng React, UI Components và Content (No Build Step needed).
- `/README.md`: Hướng dẫn vận hành.
- `/metadata.json`: Thông tin dự án.

## Hướng dẫn Deploy Vercel (Ổn định nhất)
1. Truy cập [Vercel](https://vercel.com).
2. Chọn **Add New** → **Project**.
3. Import Repo từ GitHub.
4. Tại phần **Project Settings**:
   - **Framework Preset**: Chọn `Other` (hoặc No Build).
   - **Build and Output Settings**: Giữ nguyên mặc định.
5. Click **Deploy**.

## Tính năng kỹ thuật
- **Zero Build Step**: Chạy trực tiếp qua ESM modules.
- **Responsive Design**: Tối ưu hoàn toàn cho Mobile và Desktop.
- **Apple Style**: Typography Inter, soft shadows, glassmorphism.
- **Performance**: Không dùng bundle nặng, load script via CDN (esm.sh).
- **Security**: Không sử dụng environment variables phía client, dữ liệu form gửi qua URL webhook an toàn.

---
© 2025 Click AI Architecture.