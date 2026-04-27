import Link from "next/link";
import type { ISP } from "@/lib/data";
import { gameTitles } from "@/lib/data";
import Breadcrumb from "./Breadcrumb";

function ScoreCircle({ score, label }: { score: number; label: string }) {
  const color = score >= 90 ? "#10B981" : score >= 80 ? "#7C3AED" : score >= 70 ? "#F59E0B" : "#EF4444";
  return (
    <div className="text-center">
      <div className="relative w-16 h-16 mx-auto">
        <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="28" fill="none" stroke="#1E293B" strokeWidth="4" />
          <circle cx="32" cy="32" r="28" fill="none" stroke={color} strokeWidth="4" strokeDasharray={`${(score / 100) * 176} 176`} strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-lg font-black text-white">{score}</div>
      </div>
      <div className="text-xs text-[#64748B] mt-1">{label}</div>
    </div>
  );
}

export default function ReviewTemplate({ isp }: { isp: ISP }) {
  const compatibleGames = gameTitles.filter((g) => g.recommendations.includes(isp.id));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "レビュー", href: "/ranking/" }, { label: isp.name }]} />

      <div className="mt-4 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-full text-xs text-[#7C3AED] font-bold">
            総合{isp.rank}位
          </span>
          <span className="text-xs text-[#64748B]">2026年4月最新</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">{isp.name} <span className="text-[#7C3AED]">徹底レビュー</span></h1>
        <p className="text-[#94A3B8] mt-3 leading-relaxed">{isp.description}</p>
      </div>

      {/* Score Overview */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white">📊 スコア概要</h2>
          <div className="text-3xl font-black text-[#7C3AED]">{isp.overallScore}<span className="text-sm text-[#64748B]">/100</span></div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <ScoreCircle score={isp.pingScore} label="ping" />
          <ScoreCircle score={isp.speedScore} label="速度" />
          <ScoreCircle score={isp.priceScore} label="料金" />
          <ScoreCircle score={isp.stabilityScore} label="安定性" />
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-4 text-center">
          <div className="text-xs text-[#64748B] mb-1">平均ping値</div>
          <div className="text-2xl font-black text-[#10B981]">{isp.avgPing}<span className="text-xs text-[#64748B]">ms</span></div>
        </div>
        <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-4 text-center">
          <div className="text-xs text-[#64748B] mb-1">ジッター値</div>
          <div className="text-2xl font-black text-[#10B981]">{isp.avgJitter}<span className="text-xs text-[#64748B]">ms</span></div>
        </div>
        <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-4 text-center">
          <div className="text-xs text-[#64748B] mb-1">平均下り速度</div>
          <div className="text-2xl font-black text-white">{isp.avgDownload}<span className="text-xs text-[#64748B]">Mbps</span></div>
        </div>
        <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-4 text-center">
          <div className="text-xs text-[#64748B] mb-1">平均上り速度</div>
          <div className="text-2xl font-black text-white">{isp.avgUpload}<span className="text-xs text-[#64748B]">Mbps</span></div>
        </div>
      </div>

      {/* Time-based ping */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">⏱️ 時間帯別データ</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#334155]">
                <th className="text-left py-2 px-3 text-[#64748B]">指標</th>
                <th className="text-center py-2 px-3 text-[#64748B]">昼 12:00</th>
                <th className="text-center py-2 px-3 text-[#64748B]">夜 20:00</th>
                <th className="text-center py-2 px-3 text-[#64748B]">深夜 0:00</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#0F172A]">
                <td className="py-3 px-3 text-white font-semibold">ping値</td>
                <td className="py-3 px-3 text-center text-[#10B981] font-bold">{isp.pingNoon}ms</td>
                <td className="py-3 px-3 text-center text-[#F59E0B] font-bold">{isp.pingEvening}ms</td>
                <td className="py-3 px-3 text-center text-[#10B981] font-bold">{isp.pingNight}ms</td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-white font-semibold">ジッター値</td>
                <td className="py-3 px-3 text-center text-[#10B981] font-bold">{isp.jitterNoon}ms</td>
                <td className="py-3 px-3 text-center text-[#F59E0B] font-bold">{isp.jitterEvening}ms</td>
                <td className="py-3 px-3 text-center text-[#10B981] font-bold">{isp.jitterNight}ms</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#64748B] mt-3">※実測値は環境により異なります。目安としてご参照ください。</p>
      </div>

      {/* Service Details */}
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">📋 サービス詳細</h2>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-[#64748B]">最大速度</dt><dd className="text-white font-semibold">{isp.maxSpeed}</dd></div>
            <div className="flex justify-between"><dt className="text-[#64748B]">月額（戸建て）</dt><dd className="text-white font-semibold">{isp.monthlyPriceHome}</dd></div>
            <div className="flex justify-between"><dt className="text-[#64748B]">月額（マンション）</dt><dd className="text-white font-semibold">{isp.monthlyPriceMansion}</dd></div>
            <div className="flex justify-between"><dt className="text-[#64748B]">回線タイプ</dt><dd className="text-white font-semibold text-right text-xs">{isp.connectionType}</dd></div>
            <div className="flex justify-between"><dt className="text-[#64748B]">IPv6対応</dt><dd className="text-[#10B981] font-semibold">{isp.ipv6 ? "対応" : "非対応"}</dd></div>
            <div className="flex justify-between"><dt className="text-[#64748B]">契約期間</dt><dd className="text-white font-semibold">{isp.contractPeriod}</dd></div>
            <div className="flex justify-between"><dt className="text-[#64748B]">初期費用</dt><dd className="text-white font-semibold text-right text-xs">{isp.initialCost}</dd></div>
          </dl>
        </div>

        <div className="space-y-6">
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">✅ メリット</h2>
            <ul className="space-y-2">
              {isp.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                  <span className="text-[#10B981] shrink-0">◎</span>{pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">⚠️ デメリット</h2>
            <ul className="space-y-2">
              {isp.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                  <span className="text-[#F59E0B] shrink-0">△</span>{con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">🎯 特徴・機能</h2>
        <div className="flex flex-wrap gap-2">
          {isp.features.map((f) => (
            <span key={f} className="px-3 py-1.5 bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#9461F7] text-sm rounded-lg">{f}</span>
          ))}
        </div>
      </div>

      {/* Best For */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">👤 こんな人におすすめ</h2>
        <div className="flex flex-wrap gap-2">
          {isp.bestFor.map((bf) => (
            <span key={bf} className="px-3 py-1.5 bg-[#10B981]/10 border border-[#10B981]/30 text-[#34D399] text-sm rounded-lg">{bf}</span>
          ))}
        </div>
      </div>

      {/* Compatible Games */}
      {compatibleGames.length > 0 && (
        <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">🎮 おすすめゲームタイトル</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {compatibleGames.map((game) => (
              <Link key={game.id} href={`/games/${game.slug}/`} className="bg-[#0F172A] border border-[#334155] hover:border-[#7C3AED]/50 rounded-lg p-3 text-center transition-all">
                <div className="font-bold text-white text-sm">{game.name}</div>
                <div className="text-xs text-[#64748B] mt-1">推奨ping: {game.requiredPing}ms以下</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="text-center">
        <Link href="/ranking/" className="inline-flex items-center gap-2 text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold transition-colors">
          ← 総合ランキングに戻る
        </Link>
      </div>
    </div>
  );
}
