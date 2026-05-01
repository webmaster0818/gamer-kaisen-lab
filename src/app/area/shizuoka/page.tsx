import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "静岡でおすすめのゲーミング回線 | 地域別比較",
  description: "静岡エリアで使えるゲーミング光回線を比較。コミュファ光・NURO光・GameWith光等のping値・速度・料金を地域特性に合わせて分析。東京・名古屋サーバーに中間距離の静岡で最適な回線を選ぼう。",
};

export default function Page() {
  const area = getAreaBySlug("shizuoka")!;
  return <AreaTemplate area={area} />;
}
