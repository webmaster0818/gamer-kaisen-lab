import type { Metadata } from "next";
import { getAreaBySlug } from "@/lib/data";
import AreaTemplate from "@/components/AreaTemplate";

export const metadata: Metadata = {
  title: "名古屋・愛知でおすすめのゲーミング回線 | 地域別比較",
  description: "名古屋・愛知エリアで使えるゲーミング回線を徹底比較。コミュファ光ゲーミングカスタム・NURO光など東海限定の選択肢も含めてping値・速度・料金を分析。",
};

export default function Page() {
  const area = getAreaBySlug("nagoya")!;
  return <AreaTemplate area={area} />;
}
