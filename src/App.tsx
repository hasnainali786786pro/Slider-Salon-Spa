import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import BeforeAfter from './components/BeforeAfter';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp, Sparkles, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Back-to-Top display
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setPreSelectedService(serviceName);
    setIsBookingModalOpen(true);
  };

  const handleClearPreSelect = () => {
    setPreSelectedService('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden selection:bg-gold-500 selection:text-black">
      
      {/* 1. Header Sticky Nav */}
      <Header onOpenBooking={handleOpenBookingModal} />

      {/* 2. Hero Cinematic Section */}
      <Hero onOpenBooking={handleOpenBookingModal} />

      {/* 3. About Section */}
      <About />

      {/* 4. Services Section */}
      <Services onSelectService={handleSelectService} />

      {/* 5. Before & After Slider Section */}
      <BeforeAfter />

      {/* 6. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 7. Gallery Masonry Section */}
      <Gallery />

      {/* 8. Google-Style Review Slider Section */}
      <Reviews />

      {/* 9. Anchor Booking Form (Directly placed on the page for convenience) */}
      <BookingForm
        preSelectedServiceName={preSelectedService}
        onClearPreSelect={handleClearPreSelect}
      />

      {/* 10. Contact Details & Iframe Google Map Section */}
      <Contact />

      {/* 11. Luxury Footer Section */}
      <Footer onOpenBooking={handleOpenBookingModal} />

      {/* 12. Elegant Overlay Booking Modal (Triggers from top header or card click for speed) */}
      <BookingForm
        isOpenModal={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preSelectedServiceName={preSelectedService}
        onClearPreSelect={handleClearPreSelect}
      />

      {/* ====================================================
          FLOATING PREMIUM BRAND WIDGETS
          ==================================================== */}
      
      {/* Floating WhatsApp Support Button */}
      <a
        href="https://wa.me/923136562320"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-22 right-6 z-40 w-14 h-14 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center border border-white/10 group animate-bounce-slow overflow-hidden"
        title="WhatsApp Live Setup Support"
        referrerPolicy="no-referrer"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTX0_K8EQVt0sMD-yd0VD1gUnE4PA3LnylAw&s"
          alt="WhatsApp Logo"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <span className="absolute right-14 bg-black/90 backdrop-blur-md text-gold-400 text-[10px] font-sans font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-lg border border-gold-500/10 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp Help +92 313 6562320
        </span>
      </a>

      {/* Floating Call Assistance Button */}
      <a
        href="tel:+923136562320"
        className="fixed bottom-38 right-6 z-40 w-14 h-14 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center border border-gold-500/20 group overflow-hidden"
        title="Direct Support Phone line"
        referrerPolicy="no-referrer"
      >
        <img
          src="https://www.citypng.com/public/uploads/preview/hd-blue-square-phone-icon-png-70175169505976293lpobjtvw.png"
          alt="Phone Icon"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <span className="absolute right-14 bg-black/90 backdrop-blur-md text-gray-200 text-[10px] font-sans tracking-widest uppercase px-3 py-1.5 rounded-lg border border-white/5 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Now: +92 313 6562320
        </span>
      </a>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 bg-neutral-900 hover:bg-gold-500 hover:text-black text-gold-400 p-3.5 sm:p-4 rounded-full shadow-2xl transition-colors flex items-center justify-center border border-white/5 hover:border-gold-500 pointer-events-auto cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
