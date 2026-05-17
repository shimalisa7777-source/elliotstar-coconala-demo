export function DemoExplanation() {
  return (
    <section className="py-12 md:py-16 bg-accent/10 border-t-2 border-accent/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs text-muted-foreground tracking-widest mb-3">
            SAMPLE SITE
          </p>
          <h3 className="text-base font-medium text-foreground mb-4 tracking-wider">
            このサイトはサンプルデモです
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed text-left max-w-xl mx-auto">
            このページは、Elliot Starが手がけるスマホ対応1ページ型ホームページの見本サイトです。
            実在する店舗ではありません。実際の制作では、店舗様の写真・メニュー・価格帯・予約導線・
            Googleビジネスプロフィールの状況に合わせて、Web導線を整理した集客ホームページを
            個別に設計いたします。
          </p>
          <div className="mt-6 pt-6 border-t border-border/30">
            <p className="text-xs text-muted-foreground text-left max-w-xl mx-auto">
              スマホ対応ホームページ制作・店舗情報の整理・予約導線の構築に関するご相談は{" "}
              <a
                href="#"
                className="text-secondary hover:underline font-medium"
              >
                Elliot Starのサービスページ
              </a>{" "}
              をご覧ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}