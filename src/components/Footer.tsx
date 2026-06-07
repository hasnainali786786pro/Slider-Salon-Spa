import React from 'react';
import { Scissors, Phone, MapPin, Mail, Clock, MessageCircle, Star, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
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
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      
      {/* Background soft element */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-gold-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand details (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center space-x-2 group w-fit">
              <span className="p-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg shadow-md group-hover:scale-105 transition-transform">
                <Scissors className="h-5 w-5 text-black" />
              </span>
              <div>
                <span className="luxury-text text-xl font-bold tracking-widest text-white group-hover:text-gold-400 transition-colors block">
                  SLIDER
                </span>
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-gold-500 block">
                  SALON & SPA
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-gray-400 font-sans font-light leading-relaxed max-w-sm">
              Slider Salon &amp; Spa is a premium men&apos;s salon and spa located in Pir Mahal, Pakistan, offering professional grooming, hair styling, facial treatments, beard styling, skincare, and luxury salon services.
            </p>

            {/* Google trust badge mock */}
            <div className="inline-flex items-center space-x-3 bg-white/5 px-4 py-2.5 rounded-full border border-white/10">
              <div className="flex items-center text-xs space-x-1">
                <span className="luxury-text font-black text-white">4.4</span>
                <Star className="h-3.5 w-3.5 text-gold-500 fill-gold-500" />
              </div>
              <span className="text-[10px] uppercase font-sans tracking-wider text-gray-350 font-medium border-l border-white/10 pl-3">
                26 Google Reviews
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 Columns) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="luxury-text text-sm font-semibold text-white tracking-widest uppercase mb-2">
              Browse House
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'About Experience', href: '#about' },
                { name: 'Services Menu', href: '#services' },
                { name: 'Grooming Gallery', href: '#gallery' },
                { name: 'Transformations', href: '#transformations' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Customer Reviews', href: '#reviews' },
                { name: 'Hours & Location', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-xs text-gray-400 hover:text-gold-400 font-sans transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Treatments (2.5 Columns) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="luxury-text text-sm font-semibold text-white tracking-widest uppercase mb-2">
              Featured Menu
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Premium Hair Cut', href: '#services' },
                { name: 'Beard Sculpting', href: '#services' },
                { name: 'Advanced Hydra Facial', href: '#services' },
                { name: 'Keratin smoothing', href: '#services' },
                { name: 'Deep-Tissue Massage', href: '#services' },
                { name: 'Gold Face Cleanup', href: '#services' },
                { name: 'Groom Imperial Package', href: '#services' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-xs text-gray-400 hover:text-gold-400 font-sans transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Contact Info (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="luxury-text text-sm font-semibold text-white tracking-widest uppercase mb-2">
              Locker Room Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start space-x-3 text-xs text-gray-400">
                <MapPin className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                <span>
                  QCMH+3JJ, Inside Al Jannat Mart, Pir Mahal, Punjab, Pakistan.
                </span>
              </li>
              
              <li className="flex items-center space-x-3 text-xs">
                <Phone className="h-4 w-4 text-gold-500 shrink-0" />
                <a
                  href="tel:+923136562320"
                  className="text-gold-400 hover:text-white transition-colors font-bold font-mono"
                  referrerPolicy="no-referrer"
                >
                  +92 313 6562320
                </a>
              </li>

              <li className="flex items-center space-x-3 text-xs text-gray-400">
                <Clock className="h-4 w-4 text-gold-500 shrink-0" />
                <span>Open Daily: 9 AM — 11 PM</span>
              </li>
              
              <li className="flex items-center space-x-3 text-xs text-gray-400">
                <Mail className="h-4 w-4 text-gold-500 shrink-0" />
                <span className="font-mono">zain@slider.com</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full green-blue-gradient hover:opacity-95 text-white font-extrabold text-[10px] tracking-widest uppercase py-3 rounded-full transition-transform hover:scale-[1.02] shadow-lg cursor-pointer"
              >
                BOOK APPOINTMENT NOW
              </button>
            </div>
          </div>

        </div>

        {/* Lower layout copyrights & socials */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] sm:text-xs text-gray-500 font-sans text-center sm:text-left">
            &copy; {currentYear} Slider Salon &amp; Spa. All rights reserved. Created for premium male luxury in Pir Mahal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] sm:text-xs text-gray-500 font-medium">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <span className="text-white/5">•</span>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Grooming Service</a>
            <span className="text-white/5">•</span>
            <span className="flex items-center space-x-1 text-gold-500/80">
              <span>Crafted with</span>
              <Heart className="h-3 w-3 text-red-500 fill-red-500/30" />
              <span>for Pak Gentlemen</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
