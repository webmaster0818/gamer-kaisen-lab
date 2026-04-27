import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "運営者情報",
  description: "ゲーマー回線ラボの運営者情報・サイトの目的・編集方針について。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "運営者情報" }]} />

      <h1 className="text-3xl font-black text-white mt-4 mb-8">運営者情報</h1>

      <div className="space-y-8">
        <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">サイト情報</h2>
          <dl className="space-y-3 text-sm">
            <div className="flex"><dt className="text-[#64748B] w-32 shrink-0">サイト名</dt><dd className="text-white">ゲーマー回線ラボ</dd></div>
            <div className="flex"><dt className="text-[#64748B] w-32 shrink-0">URL</dt><dd className="text-[#7C3AED]">https://gamer-kaisen-lab.pages.dev</dd></div>
            <div className="flex"><dt className="text-[#64748B] w-32 shrink-0">開設日</dt><dd className="text-white">2026年4月</dd></div>
            <div className="flex"><dt className="text-[#64748B] w-32 shrink-0">お問い合わせ</dt><dd className="text-white">webmaster@mediax.biz</dd></div>
          </dl>
        </section>

        <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">サイトの目的</h2>
          <p className="text-[#94A3B8] leading-relaxed text-sm">
            「ゲーマー回線ラボ」は、ゲーマー・eスポーツプレイヤーが最適な光回線を選べるよう、
            ping値・ジッター値・通信速度などの客観的なデータに基づいた比較情報を提供することを目的としています。
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-sm mt-3">
            一般的な回線比較サイトでは速度や料金のみで比較されることが多いですが、
            ゲーマーにとって最も重要な「遅延（ping値）」と「安定性（ジッター値）」に焦点を当てた情報を提供します。
          </p>
        </section>

        <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">編集方針</h2>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li className="flex items-start gap-2"><span className="text-[#10B981]">●</span>掲載する情報は実測データの目安値や公式発表に基づきます</li>
            <li className="flex items-start gap-2"><span className="text-[#10B981]">●</span>特定のサービスを不当に優遇・貶めることはしません</li>
            <li className="flex items-start gap-2"><span className="text-[#10B981]">●</span>料金やサービス内容は定期的に最新情報に更新します</li>
            <li className="flex items-start gap-2"><span className="text-[#10B981]">●</span>アフィリエイトリンクの有無に関わらず、客観的な評価を行います</li>
          </ul>
        </section>

        <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">免責事項</h2>
          <p className="text-[#94A3B8] leading-relaxed text-sm">
            当サイトに掲載されている情報は、執筆時点での情報を基にしています。
            通信速度やping値は、ご利用の環境・地域・時間帯によって大きく異なる場合があります。
            料金やサービス内容は予告なく変更される場合がありますので、最新の情報は各サービスの公式サイトでご確認ください。
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">← トップページに戻る</Link>
      </div>
    </div>
  );
}
