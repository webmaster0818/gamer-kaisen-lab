import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "群馬でおすすめのゲーミング回線 | 地域別比較",
  description: "群馬エリアで使えるゲーミング光回線を比較。NURO光・auひかり・GameWith光等のping値・速度・料金を地域特性に合わせて分析。前橋・高崎中心の群馬で最適な回線を選ぼう。",
};

export default function Page() {
  const area = getAreaBySlug("gunma")!;
  return <AreaTemplate area={area} />;
}
