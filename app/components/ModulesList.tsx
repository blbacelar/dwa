'use client';

import { motion } from 'framer-motion';

interface Module {
  id: number;
  title: string;
  icon: string;
  description: string;
}

const modules: Module[] = [
  {
    id: 1,
    title: "Marketing de Afiliado",
    icon: "📱",
    description: "Aprenda a vender produtos digitais e físicos como afiliado"
  },
  {
    id: 2,
    title: "UGC Creator",
    icon: "🎥",
    description: "Crie conteúdo viral para marcas e seja bem pago por isso"
  },
  {
    id: 3,
    title: "Dropshipping",
    icon: "🚚",
    description: "Monte seu próprio negócio online sem estoque inicial"
  },
  {
    id: 4,
    title: "Edição de vídeos",
    icon: "🎬",
    description: "Aprenda a editar vídeos profissionais com CapCut"
  },
  {
    id: 5,
    title: "Amazon",
    icon: "📦",
    description: "Monetize com a maior marketplace do mundo"
  },
  {
    id: 6,
    title: "Marketing Anônimo",
    icon: "🎭",
    description: "Estratégias avançadas de marketing mantendo seu anonimato"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ModulesList() {
  return (
    <section className="py-20 px-4 bg-black/60">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Módulos do <span className="text-gold-400">Curso</span>
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {modules.map((module) => (
            <motion.div
              key={module.id}
              variants={item}
              className="bg-black/40 rounded-xl p-6 border border-gold-400/20"
              whileHover={{ scale: 1.03, borderColor: 'rgba(255, 184, 0, 0.4)' }}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{module.icon}</span>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gold-400">
                    {module.title}
                  </h3>
                  <p className="text-gray-300">{module.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 