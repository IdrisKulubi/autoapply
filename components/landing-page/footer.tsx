import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import { ModeToggle } from '@/components/theme/mode-toggle';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-gray-400 dark:text-gray-500 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {currentYear} {APP_NAME}. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <Link href="/terms" className="text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
           <ModeToggle />
        </div>
      </div>
    </footer>
  );
} 