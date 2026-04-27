import type { Metadata } from "next";
import { getISPBySlug } from "@/lib/data";
import ReviewTemplate from "@/components/ReviewTemplate";

export const metadata: Metadata = {
  title: "ドコモ光 徹底レビュー | IPv6対応でゲームは快適？",
  description: "ドコモ光のゲーミング性能を徹底レビュー。v6プラスのIPv6 IPoE接続でゲームは快適か、ping値・速度データで検証。ドコモセット割の料金メリットも解説。",
};

export default function DocomoHikariReviewPage() {
  const isp = getISPBySlug("docomo-hikari")!;
  return <ReviewTemplate isp={isp} />;
}
