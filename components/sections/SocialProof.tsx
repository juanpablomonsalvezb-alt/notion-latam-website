"use client";

import { Star } from "lucide-react";
import FadeInSection from "@/components/animations/FadeInSection";

const testimonials = [
  {
    name: "María González",
    role: "CEO, StartupMX",
    location: "México",
    content: "Los templates de Notion LATAM transformaron completamente nuestra operación. Pasamos de tener todo disperso a tener un sistema centralizado en menos de una semana.",
    rating: 5,
    avatar: "MG",
  },
  {
    name: "Carlos Ruiz",
    role: "Fundador, TechCL",
    location: "Chile",
    content: "La consultoría fue increíble. Armaron TODO nuestro sistema operativo en Notion. Ahora gestionamos proyectos, clientes y finanzas en un solo lugar.",
    rating: 5,
    avatar: "CR",
  },
  {
    name: "Ana Silva",
    role: "Gerente de Operaciones",
    location: "Argentina",
    content: "El curso me convirtió en experta de Notion. Ahora puedo crear mis propios sistemas y ayudar al equipo. Mejor inversión del año.",
    rating: 5,
    avatar: "AS",
  },
];

const stats = [
  { value: "2,500+", label: "Templates Vendidos" },
  { value: "500+", label: "Empresas Atendidas" },
  { value: "15+", label: "Países LATAM" },
  { value: "4.9/5", label: "Rating Promedio" },
];

export default function SocialProof() {
  return (
    <section className="py-24 px-6 bg-notion-gray-50 dark:bg-notion-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-notion-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-notion-text-secondary dark:text-notion-text-dark-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Testimonials */}
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary">
              Empresas de todo LATAM confían en nosotros
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <div className="bg-white dark:bg-notion-gray-800 rounded-2xl p-8 notion-shadow hover:notion-shadow-lg transition-all-smooth">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-notion-blue to-purple-500 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-notion-text-primary dark:text-notion-text-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
