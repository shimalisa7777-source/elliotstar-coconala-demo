import Link from "next/link"
import { MapPin, Phone, Calendar, Clock, Users, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const badges = [
  { icon: MapPin, text: "大宮駅徒歩5分" },
  { icon: Users, text: "個室あり" },
  { icon: Heart, text: "記念日対応" },
]

export function Hero() {
  return (
    <>
      {/* =======================
          Desktop Hero (md:flex)
      ======================= */}
      <section className="hidden md:flex relative min-h-screen items-center justify-center pt-16 md:pt-28 bg-gradient-to-b from-[#1a1714] to-[#2c2824]">
        {/* Background Image - Desktop */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#1a1714] to-[#2c2824]">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="/hero-salon.jpg"
            alt="サロンの雰囲気"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content - Desktop */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {badges.map((badge) => (
              <span
                key={badge.text}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background/10 backdrop-blur-sm rounded-full text-xs text-primary-foreground/90 border border-primary-foreground/20"
              >
                <badge.icon className="w-3.5 h-3.5" />
                {badge.text}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight tracking-wider mb-6 text-balance">
            出汁香る季節料理と
            <br />
            落ち着いた和の空間
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-12 text-center">
            大宮駅から徒歩5分。出汁香る季節料理と落ち着いた和の空間で<br />
            接待・記念日・ご家族のお食事まで、<br />
            心ほどけるひとときをお過ごしください
          </p>

          <div className="flex flex-row justify-center gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-[#E6D5B8] hover:bg-[#D4C3A3] text-stone-900 border-none shadow-lg px-8 py-6 text-base tracking-wider transition-colors"
            >
              <a href="https://line.me/" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                LINEで予約
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-stone-900/50 hover:bg-stone-900/70 backdrop-blur-md border border-white/40 text-white shadow-lg px-8 py-6 text-base tracking-wider transition-colors"
            >
              <a href="tel:048-000-0000">
                <Phone className="w-5 h-5 mr-2" />
                電話する
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-stone-900/50 hover:bg-stone-900/70 backdrop-blur-md border border-white/40 text-white shadow-lg px-8 py-6 text-base tracking-wider transition-colors"
            >
              <Link href="#access">
                <MapPin className="w-5 h-5 mr-2" />
                地図を見る
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/60 text-sm">
            <Clock className="w-4 h-4" />
            <span>営業時間：11:30〜14:00 / 17:00〜22:00（月曜定休）</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* =======================
          Mobile Hero (flex md:hidden)
      ======================= */}
      <section className="flex md:hidden relative min-h-[90svh] items-center justify-center pt-28 bg-gradient-to-b from-[#1a1714] to-[#2c2824]">
        {/* 和紙のようなかすかな質感 (noise) を想定 */}
        <div className="absolute inset-0 z-0 bg-white opacity-[0.02]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

        <div className="relative z-10 w-full max-w-sm mx-auto px-4 text-center py-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {badges.map((badge) => (
              <span
                key={badge.text}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-xs text-primary-foreground border border-white/10"
              >
                <badge.icon className="w-3 h-3" />
                {badge.text}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-semibold text-primary-foreground leading-snug tracking-wider mb-6">
            出汁香る季節料理と
            <br />
            落ち着いた和の空間
          </h1>

          <p className="text-sm text-primary-foreground/90 leading-relaxed mb-10 text-left px-2">
            大宮駅から徒歩5分。<br />
            出汁香る季節料理と落ち着いた和の空間で、接待・記念日・ご家族のお食事まで、心ほどけるひとときをお過ごしください。
          </p>

          <div className="flex flex-col gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-[#E6D5B8] hover:bg-[#D4C3A3] text-stone-900 border-none shadow-lg w-full py-6 text-base tracking-wider"
            >
              <a href="https://line.me/" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                LINEで予約
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent border border-white/30 text-white shadow-lg w-full py-6 text-base tracking-wider"
            >
              <a href="tel:048-000-0000">
                <Phone className="w-5 h-5 mr-2" />
                電話する
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent border border-white/30 text-white shadow-lg w-full py-6 text-base tracking-wider"
            >
              <Link href="#access">
                <MapPin className="w-5 h-5 mr-2" />
                地図を見る
              </Link>
            </Button>
          </div>

          <div className="text-primary-foreground/60 text-xs">
            営業時間：11:30〜14:00 / 17:00〜22:00（月曜定休）
          </div>
        </div>
      </section>
    </>
  )
}