import type { Metadata } from "next";
import Link from "next/link";
import { gameTitles } from "@/lib/data";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ゲーム別 必要速度・ping値 早見表【2026年版】",
  description: "人気オンラインゲーム別の推奨通信速度・ping値・ジッター値の早見表。Apex、VALORANT、FF14、フォートナイトなど主要タイトルを網羅。",
};

export default function SpeedGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "解説コラム" }, { label: "必要速度早見表" }]} />

      <article className="mt-4">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-6">
          ⚡ ゲーム別 <span className="text-[#10B981]">必要速度・ping値</span> 早見表
        </h1>

        <p className="text-[#94A3B8] mb-8 leading-relaxed">
          オンラインゲームをプレイするために必要な通信速度・ping値・ジッター値をゲームタイトル別にまとめました。
          自分がプレイするゲームの要件を確認して、最適な回線を選びましょう。
        </p>

        {/* Game Table */}
        <div className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden mb-8">
          <div className="p-5 border-b border-[#334155]">
            <h2 className="text-lg font-bold text-white">🎮 ゲームタイトル別 推奨スペック</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#334155] bg-[#0F172A]/50">
                  <th className="text-left py-3 px-4 text-[#64748B]">ゲーム</th>
                  <th className="text-center py-3 px-4 text-[#64748B]">ジャンル</th>
                  <th className="text-center py-3 px-4 text-[#64748B]">推奨ping</th>
                  <th className="text-center py-3 px-4 text-[#64748B]">推奨ジッター</th>
                  <th className="text-center py-3 px-4 text-[#64748B]">推奨速度</th>
                  <th className="text-center py-3 px-4 text-[#64748B]">ping重要度</th>
                </tr>
              </thead>
              <tbody>
                {gameTitles.map((game) => (
                  <tr key={game.id} className="border-b border-[#0F172A]">
                    <td className="py-3 px-4">
                      <Link href={`/games/${game.slug}/`} className="font-bold text-white hover:text-[#7C3AED] transition-colors">{game.name}</Link>
                    </td>
                    <td className="py-3 px-4 text-center text-[#94A3B8]">{game.genre}</td>
                    <td className="py-3 px-4 text-center text-[#10B981] font-bold">{game.requiredPing}ms以下</td>
                    <td className="py-3 px-4 text-center text-[#10B981] font-bold">{game.requiredJitter}ms以下</td>
                    <td className="py-3 px-4 text-center text-white font-bold">{game.requiredDownload}Mbps以上</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        game.pingImportance === "critical" ? "bg-[#EF4444]/10 text-[#EF4444]" :
                        game.pingImportance === "high" ? "bg-[#F59E0B]/10 text-[#F59E0B]" :
                        "bg-[#10B981]/10 text-[#10B981]"
                      }`}>
                        {game.pingImportance === "critical" ? "最重要" : game.pingImportance === "high" ? "重要" : "普通"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* General Guide */}
        <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">📋 用途別の推奨スペック</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#334155]">
                <th className="text-left py-2 px-3 text-[#64748B]">用途</th>
                <th className="text-center py-2 px-3 text-[#64748B]">下り速度</th>
                <th className="text-center py-2 px-3 text-[#64748B]">上り速度</th>
                <th className="text-center py-2 px-3 text-[#64748B]">ping値</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#0F172A]">
                <td className="py-2 px-3 text-white">オンラインゲーム（一般）</td>
                <td className="py-2 px-3 text-center text-white">30Mbps以上</td>
                <td className="py-2 px-3 text-center text-white">10Mbps以上</td>
                <td className="py-2 px-3 text-center text-[#10B981]">30ms以下</td>
              </tr>
              <tr className="border-b border-[#0F172A]">
                <td className="py-2 px-3 text-white">競技FPS / eスポーツ</td>
                <td className="py-2 px-3 text-center text-white">100Mbps以上</td>
                <td className="py-2 px-3 text-center text-white">50Mbps以上</td>
                <td className="py-2 px-3 text-center text-[#10B981]">10ms以下</td>
              </tr>
              <tr className="border-b border-[#0F172A]">
                <td className="py-2 px-3 text-white">ゲーム配信（1080p）</td>
                <td className="py-2 px-3 text-center text-white">50Mbps以上</td>
                <td className="py-2 px-3 text-center text-white">20Mbps以上</td>
                <td className="py-2 px-3 text-center text-[#F59E0B]">50ms以下</td>
              </tr>
              <tr className="border-b border-[#0F172A]">
                <td className="py-2 px-3 text-white">ゲーム��信（4K）</td>
                <td className="py-2 px-3 text-center text-white">100Mbps以上</td>
                <td className="py-2 px-3 text-center text-white">50Mbps以上</td>
                <td className="py-2 px-3 text-center text-[#F59E0B]">50ms以下</td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-white">ゲームダウンロード</td>
                <td className="py-2 px-3 text-center text-white">300Mbps以上</td>
                <td className="py-2 px-3 text-center text-[#64748B]">-</td>
                <td className="py-2 px-3 text-center text-[#64748B]">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-3">💡 速度 vs ping値、どちらが大切？</h2>
          <p className="text-[#94A3B8] leading-relaxed">
            <strong className="text-white">オンラインゲームのプレイ自体にはping値の方が重要です。</strong>
            ゲーム中の通信データ量は数Mbps程度なので、100Mbps以上の速度があれば十分です。
            一方、ping値はリアルタイムの操作レスポンスに直結するため、FPSや格闘ゲームでは10ms単位の差が勝敗を分けます。
          </p>
          <p className="text-[#94A3B8] leading-relaxed mt-3">
            ただし、<strong className="text-white">ゲームのダウンロードや大型アップデート</strong>では速度が重要になります。
            100GBを超えるゲームも珍しくない現在、ダウンロード速度が300Mbpsあれば約45分で完了しますが、50Mbpsだと4時間以上かかります。
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/guide/jitter/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">← ジッターとは？</Link>
          <Link href="/guide/ipv6/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">IPv6とは？ →</Link>
        </div>
      </article>
    </div>
  );
}
