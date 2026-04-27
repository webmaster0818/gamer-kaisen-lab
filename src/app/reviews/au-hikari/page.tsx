import type { Metadata } from "next";
import { getISPBySlug } from "@/lib/data";
import ReviewTemplate from "@/components/ReviewTemplate";

export const metadata: Metadata = {
  title: "auひかり 徹底レビュー | 独自回線の安定性をゲーマー目線で検証",
  description: "auひかりのゲーミング性能を徹底レビュー。KDDI独自回線の夜間安定性をping値・ジッター値で検証。auスマートバリューの料金メリットも解説。",
};

export default function AuHikariReviewPage() {
  const isp = getISPBySlug("au-hikari")!;
  return <ReviewTemplate isp={isp} />;
}
