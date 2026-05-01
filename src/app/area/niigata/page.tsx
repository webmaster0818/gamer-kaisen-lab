import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "新潟でおすすめのゲーミング回線 | 地域別比較",
  description: "新潟エリアで使えるゲーミング光回線を比較。GameWith光・hi-ho・ドコモ光等のping値・速度・料金を地域特性に合わせて分析。北陸/甲信越の新潟で最適な回線を選ぼう。",
};

export default function Page() {
  const area = getAreaBySlug("niigata")!;
  return <AreaTemplate area={area} />;
}
