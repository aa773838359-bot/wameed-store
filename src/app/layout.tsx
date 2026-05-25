import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const storeNameAr = process.env.STORE_NAME || "وميض ستور";
const storeNameEn = process.env.STORE_NAME_EN || "Wameed Store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${storeNameAr} - تسوق أونلاين`,
    template: `%s | ${storeNameAr}`,
  },
  description: "متجرك الإلكتروني الشامل - اكتشف أفضل المنتجات بأسعار مذهلة مع توصيل سريع وضمان الجودة",
  keywords: ["متجر", "تسوق", "اونلاين", "منتجات", "عروض", storeNameEn],
  authors: [{ name: storeNameAr }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: storeNameAr,
    title: `${storeNameAr} - تسوق أونلاين`,
    description: "متجرك الإلكتروني الشامل - اكتشف أفضل المنتجات بأسعار مذهلة",
  },
  twitter: {
    card: "summary_large_image",
    title: `${storeNameAr} - تسوق أونلاين`,
    description: "متجرك الإلكتروني الشامل - اكتشف أفضل المنتجات بأسعار مذهلة",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" dir="rtl" />
        </ThemeProvider>
      </body>
    </html>
  );
}
