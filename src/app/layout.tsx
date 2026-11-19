import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecommerce-platform-delta-one.vercel.app"),
  title: "HShop - Điện thoại, laptop, tablet, phụ kiện chính hãng",
  description:
    "Mua sắm trực tuyến các sản phẩm công nghệ. Giá tốt & Miễn phí vận chuyển. Voucher Xtra | Freeship 0Đ | HShop Đảm Bảo",
  applicationName: "HShop",
  openGraph: {
    type: "website",
    siteName: "HShop",
    locale: "vi_VN",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: { google: "Bq1Km_TdPQywzZGcl3uq16Znhoeu-3ULxyqMWN5UmUQ" },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "HShop",
  },
  icons: {
    apple: [
      { url: "/icons/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "white",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
