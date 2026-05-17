import { Utensils, DoorOpen, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: Utensils,
    title: "旬の食材と出汁を活かした料理",
    description:
      "四季折々の旬の食材を厳選し、丁寧にひいた出汁とともに、素材の味わいを最大限に引き出した一皿をお届けします。",
  },
  {
    icon: DoorOpen,
    title: "会話を楽しめる落ち着いた個室",
    description:
      "周りを気にせずゆっくりとお過ごしいただける個室をご用意。大切な方との会話を、静かな空間でお楽しみください。",
  },
  {
    icon: Heart,
    title: "記念日・接待にも安心の接客",
    description:
      "特別な日を彩るお手伝いをいたします。お料理の進行やサプライズのご相談など、心を込めて対応させていただきます。",
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
            みやびが選ばれる理由
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