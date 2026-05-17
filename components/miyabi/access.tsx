import { MapPin, Clock, Phone, CreditCard, DoorOpen, Calendar } from "lucide-react"

const info = [
  {
    icon: MapPin,
    label: "住所",
    value: "サンプル住所（大宮駅徒歩5分想定）",
  },
  {
    icon: MapPin,
    label: "アクセス",
    value: "JR大宮駅 東口より徒歩5分",
  },
  {
    icon: Clock,
    label: "営業時間",
    value: "10:00〜19:00（最終受付 18:00）",
  },
  {
    icon: Calendar,
    label: "定休日",
    value: "火曜日（祝日の場合は翌水曜日）",
  },
  {
    icon: Phone,
    label: "電話番号",
    value: "048-000-0000",
    isPhone: true,
  },
  {
    icon: CreditCard,
    label: "お支払い方法",
    value: "現金 / クレジットカード各種 / PayPay / 交通系IC",
  },
  {
    icon: DoorOpen,
    label: "施術ルーム",
    value: "完全個室・2室（完全予約制）",
  },
]

export function Access() {
  return (
    <section id="access" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground tracking-widest mb-3">
            ACCESS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-wider">
            ご来店前のご案内
          </h2>
          <div className="mt-6 mx-auto w-16 h-px bg-accent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] bg-muted rounded-sm flex items-center justify-center border border-border/50">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-border" />
                <p className="text-sm mb-2">Googleマップ</p>
                <p className="text-xs">
                  大宮駅東口より徒歩5分
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps?q=大宮駅"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Googleマップで見る
            </a>
          </div>

          {/* Info List */}
          <div className="order-1 lg:order-2">
            <div className="bg-card rounded-sm border border-border/50 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 tracking-wider">
                プライベートサロン ミヤビ
              </h3>
              <dl className="space-y-5">
                {info.map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 ${
                      index !== info.length - 1
                        ? "pb-5 border-b border-border/30"
                        : ""
                    }`}
                  >
                    <dt className="flex-shrink-0">
                      <item.icon className="w-5 h-5 text-secondary mt-0.5" />
                    </dt>
                    <dd className="flex-1">
                      <span className="block text-xs text-muted-foreground mb-1">
                        {item.label}
                      </span>
                      {item.isPhone ? (
                        <a
                          href={`tel:${item.value}`}
                          className="text-foreground hover:text-secondary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-foreground whitespace-pre-line">
                          {item.value}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 p-5 bg-muted rounded-xl text-left">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground block mb-2">ご予約について</span>
                  ご予約はLINEまたはお電話にて承っております。<br />
                  ご不明な点はお気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
