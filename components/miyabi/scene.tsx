import { Sparkles, MessageCircle, Users, Heart } from "lucide-react"

const scenes = [
  {
    icon: Sparkles,
    title: "施術ルーム",
    description: (
      <>
        清潔感のある完全個室で、<br className="block sm:hidden" />
        周りを気にせずリラックスできます。
      </>
    ),
  },
  {
    icon: MessageCircle,
    title: "カウンセリング",
    description: (
      <>
        お体の状態やお悩みをヒアリングし、<br className="block sm:hidden" />
        最適な施術をご提案します。
      </>
    ),
  },
  {
    icon: Users,
    title: "完全プライベート",
    description: (
      <>
        完全予約制のため、<br className="block sm:hidden" />
        他のお客様と時間が重なりません。
      </>
    ),
  },
  {
    icon: Heart,
    title: "アフターケア",
    description: (
      <>
        施術後もセルフケアの<br className="block sm:hidden" />
        アドバイスをお伝えします。
      </>
    ),
  },
]

const spaces = [
  { type: "施術ルーム", capacity: "完全個室・2室" },
  { type: "カウンセリングスペース", capacity: "1名様専用" },
  { type: "待合スペース", capacity: "完全入替制" },
]

export function Scene() {
  return (
    <section id="scene" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground tracking-widest mb-3">
            SPACE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-wider">
            ゆっくりと過ごせる、プライベート空間
          </h2>
          <div className="mt-6 mx-auto w-16 h-px bg-accent" />
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden relative">
            <img src="/room.jpg" alt="施術ルーム" className="w-full h-full object-cover object-center" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden relative">
              <img src="/counseling.jpg" alt="カウンセリングスペース" className="w-full h-full object-cover object-center" />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden relative">
              <img src="/room.jpg" alt="落ち着いた空間" className="w-full h-full object-cover object-[center_40%]" />
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

        {/* Space Info */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-medium text-foreground mb-6 tracking-wider text-center">
            スペースのご案内
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {spaces.map((space, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-muted rounded-full text-sm"
              >
                <span className="font-medium text-foreground">{space.type}</span>
                <span className="text-muted-foreground ml-2">
                  {space.capacity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
