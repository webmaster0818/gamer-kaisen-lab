import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "三重でおすすめのゲーミング回線 | 地域別比較",
  description: "三重エリアで使えるゲーミング光回線を比較。コミュファ光・GameWith光・hi-ho等のping値・速度・料金を地域特性に合わせて分析。東海エリアの三重で最適な回線を選ぼう。",
};

export default function Page() {
  const area = getAreaBySlug("mie")!;
  return <AreaTemplate area={area} />;
}
