'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-t from-blue-950 via-blue-900 to-blue-900/80 overflow-hidden">
       {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-blue-800/50 backdrop-blur-md border border-blue-700/40 rounded-2xl p-8 md:p-12 lg:p-16 text-center shadow-xl"
        >
          <div className="flex justify-center mb-4">
            <Sparkles className="h-10 w-10 text-blue-400 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-100 mb-4">
            Ready to Accelerate Your Job Search?
          </h2>
          <p className="text-lg text-blue-200/70 max-w-xl mx-auto mb-8">
            Sign up today and let our AI handle the applications. Your next career move is just a click away.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-md shadow-lg transition duration-300 ease-in-out">
              <Link href="/sign-up">
                Start AutoApplying Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 