import { MessageCircle, DoorOpen, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: MessageCircle,
    title: "初めてでも安心のカウンセリング",
    description:
      "ご来店時に丁寧なカウンセリングを実施しています。気になる箇所や生活習慣をお聞きし、お一人おひとりに合った施術をご提案します。",
  },
  {
    icon: DoorOpen,
    title: "完全予約制の落ち着いた個室",
    description:
      "他のお客様と時間が重ならない完全予約制を採用。プライベートな空間で、周りを気にせずゆっくりとお過ごしいただけます。",
  },
  {
    icon: Heart,
    title: "分かりやすい予約・Web導線",
    description:
      "LINE予約・Instagram・Googleマップへのアクセスを分かりやすく整理。初めてのお客様でも迷わずご来店いただける導線を整えています。",
  },
]

export function Reasons() {
  return (
    <section id="reasons" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground tracking-widest mb-3">
            WHY MIYABI
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-wider">
            ミヤビが選ばれる理由
          </h2>
          <div className="mt-6 mx-auto w-16 h-px bg-accent" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:border-accent/50 transition-colors duration-300"
            >
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-4 tracking-wide">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-left sm:text-center">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
