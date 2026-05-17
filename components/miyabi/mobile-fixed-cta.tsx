"use client"

import Link from "next/link"
import { Calendar, Phone, MapPin, MessageCircle } from "lucide-react"

export function MobileFixedCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t border-border shadow-lg">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href="https://line.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-foreground hover:bg-muted transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-1 text-secondary" />
          <span className="text-xs tracking-wider">LINEで予約</span>
        </a>
        <a
          href="tel:048-000-0000"
          className="flex flex-col items-center justify-center py-3 text-foreground hover:bg-muted transition-colors"
        >
          <Phone className="w-5 h-5 mb-1 text-secondary" />
          <span className="text-xs tracking-wider">電話する</span>
        </a>
        <Link
          href="#access"
          className="flex flex-col items-center justify-center py-3 text-foreground hover:bg-muted transition-colors"
        >
          <MapPin className="w-5 h-5 mb-1 text-secondary" />
          <span className="text-xs tracking-wider">地図を見る</span>
        </Link>
      </div>
    </div>
  )
}