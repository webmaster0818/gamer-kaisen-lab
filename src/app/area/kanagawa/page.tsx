import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "神奈川でおすすめのゲーミング回線 | 地域別比較",
  description: "神奈川エリアで使えるゲーミング回線を徹底比較。横浜・川崎で人気のNURO光をはじめ、全ISPのping値・速度・料金を分析。東京サーバーに近い好立地を活かそう。",
};

export default function Page() {
  const area = getAreaBySlug("kanagawa")!;
  return <AreaTemplate area={area} />;
}
