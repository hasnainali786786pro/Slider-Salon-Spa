import { useState, useEffect } from 'react';
import { REVIEWS_DATA } from '../data/salonData';
import { Star, ArrowLeft, ArrowRight, Quote, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto sliding every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  return (
    <section id="reviews" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute right-10 top-1/4 w-[400px] h-[400px] bg-gold-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-extrabold block mb-3">
            VERIFIED RESIDENT REVIEWS
          </span>
          <h2 className="luxury-text text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Words From Our Noble Clients
          </h2>
          <div className="h-[1.5px] w-24 gold-gradient mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-300 font-sans font-light leading-relaxed">
            Read transparent feedback straight from the local gentlemen of Pir Mahal who frequent Slider Salon &amp; Spa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Aggregate Rating Sheet Panel (Left Side - 4 Columns) */}
          <div className="lg:col-span-4 glass-card p-8 rounded-2xl flex flex-col justify-between h-full border border-gold-500/15">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-gold-500 block mb-2 font-bold">
                GOOGLE LOCAL BUSINESS
              </span>
              <h3 className="luxury-text text-lg font-bold text-white mb-6">Aggregate Rating</h3>
              
              <div className="flex items-baseline space-x-3 mb-2">
                <span className="luxury-text text-5xl font-black text-white">4.4</span>
                <span className="text-sm text-gray-400 font-medium font-sans">/ 5.0 Stars</span>
              </div>

              {/* Stars display */}
              <div className="flex space-x-1 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 text-gold-500 fill-gold-500" />
                ))}
                <div className="relative">
                  <Star className="h-5 w-5 text-gray-650" />
                  <div className="absolute top-0 left-0 w-[40%] overflow-hidden h-full">
                    <Star className="h-5 w-5 text-gold-500 fill-gold-500" />
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-400 font-sans tracking-wide font-light mb-8">
                Based on <strong className="text-gold-400 font-semibold">26 verified local client evaluations</strong> on Google Maps.
              </p>

              {/* Google Maps Star Breakdown sheet */}
              <div className="space-y-2.5">
                <div className="flex items-center text-xs space-x-4">
                  <span className="w-12 text-gray-400 font-medium">5 Star</span>
                  <div className="flex-1 bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold-500 h-full rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <span className="w-8 text-right text-gray-400 font-light">82%</span>
                </div>

                <div className="flex items-center text-xs space-x-4">
                  <span className="w-12 text-gray-400 font-medium">4 Star</span>
                  <div className="flex-1 bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold-500 h-full rounded-full" style={{ width: '12%' }}></div>
                  </div>
                  <span className="w-8 text-right text-gray-400 font-light">12%</span>
                </div>

                <div className="flex items-center text-xs space-x-4">
                  <span className="w-12 text-gray-400 font-medium">3 Star</span>
                  <div className="flex-1 bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold-500 h-full rounded-full" style={{ width: '4%' }}></div>
                  </div>
                  <span className="w-8 text-right text-gray-400 font-light">4%</span>
                </div>

                <div className="flex items-center text-xs space-x-4">
                  <span className="w-12 text-gray-400 font-medium">2 Star</span>
                  <div className="flex-1 bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold-500 h-full rounded-full" style={{ width: '2%' }}></div>
                  </div>
                  <span className="w-8 text-right text-gray-400 font-light">2%</span>
                </div>

                <div className="flex items-center text-xs space-x-4">
                  <span className="w-12 text-gray-400 font-medium">1 Star</span>
                  <div className="flex-1 bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold-500 h-full rounded-full" style={{ width: '0%' }}></div>
                  </div>
                  <span className="w-8 text-right text-gray-400 font-light">0%</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-[10px] uppercase font-mono text-gold-500 tracking-widest text-center flex items-center justify-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-Time reviews synchronized</span>
            </div>
          </div>

          {/* Testimonial Slider Panel (Right Side - 8 Columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full relative">
            <Quote className="absolute -top-10 -left-6 h-28 w-28 text-white/5 pointer-events-none select-none" />

            <div className="relative overflow-hidden min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35 }}
                  className="glass-card border border-gold-500/20 p-7 sm:p-10 rounded-2xl shadow-xl hover:border-gold-500/40 transition-all duration-300"
                >
                  {/* Testimonial Stars & Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                    <div className="flex space-x-1 text-gold-500">
                      {Array.from({ length: REVIEWS_DATA[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-gold-500 text-gold-500" />
                      ))}
                      {REVIEWS_DATA[currentIndex].rating < 5 && (
                        <Star className="h-4.5 w-4.5 text-gray-600" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{REVIEWS_DATA[currentIndex].date}</span>
                  </div>

                  {/* Comment */}
                  <p className="text-sm sm:text-base text-gray-200 font-sans font-light leading-relaxed mb-6 italic">
                    &ldquo;{REVIEWS_DATA[currentIndex].comment}&rdquo;
                  </p>

                  {/* Customer Block info */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={REVIEWS_DATA[currentIndex].avatar}
                        alt={REVIEWS_DATA[currentIndex].name}
                        className="h-12 w-12 rounded-full object-cover border border-gold-500/25 shadow-md"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="luxury-text font-bold text-white tracking-wide text-sm sm:text-base">
                          {REVIEWS_DATA[currentIndex].name}
                        </h4>
                        <div className="flex items-center space-x-1.5 text-emerald-400 mt-0.5">
                          <CheckCircle2 className="h-3 w-3 fill-emerald-400/15" />
                          <span className="text-[10px] font-sans font-semibold tracking-wider uppercase">Verified Patron</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Google Logo Mock styling */}
                    <div className="flex items-center space-x-1 font-semibold">
                      <span className="text-[10px] font-sans text-gold-500 tracking-widest uppercase opacity-75">GOOGLE PATRON</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider navigations */}
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={handlePrev}
                className="p-3.5 glass-card hover:bg-gold-500 border border-white/10 hover:border-gold-500 text-white hover:text-black rounded-full transition-all duration-300 cursor-pointer shadow"
                aria-label="Previous Review"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              
              <div className="text-xs font-mono text-gray-405 uppercase tracking-widest px-3 font-semibold">
                {currentIndex + 1} / {REVIEWS_DATA.length}
              </div>

              <button
                onClick={handleNext}
                className="p-3.5 glass-card hover:bg-gold-500 border border-white/10 hover:border-gold-500 text-white hover:text-black rounded-full transition-all duration-300 cursor-pointer shadow"
                aria-label="Next Review"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
