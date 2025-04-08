'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Briefcase } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      transition={navbarVariants.transition}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                  ${isScrolled
                    ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-200/80 dark:border-slate-800/50 shadow-sm'
                    : 'bg-gradient-to-b from-black/10 via-black/5 to-transparent border-b border-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Briefcase className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? 'text-blue-500' : 'text-gray-100 group-hover:text-white'}`} />
          <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-slate-800 dark:text-gray-100' : 'text-gray-100 group-hover:text-white'}`}>
            {APP_NAME}
          </span>
        </Link>

        <motion.div
          className="hidden md:flex items-center gap-6 lg:gap-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={navItemVariants}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300
                          ${isScrolled
                            ? 'text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                            : 'text-gray-200/90 hover:text-white'}`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div variants={navItemVariants}>
          </motion.div>
          <motion.div variants={navItemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="sm" className={`transition-all duration-300 rounded-md px-4 py-2 text-sm font-medium
                          ${isScrolled
                            ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm'
                            : 'bg-white/20 hover:bg-white/30 text-white border border-white/40'}`}>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </motion.div>
        </motion.div>

        <div className="md:hidden flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className={`rounded-md hover:bg-gray-500/10 dark:hover:bg-slate-800/60 focus-visible:ring-1 focus-visible:ring-slate-400 focus-visible:ring-offset-0
                      ${isScrolled
                        ? 'text-slate-700 dark:text-gray-300'
                        : 'text-gray-200 hover:text-white'}`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 shadow-lg pb-4"
        >
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-base w-full text-center py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800/70 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
             <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full mt-4 py-3">
                <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
} 