'use client';

import { motion } from 'framer-motion';
import { Bot, Clock, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Autofill',
    description: 'Our intelligent AI analyzes job descriptions and automatically fills out applications with your tailored information.',
    delay: 0.1,
  },
  {
    icon: Clock,
    title: 'Save Hours Weekly',
    description: 'Stop wasting time on repetitive form filling. Reclaim your time and focus on preparing for interviews.',
    delay: 0.2,
  },
  {
    icon: Target,
    title: 'Increased Accuracy',
    description: 'Minimize errors and ensure consistency across all your applications for a more professional impression.',
    delay: 0.3,
  },
];

export function FeaturesSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Stagger effect
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-gray-100 mb-4">
            Why Choose AutoApply?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300/80 max-w-3xl mx-auto">
            Leverage the power of AI to supercharge your job search and land your dream role faster than ever before.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible
            >
              <Card className="h-full bg-white dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700/50 text-slate-800 dark:text-gray-100 shadow-md hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-shadow duration-300 rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className="p-3 rounded-md bg-blue-100 dark:bg-blue-500/20">
                    <feature.icon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800 dark:text-gray-100">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300/80">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 