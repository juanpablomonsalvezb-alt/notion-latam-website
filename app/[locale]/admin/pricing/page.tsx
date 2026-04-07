"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Star, TrendingUp, Calculator } from "lucide-react";

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button key={i} onClick={() => onChange(i)}>
          <Star className={`w-6 h-6 cursor-pointer transition-colors ${i <= value ? "text-yellow-400 fill-yellow-400" : "text-notion-gray-200 dark:text-notion-gray-700"}`} />
        </button>
      ))}
    </div>
  );
}

export default function PricingCalculator() {
  // Template pricing
  const [horasTemplate, setHorasTemplate] = useState(10);
  const [complejidad, setComplejidad] = useState(3);
  const [nichoTemplate, setNichoTemplate] = useState("General");
  const [competencia, setCompetencia] = useState("Media");

  // Consultoría pricing
  const [horasConsultoria, setHorasConsultoria] = useState(20);
  const [nivelCliente, setNivelCliente] = useState("Mediano");
  const [urgencia, setUrgencia] = useState("Normal");

  // Template calcs
  const tarifaHora = 40; // USD/hora de producción
  const multiplier = nichoTemplate === "Específico" ? 1.4 : 1.0;
  const compMult = competencia === "Baja" ? 1.3 : competencia === "Alta" ? 0.85 : 1.0;
  const baseTemplate = horasTemplate * tarifaHora * 0.3; // 30% del costo producción
  const templateMin = Math.round(baseTemplate * complejidad * 0.4 * multiplier * compMult);
  const templateMax = Math.round(baseTemplate * complejidad * 0.8 * multiplier * compMult);
  const templatePremium = Math.round(templateMax * 1.35);

  // Consultoría calcs
  const tarifaBase = nivelCliente === "Grande" ? 80 : nivelCliente === "Mediano" ? 55 : 40;
  const urgMult = urgencia === "Urgente" ? 1.5 : urgencia === "Prioritario" ? 1.2 : 1.0;
  const consultMin = Math.round(horasConsultoria * tarifaBase * urgMult * 0.8);
  const consultMax = Math.round(horasConsultoria * tarifaBase * urgMult * 1.2);
  const consultPremium = Math.round(consultMax * 1.25);

  const InputField = ({ label, type = "range", value, onChange, min, max }: any) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark">{label}</label>
        <span className="text-sm font-bold text-notion-blue">{value}{type === "range" ? "h" : ""}</span>
      </div>
      <input type="range" min={min} max={max} value={value} onChange={e => onChange(Number(e.target.value))}
        className="w-full h-2 bg-notion-gray-200 dark:bg-notion-gray-700 rounded-lg appearance-none cursor-pointer accent-notion-blue" />
    </div>
  );

  const SelectField = ({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) => (
    <div className="mb-4">
      <label className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark block mb-1">{label}</label>
      <div className="flex gap-2 flex-wrap">
        {options.map(o => (
          <button key={o} onClick={() => onChange(o)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all cursor-pointer ${value === o
              ? "bg-notion-blue text-white border-notion-blue"
              : "bg-white dark:bg-notion-gray-900 border-notion-border dark:border-notion-border-dark text-notion-text-secondary dark:text-notion-text-dark-secondary hover:border-notion-blue/50"}`}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );

  const PriceCard = ({ label, value, highlight = false }: { label: string; value: number; highlight?: boolean }) => (
    <div className={`rounded-xl p-5 border ${highlight ? "bg-notion-blue border-notion-blue text-white" : "bg-white dark:bg-notion-gray-900 border-notion-border dark:border-notion-border-dark"}`}>
      <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${highlight ? "text-blue-100" : "text-notion-text-secondary dark:text-notion-text-dark-secondary"}`}>{label}</p>
      <p className={`text-3xl font-bold ${highlight ? "text-white" : "text-notion-text-primary dark:text-notion-text-dark"}`}>
        ${value.toLocaleString()}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-notion-blue/10 rounded-lg">
            <Calculator className="w-6 h-6 text-notion-blue" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark">Calculadora de Precios</h1>
            <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary text-sm">Uso interno — Notion LATAM</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Template pricing */}
          <div className="bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6">
            <h2 className="text-lg font-bold text-notion-text-primary dark:text-notion-text-dark mb-5 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-notion-blue" /> Precio de Template
            </h2>
            <InputField label="Horas de producción" value={horasTemplate} onChange={setHorasTemplate} min={1} max={50} />
            <div className="mb-4">
              <label className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark block mb-2">Complejidad</label>
              <StarRating value={complejidad} onChange={setComplejidad} />
            </div>
            <SelectField label="Nicho" value={nichoTemplate} onChange={setNichoTemplate} options={["General", "Específico"]} />
            <SelectField label="Competencia en el mercado" value={competencia} onChange={setCompetencia} options={["Baja", "Media", "Alta"]} />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <PriceCard label="Mínimo" value={templateMin} />
              <PriceCard label="Máximo" value={templateMax} />
              <PriceCard label="Premium" value={templatePremium} highlight />
            </div>
          </div>

          {/* Consultoría pricing */}
          <div className="bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6">
            <h2 className="text-lg font-bold text-notion-text-primary dark:text-notion-text-dark mb-5 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-notion-blue" /> Precio de Consultoría
            </h2>
            <InputField label="Horas estimadas de trabajo" value={horasConsultoria} onChange={setHorasConsultoria} min={5} max={100} />
            <SelectField label="Tamaño del cliente" value={nivelCliente} onChange={setNivelCliente} options={["Pequeño", "Mediano", "Grande"]} />
            <SelectField label="Urgencia del proyecto" value={urgencia} onChange={setUrgencia} options={["Normal", "Prioritario", "Urgente"]} />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <PriceCard label="Mínimo" value={consultMin} />
              <PriceCard label="Máximo" value={consultMax} />
              <PriceCard label="Premium" value={consultPremium} highlight />
            </div>
            <motion.div className="mt-4 p-3 bg-notion-gray-50 dark:bg-notion-gray-800 rounded-lg" key={`${consultMin}-${consultMax}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-xs text-notion-text-secondary dark:text-notion-text-dark-secondary">
                Tarifa/hora implícita: <strong className="text-notion-text-primary dark:text-notion-text-dark">${Math.round(consultMax / horasConsultoria)} USD</strong>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Reference table */}
        <div className="mt-8 bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark p-6">
          <h3 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-4">Precios actuales del catálogo</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-notion-border dark:border-notion-border-dark">
                  <th className="text-left py-2 text-notion-text-secondary dark:text-notion-text-dark-secondary font-medium">Producto</th>
                  <th className="text-right py-2 text-notion-text-secondary dark:text-notion-text-dark-secondary font-medium">Precio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-notion-border dark:divide-notion-border-dark">
                {[
                  ["Template Sistema Financiero", "$40 USD"],
                  ["Template CRM WhatsApp", "$35 USD"],
                  ["Template Control Inventario", "$45 USD"],
                  ["Template Gestión Proyectos", "$30 USD"],
                  ["Template RRHH", "$45 USD"],
                  ["Template Planificador Contenido", "$30 USD"],
                  ["Template Facturación SII Chile", "$55 USD"],
                  ["Template OKRs", "$35 USD"],
                  ["Template Todo en Uno Startup", "$99 USD"],
                  ["Curso Notion Completo", "$89 USD"],
                  ["Consultoría — Auditoría Express", "$250 USD"],
                  ["Consultoría — Implementación", "$650 USD"],
                  ["Consultoría — Enterprise", "$2,200 USD"],
                ].map(([name, price]) => (
                  <tr key={name}>
                    <td className="py-2 text-notion-text-primary dark:text-notion-text-dark">{name}</td>
                    <td className="py-2 text-right font-bold text-notion-blue">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
