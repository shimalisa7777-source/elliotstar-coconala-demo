"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#reasons", label: "コンセプト" },
  { href: "#menu", label: "メニュー" },
  { href: "#scene", label: "空間" },
  { href: "#flow", label: "ご来店の流れ" },
  { href: "#faq", label: "よくある質問" },
  { href: "#access", label: "アクセス" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      {/* Sample notice banner */}
      <div className="bg-accent/20 text-center py-1.5 text-[10px] text-muted-foreground tracking-wider border-b border-border/20">
        このページはElliot Starの制作サンプルです。実在する店舗ではありません。
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span className="text-lg md:text-xl font-semibold tracking-wider text-foreground">
              プライベートサロン ミヤビ
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest">
              PRIVATE SALON MIYABI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 tracking-wider"
            >
              <Link href="#reserve">ご予約</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-foreground/80 hover:text-foreground transition-colors tracking-wider border-b border-border/30"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground tracking-wider"
            >
              <Link href="#reserve" onClick={() => setIsOpen(false)}>
                ご予約
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}