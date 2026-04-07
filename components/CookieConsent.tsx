"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const STORAGE_KEY = "notion-latam-cookie-consent";

type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<ConsentState>({ necessary: true, analytics: false, marketing: false });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Show banner after 1s
      const t = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (all: boolean) => {
    const consent: ConsentState = all
      ? { necessary: true, analytics: true, marketing: true }
      : { necessary: true, analytics: prefs.analytics, marketing: prefs.marketing };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-white dark:bg-notion-gray-800 rounded-2xl border border-notion-border dark:border-notion-border-dark shadow-2xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-notion-blue/10 rounded-lg flex-shrink-0">
                <Cookie className="w-5 h-5 text-notion-blue" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-notion-text-primary dark:text-notion-text-dark mb-1">Usamos cookies</h3>
                <p className="text-sm text-notion-text-secondary dark:text-notion-text-dark-secondary leading-relaxed">
                  Para mejorar tu experiencia y analizar el tráfico del sitio. Consulta nuestra{" "}
                  <Link href="/es/privacidad" className="text-notion-blue hover:underline">política de privacidad</Link>.
                </p>
              </div>
              <button onClick={() => setVisible(false)} className="text-notion-text-secondary hover:text-notion-text-primary transition-colors flex-shrink-0">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Preferences (expanded) */}
            <AnimatePresence>
              {showDetails && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="space-y-3 mb-4 pb-4 border-b border-notion-border dark:border-notion-border-dark">
                    {[
                      { key: "necessary" as const, label: "Necesarias", desc: "Sesión y preferencias básicas", required: true },
                      { key: "analytics" as const, label: "Analíticas", desc: "Google Analytics (anonimizado)", required: false },
                      { key: "marketing" as const, label: "Marketing", desc: "Facebook Pixel para campañas", required: false },
                    ].map(({ key, label, desc, required }) => (
                      <div key={key} className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-notion-text-primary dark:text-notion-text-dark">{label}</p>
                          <p className="text-xs text-notion-text-secondary">{desc}</p>
                        </div>
                        <button
                          disabled={required}
                          onClick={() => !required && setPrefs((p) => ({ ...p, [key]: !p[key] }))}
                          className={`relative w-10 h-5 rounded-full transition-colors flex-shrink-0 ${
                            prefs[key] ? "bg-notion-blue" : "bg-notion-gray-300"
                          } ${required ? "opacity-60 cursor-default" : "cursor-pointer"}`}
                        >
                          <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${prefs[key] ? "translate-x-5" : ""}`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-2">
              <Button onClick={() => accept(true)} className="w-full bg-notion-blue hover:bg-notion-blue/90 text-sm">
                <Check className="mr-1.5 w-3.5 h-3.5" /> Aceptar todas
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={reject} className="flex-1 text-sm">
                  Solo necesarias
                </Button>
                <Button variant="outline" onClick={() => setShowDetails(!showDetails)} className="text-sm px-3">
                  <Settings className="w-3.5 h-3.5" />
                </Button>
              </div>
              {showDetails && (
                <Button onClick={() => accept(false)} variant="outline" className="w-full text-sm text-notion-blue border-notion-blue/30">
                  Guardar preferencias
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
