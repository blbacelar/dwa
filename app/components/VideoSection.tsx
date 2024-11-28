"use client";

interface VideoSectionProps {
  purchaseLink: string;
}

export default function VideoSection({ purchaseLink }: VideoSectionProps) {
  return (
    <section className="py-20 px-4 bg-black/90">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-8">
          Descubra como o <span className="text-gold-400">DWA</span> vai
          transformar sua vida
        </h2>
        <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-xl shadow-gold-400/10 mb-6">
          <iframe
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
            src="https://www.canva.com/design/DAGWSV9kg6E/uLgkWvo9MJfAjs6gTVWojA/watch?embed"
            allowFullScreen
            allow="fullscreen"
          />
        </div>

        <div className="mt-8 space-y-4 text-left max-w-2xl mx-auto">
          {/* <p className="text-lg text-gray-300">
            Neste vídeo você vai descobrir:
          </p>
          <ul className="space-y-3">
            {[
              "Como funciona o método DWA de geração de renda online",
              "Por que nossos alunos conseguem resultados tão rápido",
              "As 3 principais estratégias que ensinamos no curso",
              "Como você pode começar mesmo sem experiência",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-gold-400 text-xl">•</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul> */}
          <div className="text-center">
            <a
              href={purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button mt-8 inline-block text-lg"
            >
              Quero começar agora!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
