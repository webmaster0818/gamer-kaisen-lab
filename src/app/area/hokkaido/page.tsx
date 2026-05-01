import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "北海道・札幌でおすすめのゲーミング回線 | 地域別比較",
  description: "北海道・札幌エリアで使えるゲーミング回線を徹底比較。NURO光・auひかりなど独自回線のping値・速度・料金を分析。東京サーバーとの距離を補う回線選びのコツ。",
};

export default function Page() {
  const area = getAreaBySlug("hokkaido")!;
  return <AreaTemplate area={area} />;
}
