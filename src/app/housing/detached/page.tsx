import type { Metadata } from "next";
import Link from "next/link";
import { isps } from "@/lib/data";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "戸建て向け ゲーミング回線おすすめランキング",
  description: "戸建て住宅で使えるゲーミング光回線を比較。独自回線のメリットや回線工事の注意点、おすすめ回線をランキング形式で紹介。",
};

export default function DetachedPage() {
  const sorted = [...isps].sort((a, b) => a.rank - b.rank);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "住居タイプ別" }, { label: "戸建て向け" }]} />

      <div className="mt-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          🏠 戸建て向け <span className="text-[#7C3AED]">ゲーミング回線</span>
        </h1>
        <p className="text-[#94A3B8] mt-3 leading-relaxed">
          戸建て住宅なら回線の選択肢が広がります。独自回線・ゲーム特化回線・10Gbpsプランなど、最速の環境を構築できるおすすめ回線を紹介します。
        </p>
      </div>

      {/* Advantages */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">✅ 戸建てのメリット</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#94A3B8]">
          <div className="flex items-start gap-2"><span className="text-[#10B981]">◎</span>回線を占有できるため速度が安定</div>
          <div className="flex items-start gap-2"><span className="text-[#10B981]">◎</span>NURO光・auひかりなど全回線が選択可能</div>
          <div className="flex items-start gap-2"><span className="text-[#10B981]">◎</span>10Gbps・5Gbpsプランも利用可能</div>
          <div className="flex items-start gap-2"><span className="text-[#10B981]">◎</span>配線方式の制約がない</div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">💡 戸建てで回線を選ぶポイント</h2>
        <div className="space-y-3 text-sm text-[#94A3B8]">
          <div className="flex items-start gap-3">
            <span className="text-[#7C3AED] font-bold shrink-0">1.</span>
            <div>
              <h3 className="text-white font-semibold">独自回線を優先的に検討</h3>
              <p>NURO光・auひかりは独自回線のため、フレッツ光の混雑の影響を受けません。提供エリア内なら第一候補にしましょう。</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#7C3AED] font-bold shrink-0">2.</span>
            <div>
              <h3 className="text-white font-semibold">エリア確認を忘れずに</h3>
              <p>NURO光とauひかりは提供エリアが限定的です。申し込み前に必ずエリア検索で確認しましょう。</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#7C3AED] font-bold shrink-0">3.</span>
            <div>
              <h3 className="text-white font-semibold">LANケーブルの配線も重要</h3>
              <p>戸建ては部屋が広い分、ルーターからの距離が問題に。ゲームをする部屋までは有線LAN（CAT6以上）で接続しましょう。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ranking */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">🏆 戸建て向けおすすめランキング</h2>
        <div className="space-y-4">
          {sorted.map((isp, i) => (
            <div key={isp.id} className="bg-[#1E293B] border border-[#334155] rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${
                  i === 0 ? "bg-gradient-to-br from-[#FFD700] to-[#FFA500]" : i === 1 ? "bg-gradient-to-br from-[#C0C0C0] to-[#A0A0A0]" : i === 2 ? "bg-gradient-to-br from-[#CD7F32] to-[#A0522D]" : "bg-[#334155]"
                }`}>{i + 1}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{isp.name}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2 text-sm">
                    <div><span className="text-[#64748B]">戸建て月額: </span><span className="font-bold text-white">{isp.monthlyPriceHome}</span></div>
                    <div><span className="text-[#64748B]">ping: </span><span className="font-bold text-[#10B981]">{isp.avgPing}ms</span></div>
                    <div><span className="text-[#64748B]">最大速度: </span><span className="text-white font-bold">{isp.maxSpeed}</span></div>
                    <div><span className="text-[#64748B]">回線: </span><span className="text-[#94A3B8] text-xs">{isp.connectionType}</span></div>
                  </div>
                  <Link href={`/reviews/${isp.slug}/`} className="inline-block mt-3 text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">詳細レビュー →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/housing/mansion/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">マンション向けランキングを見る →</Link>
      </div>
    </div>
  );
}
