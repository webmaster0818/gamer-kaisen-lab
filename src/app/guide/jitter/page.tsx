import type { Metadata } from "next";
import Link from "next/link";
import { isps } from "@/lib/data";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ジッターとは？ping値との違いをわかりやすく解説",
  description: "ジッター値の仕組みとping値との違いを解説。ゲームでジッターが重要な理由と、各光回線のジッター値比較データも紹介。",
};

export default function JitterGuidePage() {
  const sorted = [...isps].sort((a, b) => a.avgJitter - b.avgJitter);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "解説コラム" }, { label: "ジッターとは？" }]} />

      <article className="mt-4">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-6">
          📊 ジッターとは？<span className="text-[#10B981]">ping値との違い</span>
        </h1>

        <div className="space-y-8">
          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">ジッターとは何か？</h2>
            <p className="text-[#94A3B8] leading-relaxed">
              ジッター（Jitter）とは、<strong className="text-white">ping値の揺れ幅</strong>のことです。
              ping値が「平均的な遅延」を表すのに対し、ジッターは「遅延のばらつき」を表します。
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="bg-[#0F172A] rounded-lg p-4">
                <h3 className="text-sm font-bold text-[#10B981] mb-2">ジッターが低い場合（2ms）</h3>
                <p className="text-xs text-[#94A3B8]">ping: 10ms → 12ms → 11ms → 10ms<br/>通信が安定。ゲームが滑らか。</p>
              </div>
              <div className="bg-[#0F172A] rounded-lg p-4">
                <h3 className="text-sm font-bold text-[#EF4444] mb-2">ジッターが高い場合（15ms）</h3>
                <p className="text-xs text-[#94A3B8]">ping: 10ms → 25ms → 8ms → 30ms<br/>通信が不安定。カクつき・ワープ発生。</p>
              </div>
            </div>
          </section>

          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">ping値とジッターの違い</h2>
            <table className="w-full text-sm mt-3">
              <thead>
                <tr className="border-b border-[#334155]">
                  <th className="text-left py-2 px-3 text-[#64748B]">項目</th>
                  <th className="text-center py-2 px-3 text-[#64748B]">ping値</th>
                  <th className="text-center py-2 px-3 text-[#64748B]">ジッター値</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#0F172A]">
                  <td className="py-2 px-3 text-white">意味</td>
                  <td className="py-2 px-3 text-center text-[#94A3B8]">平均遅延時間</td>
                  <td className="py-2 px-3 text-center text-[#94A3B8]">遅延の揺れ幅</td>
                </tr>
                <tr className="border-b border-[#0F172A]">
                  <td className="py-2 px-3 text-white">影響</td>
                  <td className="py-2 px-3 text-center text-[#94A3B8]">操作の反応速度</td>
                  <td className="py-2 px-3 text-center text-[#94A3B8]">通信の安定性</td>
                </tr>
                <tr className="border-b border-[#0F172A]">
                  <td className="py-2 px-3 text-white">FPS推奨値</td>
                  <td className="py-2 px-3 text-center text-[#10B981]">15ms以下</td>
                  <td className="py-2 px-3 text-center text-[#10B981]">3ms以下</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-white">症状（高い場合）</td>
                  <td className="py-2 px-3 text-center text-[#94A3B8]">操作が遅れる</td>
                  <td className="py-2 px-3 text-center text-[#94A3B8]">カクつき・ワープ</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">各回線のジッター値比較</h2>
            <div className="space-y-3">
              {sorted.map((isp) => (
                <div key={isp.id} className="flex items-center gap-4">
                  <Link href={`/reviews/${isp.slug}/`} className="w-32 text-sm font-bold text-white hover:text-[#7C3AED] transition-colors shrink-0">{isp.name}</Link>
                  <div className="flex-1 bg-[#0F172A] rounded-full h-4">
                    <div
                      className={`h-4 rounded-full ${isp.avgJitter <= 3 ? "bg-[#10B981]" : isp.avgJitter <= 4 ? "bg-[#F59E0B]" : "bg-[#EF4444]"}`}
                      style={{ width: `${(isp.avgJitter / 6) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-white w-14 text-right">{isp.avgJitter}ms</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">ジッターを下げる方法</h2>
            <ul className="space-y-2 text-[#94A3B8]">
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span>有線LAN接続にする（Wi-Fiはジッターが大きくなる）</li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span>他のデバイスの通信を制限する</li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span>QoS機能のあるルーターを使う</li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span>ゲーム専用帯域のある回線に乗り換える</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/guide/ping/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">← ping値とは？</Link>
          <Link href="/guide/speed-guide/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">必要速度早見表 →</Link>
        </div>
      </article>
    </div>
  );
}
