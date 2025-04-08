'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gray-100 dark:bg-gray-900 overflow-hidden">
       {/* Animated background elements - adjust colors */}
      <motion.div
        // Use accent indigo
        className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        // Use primary blue
        className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white dark:bg-slate-800/60 backdrop-blur-md border border-gray-200 dark:border-slate-700/50 rounded-2xl p-8 md:p-12 lg:p-16 text-center shadow-xl"
        >
          <div className="flex justify-center mb-4">
             {/* Use primary blue for icon */}
            <Sparkles className="h-10 w-10 text-blue-500 dark:text-blue-400 animate-pulse" />
          </div>
           {/* Use slate-800 text */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-gray-100 mb-4">
            Ready to Accelerate Your Job Search?
          </h2>
           {/* Use gray-600 text */}
          <p className="text-lg text-gray-600 dark:text-gray-300/80 max-w-xl mx-auto mb-8">
            Sign up today and let our AI handle the applications. Your next career move is just a click away.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             {/* Use primary blue for button */}
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