import { Briefcase, Heart, Users, Wine } from "lucide-react"

const scenes = [
  {
    icon: Briefcase,
    title: "接待",
    description: (
      <>
        落ち着いた完全個室で、<br className="block sm:hidden" />
        大切なお客様をおもてなし。
      </>
    ),
  },
  {
    icon: Heart,
    title: "記念日",
    description: (
      <>
        特別な日を彩るコースと、<br className="block sm:hidden" />
        サプライズのご相談も承ります。
      </>
    ),
  },
  {
    icon: Users,
    title: "ご家族でのお食事",
    description: (
      <>
        お子様からご年配の方まで、<br className="block sm:hidden" />
        安心してお楽しみいただけます。
      </>
    ),
  },
  {
    icon: Wine,
    title: "少人数の会食",
    description: (
      <>
        親しい方との会食に、<br className="block sm:hidden" />
        ゆったりとした時間をお過ごしください。
      </>
    ),
  },
]

const seats = [
  { type: "完全個室", capacity: "2名様〜8名様" },
  { type: "カウンター席", capacity: "1名様〜4名様" },
  { type: "テーブル席", capacity: "2名様〜4名様" },
]

export function Scene() {
  return (
    <section id="scene" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground tracking-widest mb-3">
            SCENE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-wider">
            大切な時間に寄り添う空間
          </h2>
          <div className="mt-6 mx-auto w-16 h-px bg-accent" />
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden relative">
            <img src="/room.jpg" alt="落ち着いた空間" className="w-full h-full object-cover object-center" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden relative">
              <img src="/counseling.jpg" alt="カウンセリングルーム" className="w-full h-full object-cover object-center" />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden relative">
              <img src="/room.jpg" alt="くつろぎの空間" className="w-full h-full object-cover object-[center_40%]" />
            </div>
          </div>
        </div>

        {/* Scenes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {scenes.map((scene, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-sm border border-border/50"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <scene.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-base font-medium text-foreground mb-2 tracking-wide">
                {scene.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                {scene.description}
              </p>
            </div>
          ))}
        </div>

        {/* Seat Info */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-medium text-foreground mb-6 tracking-wider text-center">
            お席のご案内
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {seats.map((seat, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-muted rounded-full text-sm"
              >
                <span className="font-medium text-foreground">{seat.type}</span>
                <span className="text-muted-foreground ml-2">
                  {seat.capacity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}