import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "大阪でおすすめのゲーミング回線 | 地域別比較",
  description: "大阪エリアで使えるゲーミング回線を徹底比較。eo光・NURO光など関西で人気の回線のping値・速度・料金を分析。関西最大のゲーマー都市で最適な回線を選ぼう。",
};

export default function Page() {
  const area = getAreaBySlug("osaka")!;
  return <AreaTemplate area={area} />;
}
