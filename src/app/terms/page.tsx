import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約",
  description: "ゲーマー回線ラボの利用規約について。",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "利用規約" }]} />

      <h1 className="text-3xl font-black text-white mt-4 mb-8">利用規約</h1>

      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 space-y-6 text-sm text-[#94A3B8] leading-relaxed">
        <p>この利用規約（以下「本規約」）は、ゲーマー回線ラボ（以下「当サイト」）の利用条件を定めるものです。当サイトを利用される場合は、本規約に同意いただいたものとみなします。</p>

        <section>
          <h2 className="text-base font-bold text-white mb-2">第1条（適用範囲）</h2>
          <p>本規約は、当サイトの全てのコンテンツ及びサービスに適用されます。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">第2条（掲載情報について）</h2>
          <p>当サイトに掲載されている通信速度、ping値、ジッター値等の数値データは、目安値であり、実際のご利用環境によって異なります。当サイトの情報を参考にサービスを契約される場合は、各サービスの公式サイトで最新の情報をご確認ください。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">第3条（免責事項）</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>当サイトの情報の正確性、完全性、有用性等について、いかなる保証もいたしません。</li>
            <li>当サイトの情報を利用して生じたいかなる損害についても、一切の責任を負いません。</li>
            <li>当サイトからリンクされた外部サイトの内容について、一切の責任を負いません。</li>
            <li>当サイトの掲載情報は予告なく変更・削除する場合があります。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">第4条（著作権）</h2>
          <p>当サイトに掲載されているテキスト、画像、デザイン等のコンテンツの著作権は、当サイトまたは正当な権利を有する第三者に帰属します。無断での複製・転載・改変等は禁止します。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">第5条（広告・アフィリエイトについて）</h2>
          <p>当サイトは、アフィリエイトプログラムに参加しています。当サイト経由で商品やサービスの購入・申し込みが行われた場合、当サイトに報酬が支払われることがあります。ただし、報酬の有無に関わらず、客観的な情報提供に努めています。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">第6条（禁止事項）</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>当サイトのコンテンツを無断で商用利用すること</li>
            <li>当サイトの運営を妨害する行為</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">第7条（規約の変更）</h2>
          <p>当サイトは、必要に応じて本規約を変更することがあります。変更後の利用規約は、当サイトに掲載した時点から効力を生じるものとします。</p>
        </section>

        <p className="text-[#64748B] text-xs">制定日: 2026年4月13日</p>
      </div>
    </div>
  );
}
