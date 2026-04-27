"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "ランキング", href: "/ranking/" },
  { label: "FPSランキング", href: "/fps-ranking/" },
  { label: "ping実測データ", href: "/ping-data/" },
  {
    label: "ゲーム別",
    children: [
      { label: "Apex Legends", href: "/games/apex/" },
      { label: "VALORANT", href: "/games/valorant/" },
      { label: "FF14", href: "/games/ff14/" },
      { label: "モンハン", href: "/games/monster-hunter/" },
      { label: "スプラトゥーン", href: "/games/splatoon/" },
      { label: "フォートナイト", href: "/games/fortnite/" },
    ],
  },
  {
    label: "解説",
    children: [
      { label: "ping値とは？", href: "/guide/ping/" },
      { label: "ジッターとは？", href: "/guide/jitter/" },
      { label: "必要速度早見表", href: "/guide/speed-guide/" },
      { label: "IPv6とは？", href: "/guide/ipv6/" },
    ],
  },
  { label: "FAQ", href: "/faq/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🎮</span>
            <span className="text-xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#10B981] bg-clip-text text-transparent">
              ゲーマー回線ラボ
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-3 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors rounded-lg hover:bg-[#1E293B]">
                    {item.label}
                    <svg className="inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-[#1E293B] border border-[#334155] rounded-lg shadow-xl py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[#94A3B8] hover:text-white hover:bg-[#273548] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="px-3 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors rounded-lg hover:bg-[#1E293B]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#94A3B8] hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1E293B] border-t border-[#334155]">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="px-3 py-2 text-sm font-semibold text-[#7C3AED]">{item.label}</div>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block pl-6 py-2 text-sm text-[#94A3B8] hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="block px-3 py-2 text-sm text-[#94A3B8] hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
