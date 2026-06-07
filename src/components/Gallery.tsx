import React, { useState, useEffect } from 'react';
import { GALLERY_DATA } from '../data/salonData';
import { ZoomIn, X, ChevronLeft, ChevronRight, Eye, Grid3X3, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type GalleryCategory = 'all' | 'interior' | 'haircut' | 'beard' | 'facial' | 'massage' | 'grooming';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>('all');
  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { label: 'All Catalog', value: 'all' },
    { label: 'Salon Interior', value: 'interior' },
    { label: 'Classic Cuts', value: 'haircut' },
    { label: 'Beard Trims', value: 'beard' },
    { label: 'Facial & Skin', value: 'facial' },
    { label: 'Body Spa', value: 'massage' },
    { label: 'Royal Grooming', value: 'grooming' }
  ];

  // Filter gallery items based on activeTab
  const filteredItems = activeTab === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeTab);

  // Reset visibleCount whenever tab changes to prevent blank screen
  useEffect(() => {
    setVisibleCount(12);
  }, [activeTab]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard accessibility for lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const itemsToShow = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute right-10 bottom-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-extrabold block mb-3">
            VISUAL LUXURY SHOWCASE
          </span>
          <h2 className="luxury-text text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Elite Grooming Gallery
          </h2>
          <div className="h-[1.5px] w-24 gold-gradient mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-300 font-sans font-light leading-relaxed">
            Browse through 30+ real, high-resolution snapshots illustrating our opulent leather styling stations, high-end skincare treatments, master haircuts, and serene spa rooms.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value as GalleryCategory)}
              className={`px-4 py-2.5 rounded-full text-[10px] tracking-widest uppercase font-bold border transition-all duration-300 cursor-pointer ${
                activeTab === cat.value
                  ? 'green-blue-gradient text-white border-cyan-500/50 shadow-md shadow-cyan-500/25 hover:scale-[1.03]'
                  : 'bg-white/5 backdrop-blur-md text-gray-400 border-white/10 hover:border-cyan-500/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {itemsToShow.map((item, idx) => (
              <motion.div
                key={item.id}
                layoutId={`gallery_card_${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden group border border-white/10 bg-white/5 shadow-lg cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="luxury-text text-[9px] font-extrabold tracking-widest uppercase text-gold-500 mb-1">
                    {item.category}
                  </span>
                  <h3 className="luxury-text text-sm font-bold text-white tracking-wide block mb-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center space-x-1.5 text-xs text-gold-400 font-medium font-sans">
                    <ZoomIn className="h-3.5 w-3.5" />
                    <span className="text-[10px] tracking-wider uppercase font-bold">Zoom Image</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 12, filteredItems.length))}
              className="green-blue-gradient text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex items-center space-x-2.5 mx-auto hover:opacity-95"
            >
              <Grid3X3 className="h-4 w-4" />
              <span>Load More Images ({filteredItems.length - visibleCount} hidden)</span>
            </button>
          </div>
        )}
      </div>

      {/* Exquisite Lightbox Popup */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button top right */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3.5 glass-card hover:bg-gold-500 border border-white/10 hover:border-gold-500 text-white hover:text-black rounded-full transition-all duration-300 z-50 pointer-events-auto shadow-md"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>
 
            {/* Left navigation arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3.5 glass-card hover:bg-gold-500 border border-white/10 hover:border-gold-500 text-white hover:text-black rounded-full transition-all duration-300 z-50 pointer-events-auto shadow-md"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
 
            {/* Lightbox Main Frame */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center relative pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl border-2 border-gold-500/25 shadow-2xl pointer-events-auto"
                referrerPolicy="no-referrer"
              />
 
              {/* Title Info bottom details */}
              <div className="mt-4 glass-card rounded-2xl px-5 py-4 text-center sm:text-left self-stretch flex flex-col sm:flex-row sm:justify-between items-center gap-3 pointer-events-auto">
                <div>
                  <span className="text-[10px] font-sans font-bold tracking-widest text-gold-500 uppercase block mb-0.5">
                    Category: {filteredItems[lightboxIndex].category}
                  </span>
                  <h4 className="luxury-text text-sm font-bold text-white tracking-wide">
                    {filteredItems[lightboxIndex].title}
                  </h4>
                </div>
                
                <span className="text-xs font-mono text-gray-350 bg-black/50 px-3.5 py-1.5 rounded-full border border-white/10 shrink-0">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </motion.div>
 
            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3.5 glass-card hover:bg-gold-500 border border-white/10 hover:border-gold-500 text-white hover:text-black rounded-full transition-all duration-300 z-50 pointer-events-auto shadow-md"
              aria-label="Next Image"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
