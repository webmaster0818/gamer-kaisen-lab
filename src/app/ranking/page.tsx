import type { Metadata } from "next";
import { isps } from "@/lib/data";
import ISPCard from "@/components/ISPCard";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ゲーミング回線 総合ランキングTOP10【2026年4月最新】",
  description: "ping値・速度・料金・安定性の4軸でゲーミング光回線を総合評価。NURO光・GameWith光・hi-ho with gamesなど人気回線をランキング形式で比較。",
};

export default function RankingPage() {
  const sorted = [...isps].sort((a, b) => a.rank - b.rank);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "総合ランキング" }]} />
      <div className="mt-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          🏆 ゲーミング回線 総合ランキング <span className="text-[#7C3AED]">TOP10</span>
        </h1>
        <p className="text-[#94A3B8] mt-3 leading-relaxed">
          ping値・通信速度・月額料金・安定性（ジッター値）の4つの軸で、ゲーマー向け光回線を総合的に評価しランキング化しました。
          各スコアは実測データの目安値を基に算出しています。
        </p>
        <p className="text-xs text-[#64748B] mt-2">※実測値は環境により異なります。2026年4月時点の情報です。</p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#334155]">
              <th className="text-left py-3 px-4 text-[#64748B] font-semibold">順位</th>
              <th className="text-left py-3 px-4 text-[#64748B] font-semibold">回線名</th>
              <th className="text-center py-3 px-4 text-[#64748B] font-semibold">ping</th>
              <th className="text-center py-3 px-4 text-[#64748B] font-semibold">ジッター</th>
              <th className="text-center py-3 px-4 text-[#64748B] font-semibold">下り速度</th>
              <th className="text-center py-3 px-4 text-[#64748B] font-semibold">月額（戸建て）</th>
              <th className="text-center py-3 px-4 text-[#64748B] font-semibold">総合</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((isp) => (
              <tr key={isp.id} className="border-b border-[#1E293B] hover:bg-[#1E293B]/50">
                <td className="py-3 px-4 font-bold text-[#7C3AED]">{isp.rank}</td>
                <td className="py-3 px-4 font-bold text-white">{isp.name}</td>
                <td className="py-3 px-4 text-center text-[#10B981] font-bold">{isp.avgPing}ms</td>
                <td className="py-3 px-4 text-center text-[#10B981]">{isp.avgJitter}ms</td>
                <td className="py-3 px-4 text-center text-white">{isp.avgDownload}Mbps</td>
                <td className="py-3 px-4 text-center text-white">{isp.monthlyPriceHome}</td>
                <td className="py-3 px-4 text-center font-bold text-[#7C3AED]">{isp.overallScore}/100</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {sorted.map((isp, i) => (
          <ISPCard key={isp.id} isp={isp} rank={i + 1} />
        ))}
      </div>

      <div className="mt-12 bg-[#1E293B] border border-[#334155] rounded-xl p-6">
        <h2 className="text-lg font-bold text-white mb-3">📝 ランキングの評価基準</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#94A3B8]">
          <div>
            <h3 className="font-semibold text-[#7C3AED] mb-1">ping値スコア（25%）</h3>
            <p>ゲームサーバーへの応答速度。低いほど操作の遅延が少なく有利です。</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#7C3AED] mb-1">速度スコア（25%）</h3>
            <p>下り・上りの通信速度。ゲームのダウンロードや配信に影響します。</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#7C3AED] mb-1">料金スコア（25%）</h3>
            <p>月額料金のコストパフォーマンス。セット割やキャンペーンも考慮。</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#7C3AED] mb-1">安定性スコア（25%）</h3>
            <p>ジッター値と時間帯別の速度変動。安定した通信がゲームの鍵です。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
