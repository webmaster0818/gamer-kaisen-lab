import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "埼玉でおすすめのゲーミング回線 | 地域別比較",
  description: "埼玉エリアで使えるゲーミング回線を徹底比較。NURO光・GameWith光など全ISPのping値・速度・料金を分析。東京サーバーに近くコスパ良好な回線を選ぼう。",
};

export default function Page() {
  const area = getAreaBySlug("saitama")!;
  return <AreaTemplate area={area} />;
}
