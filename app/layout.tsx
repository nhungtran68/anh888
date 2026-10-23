import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"ANH888 — Tạo ảnh gia đình", description:"Lưu giữ khoảnh khắc, tạo ảnh gia đình và chọn chất liệu in." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="vi"><body>{children}</body></html>}
