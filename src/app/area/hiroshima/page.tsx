import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "広島でおすすめのゲーミング回線 | 地域別比較",
  description: "広島エリアで使えるゲーミング光回線を比較。メガ・エッグ・auひかり・GameWith光等のping値・速度・料金を地域特性に合わせて分析。中国地方最大の広島で最適な回線を選ぼう。",
};

export default function Page() {
  const area = getAreaBySlug("hiroshima")!;
  return <AreaTemplate area={area} />;
}
