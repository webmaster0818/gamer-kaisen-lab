import Link from "next/link";
import type { ISP } from "@/lib/data";

function ScoreBar({ score, color = "primary" }: { score: number; color?: "primary" | "accent" }) {
  const bg = color === "accent" ? "bg-[#10B981]" : "bg-[#7C3AED]";
  return (
    <div className="w-full bg-[#0F172A] rounded-full h-2">
      <div className={`${bg} h-2 rounded-full transition-all`} style={{ width: `${score}%` }} />
    </div>
  );
}

function PingBadge({ ping }: { ping: number }) {
  let color = "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30";
  if (ping > 20) color = "text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/30";
  if (ping > 30) color = "text-[#EF4444] bg-[#EF4444]/10 border-[#EF4444]/30";
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-bold border rounded-full ${color}`}>
      {ping}ms
    </span>
  );
}

export default function ISPCard({ isp, rank, showFpsRank }: { isp: ISP; rank: number; showFpsRank?: boolean }) {
  const displayRank = showFpsRank ? isp.fpsRank : rank;
  const rankColors = ["from-[#FFD700] to-[#FFA500]", "from-[#C0C0C0] to-[#A0A0A0]", "from-[#CD7F32] to-[#A0522D]"];
  const rankBg = displayRank <= 3 ? `bg-gradient-to-br ${rankColors[displayRank - 1]}` : "bg-[#334155]";

  return (
    <div className="bg-[#1E293B] rounded-xl border border-[#334155] hover:border-[#7C3AED]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/5 overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className={`shrink-0 w-10 h-10 ${rankBg} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
            {displayRank}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-bold text-white">{isp.name}</h3>
              <PingBadge ping={isp.avgPing} />
            </div>
            <p className="text-sm text-[#94A3B8] mt-1">{isp.tagline}</p>
          </div>
          <div className="shrink-0 text-right hidden sm:block">
            <div className="text-2xl font-bold text-[#7C3AED]">{isp.overallScore}<span className="text-sm text-[#64748B]">/100</span></div>
            <div className="text-xs text-[#64748B]">総合スコア</div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5">
          <div>
            <div className="text-xs text-[#64748B] mb-1">平均ping</div>
            <div className="text-lg font-bold text-[#10B981]">{isp.avgPing}<span className="text-xs text-[#64748B]">ms</span></div>
          </div>
          <div>
            <div className="text-xs text-[#64748B] mb-1">ジッター</div>
            <div className="text-lg font-bold text-[#10B981]">{isp.avgJitter}<span className="text-xs text-[#64748B]">ms</span></div>
          </div>
          <div>
            <div className="text-xs text-[#64748B] mb-1">下り速度</div>
            <div className="text-lg font-bold text-white">{isp.avgDownload}<span className="text-xs text-[#64748B]">Mbps</span></div>
          </div>
          <div>
            <div className="text-xs text-[#64748B] mb-1">月額（戸建て）</div>
            <div className="text-lg font-bold text-white">{isp.monthlyPriceHome}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          <div>
            <div className="flex justify-between text-xs mb-1"><span className="text-[#64748B]">ping</span><span className="text-[#94A3B8]">{isp.pingScore}</span></div>
            <ScoreBar score={isp.pingScore} color="accent" />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1"><span className="text-[#64748B]">速度</span><span className="text-[#94A3B8]">{isp.speedScore}</span></div>
            <ScoreBar score={isp.speedScore} />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1"><span className="text-[#64748B]">料金</span><span className="text-[#94A3B8]">{isp.priceScore}</span></div>
            <ScoreBar score={isp.priceScore} />
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1"><span className="text-[#64748B]">安定性</span><span className="text-[#94A3B8]">{isp.stabilityScore}</span></div>
            <ScoreBar score={isp.stabilityScore} color="accent" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {isp.features.slice(0, 3).map((f) => (
            <span key={f} className="text-xs px-2 py-1 bg-[#0F172A] text-[#94A3B8] rounded-md border border-[#334155]">{f}</span>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <Link
            href={`/reviews/${isp.slug}/`}
            className="flex-1 text-center px-4 py-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold rounded-lg transition-colors"
          >
            詳細レビューを見る
          </Link>
        </div>
      </div>
    </div>
  );
}
