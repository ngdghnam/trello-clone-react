# Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)

## 1. Giới thiệu

**Server-Side Rendering (SSR)** và **Client-Side Rendering (CSR)** là hai phương pháp phổ biến để hiển thị nội dung trên trang web. Mỗi phương pháp có ưu điểm và nhược điểm riêng, phù hợp với từng loại ứng dụng web khác nhau.

---

## 2. Server-Side Rendering (SSR)

### 🔹 Cách hoạt động

- Máy chủ xử lý yêu cầu từ người dùng và render HTML hoàn chỉnh.
- HTML này sau đó được gửi đến trình duyệt, giúp hiển thị nội dung ngay lập tức.
- Sau khi tải xong, trình duyệt có thể thực hiện các thao tác tương tác bằng JavaScript nếu cần.

### ✅ Ưu điểm

✔ **Tốc độ tải trang ban đầu nhanh**: Nội dung hiển thị ngay lập tức do HTML đã được render sẵn.
✔ **Tối ưu SEO**: Các công cụ tìm kiếm có thể dễ dàng lập chỉ mục nội dung.
✔ **Phù hợp với người dùng có mạng chậm**: Giảm thời gian chờ tải dữ liệu.

### ❌ Nhược điểm

✖ **Tăng tải cho máy chủ**: Mỗi yêu cầu cần render lại HTML, làm tăng tài nguyên cần sử dụng.
✖ **Trang web ít tương tác hơn**: Không phù hợp với ứng dụng web có nhiều thao tác động.
✖ **Chuyển trang chậm hơn**: Mỗi lần chuyển trang yêu cầu tải lại toàn bộ nội dung từ server.

---

## 3. Client-Side Rendering (CSR)

### 🔹 Cách hoạt động

- Máy chủ gửi một file HTML trống và các file JavaScript cần thiết.
- Trình duyệt tải JavaScript, sau đó render nội dung trên trình duyệt.
- Khi người dùng tương tác, JavaScript sẽ cập nhật nội dung mà không cần tải lại trang.

### ✅ Ưu điểm

✔ **Giao diện tương tác mượt mà**: Trang web có thể cập nhật mà không cần reload.
✔ **Hiệu suất tốt sau lần tải đầu tiên**: Sau khi tải JavaScript, mọi thao tác diễn ra nhanh chóng.
✔ **Giảm tải cho máy chủ**: Công việc render chủ yếu diễn ra ở trình duyệt.

### ❌ Nhược điểm

✖ **Tốc độ tải trang ban đầu chậm**: Trình duyệt cần tải và chạy JavaScript trước khi hiển thị nội dung.
✖ **SEO kém hơn**: Công cụ tìm kiếm có thể gặp khó khăn khi lập chỉ mục nội dung động.
✖ **Phụ thuộc vào JavaScript**: Nếu JavaScript bị chặn hoặc lỗi, trang có thể không hoạt động.

---

## 4. Khi nào nên chọn SSR hoặc CSR?

| Yếu tố                 | SSR         | CSR                      |
| ---------------------- | ----------- | ------------------------ |
| **Tốc độ tải ban đầu** | ✅ Nhanh    | ❌ Chậm (phụ thuộc JS)   |
| **SEO**                | ✅ Tốt      | ❌ Kém hơn               |
| **Hiệu suất tải sau**  | ❌ Chậm hơn | ✅ Mượt mà, không reload |
| **Tải máy chủ**        | ❌ Cao hơn  | ✅ Nhẹ hơn               |
| **Tương tác**          | ❌ Hạn chế  | ✅ Cao, phù hợp SPA      |

- **Chọn SSR nếu:**

  - Cần tối ưu SEO (blog, trang tin tức, website thương mại điện tử).
  - Muốn giảm thời gian tải ban đầu cho người dùng có kết nối mạng chậm.

