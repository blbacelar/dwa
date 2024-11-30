import CountdownTimer from "./components/CountdownTimer";
import BenefitCard from "./components/BenefitCard";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ModulesList from "./components/ModulesList";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import Image from "next/image";
import PromoEndedModal from "./components/PromoEndedModal";

const PURCHASE_LINK =
  "https://shop.beacons.ai/digitalcomge/99dae70e-1d3e-4b3b-8f12-46c9ccee44fe";
const BR_PURCHASE_LINK = "https://pay.hotmart.com/D96539582S?off=4q1h6cn8";
const BEACONS_LINK = "https://beacons.ai/digitalcomge";
const PROMO_END_DATE = "2024-11-29T16:00:00";

export default function Home() {
  return (
    <>
      <PromoEndedModal 
        beaconsLink={BEACONS_LINK} 
        endDate={PROMO_END_DATE}
      />
      <div className="min-h-screen relative">
        {/* Background Image Layer - Move it to the main container */}
        <div
          className="fixed top-0 left-0 w-full h-full -z-10"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
          }}
        />

        {/* Gradient Overlay */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 hero-gradient" />

        {/* Content Sections */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-screen py-20 flex items-center justify-center text-center px-4">
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
                Transforme seu conhecimento em lucro online
                <span className="text-gold-400"> — Comece hoje mesmo!</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
                Aprenda com especialistas internacionais, acesse conteúdos
                exclusivos e comece a ganhar em dólares.
              </p>
              <CountdownTimer targetDate="2024-11-29T16:00:00" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-8">
                <a
                  href={PURCHASE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button inline-block text-sm sm:text-base"
                >
                  Pagar em Dólar CAD ($567)
                </a>
                <a
                  href={BR_PURCHASE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button-secondary inline-block text-sm sm:text-base"
                >
                  Pagar em Real (12x R$249,21)
                </a>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <VideoSection purchaseLink={PURCHASE_LINK} />

          {/* Benefits Section */}
          <section className="py-20 px-4 bg-black/80">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title">
                O que você vai encontrar no{" "}
                <span className="text-gold-400">DWA</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <BenefitCard
                  icon="/icons/modules.svg"
                  title="38+ Módulos Completos"
                  description="Conteúdo atualizado + 11 novos módulos em breve"
                />
                <BenefitCard
                  icon="/icons/digital-products.svg"
                  title="Produtos digitais"
                  description="9 produtos digitais prontos para venda com 100% de royalties"
                />
                <BenefitCard
                  icon="/icons/community.svg"
                  title="Acompanhamento"
                  description="Suporte e acompanhamento quinzenal"
                />
                {/* Add more BenefitCards */}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-title">O que nossos alunos estão dizendo</h2>
              <TestimonialCarousel />
            </div>
          </section>

          {/* Modules Section */}
          <ModulesList />

          {/* Final CTA Section */}
          <section className="py-20 px-4 gold-gradient">
            <div className="max-w-4xl mx-auto text-center text-black">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Última chance de garantir seu desconto!
              </h2>
              <div className="text-2xl md:text-4xl mb-8">
                <span className="line-through opacity-75">CAD $2.500</span>
                <span className="font-bold ml-4">CAD $567</span>
              </div>
              <CountdownTimer targetDate="2024-11-29T16:00:00" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href={PURCHASE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white cta-button inline-block"
                >
                  Pagar em Dólar CAD ($567)
                </a>
                <a
                  href={BR_PURCHASE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white cta-button-secondary inline-block"
                >
                  Pagar em Real (12x R$249,21)
                </a>
              </div>
            </div>
          </section>

          {/* Footer - Now inside the z-10 container */}
          <Footer />
        </div>
      </div>
    </>
  );
}
