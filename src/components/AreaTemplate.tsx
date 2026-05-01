"use client";

import { useState } from "react";
import Link from "next/link";
import type { Area, ISP } from "@/lib/data";
import { isps, gameTitles } from "@/lib/data";
import Breadcrumb from "./Breadcrumb";

export default function AreaTemplate({ area }: { area: Area }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const availableISPs = area.localISPs
    .map((id) => isps.find((isp) => isp.id === id))
    .filter(Boolean) as ISP[];

  const sortedISPs = [...availableISPs].sort((a, b) => a.avgPing - b.avgPing);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "エリア別", href: "/" }, { label: area.name }]} />

      {/* Hero Section */}
      <div className="mt-4 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-full text-xs text-[#7C3AED] font-bold">
            {area.region}エリア
          </span>
          <span className="px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full text-xs text-[#10B981] font-bold">
            人口{area.population}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          {area.name}で<span className="text-[#10B981]">おすすめのゲーミング回線</span>
        </h1>
        <p className="text-[#94A3B8] mt-3 leading-relaxed">{area.description}</p>
      </div>

      {/* Area Stats */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">📍 {area.name}エリア情報</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-[#0F172A] rounded-lg p-4 text-center">
            <div className="text-xs text-[#64748B] mb-1">人口</div>
            <div className="text-lg font-black text-white">{area.population}</div>
          </div>
          <div className="bg-[#0F172A] rounded-lg p-4 text-center">
            <div className="text-xs text-[#64748B] mb-1">ゲーマー人口</div>
            <div className="text-lg font-black text-[#10B981]">{area.gamerPopulation}</div>
          </div>
          <div className="bg-[#0F172A] rounded-lg p-4 text-center">
            <div className="text-xs text-[#64748B] mb-1">利用可能ISP</div>
            <div className="text-lg font-black text-white">{availableISPs.length}社</div>
          </div>
          <div className="bg-[#0F172A] rounded-lg p-4 text-center">
            <div className="text-xs text-[#64748B] mb-1">地域限定ISP</div>
            <div className="text-lg font-black text-[#7C3AED]">{area.localOnlyISPs.length > 0 ? `${area.localOnlyISPs.length}社` : "なし"}</div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {area.characteristics.map((c) => (
            <span key={c} className="text-xs px-2 py-1 bg-[#334155] text-[#94A3B8] rounded">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* ISP Comparison Table */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden mb-8">
        <div className="p-5 border-b border-[#334155]">
          <h2 className="text-lg font-bold text-white">📊 {area.name}で使えるゲーミング回線比較</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#334155] bg-[#0F172A]/50">
                <th className="text-left py-3 px-4 text-[#64748B]">回線名</th>
                <th className="text-center py-3 px-4 text-[#64748B]">平均ping</th>
                <th className="text-center py-3 px-4 text-[#64748B]">ジッター</th>
                <th className="text-center py-3 px-4 text-[#64748B]">下り速度</th>
                <th className="text-center py-3 px-4 text-[#64748B]">月額(戸建)</th>
                <th className="text-center py-3 px-4 text-[#64748B]">月額(マンション)</th>
                <th className="text-center py-3 px-4 text-[#64748B]">回線種別</th>
              </tr>
            </thead>
            <tbody>
              {sortedISPs.map((isp, i) => (
                <tr key={isp.id} className="border-b border-[#0F172A] hover:bg-[#0F172A]/30 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {i === 0 && <span className="text-xs px-1.5 py-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold rounded">1位</span>}
                      {i === 1 && <span className="text-xs px-1.5 py-0.5 bg-gradient-to-r from-[#C0C0C0] to-[#A0A0A0] text-black font-bold rounded">2位</span>}
                      {i === 2 && <span className="text-xs px-1.5 py-0.5 bg-gradient-to-r from-[#CD7F32] to-[#A0522D] text-white font-bold rounded">3位</span>}
                      <Link href={`/reviews/${isp.slug}/`} className="font-bold text-white hover:text-[#7C3AED] transition-colors">
                        {isp.name}
                      </Link>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-[#10B981]">{isp.avgPing}ms</td>
                  <td className="py-3 px-4 text-center font-bold text-[#10B981]">{isp.avgJitter}ms</td>
                  <td className="py-3 px-4 text-center font-bold text-white">{isp.avgDownload}Mbps</td>
                  <td className="py-3 px-4 text-center text-[#94A3B8]">{isp.monthlyPriceHome}</td>
                  <td className="py-3 px-4 text-center text-[#94A3B8]">{isp.monthlyPriceMansion}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      isp.connectionType.includes("独自") ? "bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#7C3AED]" : "bg-[#334155] text-[#94A3B8]"
                    }`}>
                      {isp.connectionType.includes("独自") ? "独自回線" : "光コラボ"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Local-only ISPs */}
      {area.localOnlyISPs.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">🏠 {area.name}限定の回線</h2>
          <div className="space-y-4">
            {area.localOnlyISPs.map((localISP) => (
              <div key={localISP.name} className="bg-[#1E293B] border border-[#7C3AED]/30 rounded-xl p-5 neon-glow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-full text-xs text-[#7C3AED] font-bold">
                    地域限定
                  </span>
                  <h3 className="text-lg font-bold text-white">{localISP.name}</h3>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{localISP.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ping by Time of Day */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden mb-8">
        <div className="p-5 border-b border-[#334155]">
          <h2 className="text-lg font-bold text-white">🕐 時間帯別のping値・ジッター値</h2>
          <p className="text-xs text-[#64748B] mt-1">ゴールデンタイム（夜間）の安定性が回線選びの重要ポイント</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#334155] bg-[#0F172A]/50">
                <th className="text-left py-3 px-4 text-[#64748B]">回線名</th>
                <th className="text-center py-3 px-4 text-[#64748B]">昼間 ping</th>
                <th className="text-center py-3 px-4 text-[#64748B]">夕方 ping</th>
                <th className="text-center py-3 px-4 text-[#64748B]">夜間 ping</th>
                <th className="text-center py-3 px-4 text-[#64748B]">昼間 jitter</th>
                <th className="text-center py-3 px-4 text-[#64748B]">夕方 jitter</th>
                <th className="text-center py-3 px-4 text-[#64748B]">夜間 jitter</th>
              </tr>
            </thead>
            <tbody>
              {sortedISPs.map((isp) => (
                <tr key={isp.id} className="border-b border-[#0F172A]">
                  <td className="py-3 px-4 font-bold text-white">{isp.name}</td>
                  <td className="py-3 px-4 text-center text-[#10B981]">{isp.pingNoon}ms</td>
                  <td className="py-3 px-4 text-center">
                    <span className={isp.pingEvening <= 15 ? "text-[#10B981]" : isp.pingEvening <= 20 ? "text-[#F59E0B]" : "text-[#EF4444]"}>
                      {isp.pingEvening}ms
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-[#10B981]">{isp.pingNight}ms</td>
                  <td className="py-3 px-4 text-center text-[#10B981]">{isp.jitterNoon}ms</td>
                  <td className="py-3 px-4 text-center">
                    <span className={isp.jitterEvening <= 3 ? "text-[#10B981]" : isp.jitterEvening <= 5 ? "text-[#F59E0B]" : "text-[#EF4444]"}>
                      {isp.jitterEvening}ms
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-[#10B981]">{isp.jitterNight}ms</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Housing Type Recommendations */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">🏢 住居タイプ別おすすめ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏠</span>
              <h3 className="text-lg font-bold text-white">戸建て</h3>
            </div>
            <div className="space-y-3">
              {sortedISPs.slice(0, 3).map((isp, i) => (
                <div key={isp.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${i === 0 ? "text-[#FFD700]" : i === 1 ? "text-[#C0C0C0]" : "text-[#CD7F32]"}`}>
                      {i + 1}位
                    </span>
                    <span className="text-sm text-white">{isp.name}</span>
                  </div>
                  <span className="text-sm text-[#94A3B8]">{isp.monthlyPriceHome}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#64748B] mt-3">
              独自回線（NURO光・auひかり）が利用できる場合は最優先。専用線で安定した通信品質が得られます。
            </p>
          </div>
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏢</span>
              <h3 className="text-lg font-bold text-white">マンション</h3>
            </div>
            <div className="space-y-3">
              {sortedISPs.slice(0, 3).map((isp, i) => (
                <div key={isp.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold ${i === 0 ? "text-[#FFD700]" : i === 1 ? "text-[#C0C0C0]" : "text-[#CD7F32]"}`}>
                      {i + 1}位
                    </span>
                    <span className="text-sm text-white">{isp.name}</span>
                  </div>
                  <span className="text-sm text-[#94A3B8]">{isp.monthlyPriceMansion}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#64748B] mt-3">
              マンションでは光コラボ系（GameWith光・hi-ho）なら工事不要で乗り換え可能。NURO光は対応物件のみ。
            </p>
          </div>
        </div>
      </div>

      {/* Game Title Compatibility */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden mb-8">
        <div className="p-5 border-b border-[#334155]">
          <h2 className="text-lg font-bold text-white">🎮 {area.name}でのゲームタイトル別適性</h2>
          <p className="text-xs text-[#64748B] mt-1">各ゲームの推奨ping値と{area.name}で利用可能な回線の適合度</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#334155] bg-[#0F172A]/50">
                <th className="text-left py-3 px-4 text-[#64748B]">ゲーム</th>
                <th className="text-center py-3 px-4 text-[#64748B]">ジャンル</th>
                <th className="text-center py-3 px-4 text-[#64748B]">推奨ping</th>
                <th className="text-center py-3 px-4 text-[#64748B]">対応回線数</th>
                <th className="text-center py-3 px-4 text-[#64748B]">判定</th>
              </tr>
            </thead>
            <tbody>
              {gameTitles.map((game) => {
                const compatibleCount = sortedISPs.filter((isp) => isp.avgPing <= game.requiredPing).length;
                const allCompatible = compatibleCount === sortedISPs.length;
                return (
                  <tr key={game.id} className="border-b border-[#0F172A]">
                    <td className="py-3 px-4">
                      <Link href={`/games/${game.slug}/`} className="font-bold text-white hover:text-[#7C3AED] transition-colors">
                        {game.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center text-[#94A3B8]">{game.genre}</td>
                    <td className="py-3 px-4 text-center font-bold text-[#10B981]">{game.requiredPing}ms以下</td>
                    <td className="py-3 px-4 text-center text-white">{compatibleCount}/{sortedISPs.length}社</td>
                    <td className="py-3 px-4 text-center">
                      {allCompatible ? (
                        <span className="text-[#10B981] font-bold">全回線OK</span>
                      ) : compatibleCount > 0 ? (
                        <span className="text-[#F59E0B] font-bold">一部対応</span>
                      ) : (
                        <span className="text-[#EF4444] font-bold">要注意</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">❓ {area.name}のゲーミング回線FAQ</h2>
        <div className="space-y-2">
          {area.faq.map((item, i) => (
            <div key={i} className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[#0F172A]/30 transition-colors"
              >
                <span className="text-sm font-bold text-white pr-4">{item.question}</span>
                <span className={`text-[#7C3AED] shrink-0 text-lg transition-transform ${openFaq === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 border-t border-[#334155]">
                  <p className="text-sm text-[#94A3B8] mt-3 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#7C3AED]/20 to-[#10B981]/20 border border-[#7C3AED]/30 rounded-xl p-6 text-center mb-8">
        <h2 className="text-xl font-bold text-white mb-2">{area.name}で最適なゲーミング回線を見つけよう</h2>
        <p className="text-sm text-[#94A3B8] mb-4">ping値・速度・料金を総合比較して、あなたにぴったりの回線を選びましょう</p>
        <Link
          href="/ranking/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-lg transition-colors pulse-cta"
        >
          総合ランキングを見る
        </Link>
      </div>

      <div className="text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold transition-colors">
          &larr; トップページに戻る
        </Link>
      </div>
    </div>
  );
}
