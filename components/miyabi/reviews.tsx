import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    text: "初めてのサロンで緊張していましたが、カウンセリングで丁寧に説明してもらえて安心できました。施術後はとてもスッキリして、また来たいと思いました。",
    author: "30代女性",
    occasion: "初回体験コース",
    rating: 5,
  },
  {
    text: "LINEから簡単に予約できて助かりました。当日の流れや料金も事前に分かっていたので、初めてでも安心して来店できました。",
    author: "40代女性",
    occasion: "アロマボディトリートメント",
    rating: 5,
  },
  {
    text: "完全個室でゆっくりできました。どのメニューにするか迷っていたところ、丁寧に相談に乗ってもらえて自分に合ったものを選べました。",
    author: "20代女性",
    occasion: "フェイシャルケア",
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-accent text-accent" : "text-border"
          }`}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground tracking-widest mb-3">
            REVIEWS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-wider">
            お客様の声
          </h2>
          <div className="mt-6 mx-auto w-16 h-px bg-accent" />
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border/50">
              <CardContent className="pt-8 pb-8 px-6">
                <Quote className="w-8 h-8 text-accent/40 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 text-sm">
                  {review.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {review.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.occasion}
                    </p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          ※ サンプルサイトのため、掲載している声はイメージです。
        </p>
      </div>
    </section>
  )
}
