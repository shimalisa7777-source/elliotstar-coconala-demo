import Link from "next/link"
import { Instagram } from "lucide-react"

const navLinks = [
  { href: "#reasons", label: "選ばれる理由" },
  { href: "#menu", label: "お品書き" },
  { href: "#scene", label: "店内空間" },
  { href: "#reviews", label: "お客様の声" },
  { href: "#flow", label: "ご来店の流れ" },
  { href: "#faq", label: "よくある質問" },
  { href: "#access", label: "アクセス" },
]

export function Footer() {
  return (
    <footer className="py-10 md:py-12 bg-primary text-primary-foreground pb-24 lg:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <Link href="/" className="flex flex-col items-start">
              <span className="text-lg font-semibold tracking-wider">
                旬菜和食 みやび
              </span>
              <span className="text-[10px] text-primary-foreground/60 tracking-widest">
                SHUNSAI WASHOKU MIYABI
              </span>
            </Link>
            <p className="mt-3 text-xs text-primary-foreground/60">
              〒330-0802 埼玉県さいたま市大宮区宮町1-2-3 みやびビル2F
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="my-8 h-px bg-primary-foreground/10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© 2025 旬菜和食 みやび All Rights Reserved.</p>
          <p>
            Sample demo by{" "}
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Elliot Star
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}