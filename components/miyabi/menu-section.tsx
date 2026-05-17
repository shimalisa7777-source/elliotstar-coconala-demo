import { Card, CardContent } from "@/components/ui/card"

const courses = [
  {
    name: "季節のおまかせコース",
    price: "6,600",
    description: (
      <>
        前菜・お造り・焼物・煮物<br className="block sm:hidden" />
        <span className="hidden sm:inline">・</span>土鍋ごはん・甘味
      </>
    ),
    isRecommended: true,
  },
  {
    name: "記念日コース",
    price: "8,800",
    description: (
      <>
        特別前菜・お造り・焼物・煮物<br className="block sm:hidden" />
        <span className="hidden sm:inline">・</span>肉料理・土鍋ごはん・甘味<br className="block sm:hidden" />
        <span className="hidden sm:inline">・</span>メッセージプレート
      </>
    ),
    isRecommended: false,
  },
]

const alacarte = [
  {
    name: "旬のお造り盛り合わせ",
    price: "2,400",
  },
  {
    name: "季節の土鍋ごはん",
    price: "1,800",
  },
  {
    name: "日本酒飲み比べ",
    price: "1,500",
  },
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
            お品書き・コース
          </h2>
          <div className="mt-6 mx-auto w-16 h-px bg-accent" />
        </div>

        {/* Course Main Image */}
        <div className="mb-16 aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden relative shadow-md">
          <img
            src="/treatment.jpg"
            alt="サービスイメージ"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Course Menu */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-foreground mb-8 tracking-wider text-center">
            コース料理
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

        {/* A La Carte */}
        <div>
          <h3 className="text-lg font-medium text-foreground mb-6 tracking-wider text-center">
            一品料理
          </h3>
          <div className="max-w-xl mx-auto">
            <Card className="bg-card border-border/50">
              <CardContent className="py-6 px-6">
                <ul className="space-y-4">
                  {alacarte.map((item, index) => (
                    <li
                      key={index}
                      className={`flex flex-col sm:flex-row sm:items-center gap-4 ${
                        index !== alacarte.length - 1
                          ? "pb-6 border-b border-border/30"
                          : ""
                      }`}
                    >
                      {item.image && (
                        <div className="w-full sm:w-28 h-40 sm:h-20 shrink-0 rounded-xl overflow-hidden relative shadow-sm">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover scale-[1.05]"
                          />
                        </div>
                      )}
                      <div className="flex-1 flex items-baseline justify-between w-full">
                        <span className="text-foreground tracking-wide font-medium">
                          {item.name}
                        </span>
                        <span className="text-secondary font-medium whitespace-nowrap pl-4">
                          ¥{item.price}
                          <span className="text-xs font-normal text-muted-foreground ml-1">
                            （税込）
                          </span>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground mt-8 leading-relaxed">
          ※ 季節により内容が変わる場合がございます。<br className="block sm:hidden" />
          アレルギー等ございましたらお申し付けください。
        </p>
      </div>
    </section>
  )
}