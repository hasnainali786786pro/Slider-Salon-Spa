import React, { useState, useRef, useEffect } from 'react';
import { BEFORE_AFTER_DATA } from '../data/salonData';
import { Sparkles, Eye, Scissors, Layers, Shrink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BeforeAfter() {
  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // 50% midpoint
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeSet = BEFORE_AFTER_DATA[activeSetIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="transformations" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute left-5 top-1/4 w-72 h-72 bg-gold-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-extrabold block mb-3">
            INTERACTIVE LOOK COMPASS
          </span>
          <h2 className="luxury-text text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Master Grooming Transformations
          </h2>
          <div className="h-[1.5px] w-24 gold-gradient mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-400 font-sans font-light leading-relaxed">
            Drag the golden divider left and right on the image cards to observe our meticulous hair sculpting, precise beard lining, and facial purification transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls Column (Left side) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 order-2 lg:order-1">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gold-500 block mb-1 font-semibold">
              Select Comparison Model
            </span>
            
            <div className="space-y-4">
              {BEFORE_AFTER_DATA.map((set, idx) => (
                <button
                  key={set.id}
                  onClick={() => {
                    setActiveSetIndex(idx);
                    setSliderPosition(50); // reset slider
                  }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start space-x-4 ${
                    activeSetIndex === idx
                      ? 'glass-card border-cyan-500/40 shadow-lg shadow-cyan-500/5 scale-[1.02]'
                      : 'bg-white/5 border-white/5 hover:border-cyan-500/20 hover:bg-white/10'
                  }`}
                >
                  <span className={`p-2 rounded-lg shrink-0 ${
                    activeSetIndex === idx ? 'green-blue-gradient text-white' : 'bg-black/45 text-cyan-400 border border-white/5'
                  }`}>
                    {idx === 0 ? <Scissors className="h-4 w-4" /> :
                     idx === 1 ? <Sparkles className="h-4 w-4" /> : <Layers className="h-4 w-4" />}
                  </span>
                  <div>
                    <h3 className={`luxury-text font-bold text-sm tracking-wide ${
                      activeSetIndex === idx ? 'text-gold-400' : 'text-white'
                    }`}>
                      {set.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-sans font-light mt-1 leading-relaxed line-clamp-2">
                      {set.tagline}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-4 glass-card rounded-2xl mt-6 hidden lg:block">
              <span className="text-[9px] font-mono uppercase tracking-wider text-gold-400 block mb-1 font-bold">
                Instructions
              </span>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Using your touch screen or computer mouse, swipe or drag directly on the image slider box to drag and peer underneath the clean styling boundary.
              </p>
            </div>
          </div>

          {/* Interactive Slider Card (Right side) */}
          <div className="lg:col-span-8 flex flex-col items-center order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSet.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[640px] aspect-[4/3] rounded-2xl overflow-hidden glass-card shadow-2xl relative select-none"
                ref={containerRef}
              >
                {/* BEFORE Image (Always on bottom) */}
                <img
                  src={activeSet.beforeUrl}
                  alt="Raw groom comparison before"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-75 transition-all"
                  referrerPolicy="no-referrer"
                />
                
                {/* Before Label overlay left */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/5 text-[9px] font-sans font-bold tracking-widest text-[#B0B0B0] px-3.5 py-1.5 rounded-md uppercase pointer-events-none">
                  RAW HAIR
                </div>

                {/* AFTER Image Wrapper (Cropped automatically by sliderPosition width) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeSet.afterUrl}
                    alt="Slider clean finished style after"
                    className="absolute inset-0 w-[640px] h-[510px] max-w-none object-cover pointer-events-none filter brightness-95"
                    style={{ width: containerRef.current?.offsetWidth || 640 }}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* After Label overlay right */}
                  <div className="absolute top-4 left-4 bg-gold-950/80 backdrop-blur-md border border-gold-500/20 text-[9px] font-sans font-bold tracking-widest text-gold-400 px-3.5 py-1.5 rounded-md uppercase pointer-events-none whitespace-nowrap">
                    SLIDER SHARP STYLE
                  </div>
                </div>

                {/* The Golden Sliding Line with Center Handle */}
                <div
                  className="absolute inset-y-0 w-0.5 bg-gold-400 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Glowing center badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black/90 border-2 border-gold-400 rounded-full flex items-center justify-center shadow-lg cursor-ew-resize">
                    <div className="flex space-x-0.5">
                      <span className="text-[10px] text-gold-400 font-bold">&lsaquo;</span>
                      <span className="text-[10px] text-gold-400 font-semibold">&rsaquo;</span>
                    </div>
                  </div>
                </div>

                {/* Hidden Drag Overlay Range Input - Extremely bulletproof solution */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onTouchStart={() => setIsDragging(true)}
                  onTouchEnd={() => setIsDragging(false)}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Displaying caption */}
            <div className="text-center mt-6 max-w-lg glass-card p-4 rounded-xl">
              <span className="text-[10px] font-mono tracking-widest uppercase text-gold-500 font-bold mb-1 block">
                Model Result Caption
              </span>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                {activeSet.tagline}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