- **Chọn CSR nếu:**
  - Ứng dụng có nhiều tương tác (mạng xã hội, dashboard, web app phức tạp).
  - Muốn tối ưu trải nghiệm người dùng bằng cách giảm số lần tải lại trang.

Ngoài ra, có thể sử dụng **Server-Side Generation (SSG)** hoặc kết hợp cả SSR và CSR để tận dụng lợi thế của cả hai.

---

## 5. ReactJS là gì?

ReactJS là một thư viện JavaScript được phát triển bởi Facebook, dùng để xây dựng giao diện người dùng (UI) cho các ứng dụng web. React tập trung vào việc tạo các thành phần (components) có thể tái sử dụng, giúp xây dựng giao diện một cách hiệu quả và linh hoạt.

### 🔹 Cơ chế hoạt động của React

- React sử dụng **Virtual DOM** để tối ưu hóa hiệu suất render.
- Khi trạng thái của một component thay đổi, React sẽ so sánh Virtual DOM mới với Virtual DOM cũ và chỉ cập nhật những phần cần thiết trên giao diện thật.

### 🔹 Vòng đời của React Component

React component có ba giai đoạn chính trong vòng đời:

1. **Mounting (Giai đoạn khởi tạo)**: Component được tạo và hiển thị lần đầu tiên.
2. **Updating (Giai đoạn cập nhật)**: Component thay đổi khi state hoặc props của nó thay đổi.
3. **Unmounting (Giai đoạn hủy bỏ)**: Component bị xóa khỏi DOM.

Một số phương thức vòng đời quan trọng:

- `componentDidMount()`: Được gọi sau khi component được render lần đầu tiên.
- `componentDidUpdate()`: Được gọi sau khi component cập nhật.
- `componentWillUnmount()`: Được gọi trước khi component bị xóa khỏi DOM.

### 🔹 Cách React render giao diện

React render giao diện bằng cách cập nhật Virtual DOM trước, sau đó phản ánh những thay đổi vào Real DOM thông qua thuật toán **Reconciliation** để đảm bảo hiệu suất tối ưu.

---

## 6. React với Vite

**Vite** là một công cụ build hiện đại giúp tối ưu hóa hiệu suất phát triển ứng dụng React. So với **Create React App (CRA)**, Vite có nhiều ưu điểm:

### ✅ Ưu điểm của Vite:

✔ **Tốc độ khởi động nhanh hơn**: Sử dụng mô-đun ES để tải nhanh hơn.
✔ **Hỗ trợ HMR (Hot Module Replacement) tốt hơn**: Cập nhật thay đổi ngay lập tức mà không cần reload toàn bộ trang.
✔ **Nhẹ và tối ưu hơn**: Không cần Webpack, giúp build nhanh hơn.
✔ **Hỗ trợ TypeScript tốt hơn**: Dễ dàng tích hợp với TypeScript và các công cụ phát triển hiện đại.

### 🔹 Cài đặt React với Vite

Để khởi tạo một dự án React sử dụng Vite, bạn có thể dùng lệnh sau:

```sh
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```

Điều này giúp bạn có một môi trường phát triển React nhanh chóng, tối ưu hiệu suất hơn so với Create React App.

---

## 7. Kết luận

Việc chọn **SSR hay CSR** phụ thuộc vào mục tiêu của dự án. Nếu tập trung vào **SEO và tốc độ tải trang**, SSR là lựa chọn tốt hơn. Nếu muốn **trải nghiệm người dùng mượt mà và giảm tải cho server**, CSR là giải pháp phù hợp.

Một số framework hỗ trợ tốt cả hai phương pháp:

- **Next.js** (hỗ trợ SSR, CSR, SSG, ISR)
- **Nuxt.js** (SSR cho Vue.js)
- **Angular Universal** (SSR cho Angular)

Tùy vào dự án, bạn có thể linh hoạt chọn phương pháp phù hợp để tối ưu hiệu suất và trải nghiệm người dùng.

---

**© 2025 - Hướng dẫn SSR vs CSR & ReactJS**
