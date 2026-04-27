import type { Metadata } from "next";
import { getISPBySlug } from "@/lib/data";
import ReviewTemplate from "@/components/ReviewTemplate";

export const metadata: Metadata = {
  title: "NURO光 徹底レビュー | ゲーマー向け速度・ping値・料金解説",
  description: "NURO光のゲーミング性能を徹底レビュー。ping値平均12ms、下り580Mbpsの実力を時間帯別データで検証。料金・メリット・デメリットも詳しく解説。",
};

export default function NuroReviewPage() {
  const isp = getISPBySlug("nuro")!;
  return <ReviewTemplate isp={isp} />;
}
