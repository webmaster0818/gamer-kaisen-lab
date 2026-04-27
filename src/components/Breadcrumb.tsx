import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="パンくずリスト" className="py-3">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-[#64748B]">
        <li>
          <Link href="/" className="hover:text-[#7C3AED] transition-colors">ホーム</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span className="mx-1">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-[#7C3AED] transition-colors">{item.label}</Link>
            ) : (
              <span className="text-[#94A3B8]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
