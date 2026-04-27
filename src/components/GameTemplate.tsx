import Link from "next/link";
import type { GameTitle, ISP } from "@/lib/data";
import { isps } from "@/lib/data";
import Breadcrumb from "./Breadcrumb";

export default function GameTemplate({ game }: { game: GameTitle }) {
  const recommendedISPs = game.recommendations
    .map((id) => isps.find((isp) => isp.id === id))
    .filter(Boolean) as ISP[];

  const allISPs = [...isps].sort((a, b) => a.avgPing - b.avgPing);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "ゲーム別", href: "/" }, { label: game.name }]} />

      <div className="mt-4 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full text-xs text-[#10B981] font-bold">
            {game.genre}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            game.pingImportance === "critical" ? "bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444]" :
            game.pingImportance === "high" ? "bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B]" :
            "bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981]"
          }`}>
            ping重要度: {game.pingImportance === "critical" ? "最重要" : game.pingImportance === "high" ? "重要" : "普通"}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          {game.name} <span className="text-[#10B981]">おすすめ回線</span>
        </h1>
        <p className="text-[#94A3B8] mt-3 leading-relaxed">{game.description}</p>
      </div>

      {/* Requirements */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">📋 {game.name}の推奨回線スペック</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#0F172A] rounded-lg p-4 text-center">
            <div className="text-xs text-[#64748B] mb-1">推奨ping値</div>
            <div className="text-2xl font-black text-[#10B981]">{game.requiredPing}<span className="text-xs text-[#64748B]">ms以下</span></div>
          </div>
          <div className="bg-[#0F172A] rounded-lg p-4 text-center">
            <div className="text-xs text-[#64748B] mb-1">推奨ジッター値</div>
            <div className="text-2xl font-black text-[#10B981]">{game.requiredJitter}<span className="text-xs text-[#64748B]">ms以下</span></div>
          </div>
          <div className="bg-[#0F172A] rounded-lg p-4 text-center">
            <div className="text-xs text-[#64748B] mb-1">推奨下り速度</div>
            <div className="text-2xl font-black text-white">{game.requiredDownload}<span className="text-xs text-[#64748B]">Mbps</span></div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs text-[#64748B]">対応プラットフォーム:</span>
          {game.platform.map((p) => (
            <span key={p} className="text-xs px-2 py-0.5 bg-[#334155] text-[#94A3B8] rounded">{p}</span>
          ))}
        </div>
      </div>

      {/* Recommended ISPs */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">🏆 {game.name}おすすめ回線TOP3</h2>
        <div className="space-y-4">
          {recommendedISPs.map((isp, i) => (
            <div key={isp.id} className="bg-[#1E293B] border border-[#334155] rounded-xl p-5 hover:border-[#7C3AED]/50 transition-all">
              <div className="flex items-start gap-4">
                <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg ${
                  i === 0 ? "bg-gradient-to-br from-[#FFD700] to-[#FFA500]" :
                  i === 1 ? "bg-gradient-to-br from-[#C0C0C0] to-[#A0A0A0]" :
                  "bg-gradient-to-br from-[#CD7F32] to-[#A0522D]"
                }`}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{isp.name}</h3>
                  <p className="text-sm text-[#94A3B8] mt-1">{isp.tagline}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                    <div>
                      <div className="text-xs text-[#64748B]">ping値</div>
                      <div className="font-bold text-[#10B981]">{isp.avgPing}ms</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#64748B]">ジッター</div>
                      <div className="font-bold text-[#10B981]">{isp.avgJitter}ms</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#64748B]">下り速度</div>
                      <div className="font-bold text-white">{isp.avgDownload}Mbps</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#64748B]">月額</div>
                      <div className="font-bold text-white text-sm">{isp.monthlyPriceHome}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    {isp.avgPing <= game.requiredPing ? (
                      <span className="text-xs px-2 py-0.5 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] rounded-full">✓ ping基準クリア</span>
                    ) : (
                      <span className="text-xs px-2 py-0.5 bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] rounded-full">△ ping値やや高め</span>
                    )}
                    {isp.avgJitter <= game.requiredJitter ? (
                      <span className="text-xs px-2 py-0.5 bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] rounded-full">✓ ジッター基準クリア</span>
                    ) : (
                      <span className="text-xs px-2 py-0.5 bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] rounded-full">△ ジッターやや高め</span>
                    )}
                  </div>
                  <div className="mt-3">
                    <Link href={`/reviews/${isp.slug}/`} className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold transition-colors">
                      詳細レビューを見る →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All ISPs comparison */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden mb-8">
        <div className="p-5 border-b border-[#334155]">
          <h2 className="text-lg font-bold text-white">📊 全回線の{game.name}適性比較</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#334155] bg-[#0F172A]/50">
                <th className="text-left py-3 px-4 text-[#64748B]">回線名</th>
                <th className="text-center py-3 px-4 text-[#64748B]">ping値</th>
                <th className="text-center py-3 px-4 text-[#64748B]">ジッター</th>
                <th className="text-center py-3 px-4 text-[#64748B]">ping判定</th>
                <th className="text-center py-3 px-4 text-[#64748B]">ジッター判定</th>
                <th className="text-center py-3 px-4 text-[#64748B]">総合判定</th>
              </tr>
            </thead>
            <tbody>
              {allISPs.map((isp) => {
                const pingOk = isp.avgPing <= game.requiredPing;
                const jitterOk = isp.avgJitter <= game.requiredJitter;
                const overall = pingOk && jitterOk;
                return (
                  <tr key={isp.id} className="border-b border-[#0F172A]">
                    <td className="py-3 px-4 font-bold text-white">{isp.name}</td>
                    <td className="py-3 px-4 text-center font-bold text-[#10B981]">{isp.avgPing}ms</td>
                    <td className="py-3 px-4 text-center font-bold text-[#10B981]">{isp.avgJitter}ms</td>
                    <td className="py-3 px-4 text-center">{pingOk ? <span className="text-[#10B981]">◎</span> : <span className="text-[#F59E0B]">△</span>}</td>
                    <td className="py-3 px-4 text-center">{jitterOk ? <span className="text-[#10B981]">◎</span> : <span className="text-[#F59E0B]">△</span>}</td>
                    <td className="py-3 px-4 text-center font-bold">{overall ? <span className="text-[#10B981]">おすすめ</span> : <span className="text-[#94A3B8]">条件付き</span>}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center">
        <Link href="/ranking/" className="inline-flex items-center gap-2 text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold transition-colors">
          ← 総合ランキングに戻る
        </Link>
      </div>
    </div>
  );
}
