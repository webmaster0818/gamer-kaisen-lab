import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "兵庫でおすすめのゲーミング回線 | 地域別比較",
  description: "兵庫エリアで使えるゲーミング回線を徹底比較。eo光・NURO光など関西で使える回線のping値・速度・料金を分析。神戸・姫路エリアのゲーマーに最適な回線を。",
};

export default function Page() {
  const area = getAreaBySlug("hyogo")!;
  return <AreaTemplate area={area} />;
}
