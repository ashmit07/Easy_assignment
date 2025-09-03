import React from "react";
import Head from "next/head";
import Link from "next/link";
import { CheckCircle, ArrowLeft, Sparkles } from "lucide-react";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You - Early HairDx</title>
        <meta
          name="description"
          content="Thank you for joining the Early HairDx beta program. We'll be in touch soon!"
        />
        <meta property="og:title" content="Thank You - Early HairDx" />
        <meta property="og:description" content="Thank you for joining the Early HairDx beta program." />
        <meta property="og:type" content="website" />
      </Head>
      
      <main className="min-h-screen bg-white flex flex-col">
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

        {/* Thank You Content */}
        <section className="flex-1 px-6 py-20 text-center bg-gradient-to-b from-white to-slate-50 flex items-center justify-center">
          <div className="max-w-2xl mx-auto">
            <div className="mx-auto w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-lime-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              You're In! 🎉
            </h1>
            
            <p className="text-lg text-slate-600 mb-8">
              Thank you for joining the Early HairDx beta program. You're now part of an exclusive group that will help shape the future of personalized hair care.
            </p>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-8">
              <div className="flex items-center gap-2 justify-center mb-3">
                <Sparkles className="h-5 w-5 text-lime-600" />
                <span className="font-semibold text-slate-900">What happens next?</span>
              </div>
              <div className="text-left space-y-3 max-w-md mx-auto">
                <div className="text-sm text-slate-600">
                  ✓ We'll send you updates on our development progress
                </div>
                <div className="text-sm text-slate-600">
                  ✓ You'll get early access when we launch in Q2 2025
                </div>
                <div className="text-sm text-slate-600">
                  ✓ Exclusive early bird pricing will be honored
                </div>
                <div className="text-sm text-slate-600">
                  ✓ Priority support from our team
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border font-medium hover:bg-slate-50 transition"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <Link
                href="/sales"
                className="px-6 py-3 rounded-full text-white font-bold shadow hover:scale-105 transition"
                style={{ background: 'linear-gradient(135deg, #9cd312 0%, #d2f47e 100%)' }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 text-center text-sm text-slate-500 border-t">
          © 2025 Early HairDx | Made for APM Assignment
        </footer>
      </main>
    </>
  );
}