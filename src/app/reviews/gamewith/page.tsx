import type { Metadata } from "next";
import { getISPBySlug } from "@/lib/data";
import ReviewTemplate from "@/components/ReviewTemplate";

export const metadata: Metadata = {
  title: "GameWith光 徹底レビュー | ゲーム特化回線の実力を検証",
  description: "GameWith光のゲーミング性能を徹底レビュー。専用帯域・ゲームサーバー直接接続の効果をping値・ジッター値で検証。料金プランも解説。",
};

export default function GameWithReviewPage() {
  const isp = getISPBySlug("gamewith")!;
  return <ReviewTemplate isp={isp} />;
}
