import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ChevronRight } from "lucide-react";

const colors = {
  brand: "#393f2d",
  accent: "#d2f47e",
  accent2: "#9cd312",
  soft: "#faf8f1"
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-slate-700 border-slate-200 bg-white shadow-sm">
    {children}
  </span>
);

const FAQ = ({ q, a }: { q: string; a: string }) => (
  <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <summary className="cursor-pointer list-none select-none font-medium text-slate-900 flex items-center justify-between">
      {q}
      <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90 text-slate-500" />
    </summary>
    <p className="mt-3 text-slate-600 text-sm leading-6">{a}</p>
  </details>
);

export default function EarlyHairDxLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState<"en"|"hi">("en");

  const copy = {
    en: {
      heroTitle: "Discover your hair’s root cause — then fix it with science",
      heroSubtitle: "Early HairDx is an at-home diagnostic kit + AI report that analyzes your scalp, hair fiber and water hardness.",
      ctaPrimary: "Get my HairDx Kit",
      betaTitle: "Pre-order the Beta",
      betaButton: "Join the Beta List",
      thanks: "Thanks! You’re on the beta list."
    },
    hi: {
      heroTitle: "अपने बालों की जड़ समस्या जानें — और विज्ञान से समाधान करें",
      heroSubtitle: "अर्ली HairDx एक घर-पर उपयोग किट + एआई रिपोर्ट है जो आपकी खोपड़ी, बाल और पानी की गुणवत्ता का विश्लेषण करती है।",
      ctaPrimary: "मेरा HairDx किट पाएं",
      betaTitle: "बीटा प्री-ऑर्डर करें",
      betaButton: "बीटा सूची से जुड़ें",
      thanks: "धन्यवाद! आप बीटा सूची में शामिल हो गए हैं।"
    }
  };

  const t = copy[lang];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", { email, lang });
    setSubmitted(true);
  };

  const trackClick = (label: string) => {
    console.log("CTA click", { label, lang });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md" style={{ background: colors.accent2 }} />
            <span className="text-sm font-semibold tracking-tight text-slate-900">EARLY</span>
            <span className="mx-2 text-slate-300">|</span>
            <span className="text-sm text-slate-600">HairDx</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === "en" ? "hi" : "en")} className="text-sm border rounded-full px-3 py-1">
              {lang === "en" ? "हिन्दी" : "EN"}
            </button>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Pill><Sparkles className="h-4 w-4" /> Personalized hair & scalp diagnosis</Pill>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              {t.heroTitle}
            </h1>
            <p className="mt-4 text-slate-600 leading-7">{t.heroSubtitle}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" onClick={() => trackClick("primaryCTA")} className="inline-flex items-center justify-center rounded-full px-5 py-3 text-white font-medium shadow-sm" style={{ background: colors.accent2 }}>
                {t.ctaPrimary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="border-t border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">{t.betaTitle}</div>
            {!submitted ? (
              <form onSubmit={onSubmit} className="mt-3 space-y-3">
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2" />
                <button type="submit" onClick={() => trackClick("formSubmit")} className="w-full rounded-full px-5 py-3 text-white font-medium shadow-sm" style={{ background: colors.accent2 }}>
                  {t.betaButton}
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-sm text-green-800">
                {t.thanks} <span className="font-medium">{email}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">FAQs</h2>
        <div className="space-y-4">
          <FAQ q="How does HairDx work?" a="Collect samples with the kit, mail them back, and get an AI + dermatologist-reviewed report in 7 days." />
          <FAQ q="Is it safe?" a="Yes, all tools are clinically safe and non-invasive." />
          <FAQ q="What do I get?" a="A personalized 12-week plan, dermatologist consult, and product recommendations." />
        </div>
      </section>
    </div>
  );
}
