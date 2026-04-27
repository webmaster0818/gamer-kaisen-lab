import type { Metadata } from "next";
import { isps } from "@/lib/data";
import ISPCard from "@/components/ISPCard";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FPSゲーマー向け回線ランキング【2026年4月最新】",
  description: "FPS・TPSプレイヤーに最適な光回線をランキング。ping値とジッター値の低さを最重要視した評価でおすすめ回線を紹介。",
};

export default function FPSRankingPage() {
  const sorted = [...isps].sort((a, b) => a.fpsRank - b.fpsRank);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "FPSランキング" }]} />

      <div className="mt-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          🎯 FPSゲーマー向け <span className="text-[#EF4444]">最強</span>回線ランキング
        </h1>
        <p className="text-[#94A3B8] mt-3 leading-relaxed">
          FPS/TPSゲームではping値とジッター値が勝敗を分けます。このランキングではping値の低さ・安定性を最重要視し、
          FPSプレイヤーの視点で光回線を評価しています。
        </p>
      </div>

      {/* FPS Requirements */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">🎮 FPSに必要な回線スペック</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-[#0F172A] rounded-lg p-4 text-center">
            <div className="text-xs text-[#64748B] mb-1">ping値</div>
            <div className="text-2xl font-black text-[#10B981]">15ms<span className="text-sm text-[#64748B]">以下</span></div>
            <div className="text-xs text-[#94A3B8] mt-1">10ms以下が理想</div>
          </div>
          <div className="bg-[#0F172A] rounded-lg p-4 text-center">
            <div className="text-xs text-[#64748B] mb-1">ジッター値</div>
            <div className="text-2xl font-black text-[#10B981]">3ms<span className="text-sm text-[#64748B]">以下</span></div>
            <div className="text-xs text-[#94A3B8] mt-1">安定性の指標</div>
          </div>
          <div className="bg-[#0F172A] rounded-lg p-4 text-center">
            <div className="text-xs text-[#64748B] mb-1">パケットロス</div>
            <div className="text-2xl font-black text-[#10B981]">0%<span className="text-sm text-[#64748B]">が理想</span></div>
            <div className="text-xs text-[#94A3B8] mt-1">1%以上で体感悪化</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {sorted.map((isp, i) => (
          <ISPCard key={isp.id} isp={isp} rank={i + 1} showFpsRank />
        ))}
      </div>

      <div className="mt-12 bg-[#1E293B] border border-[#334155] rounded-xl p-6">
        <h2 className="text-lg font-bold text-white mb-3">💡 FPSゲーマーへのアドバイス</h2>
        <ul className="space-y-2 text-sm text-[#94A3B8]">
          <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span>必ず有線LAN接続を使用する（Wi-Fiはping値が不安定になる）</li>
          <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span>LANケーブルはCAT6以上を使用する</li>
          <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span>ゲーム中は他のダウンロードを避ける</li>
          <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span>ルーターのQoS設定でゲーム通信を優先する</li>
          <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span>深夜帯（0時〜6時）がping値が最も安定する時間帯</li>
        </ul>
      </div>
    </div>
  );
}
