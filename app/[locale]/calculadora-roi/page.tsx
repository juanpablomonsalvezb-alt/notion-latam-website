"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight, Zap } from "lucide-react";
import FadeInSection from "@/components/animations/FadeInSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    const duration = 600;
    const step = (end - start) / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setDisplay(end); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{prefix}{display.toLocaleString("es-CL")}{suffix}</span>;
}

export default function CalculadoraROI() {
  const locale = useLocale();
  const [empleados, setEmpleados] = useState(10);
  const [salario, setSalario] = useState(20);
  const [horaBuscando, setHoraBuscando] = useState(3);
  const [horaCambiando, setHoraCambiando] = useState(2);
  const [horaReuniones, setHoraReuniones] = useState(2);
  const [horaAdmin, setHoraAdmin] = useState(3);

  const totalHorasSemana = horaBuscando + horaCambiando + horaReuniones + horaAdmin;
  const totalHorasMes = totalHorasSemana * 4 * empleados;
  const costoMensual = totalHorasMes * salario;
  const ahorroMensual = Math.round(costoMensual * 0.8);
  const roiAnual = ahorroMensual * 12;
  const precioNotion = empleados <= 5 ? 0 : empleados <= 20 ? 16 * empleados : 15 * empleados;
  const mesesRecuperacion = precioNotion > 0 ? Math.ceil(precioNotion / ahorroMensual) : 0;

  const SliderField = ({
    label, value, setValue, min, max, suffix = "h", color = "blue"
  }: {
    label: string; value: number; setValue: (v: number) => void;
    min: number; max: number; suffix?: string; color?: string;
  }) => (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark">{label}</label>
        <span className="text-sm font-bold text-notion-blue">{value}{suffix}</span>
      </div>
      <input
        type="range" min={min} max={max} value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-notion-gray-200 dark:bg-notion-gray-700 rounded-lg appearance-none cursor-pointer accent-notion-blue"
      />
      <div className="flex justify-between text-xs text-notion-text-secondary dark:text-notion-text-dark-secondary mt-1">
        <span>{min}{suffix}</span><span>{max}{suffix}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-notion-bg dark:bg-notion-bg-dark pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <FadeInSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-notion-blue/10 border border-notion-blue/20 mb-6">
              <Calculator className="w-4 h-4 text-notion-blue" />
              <span className="text-sm font-medium text-notion-blue">Calculadora ROI</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-4 tracking-tight">
              Calcula cuánto pierde<br />
              <span className="text-notion-blue">tu empresa sin Notion</span>
            </h1>
            <p className="text-xl text-notion-text-secondary dark:text-notion-text-dark-secondary max-w-2xl mx-auto">
              Descubre el costo real de la desorganización y el ROI de implementar Notion en tu empresa.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <FadeInSection delay={0.1}>
            <div className="bg-white dark:bg-notion-gray-900 rounded-2xl border border-notion-border dark:border-notion-border-dark p-8 shadow-sm">
              <h2 className="text-xl font-bold text-notion-text-primary dark:text-notion-text-dark mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-notion-blue" />
                Datos de tu empresa
              </h2>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark">Número de empleados</label>
                  <span className="text-sm font-bold text-notion-blue">{empleados}</span>
                </div>
                <input type="range" min={1} max={100} value={empleados}
                  onChange={(e) => setEmpleados(Number(e.target.value))}
                  className="w-full h-2 bg-notion-gray-200 dark:bg-notion-gray-700 rounded-lg appearance-none cursor-pointer accent-notion-blue" />
                <div className="flex justify-between text-xs text-notion-text-secondary dark:text-notion-text-dark-secondary mt-1">
                  <span>1</span><span>100</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark">Salario promedio por hora (USD)</label>
                  <span className="text-sm font-bold text-notion-blue">${salario}</span>
                </div>
                <input type="range" min={5} max={80} value={salario}
                  onChange={(e) => setSalario(Number(e.target.value))}
                  className="w-full h-2 bg-notion-gray-200 dark:bg-notion-gray-700 rounded-lg appearance-none cursor-pointer accent-notion-blue" />
                <div className="flex justify-between text-xs text-notion-text-secondary dark:text-notion-text-dark-secondary mt-1">
                  <span>$5</span><span>$80</span>
                </div>
              </div>

              <div className="border-t border-notion-border dark:border-notion-border-dark pt-6">
                <p className="text-sm font-semibold text-notion-text-secondary dark:text-notion-text-dark-secondary mb-4 uppercase tracking-wider">
                  Horas perdidas por empleado / semana
                </p>
                <SliderField label="Buscando información" value={horaBuscando} setValue={setHoraBuscando} min={0} max={15} />
                <SliderField label="Cambiando entre apps" value={horaCambiando} setValue={setHoraCambiando} min={0} max={15} />
                <SliderField label="Reuniones innecesarias" value={horaReuniones} setValue={setHoraReuniones} min={0} max={15} />
                <SliderField label="Tareas administrativas manuales" value={horaAdmin} setValue={setHoraAdmin} min={0} max={15} />
              </div>
            </div>
          </FadeInSection>

          {/* Results */}
          <FadeInSection delay={0.2}>
            <div className="space-y-4">
              {/* Main result card */}
              <motion.div
                key={ahorroMensual}
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                className="bg-notion-blue rounded-2xl p-8 text-white"
              >
                <p className="text-blue-100 text-sm font-medium mb-1 uppercase tracking-wider">Ahorro potencial mensual</p>
                <div className="text-5xl font-bold mb-1">
                  $<AnimatedNumber value={ahorroMensual} />
                </div>
                <p className="text-blue-100 text-sm">Con Notion implementado correctamente</p>
              </motion.div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "Horas perdidas/mes", value: totalHorasMes, suffix: "h", color: "text-orange-500" },
                  { icon: DollarSign, label: "Costo actual/mes", value: costoMensual, prefix: "$", color: "text-red-500" },
                  { icon: TrendingUp, label: "ROI anual", value: roiAnual, prefix: "$", color: "text-green-500" },
                  { icon: Calculator, label: "Meses de recuperación", value: mesesRecuperacion === 0 ? 0 : mesesRecuperacion, suffix: " mes", color: "text-notion-blue" },
                ].map(({ icon: Icon, label, value, prefix, suffix, color }) => (
                  <div key={label} className="bg-white dark:bg-notion-gray-900 rounded-xl border border-notion-border dark:border-notion-border-dark p-5">
                    <Icon className={`w-5 h-5 ${color} mb-2`} />
                    <p className="text-xs text-notion-text-secondary dark:text-notion-text-dark-secondary mb-1">{label}</p>
                    <p className="text-2xl font-bold text-notion-text-primary dark:text-notion-text-dark">
                      <AnimatedNumber value={value} prefix={prefix} suffix={suffix} />
                    </p>
                  </div>
                ))}
              </div>

              {/* Breakdown */}
              <div className="bg-white dark:bg-notion-gray-900 rounded-xl border border-notion-border dark:border-notion-border-dark p-6">
                <h3 className="text-sm font-semibold text-notion-text-secondary dark:text-notion-text-dark-secondary uppercase tracking-wider mb-4">
                  Desglose de pérdidas
                </h3>
                {[
                  { label: "Buscando información", hours: horaBuscando },
                  { label: "Cambiando entre apps", hours: horaCambiando },
                  { label: "Reuniones innecesarias", hours: horaReuniones },
                  { label: "Admin manual", hours: horaAdmin },
                ].map(({ label, hours }) => {
                  const pct = totalHorasSemana > 0 ? Math.round((hours / totalHorasSemana) * 100) : 0;
                  return (
                    <div key={label} className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-notion-text-secondary dark:text-notion-text-dark-secondary">{label}</span>
                        <span className="font-medium text-notion-text-primary dark:text-notion-text-dark">{hours}h/sem</span>
                      </div>
                      <div className="w-full bg-notion-gray-100 dark:bg-notion-gray-800 rounded-full h-2">
                        <motion.div
                          className="bg-notion-blue h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="bg-notion-gray-50 dark:bg-notion-gray-800 rounded-xl p-6 text-center">
                <p className="text-notion-text-secondary dark:text-notion-text-dark-secondary text-sm mb-4">
                  ¿Listo para recuperar esas horas y ese dinero?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href={`/${locale}/consultoria`}>
                    <Button className="bg-notion-blue hover:bg-notion-blue/90 w-full sm:w-auto">
                      Agendar demo gratuita <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href={`/${locale}/templates`}>
                    <Button variant="outline" className="w-full sm:w-auto">
                      Ver Templates
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
