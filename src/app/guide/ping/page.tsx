import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ping値とは？ゲームへの影響をわかりやすく解説",
  description: "ping値（レイテンシー）の仕組みとオンラインゲームへの影響を図解で解説。FPS・MMORPG・格闘ゲームそれぞれの推奨ping値も紹介。",
};

export default function PingGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "解説コラム" }, { label: "ping値とは？" }]} />

      <article className="mt-4">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-6">
          📡 ping値とは？<span className="text-[#10B981]">ゲームへの影響</span>を解説
        </h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">ping値とは何か？</h2>
            <p className="text-[#94A3B8] leading-relaxed">
              ping値（ピン値）とは、あなたのPCやゲーム機からゲームサーバーまでデータが往復するのにかかる時間のことです。
              単位はms（ミリ秒）で表され、<strong className="text-white">値が小さいほど通信が速い</strong>ことを意味します。
            </p>
            <p className="text-[#94A3B8] leading-relaxed mt-3">
              例えば、ping値が10msの場合、あなたの操作がサーバーに届いて結果が返ってくるまでわずか0.01秒。
              一方、ping値が100msだと0.1秒の遅延があり、FPSでは致命的な差になります。
            </p>
          </section>

          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">ゲームジャンル別の推奨ping値</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm mt-3">
                <thead>
                  <tr className="border-b border-[#334155]">
                    <th className="text-left py-2 px-3 text-[#64748B]">ジャンル</th>
                    <th className="text-center py-2 px-3 text-[#64748B]">理想</th>
                    <th className="text-center py-2 px-3 text-[#64748B]">快適</th>
                    <th className="text-center py-2 px-3 text-[#64748B]">限界</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#0F172A]">
                    <td className="py-2 px-3 text-white font-semibold">FPS / TPS</td>
                    <td className="py-2 px-3 text-center text-[#10B981] font-bold">10ms以下</td>
                    <td className="py-2 px-3 text-center text-[#F59E0B]">20ms以下</td>
                    <td className="py-2 px-3 text-center text-[#EF4444]">30ms</td>
                  </tr>
                  <tr className="border-b border-[#0F172A]">
                    <td className="py-2 px-3 text-white font-semibold">格闘ゲーム</td>
                    <td className="py-2 px-3 text-center text-[#10B981] font-bold">5ms以下</td>
                    <td className="py-2 px-3 text-center text-[#F59E0B]">15ms以下</td>
                    <td className="py-2 px-3 text-center text-[#EF4444]">30ms</td>
                  </tr>
                  <tr className="border-b border-[#0F172A]">
                    <td className="py-2 px-3 text-white font-semibold">MMORPG</td>
                    <td className="py-2 px-3 text-center text-[#10B981] font-bold">30ms以下</td>
                    <td className="py-2 px-3 text-center text-[#F59E0B]">50ms以下</td>
                    <td className="py-2 px-3 text-center text-[#EF4444]">100ms</td>
                  </tr>
                  <tr className="border-b border-[#0F172A]">
                    <td className="py-2 px-3 text-white font-semibold">バトロワ</td>
                    <td className="py-2 px-3 text-center text-[#10B981] font-bold">15ms以下</td>
                    <td className="py-2 px-3 text-center text-[#F59E0B]">25ms以下</td>
                    <td className="py-2 px-3 text-center text-[#EF4444]">50ms</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-white font-semibold">カジュアルゲーム</td>
                    <td className="py-2 px-3 text-center text-[#10B981] font-bold">50ms以下</td>
                    <td className="py-2 px-3 text-center text-[#F59E0B]">100ms以下</td>
                    <td className="py-2 px-3 text-center text-[#EF4444]">200ms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">ping値に影響する要因</h2>
            <ul className="space-y-2 text-[#94A3B8]">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">●</span><strong className="text-white">回線の種類:</strong> 独自回線（NURO光・auひかり）はフレッツ光より低pingの傾向</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">●</span><strong className="text-white">接続方式:</strong> IPv6 IPoEはPPPoEより混雑を回避しやすい</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">●</span><strong className="text-white">時間帯:</strong> ゴールデンタイム（19-23時）はping値が悪化しやすい</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">●</span><strong className="text-white">接続方法:</strong> Wi-Fiより有線LANの方がping値が安定</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">●</span><strong className="text-white">サーバーの距離:</strong> 物理的に近いサーバーほどping値が低い</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">●</span><strong className="text-white">ルーターの性能:</strong> 古いルーターはping値を悪化させることがある</li>
            </ul>
          </section>

          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">ping値を改善する方法</h2>
            <ol className="space-y-2 text-[#94A3B8] list-decimal list-inside">
              <li><strong className="text-white">有線LAN接続にする</strong> — Wi-Fiからの切り替えだけでping値が半分以下になることも</li>
              <li><strong className="text-white">ルーターを最新のものに変更</strong> — Wi-Fi 6対応の高性能ルーターがおすすめ</li>
              <li><strong className="text-white">IPv6 IPoE接続を有効にする</strong> — プロバイダの設定を確認</li>
              <li><strong className="text-white">回線を乗り換える</strong> — 独自回線やゲーム特化回線へ</li>
              <li><strong className="text-white">LANケーブルをCAT6以上にする</strong> — 古いケーブルは速度のボトルネック</li>
            </ol>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/guide/jitter/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">ジッターとは？ →</Link>
          <Link href="/guide/speed-guide/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">必要速度早見表 →</Link>
          <Link href="/ranking/" className="text-sm text-[#10B981] hover:text-[#34D399] font-semibold">おすすめ回線ランキング →</Link>
        </div>
      </article>
    </div>
  );
}
