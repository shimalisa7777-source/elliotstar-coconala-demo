import Link from "next/link"
import { Calendar, Phone, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section
      id="reserve"
      className="py-20 md:py-28 bg-primary text-primary-foreground"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider mb-6">
          ご予約・ご来店までの流れ
        </h2>
        <p className="text-primary-foreground/90 leading-relaxed mb-10 max-w-xl mx-auto text-left sm:text-center">
          ご予約はLINEまたはお電話にて承っております。<br />
          個室のご希望やご要望がございましたら、お気軽にお申し付けください。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8">
          <Button
            asChild
            size="lg"
            className="bg-[#E6D5B8] hover:bg-[#D4C3A3] text-stone-900 border-none shadow-lg px-8 py-6 text-base tracking-wider transition-colors w-full sm:w-auto"
          >
            <a href="https://line.me/" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              LINEで予約
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-stone-900/50 hover:bg-stone-900/70 backdrop-blur-md border border-white/40 text-white shadow-lg px-8 py-6 text-base tracking-wider transition-colors w-full sm:w-auto"
          >
            <a href="tel:048-000-0000">
              <Phone className="w-5 h-5 mr-2" />
              電話する
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-stone-900/50 hover:bg-stone-900/70 backdrop-blur-md border border-white/40 text-white shadow-lg px-8 py-6 text-base tracking-wider transition-colors w-full sm:w-auto"
          >
            <Link href="#access">
              <MapPin className="w-5 h-5 mr-2" />
              地図を見る
            </Link>
          </Button>
        </div>

        {/* Business Hours */}
        <p className="text-sm text-primary-foreground/60">
          営業時間：11:30〜14:00 / 17:00〜22:00（月曜定休）
        </p>
      </div>
    </section>
  )
}