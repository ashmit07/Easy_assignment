import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Droplets, FlaskConical } from "lucide-react";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Early HairDx – Personalized Hair Diagnosis</title>
        <meta
          name="description"
          content="India's first at-home AI-powered hair diagnostic kit with dermatologist review."
        />
      </Head>
      <main className="min-h-screen bg-white flex flex-col">
        {/* Hero */}
        <section className="px-6 py-20 md:py-28 text-center bg-gradient-to-b from-white to-slate-50">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
            India's First{" "}
            <span className="text-lime-600">Hair Diagnostic Kit</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            No more trial-and-error. HairDx uncovers the root cause of your hair
            problems with AI + expert dermatologists.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/sales"
              className="px-6 py-3 rounded-full bg-lime-600 text-white font-bold shadow hover:scale-105 transition"
            >
              Discover HairDx
            </Link>
            <a
              href="#why"
              className="px-6 py-3 rounded-full border font-medium hover:bg-slate-50"
            >
              Why it matters
            </a>
          </div>
        </section>

        {/* Problem with icons */}
        <section id="why" className="px-6 py-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900 text-center">
            Why India needs this
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white border rounded-2xl shadow-sm text-center"
            >
              <ShieldCheck className="mx-auto h-8 w-8 text-lime-600" />
              <p className="mt-3 font-medium text-slate-900">
                80% misdiagnose scalp issues
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white border rounded-2xl shadow-sm text-center"
            >
              <Droplets className="mx-auto h-8 w-8 text-lime-600" />
              <p className="mt-3 font-medium text-slate-900">
                Hard water affects 70M+ households
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white border rounded-2xl shadow-sm text-center"
            >
              <FlaskConical className="mx-auto h-8 w-8 text-lime-600" />
              <p className="mt-3 font-medium text-slate-900">
                Trial-and-error wastes ₹2000+/mo
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA footer */}
        <footer className="mt-auto px-6 py-8 text-center text-sm text-slate-500 border-t">
          © 2025 Early HairDx | Made for APM Assignment
        </footer>
      </main>
    </>
  );
}