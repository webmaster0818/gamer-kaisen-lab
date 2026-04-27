import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "IPoE IPv6とは？ゲームに有利な理由をわかりやすく解説",
  description: "IPoE IPv6接続の仕組みとゲームに有利な理由を図解で解説。PPPoEとの違い、IPv6対応の光回線一覧、設定方法も紹介。",
};

export default function IPv6GuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "解説コラム" }, { label: "IPv6とは？" }]} />

      <article className="mt-4">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-6">
          �� IPoE IPv6とは？<span className="text-[#10B981]">ゲームに有利な理由</span>
        </h1>

        <div className="space-y-8">
          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">IPv6 IPoEとは？</h2>
            <p className="text-[#94A3B8] leading-relaxed">
              IPv6 IPoE（IP over Ethernet）は、従来のPPPoE方式と異なる<strong className="text-white">次世代のインターネット接続方式</strong>です。
              PPPoE方式では網終端装置（NTE）というボトルネックを通過する必要がありましたが、IPoE方式ではこれを迂回するため、
              特に利用者が多い夜間の混雑を回避できます。
            </p>
          </section>

          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">PPPoE vs IPoE の違い</h2>
            <table className="w-full text-sm mt-3">
              <thead>
                <tr className="border-b border-[#334155]">
                  <th className="text-left py-2 px-3 text-[#64748B]">項目</th>
                  <th className="text-center py-2 px-3 text-[#EF4444]">PPPoE（従来）</th>
                  <th className="text-center py-2 px-3 text-[#10B981]">IPoE IPv6（次世代）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#0F172A]">
                  <td className="py-2 px-3 text-white">混雑時の速度</td>
                  <td className="py-2 px-3 text-center text-[#EF4444]">大幅低下</td>
                  <td className="py-2 px-3 text-center text-[#10B981]">影響少ない</td>
                </tr>
                <tr className="border-b border-[#0F172A]">
                  <td className="py-2 px-3 text-white">夜間のping値</td>
                  <td className="py-2 px-3 text-center text-[#EF4444]">悪化しやすい</td>
                  <td className="py-2 px-3 text-center text-[#10B981]">安定</td>
                </tr>
                <tr className="border-b border-[#0F172A]">
                  <td className="py-2 px-3 text-white">認証方式</td>
                  <td className="py-2 px-3 text-center text-[#94A3B8]">ID/パスワード</td>
                  <td className="py-2 px-3 text-center text-[#94A3B8]">回線認証</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-white">網終端装置</td>
                  <td className="py-2 px-3 text-center text-[#EF4444]">通過必須（ボトルネック）</td>
                  <td className="py-2 px-3 text-center text-[#10B981]">迂回可能</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">ゲームに有利な3つの理由</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold text-xl shrink-0">1</span>
                <div>
                  <h3 className="text-white font-semibold">混雑回避で夜間も安定</h3>
                  <p className="text-[#94A3B8] text-sm mt-1">
                    多くのゲーマーがプレイする19〜23時のゴールデンタイムでも、IPoEは混雑の影響を受けにくく、ping値が安定します。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold text-xl shrink-0">2</span>
                <div>
                  <h3 className="text-white font-semibold">低遅延を実現</h3>
                  <p className="text-[#94A3B8] text-sm mt-1">
                    網終端装置を通過しないため、データ転送の経路が短くなり、ping値が改善される傾���があります。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold text-xl shrink-0">3</span>
                <div>
                  <h3 className="text-white font-semibold">IPv4 over IPv6で互換性も確保</h3>
                  <p className="text-[#94A3B8] text-sm mt-1">
                    IPv6未対応のゲームサーバーでも、「IPv4 over IPv6」技術により、IPoEの恩恵を受けながらIPv4通信が可能です。GameWith光やhi-ho with gamesはこの技術を採用しています。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">IPv6 IPoE対応の光回線</h2>
            <p className="text-[#94A3B8] mb-4">当サイトで紹介している5つの光回線は、すべてIPv6 IPoEに対応しています。</p>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li className="flex items-center gap-2"><span className="text-[#10B981]">✓</span><strong className="text-white">NURO光</strong> — IPv6デュアルスタック（独自回線）</li>
              <li className="flex items-center gap-2"><span className="text-[#10B981]">✓</span><strong className="text-white">GameWith光</strong> — IPv4 over IPv6（DS-Lite）</li>
              <li className="flex items-center gap-2"><span className="text-[#10B981]">✓</span><strong className="text-white">hi-ho with games</strong> — IPv4 over IPv6</li>
              <li className="flex items-center gap-2"><span className="text-[#10B981]">✓</span><strong className="text-white">auひかり</strong> — IPv6デュアルスタック（独自回線）</li>
              <li className="flex items-center gap-2"><span className="text-[#10B981]">✓</span><strong className="text-white">ドコモ光</strong> — v6プラス（プロバイダによる）</li>
            </ul>
          </section>

          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">注意点</h2>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li className="flex items-start gap-2"><span className="text-[#F59E0B]">⚠</span>IPv6 IPoEを利用するには対応ルーターが必要です</li>
              <li className="flex items-start gap-2"><span className="text-[#F59E0B]">⚠</span>一部のゲームやサービスはIPv6に対応していない場合があります</li>
              <li className="flex items-start gap-2"><span className="text-[#F59E0B]">⚠</span>NURO光・auひかりは独自回線のため、IPoEの設定は不要です</li>
              <li className="flex items-start gap-2"><span className="text-[#F59E0B]">⚠</span>ドコモ光はプロバイダによってIPv6の対応状況が異なります</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/guide/speed-guide/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">← 必要速度早見表</Link>
          <Link href="/ranking/" className="text-sm text-[#10B981] hover:text-[#34D399] font-semibold">おすすめ回線ランキング →</Link>
        </div>
      </article>
    </div>
  );
}
