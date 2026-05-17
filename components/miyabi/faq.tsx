"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "予約は必要ですか？",
    answer: "コース料理・個室のご利用はご予約をお勧めしております。当日のお席のみの場合も、事前にお電話いただけると確実にご案内できます。",
  },
  {
    question: "キャンセルはいつまで可能ですか？",
    answer: "ご予約の前日18時までにLINEまたはお電話にてご連絡ください。当日のキャンセルはコース料金の50%をキャンセル料として申し受ける場合がございます。",
  },
  {
    question: "アレルギーへの対応は可能ですか？",
    answer: "主要なアレルギー食材（卵・乳・小麦・そば・えび・かに等）についてはご予約時にお申し付けください。できる限り対応いたしますが、厨房内での混入リスクについてはご了承ください。",
  },
  {
    question: "子ども連れでも利用できますか？",
    answer: "お子様連れのお客様も歓迎しております。お子様用の食器もご用意していますので、ご予約時にお声がけください。",
  },
  {
    question: "個室の利用は何名から可能ですか？",
    answer: "個室は2名様からご利用いただけます。最大8名様まで対応可能です。ご希望の人数・日時をご予約時にお知らせください。",
  },
  {
    question: "駐車場はありますか？",
    answer: "専用駐車場はございません。お近くのコインパーキングをご利用ください。大宮駅からも徒歩5分とアクセスしやすい立地です。",
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
