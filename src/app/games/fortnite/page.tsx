import type { Metadata } from "next";
import { getGameBySlug } from "@/lib/data";
import GameTemplate from "@/components/GameTemplate";

export const metadata: Metadata = {
  title: "フォートナイト おすすめ回線 | 推奨ping値・最適な光回線",
  description: "フォートナイトに最適な光回線を紹介。建築バトルに必要な低ping・低ジッター環境を実現するおすすめ回線をランキング形式で比較。",
};

export default function FortnitePage() {
  const game = getGameBySlug("fortnite")!;
  return <GameTemplate game={game} />;
}
