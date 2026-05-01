import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "京都でおすすめのゲーミング回線 | 地域別比較",
  description: "京都エリアで使えるゲーミング回線を徹底比較。eo光・NURO光など関西で使える回線のping値・速度・料金を分析。学生ゲーマーにもコスパの良い回線を紹介。",
};

export default function Page() {
  const area = getAreaBySlug("kyoto")!;
  return <AreaTemplate area={area} />;
}
