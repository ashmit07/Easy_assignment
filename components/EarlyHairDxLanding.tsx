import React, { useState } from "react";
import Head from "next/head";
import { Sparkles, ChevronRight, Check, UserCheck, Brain, FlaskConical, ShieldCheck, Award } from "lucide-react";
import Link from "next/link";

const colors = {
  accent: "#9cd312",
  accent2: "#d2f47e",
};

const FAQ = ({ q, a }: { q: string; a: string }) => (
  <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <summary className="cursor-pointer font-medium text-slate-900 flex items-center justify-between">
      {q}
      <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90 text-slate-500" />
    </summary>
    <p className="mt-3 text-slate-600 text-sm leading-6">{a}</p>
  </details>
);

export default function EarlyHairDxLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Redirect to thank you page after a brief delay
    setTimeout(() => {
      window.location.href = '/thank-you';
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Early HairDx Sales - Get Your Kit</title>
        <meta
          name="description"
          content="Pre-order your Early HairDx kit. AI-powered hair analysis with dermatologist review. Early bird pricing available."
        />
        <meta property="og:title" content="Early HairDx Sales - Get Your Kit" />
        <meta property="og:description" content="Pre-order your Early HairDx kit. AI-powered hair analysis with dermatologist review. Early bird pricing available." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="px-6 py-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <div>
              <span className="text-lg font-bold text-slate-900">Early</span>
              <span className="text-lg font-medium text-lime-600 ml-1">HairDx</span>
            </div>
          </Link>
        </div>
        </header>
        
        {/* Hero */}
      <section className="px-6 py-16 md:py-24 text-center bg-gradient-to-b from-white to-slate-50">
        <div className="flex justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white shadow px-4 py-1 text-sm font-medium">
            <ShieldCheck className="h-4 w-4 text-lime-600" />
            Dermatologist Backed
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white shadow px-4 py-1 text-sm font-medium">
            <Award className="h-4 w-4 text-lime-600" />
            Lab Tested
          </div>
        </div>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
          Discover your hair's root cause
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Early HairDx is an at-home diagnostic kit + AI report that analyzes
          your scalp, hair fiber, and water hardness.
        </p>
        <a
          href="#cta"
          className="mt-8 inline-block px-8 py-4 rounded-full text-white font-bold shadow hover:scale-105 transition"
          style={{ background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accent2} 100%)` }}
        >
          Get My Kit →
        </a>
      </section>

      {/* CTA form */}
      <section
        id="cta"
        className="border-t border-slate-100 bg-slate-50/50 px-6 py-16"
      >
        <div className="max-w-md mx-auto rounded-2xl border bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">
            Pre-order the Beta
          </div>
          {!submitted ? (
            <form onSubmit={onSubmit} className="mt-4 space-y-4">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2"
              />
              <button
                type="submit"
                className="w-full rounded-full px-5 py-3 text-white font-bold shadow hover:scale-105 transition"
                style={{ background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accent2} 100%)` }}
              >
                Join Beta List
              </button>
              <p className="text-xs text-slate-500 text-center">
                We'll never share your email.
              </p>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-sm text-green-800">
              Thanks! You're on the beta list:{" "}
              <span className="font-medium">{email}</span>
            </div>
          )}
        </div>
      </section>

      {/* How it works steps */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-900 text-center mb-10">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mb-4">
              <FlaskConical className="h-6 w-6 text-lime-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">1. Science Kit</h3>
            <p className="text-sm text-slate-600">
              Collect hair, scalp, and water samples with our easy-to-use kit
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-lime-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">2. AI Analysis</h3>
            <p className="text-sm text-slate-600">
              Our AI analyzes your samples and identifies root causes
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mb-4">
              <UserCheck className="h-6 w-6 text-lime-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">3. Doctor Review</h3>
            <p className="text-sm text-slate-600">
              Expert dermatologists review and personalize your treatment plan
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">FAQs</h2>
        <div className="space-y-4">
          <FAQ
            q="How does HairDx work?"
            a="Collect samples with the kit, mail them back, and get an AI + dermatologist-reviewed report in 7 days."
          />
          <FAQ q="Is it safe?" a="Yes, all tools are clinically safe and non-invasive." />
          <FAQ
            q="What do I get?"
            a="A personalized 12-week plan, dermatologist consult, and product recommendations."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            Early Bird Pricing
          </h2>
          <p className="text-slate-600 mb-8">
            Be among the first to experience personalized hair diagnosis
          </p>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">₹2,999</div>
              <div className="text-lg text-slate-500 line-through">₹4,999</div>
              <div className="text-lime-600 font-medium mb-6">Early Bird Special - 40% Off</div>
              
              <div className="text-left space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-lime-600" />
                  <span className="text-slate-700">Complete at-home testing kit</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-lime-600" />
                  <span className="text-slate-700">AI-powered analysis report</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-lime-600" />
                  <span className="text-slate-700">Dermatologist consultation (15 min)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-lime-600" />
                  <span className="text-slate-700">12-week personalized treatment plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-lime-600" />
                  <span className="text-slate-700">Product recommendations</span>
                </div>
              </div>
              
              <div className="bg-lime-50 border border-lime-200 rounded-xl p-4 mb-6">
                <div className="text-sm font-medium text-lime-800">
                  🚀 Coming Soon - Q2 2025
                </div>
                <div className="text-xs text-lime-600 mt-1">
                  Pre-order now to secure early bird pricing
                </div>
              </div>
              
              <a
                href="#cta"
                className="w-full inline-block px-6 py-3 rounded-full text-white font-bold shadow hover:scale-105 transition"
                style={{ background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accent2} 100%)` }}
              >
                Secure My Early Bird Kit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-sm text-slate-500 border-t">
        © 2025 Early HairDx | Made for APM Assignment
      </footer>
      </div>
    </>
  );
}