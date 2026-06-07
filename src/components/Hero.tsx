import { Phone, MessageCircle, ArrowRight, Calendar, Star, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-black overflow-hidden">
        <img
          src="https://img.pikbest.com/png-images/20241009/mens-salon-logo_10942303.png!bw700"
          alt="Slider Men's Salon Crest Logo"
          className="w-[450px] h-[450px] sm:w-[580px] sm:h-[580px] md:w-[720px] md:h-[720px] lg:w-[850px] lg:h-[850px] object-contain opacity-35 filter brightness-[0.8] contrast-[1.25] transition-transform duration-[1.5s] ease-out hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend into matte black layout with magenta theme accent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent opacity-60" />
      </div>

      {/* Floating subtle lines or gold sparks */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Elite Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-900/40 to-black/40 border border-gold-500/20 px-4 py-1.5 rounded-full mb-6 z-10"
            >
              <Sparkles className="h-4 w-4 text-gold-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.25em] uppercase text-gold-300">
                PIR MAHAL&apos;S PREMIER MASCULINE RETREAT
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="luxury-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 tracking-wide"
            >
              <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-400 bg-clip-text text-transparent font-black">
                Slider
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent inline-block mt-2">
                <span className="serif-accent italic lowercase font-normal">Salon</span> &amp; Spa
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl font-sans font-light leading-relaxed mb-10"
            >
              Tailored Luxury Haircuts, Master Beard Styling, Advanced Hydra Facials, and Therapeutic Spa Rituals for the Modern Gentleman of Punjab. Experience International Grooming Standards in Pir Mahal.
            </motion.p>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mb-12 w-full sm:w-auto"
            >
              <button
                id="hero_cta_book_btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto green-blue-gradient text-white font-bold text-xs tracking-widest uppercase py-4 px-8 rounded-full transition-all duration-300 shadow-xl green-blue-glow hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 cursor-pointer hover:opacity-95"
              >
                <Calendar className="h-4 w-4 text-white" />
                <span>Book Appointment</span>
              </button>

              <button
                id="hero_cta_explore_btn"
                onClick={() => scrollToSection('#services')}
                className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white font-bold text-xs tracking-widest uppercase py-4 px-8 rounded-full transition-all duration-300 border border-white/20 hover:border-cyan-500 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Secondary Quick Contact Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-6 border-t border-white/5 pt-8 w-full"
            >
              <a
                href="https://wa.me/923136562320"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2.5 text-xs text-gray-300 hover:text-green-400 transition-colors duration-300"
                referrerPolicy="no-referrer"
              >
                <span className="p-2 bg-green-500/10 hover:bg-green-500/20 rounded-full border border-green-500/20">
                  <MessageCircle className="h-4 w-4 text-green-500 fill-green-500/10" />
                </span>
                <span>WhatsApp: +92 313 6562320</span>
              </a>

              <a
                href="tel:+923136562320"
                className="flex items-center space-x-2.5 text-xs text-gray-300 hover:text-gold-400 transition-colors duration-300"
                referrerPolicy="no-referrer"
              >
                <span className="p-2 bg-gold-500/10 hover:bg-gold-500/20 rounded-full border border-gold-500/20">
                  <Phone className="h-4 w-4 text-gold-400" />
                </span>
                <span>Call Now: +92 313 6562320</span>
              </a>
            </motion.div>
          </div>

          {/* Luxury rating & Location badge side column */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end w-full mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-[380px] h-[450px] max-w-full rounded-2xl border border-gold-500/20 shadow-2xl overflow-hidden group"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFBCMhzeDt80Xdl-le0urzKxRmKp7dDXFZ0-yXceWfySq9pCvEbyHCY-y-gr0d0kp4omW-uM20kKV1XCIQyTSp8JPPYVamEm6fd1pErxQLDNV1T95C17SGQ11-KQykZNGIym4gT=w426-h240-k-no"
                alt="Slider Salon Master Styling"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Luxury Frame Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent transition-opacity duration-300 group-hover:via-black/25" />
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none z-10 m-2 transition-all duration-300 group-hover:border-gold-500/30" />
              
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
}
