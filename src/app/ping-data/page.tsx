import type { Metadata } from "next";
import { isps } from "@/lib/data";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ping実測データ一覧 | 時間帯別グラフ風テーブル",
  description: "ゲーミング光回線5社のping値・ジッター値を時間帯別（昼12時/夜20時/深夜0時）に比較。実測データの目安値を一覧で掲載。",
};

function PingBar({ value, max = 30 }: { value: number; max?: number }) {
  const pct = Math.min((value / max) * 100, 100);
  let color = "bg-[#10B981]";
  if (value > 15) color = "bg-[#F59E0B]";
  if (value > 25) color = "bg-[#EF4444]";
  return (
    <div className="flex items-center gap-2">
      <div className="w-20 bg-[#0F172A] rounded-full h-3">
        <div className={`${color} h-3 rounded-full`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm font-bold text-white w-12 text-right">{value}ms</span>
    </div>
  );
}

function JitterBar({ value, max = 8 }: { value: number; max?: number }) {
  const pct = Math.min((value / max) * 100, 100);
  let color = "bg-[#10B981]";
  if (value > 3) color = "bg-[#F59E0B]";
  if (value > 5) color = "bg-[#EF4444]";
  return (
    <div className="flex items-center gap-2">
      <div className="w-20 bg-[#0F172A] rounded-full h-3">
        <div className={`${color} h-3 rounded-full`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm font-bold text-white w-12 text-right">{value}ms</span>
    </div>
  );
}

export default function PingDataPage() {
  const sorted = [...isps].sort((a, b) => a.avgPing - b.avgPing);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "ping実測データ" }]} />

      <div className="mt-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          📡 ping実測データ <span className="text-[#10B981]">一覧</span>
        </h1>
        <p className="text-[#94A3B8] mt-3">各回線のping値・ジッター値を時間帯別に比較。ゲームに重要な遅延と安定性を可視化しました。</p>
        <p className="text-xs text-[#64748B] mt-2">※実測値は環境により異なります。目安としてご参照ください。</p>
      </div>

      {/* Ping Legend */}
      <div className="flex flex-wrap gap-4 mb-6 text-xs">
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-[#10B981]" /><span className="text-[#94A3B8]">良好（15ms以下）</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-[#F59E0B]" /><span className="text-[#94A3B8]">普通（16-25ms）</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-[#EF4444]" /><span className="text-[#94A3B8]">やや遅い（26ms以上）</span></div>
      </div>

      {/* Ping Table */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden mb-10">
        <div className="p-5 border-b border-[#334155]">
          <h2 className="text-lg font-bold text-white">⏱️ 時間帯別 ping値（ms）</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#334155] bg-[#0F172A]/50">
                <th className="text-left py-3 px-5 text-[#64748B]">回線名</th>
                <th className="text-center py-3 px-5 text-[#64748B]">平均</th>
                <th className="py-3 px-5 text-[#64748B]">昼 12:00</th>
                <th className="py-3 px-5 text-[#64748B]">夜 20:00</th>
                <th className="py-3 px-5 text-[#64748B]">深夜 0:00</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((isp) => (
                <tr key={isp.id} className="border-b border-[#0F172A] hover:bg-[#273548]/50">
                  <td className="py-4 px-5">
                    <Link href={`/reviews/${isp.slug}/`} className="font-bold text-white hover:text-[#7C3AED] transition-colors">{isp.name}</Link>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className="text-lg font-black text-[#10B981]">{isp.avgPing}<span className="text-xs text-[#64748B]">ms</span></span>
                  </td>
                  <td className="py-4 px-5"><PingBar value={isp.pingNoon} /></td>
                  <td className="py-4 px-5"><PingBar value={isp.pingEvening} /></td>
                  <td className="py-4 px-5"><PingBar value={isp.pingNight} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Jitter Table */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden mb-10">
        <div className="p-5 border-b border-[#334155]">
          <h2 className="text-lg font-bold text-white">📊 時間帯別 ジッター値（ms）</h2>
          <p className="text-xs text-[#64748B] mt-1">ジッター値が低いほど通信が安定しています</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#334155] bg-[#0F172A]/50">
                <th className="text-left py-3 px-5 text-[#64748B]">回線名</th>
                <th className="text-center py-3 px-5 text-[#64748B]">平均</th>
                <th className="py-3 px-5 text-[#64748B]">昼 12:00</th>
                <th className="py-3 px-5 text-[#64748B]">夜 20:00</th>
                <th className="py-3 px-5 text-[#64748B]">深夜 0:00</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((isp) => (
                <tr key={isp.id} className="border-b border-[#0F172A] hover:bg-[#273548]/50">
                  <td className="py-4 px-5">
                    <Link href={`/reviews/${isp.slug}/`} className="font-bold text-white hover:text-[#7C3AED] transition-colors">{isp.name}</Link>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className="text-lg font-black text-[#10B981]">{isp.avgJitter}<span className="text-xs text-[#64748B]">ms</span></span>
                  </td>
                  <td className="py-4 px-5"><JitterBar value={isp.jitterNoon} /></td>
                  <td className="py-4 px-5"><JitterBar value={isp.jitterEvening} /></td>
                  <td className="py-4 px-5"><JitterBar value={isp.jitterNight} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Speed Table */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden">
        <div className="p-5 border-b border-[#334155]">
          <h2 className="text-lg font-bold text-white">⚡ 通信速度比較（Mbps）</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#334155] bg-[#0F172A]/50">
                <th className="text-left py-3 px-5 text-[#64748B]">回線名</th>
                <th className="text-center py-3 px-5 text-[#64748B]">最大速度</th>
                <th className="text-center py-3 px-5 text-[#64748B]">平均下り</th>
                <th className="text-center py-3 px-5 text-[#64748B]">平均上り</th>
                <th className="text-center py-3 px-5 text-[#64748B]">回線タイプ</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((isp) => (
                <tr key={isp.id} className="border-b border-[#0F172A] hover:bg-[#273548]/50">
                  <td className="py-4 px-5 font-bold text-white">{isp.name}</td>
                  <td className="py-4 px-5 text-center text-[#7C3AED] font-bold">{isp.maxSpeed}</td>
                  <td className="py-4 px-5 text-center text-white font-bold">{isp.avgDownload}Mbps</td>
                  <td className="py-4 px-5 text-center text-white">{isp.avgUpload}Mbps</td>
                  <td className="py-4 px-5 text-center text-[#94A3B8] text-xs">{isp.connectionType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
