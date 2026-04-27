import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "ゲーマー回線ラボ | ゲーミング光回線の比較・おすすめランキング",
    template: "%s | ゲーマー回線ラボ",
  },
  description:
    "ゲーマー・eスポーツプレイヤーのための光回線比較サイト。ping値・ジッター・速度の実測データからゲームに最適な回線を徹底分析。NURO光・GameWith光・hi-ho with games等を比較ランキング。",
  keywords: "ゲーム 回線 おすすめ,ゲーミング 光回線,FPS 回線,ping値 低い 光回線,eスポーツ 回線",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ゲーマー回線ラボ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.className} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0F172A] text-[#E2E8F0]">{<><Header /><main className="flex-1">{children}</main><Footer /></>}</body>
    </html>
  );
}
