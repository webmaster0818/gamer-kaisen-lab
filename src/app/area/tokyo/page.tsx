import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "東京でおすすめのゲーミング回線 | 地域別比較",
  description: "東京エリアで使えるゲーミング回線を徹底比較。NURO光・GameWith光・auひかり等のping値・速度・料金を地域特性に合わせて分析。eスポーツ施設も充実の東京で最適な回線を選ぼう。",
};

export default function Page() {
  const area = getAreaBySlug("tokyo")!;
  return <AreaTemplate area={area} />;
}
