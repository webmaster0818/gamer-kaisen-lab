import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "宮城・仙台でおすすめのゲーミング回線 | 地域別比較",
  description: "宮城・仙台エリアで使えるゲーミング光回線を比較。auひかり・GameWith光・hi-ho等のping値・速度・料金を地域特性に合わせて分析。東北最大の仙台で最適な回線を選ぼう。",
};

export default function Page() {
  const area = getAreaBySlug("sendai")!;
  return <AreaTemplate area={area} />;
}
