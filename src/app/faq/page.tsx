import type { Metadata } from "next";
import { faqData } from "@/lib/data";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "よくある質問（FAQ）全15問",
  description: "ゲーミング光回線に関するよくある質問15問に回答。ping値、ジッター、回線選び、マンション、Wi-Fi、IPv6などの疑問を解消。",
};

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "FAQ" }]} />

      <div className="mt-4 mb-10">
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          ❓ よくある質問 <span className="text-[#7C3AED]">FAQ</span>
        </h1>
        <p className="text-[#94A3B8] mt-3">ゲーミング回線に関する疑問にお答えします。全{faqData.length}問。</p>
      </div>

      <div className="space-y-3">
        {faqData.map((faq, i) => (
          <details key={i} className="bg-[#1E293B] border border-[#334155] rounded-xl group" open={i < 3}>
            <summary className="cursor-pointer p-5 text-white font-semibold text-sm sm:text-base flex items-center gap-3">
              <span className="shrink-0 w-8 h-8 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg flex items-center justify-center text-xs text-[#7C3AED] font-bold">
                Q{i + 1}
              </span>
              <span className="flex-1">{faq.question}</span>
              <svg className="w-5 h-5 text-[#64748B] group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-5 pb-5 pl-16 text-sm text-[#94A3B8] leading-relaxed">{faq.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
}
