'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Briefcase } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' }, // Assuming HowItWorksSection has id="how-it-works"
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
                  ${isScrolled ? 'bg-blue-950/80 backdrop-blur-lg border-b border-blue-800/50 shadow-md' : 'bg-transparent border-b border-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <Briefcase className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? 'text-blue-400' : 'text-blue-300 group-hover:text-blue-100'}`} />
          <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-blue-200' : 'text-blue-100 group-hover:text-white'}`}>
            {APP_NAME}
          </span>
        </Link>

        {/* Desktop Navigation */}
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
                          ${isScrolled ? 'text-blue-200/80 hover:text-blue-100' : 'text-blue-100/80 hover:text-white'}`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div variants={navItemVariants}>
             <ModeToggle />
          </motion.div>
          <motion.div variants={navItemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="sm" className={`transition-all duration-300 rounded-md px-4 py-2 
                          ${isScrolled ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-blue-100/10 hover:bg-blue-100/20 text-blue-100 border border-blue-200/30'}`}>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button & Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className={`text-blue-100/80 hover:text-white hover:bg-blue-100/10 ${isScrolled ? 'text-blue-200' : 'text-blue-100'}`}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden absolute top-full left-0 right-0 bg-blue-950/95 backdrop-blur-md border-t border-blue-800/50 shadow-lg pb-4"
        >
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-blue-100 hover:text-white font-medium text-lg w-full text-center py-2 rounded-md hover:bg-blue-800/50 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
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