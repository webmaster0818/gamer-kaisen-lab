import type { Metadata } from "next";
import { getISPBySlug } from "@/lib/data";
import ReviewTemplate from "@/components/ReviewTemplate";

export const metadata: Metadata = {
  title: "hi-ho with games 徹底レビュー | FPS特化回線の実力",
  description: "hi-ho with gamesのゲーミング性能を徹底レビュー。ゲーム専用帯域・ゲーミングルーターパックの効果をping値で検証。料金・評判も解説。",
};

export default function HiHoReviewPage() {
  const isp = getISPBySlug("hi-ho")!;
  return <ReviewTemplate isp={isp} />;
}
