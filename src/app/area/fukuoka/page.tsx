import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "福岡でおすすめのゲーミング回線 | 地域別比較",
  description: "福岡エリアで使えるゲーミング回線を徹底比較。BBIQ・NURO光など九州で人気の回線のping値・速度・料金を分析。九州最大のゲーマー都市で最適な回線を選ぼう。",
};

export default function Page() {
  const area = getAreaBySlug("fukuoka")!;
  return <AreaTemplate area={area} />;
}
