"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "初めてでも予約できますか？",
    answer: "はい、初めての方も大歓迎です。ご来店時にカウンセリングを行いますので、事前知識は不要です。ご不安な点はLINEからお気軽にご相談ください。",
  },
  {
    question: "当日の持ち物はありますか？",
    answer: "特別な持ち物は不要です。施術に必要なものはすべてサロンでご用意しています。コンタクトをお使いの方は眼鏡をお持ちいただくと快適です。",
  },
  {
    question: "どのメニューを選べばよいか分かりません。",
    answer: "ご来店時のカウンセリングでご相談いただけます。また、ご予約前にLINEでお悩みをお伝えいただければ、スタッフがメニューをご提案します。初めての方には体験コースがおすすめです。",
  },
  {
    question: "支払い方法は何がありますか？",
    answer: "現金・クレジットカード各種・PayPay・交通系ICに対応しています。",
  },
  {
    question: "予約変更・キャンセルはできますか？",
    answer: "前日18時までにLINEまたはお電話にてご連絡ください。当日のキャンセルはメニュー料金の50%をキャンセル料として申し受ける場合がございます。",
  },
  {
    question: "施術中に気になることがあったら？",
    answer: "いつでもスタッフにお声がけください。圧の強さや室温など、遠慮なくお申し付けください。お体の状態によっては施術内容を変更する場合がございます。",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground tracking-widest mb-3">FAQ</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-wider">
            よくあるご質問
          </h2>
          <div className="mt-6 mx-auto w-16 h-px bg-accent" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-foreground tracking-wide pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
