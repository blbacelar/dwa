'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/digitalcomge/",
    icon: (
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

interface PromoEndedModalProps {
  beaconsLink: string;
  endDate: string;
}

export default function PromoEndedModal({ beaconsLink, endDate }: PromoEndedModalProps) {
  const [mounted, setMounted] = useState(false);
  const [hasPromoEnded, setHasPromoEnded] = useState(false);

  useEffect(() => {
    setMounted(true);
    const now = new Date();
    const promoEndDate = new Date(endDate);
    
    if (now > promoEndDate) {
      setHasPromoEnded(true);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [endDate]);

  if (!mounted || !hasPromoEnded) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-black border border-gold-400/20 rounded-2xl p-6 sm:p-8 max-w-lg w-full text-center"
      >
        <div className="space-y-4">
          <div className="text-4xl mb-4">⏰</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Promoção Encerrada!
          </h2>
          <p className="text-gray-300 mb-6">
            A promoção do DWA foi encerrada, mas você ainda pode acessar informações sobre o curso e outras oportunidades através do nosso link.
          </p>
          <a
            href={beaconsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block text-base sm:text-lg"
          >
            Saiba Mais
          </a>
          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-3">
              Para mais informações, entre em contato através das nossas redes sociais:
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-400 transition-all hover:scale-110 active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 