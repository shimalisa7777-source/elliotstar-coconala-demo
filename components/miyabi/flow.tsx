import { MessageCircle, MapPin, CalendarCheck, Sparkles, CreditCard } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "LINEまたはWebからご予約",
    description: "LINEまたはお電話にて、ご希望の日時・メニューをお知らせください。初めての方もお気軽にご連絡ください。",
  },
  {
    icon: MapPin,
    step: "02",
    title: "ご来店",
    description: "大宮駅東口より徒歩5分。ご予約時間の5分前を目安にお越しください。",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "カウンセリング",
    description: "気になる箇所やお体の状態をお聞きします。初めての方にも丁寧にご説明します。",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "施術",
    description: "カウンセリングの内容をもとに、お一人おひとりに合わせた施術を行います。",
  },
  {
    icon: CreditCard,
    step: "05",
    title: "アフターケアのご案内・お会計",
    description: "施術後はセルフケアのアドバイスをお伝えします。現金・カード・PayPayに対応しています。",
  },
]

export function Flow() {
  return (
    <section id="flow" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground tracking-widest mb-3">FLOW</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-wider">
            ご来店の流れ
          </h2>
          <div className="mt-6 mx-auto w-16 h-px bg-accent" />
        </div>

        <div>
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-sm">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                {index !== steps.length - 1 && (
                  <div className="w-px flex-1 mt-3 bg-border/50 min-h-[2.5rem]" />
                )}
              </div>

              <div className={`pt-3 ${index !== steps.length - 1 ? "pb-10" : "pb-0"}`}>
                <p className="text-xs text-muted-foreground tracking-widest mb-1">
                  STEP {step.step}
                </p>
                <h3 className="text-lg font-medium text-foreground mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
