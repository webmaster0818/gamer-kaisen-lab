import type { Metadata } from "next";
import Link from "next/link";
import { isps } from "@/lib/data";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "マンション向け ゲーミング回線おすすめランキング",
  description: "マンション・集合住宅で使えるゲーミング光回線を比較。配線方式の違いやマンションタイプの注意点、おすすめ回線をランキング形式で紹介。",
};

export default function MansionPage() {
  const sorted = [...isps].sort((a, b) => a.rank - b.rank);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "住居タイプ別" }, { label: "マンション向け" }]} />

      <div className="mt-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          🏢 マンション向け <span className="text-[#7C3AED]">ゲーミング回線</span>
        </h1>
        <p className="text-[#94A3B8] mt-3 leading-relaxed">
          マンション・集合住宅でゲーミング回線を選ぶ際の注意点と、おすすめの光回線をランキング形式で紹介します。
        </p>
      </div>

      {/* Points */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">⚠️ マンションで回線を選ぶ際の注意点</h2>
        <div className="space-y-4 text-sm text-[#94A3B8]">
          <div className="flex items-start gap-3">
            <span className="text-[#7C3AED] font-bold shrink-0">1.</span>
            <div>
              <h3 className="text-white font-semibold">配線方式を確認する</h3>
              <p className="mt-1">マンションの配線方式には「光配線」「VDSL」「LAN配線」の3種類があります。VDSL方式は最大100Mbpsに制限されるため、ゲームには不向きです。物件の配線方式は管理会社に確認しましょう。</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#7C3AED] font-bold shrink-0">2.</span>
            <div>
              <h3 className="text-white font-semibold">NURO光は導入済み物件のみ</h3>
              <p className="mt-1">NURO光のマンションタイプ（NURO光 for マンション）は、すでに設備が導入されている物件でのみ利用可能です。未導入の場合は戸建てプランでの契約が必要になることがあります。</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#7C3AED] font-bold shrink-0">3.</span>
            <div>
              <h3 className="text-white font-semibold">共有回線の混雑に注意</h3>
              <p className="mt-1">マンションでは1本の光回線を複数世帯で共有するため、利用者が多いと速度が低下します。独自回線のNURO光・auひかりは比較的影響を受けにくい設計です。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wiring Types */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden mb-8">
        <div className="p-5 border-b border-[#334155]">
          <h2 className="text-lg font-bold text-white">🔌 マンションの配線方式と特徴</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#334155] bg-[#0F172A]/50">
                <th className="text-left py-3 px-4 text-[#64748B]">配線方式</th>
                <th className="text-center py-3 px-4 text-[#64748B]">最大速度</th>
                <th className="text-center py-3 px-4 text-[#64748B]">ゲーム適性</th>
                <th className="text-left py-3 px-4 text-[#64748B]">特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#0F172A]">
                <td className="py-3 px-4 font-bold text-white">光配線</td>
                <td className="py-3 px-4 text-center text-[#10B981] font-bold">1Gbps</td>
                <td className="py-3 px-4 text-center text-[#10B981]">◎ 最適</td>
                <td className="py-3 px-4 text-[#94A3B8]">各部屋まで光ファイバーで接続。最も高速。</td>
              </tr>
              <tr className="border-b border-[#0F172A]">
                <td className="py-3 px-4 font-bold text-white">LAN配線</td>
                <td className="py-3 px-4 text-center text-[#F59E0B] font-bold">100Mbps〜1Gbps</td>
                <td className="py-3 px-4 text-center text-[#F59E0B]">○ 良好</td>
                <td className="py-3 px-4 text-[#94A3B8]">LANケーブルで各部屋に配線。ケーブル規格による。</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-white">VDSL</td>
                <td className="py-3 px-4 text-center text-[#EF4444] font-bold">100Mbps</td>
                <td className="py-3 px-4 text-center text-[#EF4444]">△ 不向き</td>
                <td className="py-3 px-4 text-[#94A3B8]">電話線を利用。速度制限あり。古い物件に多い。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Ranking */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">🏆 マンション向けおすすめランキング</h2>
        <div className="space-y-4">
          {sorted.map((isp, i) => (
            <div key={isp.id} className="bg-[#1E293B] border border-[#334155] rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${
                  i === 0 ? "bg-gradient-to-br from-[#FFD700] to-[#FFA500]" : i === 1 ? "bg-gradient-to-br from-[#C0C0C0] to-[#A0A0A0]" : i === 2 ? "bg-gradient-to-br from-[#CD7F32] to-[#A0522D]" : "bg-[#334155]"
                }`}>{i + 1}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{isp.name}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2 text-sm">
                    <div><span className="text-[#64748B]">マンション月額: </span><span className="font-bold text-white">{isp.monthlyPriceMansion}</span></div>
                    <div><span className="text-[#64748B]">ping: </span><span className="font-bold text-[#10B981]">{isp.avgPing}ms</span></div>
                    <div><span className="text-[#64748B]">回線: </span><span className="text-[#94A3B8]">{isp.connectionType}</span></div>
                  </div>
                  <Link href={`/reviews/${isp.slug}/`} className="inline-block mt-3 text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">詳細レビュー →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/housing/detached/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">戸建て向けランキングを見る →</Link>
      </div>
    </div>
  );
}
