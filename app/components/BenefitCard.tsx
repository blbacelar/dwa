'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function BenefitCard({ icon, title, description, delay = 0 }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-black/40 rounded-xl p-6"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div 
          className="w-16 h-16 relative mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </motion.div>
        <h3 className="text-xl font-bold mb-2 text-gold-400">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
} 