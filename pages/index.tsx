import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Early HairDx – Personalized Hair Diagnosis</title>
      </Head>
      <main className="min-h-screen bg-white">
        <section className="px-6 py-20 text-center bg-gradient-to-b from-white to-slate-50">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
            India’s First <span className="text-lime-600">Hair Diagnostic Kit</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            No more trial-and-error. Early HairDx uncovers the root cause of your hair problems with AI + expert dermatologists.
          </p>
          <Link href="/sales" className="mt-8 inline-block px-6 py-3 rounded-full bg-lime-600 text-white font-medium hover:bg-lime-700">
            Discover HairDx
          </Link>
        </section>
      </main>
    </>
  );
}
