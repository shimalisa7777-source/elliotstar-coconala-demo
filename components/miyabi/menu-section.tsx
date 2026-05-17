import { Card, CardContent } from "@/components/ui/card"

const courses = [
  {
    name: "初回カウンセリング付き体験コース",
    price: "6,600",
    description: "初めてのお客様向け。カウンセリング（30分）＋フェイシャルまたはボディトリートメント（60分）。お悩みをお聞きしながら最適な施術をご提案します。",
    isRecommended: true,
  },
  {
    name: "アロマボディトリートメント 60分",
    price: "8,800",
    description: "全身のコリや疲れをほぐす、アロマオイルを使用したボディトリートメント。心地よい香りとともにリラックスをお届けします。",
    isRecommended: false,
  },
]

const alacarte = [
  { name: "フェイシャルケア 60分", price: "9,900" },
  { name: "全身リラクゼーション 90分", price: "12,800" },
  { name: "肩・首集中ケア 45分", price: "6,600" },
  { name: "オプション ヘッドケア 20分", price: "2,200" },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground tracking-widest mb-3">
            MENU
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-wider">
            メニュー・料金
          </h2>
          <div className="mt-6 mx-auto w-16 h-px bg-accent" />
        </div>

        {/* Main Image */}
        <div className="mb-16 aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden relative shadow-md">
          <img
            src="/treatment.jpg"
            alt="施術イメージ"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-foreground mb-8 tracking-wider text-center">
            おすすめコース
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`bg-card border-border/50 relative overflow-hidden ${
                  course.isRecommended ? "ring-1 ring-accent/50" : ""
                }`}
              >
                {course.isRecommended && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] px-2 py-1 bg-accent/20 text-accent-foreground rounded-full tracking-wider">
                      おすすめ
                    </span>
                  </div>
                )}
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                    <h4 className="text-lg font-medium text-foreground tracking-wide">
                      {course.name}
                    </h4>
                    <p className="text-xl font-semibold text-secondary">
                      ¥{course.price}
                      <span className="text-xs font-normal text-muted-foreground ml-1">
                        （税込）
                      </span>
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Single Menu */}
        <div>
          <h3 className="text-lg font-medium text-foreground mb-6 tracking-wider text-center">
            単品メニュー
          </h3>
          <div className="max-w-xl mx-auto">
            <Card className="bg-card border-border/50">
              <CardContent className="py-6 px-6">
                <ul className="space-y-4">
                  {alacarte.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-baseline justify-between ${
                        index !== alacarte.length - 1
                          ? "pb-4 border-b border-border/30"
                          : ""
                      }`}
                    >
                      <span className="text-foreground tracking-wide font-medium">
                        {item.name}
                      </span>
                      <span className="text-secondary font-medium whitespace-nowrap pl-4">
                        ¥{item.price}
                        <span className="text-xs font-normal text-muted-foreground ml-1">
                          （税込）
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground mt-8 leading-relaxed">
          ※ メニュー内容は変更になる場合がございます。<br className="block sm:hidden" />
          アレルギーや体調については、カウンセリング時にお知らせください。
        </p>
      </div>
    </section>
  )
}
