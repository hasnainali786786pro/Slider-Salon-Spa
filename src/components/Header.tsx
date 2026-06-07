import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of dry navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/60 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-lg'
            : 'bg-gradient-to-b from-black/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group animate-fade-in">
              <div className="relative w-16 h-16 bg-black/45 rounded-full border border-cyan-500/25 p-1 overflow-hidden group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg shadow-cyan-500/15">
                <img
                  src="https://img.pikbest.com/png-images/20241009/mens-salon-logo_10942303.png!bw700"
                  alt="Slider Salon Logo"
                  className="w-full h-full scale-110 object-contain filter brightness-[1.15] contrast-[1.1]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="luxury-text text-lg sm:text-2xl font-bold tracking-[0.2em] bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-cyan-300 transition-all duration-300 block">
                  SLIDER
                </span>
                <span className="text-[9px] font-sans tracking-[0.5em] uppercase text-white/65 block -mt-1">
                  SALON & SPA
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-xs tracking-wider uppercase text-gray-300 hover:text-cyan-400 font-semibold transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-cyan-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="https://wa.me/923136562320"
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center space-x-2 text-xs text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300 px-3 py-1.5 border border-white/10 hover:border-cyan-500/30 rounded-full bg-white/5 backdrop-blur-sm"
              >
                <MessageCircle className="h-4 w-4 text-green-500 fill-green-500/20" />
                <span>WhatsApp</span>
              </a>
              <button
                id="header_book_now_btn"
                onClick={onOpenBooking}
                className="green-blue-gradient text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={onOpenBooking}
                className="sm:hidden green-blue-gradient text-white text-[10px] font-bold tracking-widest uppercase px-3.5 py-2 rounded-full transition-all cursor-pointer"
              >
                Book
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-cyan-400 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[60px] z-40 bg-black/95 backdrop-blur-lg lg:hidden px-6 py-6 border-t border-cyan-500/15 flex flex-col justify-between"
          >
            <div className="space-y-6 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block font-serif text-lg tracking-wide text-gray-200 hover:text-cyan-400 transition-colors duration-300 border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="space-y-4 pb-20">
              <a
                href="tel:+923136562320"
                className="flex items-center justify-center space-x-3 w-full bg-white/5 hover:bg-white/10 text-white rounded-md py-3 text-sm font-medium border border-white/10 transition-colors"
                referrerPolicy="no-referrer"
              >
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>Call Now: +92 313 6562320</span>
              </a>
              <a
                href="https://wa.me/923136562320"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-3 w-full bg-green-600/10 hover:bg-green-600/20 text-white rounded-md py-3 text-sm font-medium border border-green-500/20 transition-colors"
                referrerPolicy="no-referrer"
              >
                <MessageCircle className="h-4 w-4 text-green-500 fill-green-500/10" />
                <span>WhatsApp Live Chat</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full green-blue-gradient text-white py-4 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg cursor-pointer"
              >
                BOOK AN APPOINTMENT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
