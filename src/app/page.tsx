import Link from "next/link";
import { isps, gameTitles, faqData } from "@/lib/data";
import ISPCard from "@/components/ISPCard";

export default function HomePage() {
  const top5 = [...isps].sort((a, b) => a.rank - b.rank).slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-[#0F172A] to-[#10B981]/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#7C3AED]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-full text-sm text-[#7C3AED] mb-6">
              <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
              2026年4月最新データ
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#9461F7] to-[#10B981] bg-clip-text text-transparent">
                ゲーミング回線
              </span>
              <br />
              <span className="text-white">を科学する。</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              ping値・ジッター・時間帯別速度を徹底分析。<br className="hidden sm:block" />
              あなたのゲームに<span className="text-[#10B981] font-bold">最適な光回線</span>が見つかる。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ranking/"
                className="px-8 py-3.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-xl transition-all pulse-cta text-base"
              >
                🏆 総合ランキングを見る
              </Link>
              <Link
                href="/fps-ranking/"
                className="px-8 py-3.5 bg-[#1E293B] hover:bg-[#273548] text-white font-bold rounded-xl border border-[#334155] hover:border-[#7C3AED]/50 transition-all text-base"
              >
                🎯 FPSランキングを見る
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "比較回線数", value: "5+", unit: "サービス" },
              { label: "最低ping", value: "10", unit: "ms" },
              { label: "対応ゲーム数", value: "6", unit: "タイトル" },
              { label: "データ更新", value: "毎月", unit: "更新" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#1E293B]/80 backdrop-blur-sm border border-[#334155] rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#7C3AED]">
                  {stat.value}<span className="text-sm text-[#64748B] font-normal ml-1">{stat.unit}</span>
                </div>
                <div className="text-xs text-[#64748B] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP5 Ranking */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              🏆 ゲーミング回線 <span className="text-[#7C3AED]">TOP5</span>
            </h2>
            <p className="text-[#94A3B8] mt-2">ping値・速度・料金・安定性の4軸で総合評価</p>
          </div>
          <Link href="/ranking/" className="hidden sm:block text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold transition-colors">
            全ランキングを見る →
          </Link>
        </div>
        <div className="space-y-4">
          {top5.map((isp, i) => (
            <ISPCard key={isp.id} isp={isp} rank={i + 1} />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link href="/ranking/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">全ランキングを見る →</Link>
        </div>
      </section>

      {/* Game Titles */}
      <section className="bg-[#0B1120] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-3">
            🎮 ゲームタイトル別 <span className="text-[#10B981]">おすすめ回線</span>
          </h2>
          <p className="text-[#94A3B8] text-center mb-10">プレイするゲームに合った回線を選ぼう</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {gameTitles.map((game) => (
              <Link
                key={game.id}
                href={`/games/${game.slug}/`}
                className="bg-[#1E293B] border border-[#334155] hover:border-[#10B981]/50 rounded-xl p-5 text-center transition-all hover:shadow-lg hover:shadow-[#10B981]/5 group"
              >
                <div className="text-3xl mb-3">
                  {game.genre.includes("FPS") ? "🔫" : game.genre.includes("TPS") ? "🎯" : game.genre === "MMORPG" ? "⚔️" : "🎮"}
                </div>
                <div className="font-bold text-white text-sm group-hover:text-[#10B981] transition-colors">{game.name}</div>
                <div className="text-xs text-[#64748B] mt-1">{game.genre}</div>
                <div className="mt-2 text-xs">
                  <span className={`${game.pingImportance === "critical" ? "text-[#EF4444]" : game.pingImportance === "high" ? "text-[#F59E0B]" : "text-[#10B981]"}`}>
                    ping {game.requiredPing}ms以下
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Housing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
          🏠 住居タイプ別 <span className="text-[#7C3AED]">おすすめ</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link href="/housing/mansion/" className="bg-[#1E293B] border border-[#334155] hover:border-[#7C3AED]/50 rounded-xl p-8 text-center transition-all group">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#7C3AED] transition-colors">マンション</h3>
            <p className="text-sm text-[#94A3B8] mt-2">集合住宅で使えるおすすめ回線</p>
          </Link>
          <Link href="/housing/detached/" className="bg-[#1E293B] border border-[#334155] hover:border-[#7C3AED]/50 rounded-xl p-8 text-center transition-all group">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#7C3AED] transition-colors">戸建て</h3>
            <p className="text-sm text-[#94A3B8] mt-2">一戸建て向けの最速回線</p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0B1120] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
            ❓ よくある質問
          </h2>
          <div className="space-y-3">
            {faqData.slice(0, 5).map((faq, i) => (
              <details key={i} className="bg-[#1E293B] border border-[#334155] rounded-xl group">
                <summary className="cursor-pointer p-5 text-white font-semibold text-sm sm:text-base flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-[#64748B] group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-[#94A3B8] leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/faq/" className="text-sm text-[#7C3AED] hover:text-[#9461F7] font-semibold">全15問のFAQを見る →</Link>
          </div>
        </div>
      </section>

      {/* Guide Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-10">
          📚 回線選びの <span className="text-[#10B981]">基礎知識</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "ping値とは？", desc: "ゲームへの影響を解説", href: "/guide/ping/", icon: "📡" },
            { title: "ジッターとは？", desc: "ping値との違いを解説", href: "/guide/jitter/", icon: "📊" },
            { title: "必要速度早見表", desc: "ゲーム別の推奨スペック", href: "/guide/speed-guide/", icon: "⚡" },
            { title: "IPv6とは？", desc: "ゲームに有利な理由", href: "/guide/ipv6/", icon: "🌐" },
          ].map((g) => (
            <Link key={g.href} href={g.href} className="bg-[#1E293B] border border-[#334155] hover:border-[#10B981]/50 rounded-xl p-5 transition-all group">
              <div className="text-2xl mb-2">{g.icon}</div>
              <h3 className="font-bold text-white group-hover:text-[#10B981] transition-colors">{g.title}</h3>
              <p className="text-xs text-[#64748B] mt-1">{g.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
