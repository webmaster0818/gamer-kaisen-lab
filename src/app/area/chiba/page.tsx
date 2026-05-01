import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "千葉でおすすめのゲーミング回線 | 地域別比較",
  description: "千葉エリアで使えるゲーミング回線を徹底比較。NURO光・auひかりなど全ISPのping値・速度・料金を分析。幕張メッセのeスポーツ会場もある千葉で最適な回線を。",
};

export default function Page() {
  const area = getAreaBySlug("chiba")!;
  return <AreaTemplate area={area} />;
}
