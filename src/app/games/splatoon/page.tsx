import type { Metadata } from "next";
import { getGameBySlug } from "@/lib/data";
import GameTemplate from "@/components/GameTemplate";

export const metadata: Metadata = {
  title: "スプラトゥーン3 おすすめ回線 | 通信エラー対策・推奨回線",
  description: "スプラトゥーン3に最適な光回線を紹介。P2P通信による通信エラー（回線落ち）を防ぐための推奨回線スペックと比較ランキング。",
};

export default function SplatoonPage() {
  const game = getGameBySlug("splatoon")!;
  return <GameTemplate game={game} />;
}
