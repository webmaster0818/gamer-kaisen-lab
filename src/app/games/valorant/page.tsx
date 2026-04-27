import type { Metadata } from "next";
import { getGameBySlug } from "@/lib/data";
import GameTemplate from "@/components/GameTemplate";

export const metadata: Metadata = {
  title: "VALORANT おすすめ回線 | 推奨ping値・最適な光回線",
  description: "VALORANTに最適な光回線を紹介。推奨ping値15ms以下の超低遅延回線をランキング形式で比較。競技レベルの回線選びをサポート。",
};

export default function ValorantPage() {
  const game = getGameBySlug("valorant")!;
  return <GameTemplate game={game} />;
}
