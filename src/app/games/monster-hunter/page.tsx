import type { Metadata } from "next";
import { getGameBySlug } from "@/lib/data";
import GameTemplate from "@/components/GameTemplate";

export const metadata: Metadata = {
  title: "モンスターハンター おすすめ回線 | 推奨ping値・最適な光回線",
  description: "モンスターハンターに最適な光回線を紹介。4人協力プレイを快適にするための推奨ping値と回線スペックを比較解説。",
};

export default function MonsterHunterPage() {
  const game = getGameBySlug("monster-hunter")!;
  return <GameTemplate game={game} />;
}
