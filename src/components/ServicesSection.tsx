"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Building2, Truck, Headset } from "lucide-react";

const MotionH2 = motion.h2 as React.FC<React.HTMLAttributes<HTMLHeadingElement> & HTMLMotionProps<"h2">>;
const MotionDiv = motion.div as React.FC<React.HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div">>;

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Vente de matériaux",
      desc: "Un large choix de matériaux pour le bâtiment, le jardin et l’aménagement extérieur.",
    },
    {
      icon: Truck,
      title: "Livraison rapide",
      desc: "Nous livrons directement sur vos chantiers dans toute la région en 24‑48h.",
    },
    {
      icon: Headset,
      title: "Conseils personnalisés",
      desc: "Une équipe d’experts à votre écoute pour vous guider et optimiser vos achats.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-indigo-50 via-sky-100 to-purple-50 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionH2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl mb-16"
        >
          Nos Services
        </MotionH2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <MotionDiv
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/70 p-8 shadow-xl backdrop-blur-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:bg-white/90"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 shadow-lg">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                {title}
              </h3>
              <p className="mt-3 text-base text-gray-700 leading-relaxed">
                {desc}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
