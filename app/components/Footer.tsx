"use client";

import { useEffect, useState } from "react";

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
  {
    name: "Beacons",
    url: "https://beacons.ai/digitalcomge",
    icon: (
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.178L20.5 7.14v9.72L12 21.822 3.5 16.86V7.14L12 2.178zM12 15a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading state
  }

  return (
    <footer className="bg-black/90 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gold-400 mb-4">
              Bacelar Digital Marketing
            </h3>
            <p className="text-gray-400">
              Transforme seu conhecimento em lucro online
            </p>
          </div>

          {/* Social Links Column */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gold-400 mb-4">
              Redes Sociais
            </h3>
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

          {/* Contact Column */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-gold-400 mb-4">
              Informações
            </h3>
            <p className="text-gray-400">
              Suporte disponível de segunda a sexta
              <br />
              das 9h às 18h (horário de Brasília)
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Bacelar Digital Marketing. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
