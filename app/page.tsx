import { Header } from "@/components/miyabi/header"
import { Hero } from "@/components/miyabi/hero"
import { Reasons } from "@/components/miyabi/reasons"
import { MenuSection } from "@/components/miyabi/menu-section"
import { Scene } from "@/components/miyabi/scene"
import { Reviews } from "@/components/miyabi/reviews"
import { Flow } from "@/components/miyabi/flow"
import { FAQ } from "@/components/miyabi/faq"
import { Access } from "@/components/miyabi/access"
import { CTA } from "@/components/miyabi/cta"
import { DemoExplanation } from "@/components/miyabi/demo-explanation"
import { MobileFixedCTA } from "@/components/miyabi/mobile-fixed-cta"
import { Footer } from "@/components/miyabi/footer"

export default function MiyabiLandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reasons />
        <MenuSection />
        <Scene />
        <Reviews />
        <Flow />
        <FAQ />
        <Access />
        <CTA />
        <DemoExplanation />
      </main>
      <Footer />
      <MobileFixedCTA />
    </>
  )
}