import type { Metadata } from "next";
import { getGameBySlug } from "@/lib/data";
import GameTemplate from "@/components/GameTemplate";

export const metadata: Metadata = {
  title: "Apex Legends おすすめ回線 | 推奨ping値・最適な光回線",
  description: "Apex Legendsに最適な光回線を紹介。推奨ping値20ms以下、ジッター5ms以下のFPS向け回線をランキング形式で比較。",
};

export default function ApexPage() {
  const game = getGameBySlug("apex")!;
  return <GameTemplate game={game} />;
}
