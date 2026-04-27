import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "ゲーマー回線ラボのプライバシーポリシー。個人情報の取り扱い方針について。",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />

      <h1 className="text-3xl font-black text-white mt-4 mb-8">プライバシーポリシー</h1>

      <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 space-y-6 text-sm text-[#94A3B8] leading-relaxed">
        <p>ゲーマー回線ラボ（以下「当サイト」）は、ユーザーの個人情報の保護に関して、以下のとおりプライバシーポリシーを定めます。</p>

        <section>
          <h2 className="text-base font-bold text-white mb-2">1. 個人情報の収集について</h2>
          <p>当サイトでは、お問い合わせの際にメールアドレス等の個人情報をご提供いただく場合があります。これらの個人情報は、お問い合わせへの回答や必要な情報のご連絡のために利用いたします。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">2. アクセス解析ツールについて</h2>
          <p>当サイトでは、Googleアナリティクスを使用してアクセス情報を収集する場合があります。これはCookieを使用してデータを収集していますが、このデータは匿名で収集されており、個人を特定するものではありません。</p>
          <p className="mt-2">Googleアナリティクスのデータ収集を無効にしたい場合は、Googleが提供するオプトアウトアドオンをご利用ください。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">3. 広告について</h2>
          <p>当サイトは、第三者配信の広告サービスやアフィリエイトプログラムを利用しています。これらのサービスは、ユーザーの興味に応じた広告を表示するためにCookieを使用する場合があります。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">4. 個人情報の第三者提供について</h2>
          <p>当サイトは、以下の場合を除き、取得した個人情報を第三者に提供いたしません。</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>ご本人の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要な場合</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">5. Cookieの使用について</h2>
          <p>当サイトでは、サイトの利便性向上やアクセス解析のためにCookieを使用する場合があります。ブラウザの設定によりCookieを無効にすることも可能ですが、一部機能が制限される場合があります。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">6. プライバシーポリシーの変更</h2>
          <p>当サイトは、必要に応じて本ポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">7. お問い合わせ</h2>
          <p>プライバシーポリシーに関するお問い合わせは、以下までご連絡ください。</p>
          <p className="mt-2">メール: webmaster@mediax.biz</p>
        </section>

        <p className="text-[#64748B] text-xs">制定日: 2026年4月13日</p>
      </div>
    </div>
  );
}
