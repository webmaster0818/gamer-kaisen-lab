import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-[#334155] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎮</span>
              <span className="text-lg font-bold bg-gradient-to-r from-[#7C3AED] to-[#10B981] bg-clip-text text-transparent">
                ゲーマー回線ラボ
              </span>
            </Link>
            <p className="text-sm text-[#64748B] leading-relaxed">
              ゲーマー・eスポーツプレイヤーのための光回線比較サイト。ping値・ジッター・速度を徹底分析し、最適な回線選びをサポートします。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#7C3AED] mb-4">ランキング</h3>
            <ul className="space-y-2">
              <li><Link href="/ranking/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">総合ランキング</Link></li>
              <li><Link href="/fps-ranking/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">FPSランキング</Link></li>
              <li><Link href="/ping-data/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">ping実測データ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#7C3AED] mb-4">ゲーム別おすすめ</h3>
            <ul className="space-y-2">
              <li><Link href="/games/apex/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">Apex Legends</Link></li>
              <li><Link href="/games/valorant/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">VALORANT</Link></li>
              <li><Link href="/games/ff14/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">FF14</Link></li>
              <li><Link href="/games/fortnite/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">フォートナイト</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#7C3AED] mb-4">サイト情報</h3>
            <ul className="space-y-2">
              <li><Link href="/about/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">運営者情報</Link></li>
              <li><Link href="/privacy-policy/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/terms/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">利用規約</Link></li>
              <li><Link href="/faq/" className="text-sm text-[#64748B] hover:text-[#E2E8F0] transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#1E293B]">
          <p className="text-xs text-[#64748B] text-center leading-relaxed">
            ※当サイトに掲載されているping値・速度データは目安値であり、実際の通信環境・地域・時間帯によって異なります。<br />
            ※料金は税込表示です。キャンペーン内容は変更される場合があります。最新情報は各公式サイトでご確認ください。<br />
            ※当サイトはアフィリエイトプログラムに参加しています。
          </p>
          <p className="text-xs text-[#475569] text-center mt-4">
            &copy; 2026 ゲーマー回線ラボ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
