import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "岐阜でおすすめのゲーミング回線 | 地域別比較",
  description: "岐阜エリアで使えるゲーミング光回線を比較。コミュファ光・GameWith光・hi-ho等のping値・速度・料金を地域特性に合わせて分析。名古屋に隣接する岐阜で最適な回線を選ぼう。",
};

export default function Page() {
  const area = getAreaBySlug("gifu")!;
  return <AreaTemplate area={area} />;
}
