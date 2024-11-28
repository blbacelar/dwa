"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  screenshot: string;
  content: string;
  location: string;
  results?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Oyedokun Florence",
    role: "Aluno DWA",
    location: "Estados Unidos",
    screenshot: "/testimonials/user1.png",
    content:
      "Olá a todos, eu só queria tirar um momento para compartilhar minha incrível experiência com a DWA e expressar minha sincera gratidão a Rachell Jova por criar um programa tão poderoso. Através das estratégias",
    results: "$ 13,000",
  },
  {
    id: 2,
    name: "Sandee Varela",
    role: "Aluno DWA",
    location: "Estados Unidos",
    screenshot: "/testimonials/user2.png",
    content:
      "Eu tive que levar alguns dias para processar este marco. Minha história não é uma de luta financeira, mas é uma de lutas com a saúde mental. É por isso que eu acredito firmemente que se eu consegui, você também pode!! Eu comecei meu",
    results: "$500.000 em 9 meses",
  },
  {
    id: 3,
    name: "Jessica Henry",
    role: "Aluno DWA",
    location: "Estados Unidos",
    screenshot: "/testimonials/user3.png",
    content:
      "Estou animada para compartilhar que ganhei mais R$ 8.230,00 este mês, somando aos R$ 11.443,00 que ganhei anteriormente! Foi um mês fantástico cheio de trabalho duro.",
    results: "$8,230.00 este mês + $11,443.00 anterior",
  },
  {
    id: 4,
    name: "Daiana Duarte",
    role: "Aluno DWA",
    location: "Brasil",
    screenshot: "/testimonials/user9.png",
    content:
      "Hoje faz 3 meses que entrei para o Marketing Digital, comecei meu Instagram do completo zero. Não sou influencer, sou uma mãe de 2 crianças que trabalha em casa. Fiz minha primeira venda com pouquíssimos seguidores e assim fui crescendo. Hoje atingi 1000 seguidores e mais de $22 mil dólares de lucro! Viver do digital é uma realidade, requer dedicação e muito empenho. Mas é possível O DIGITAL FUNCIONA simmmmmm",
    results: "$22,000",
  },
  {
    id: 5,
    name: "Karina Cristina Menegaz Rodrigues",
    role: "Aluno DWA",
    location: "Brasil",
    screenshot: "/testimonials/user10.png",
    content:
      "Sem tráfego pago, sem patrocínio. Instagram do zero. Eu e meu marido trabalhando de casa! E olha que nem assisti 100% das aulas! Quem quer faz acontecer! GLÓRIA A DEUS!!!!",
    results: "+$20,000 em menos de 2 meses",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center p-6 max-w-2xl mx-auto">
            <motion.div
              className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-4 shadow-lg bg-black/20"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={testimonials[currentIndex].screenshot}
                alt={`Depoimento de ${testimonials[currentIndex].name}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-xl text-center leading-relaxed">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>
              <h4 className="font-bold text-gold-400 text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm text-gray-400 mb-2">
                {testimonials[currentIndex].role} •{" "}
                {testimonials[currentIndex].location}
              </p>
              {testimonials[currentIndex].results && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block bg-gold-400/10 text-gold-400 px-4 py-1 rounded-full text-sm font-medium"
                >
                  Resultado: {testimonials[currentIndex].results}
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-gold-400 w-6" : "bg-gray-600 w-3"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
