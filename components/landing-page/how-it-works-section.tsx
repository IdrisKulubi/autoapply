'use client';

import { motion } from 'framer-motion';
import { UploadCloud, FileText, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: UploadCloud,
    title: 'Upload Your Resume',
    description: 'Securely upload your resume and provide basic profile information. We handle the rest.',
  },
  {
    icon: FileText,
    title: 'AI Tailors Applications',
    description: 'Our AI analyzes job requirements and customizes your application details for each specific role.',
  },
  {
    icon: CheckCircle,
    title: 'Review & Submit',
    description: 'Quickly review the AI-generated applications and submit them with confidence in just a few clicks.',
  },
];

export function HowItWorksSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-900 dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-100 dark:text-gray-100 mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-lg text-gray-300/80 dark:text-gray-300/80 max-w-2xl mx-auto">
            Effortlessly navigate the job application process with our streamlined workflow.
          </p>
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2 z-0">
            <svg width="100%" height="2">
              <line x1="15%" y1="1" x2="85%" y2="1" strokeDasharray="5, 5" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
            </svg>
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center text-center p-6 bg-slate-800/50 dark:bg-slate-800/80 rounded-2xl border border-slate-700/40 dark:border-slate-700/60 shadow-md"
            >
              <div className="mb-6 p-4 rounded-full bg-blue-500/15 dark:bg-blue-500/20 border border-blue-500/20 dark:border-blue-500/30">
                <step.icon className="h-8 w-8 text-blue-400 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 dark:text-gray-100 mb-2">{step.title}</h3>
              <p className="text-gray-300/80 dark:text-gray-300/80">{step.description}</p>
              <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-indigo-500 dark:bg-indigo-500 text-white dark:text-white rounded-full font-bold text-lg shadow-lg border-2 border-slate-900 dark:border-slate-950">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 