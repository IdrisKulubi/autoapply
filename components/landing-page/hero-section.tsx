'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeroAnimation } from './hero-animation';

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-blue-50">
      <HeroAnimation />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-center space-y-6"
          >
            <Badge 
              variant="outline"
              className="w-fit bg-blue-500/10 border-blue-400/30 text-blue-300 py-1 px-3 text-sm animate-pulse"
            >
              <Zap className="mr-2 h-4 w-4 text-blue-400" /> Powered by AI
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 bg-clip-text text-transparent leading-tight">
              Stop Applying, Start AutoApplying
            </h1>
            <p className="max-w-[600px] text-blue-200/80 md:text-xl">
              Land your dream job faster. Our AI handles the tedious application process, so you can focus on acing the interview.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-md shadow-lg transition duration-300 ease-in-out w-full sm:w-auto">
                  <Link href="/sign-up">
                    Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg" className="border-blue-400/50 text-blue-200 hover:bg-blue-800/50 hover:text-blue-100 px-8 py-3 rounded-md transition duration-300 ease-in-out w-full sm:w-auto">
                  <Link href="#features">
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:flex justify-center items-center relative z-0"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
} 