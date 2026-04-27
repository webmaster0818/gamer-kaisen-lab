import type { Metadata } from "next";
import { getGameBySlug } from "@/lib/data";
import GameTemplate from "@/components/GameTemplate";

export const metadata: Metadata = {
  title: "FF14 おすすめ回線 | 推奨ping値・最適な光回線",
  description: "ファイナルファンタジーXIVに最適な光回線を紹介。零式・絶コンテンツに必要なping値と安定性を重視した回線比較。",
};

export default function FF14Page() {
  const game = getGameBySlug("ff14")!;
  return <GameTemplate game={game} />;
}
