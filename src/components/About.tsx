import { useState, useEffect } from 'react';
import { Award, Clock, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const [salonStatus, setSalonStatus] = useState({
    isOpen: true,
    text: '',
    badgeColor: 'bg-emerald-500'
  });

  useEffect(() => {
    const updateSalonStatus = () => {
      // Pakistan Standard Time is UTC+5
      const nowUtc = new Date().getTime();
      const timezoneOffsetMs = new Date().getTimezoneOffset() * 60 * 1000;
      const pakistanTime = new Date(nowUtc + timezoneOffsetMs + (5 * 60 * 60 * 1000));
      
      const currentHour = pakistanTime.getHours();
      const currentMinute = pakistanTime.getMinutes();
      
      const openingHour = 9;  // 9:00 AM
      const closingHour = 23; // 11:00 PM
      
      if (currentHour >= openingHour && currentHour < closingHour) {
        // Salon is open
        const hoursLeft = closingHour - currentHour - 1;
        const minutesLeft = 60 - currentMinute;
        
        let countdownStr = '';
        if (hoursLeft > 0) {
          countdownStr = `${hoursLeft} hr${hoursLeft > 1 ? 's' : ''} ${minutesLeft} min${minutesLeft !== 1 ? 's' : ''} left`;
        } else {
          countdownStr = `${minutesLeft} min${minutesLeft !== 1 ? 's' : ''} left`;
        }
        
        setSalonStatus({
          isOpen: true,
          text: `Open Today • Closes in ${countdownStr} (at 11:00 PM)`,
          badgeColor: 'bg-emerald-500'
        });
      } else {
        // Salon is closed
        let opensInHours = 0;
        if (currentHour >= closingHour) {
          opensInHours = (24 - currentHour) + openingHour;
        } else {
          opensInHours = openingHour - currentHour;
        }
        
        // Adjust for current hour
        const minutesLeftToHour = 60 - currentMinute;
        const netHours = opensInHours - 1;
        
        setSalonStatus({
          isOpen: false,
          text: `Currently Closed • Opens in ${netHours > 0 ? `${netHours} hrs ` : ''}${minutesLeftToHour} mins (at 9:00 AM)`,
          badgeColor: 'bg-amber-500'
        });
      }
    };

    updateSalonStatus();
    const interval = setInterval(updateSalonStatus, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-neutral-950 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Column: Overlapping Luxury Images */}
          <div className="relative">
            <div className="aspect-[4/5] sm:aspect-square w-full max-w-[500px] mx-auto relative rounded-2xl overflow-hidden shadow-2xl group border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
                alt="Slider Salon Expert Shaving"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              
              {/* Floating Award Label inside main image */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md border border-gold-500/15 p-4 rounded-xl flex items-center space-x-3">
                <span className="p-2 bg-gold-500/20 rounded-lg text-gold-400">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-500 font-bold block">
                    Luxury Standard
                  </span>
                  <span className="text-sm font-serif text-white font-semibold block">
                    Certified Professional Groomers
                  </span>
                </div>
              </div>
            </div>

            {/* Accent Small Overlay Image */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 hidden sm:block w-[240px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=400"
                alt="Beard sculpt detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            {/* Outline Decorative borders */}
            <div className="absolute -top-4 -left-4 w-40 h-40 border-t-2 border-l-2 border-gold-500/20 rounded-tl-2xl pointer-events-none" />
          </div>

          {/* Text/Content Column */}
          <div className="flex flex-col">
            
            {/* Header / Sub */}
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-extrabold block mb-3">
              ABOUT OUR HOUSE
            </span>
            <h2 className="luxury-text text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
              Slider Salon &amp; Spa<br />
              <span className="serif-accent italic text-gold-400 font-normal lowercase block mt-1">the ultimate men&apos;s grooming haven</span>
            </h2>

            {/* Pakistan Location Pill */}
            <div className="flex items-center space-x-2 glass-card py-2 px-4 rounded-full w-fit mb-6">
              <MapPin className="h-4 w-4 text-gold-500" />
              <span className="text-xs text-gray-350 font-light">
                QCMH+3JJ, Pir Mahal, Pakistan (Located inside <strong className="text-gold-450 font-semibold">Al Jannat Mart</strong>)
              </span>
            </div>

            {/* About Narrative */}
            <p className="text-gray-300 font-sans font-light leading-relaxed mb-6">
              Slider Salon &amp; Spa is a premium men’s salon and spa located in Pir Mahal, Pakistan, offering professional grooming, hair styling, facial treatments, beard styling, skincare, and luxury salon services.
            </p>
            <p className="text-gray-400 font-sans font-light leading-relaxed mb-8">
              We focus heavily on hygiene, professional execution, and luxurious comfort. Step in to enjoy high-speed Wi-Fi, fully climate-controlled lounge, state-of-the-art styling chairs, and complimentary brewed coffee while our master barbers reconstruct your personal outlook with world-class accuracy.
            </p>

            {/* Dynamic Realtime Status indicator banner */}
            <div className="mb-8 p-4 rounded-xl glass-card border border-gold-500/20 flex items-center space-x-3.5">
              <div className="relative flex h-3.5 w-3.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${salonStatus.badgeColor} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${salonStatus.badgeColor}`} />
              </div>
              <p className="text-xs sm:text-sm font-sans font-medium text-gray-200">
                {salonStatus.text}
              </p>
            </div>

            {/* Mini Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 glass-card p-4 rounded-xl">
                <span className="p-2.5 bg-black/40 text-gold-400 border border-gold-500/10 rounded-lg shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="luxury-text text-sm font-bold text-white mb-1">
                    Extreme Hygiene
                  </h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Surgical-grade daily sterilization of every comb, clipper, blade and cloth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 glass-card p-4 rounded-xl">
                <span className="p-2.5 bg-black/40 text-gold-400 border border-gold-500/10 rounded-lg shrink-0">
                  <Heart className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="luxury-text text-sm font-bold text-white mb-1">
                    Premium Comfort
                  </h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Luxurious leather seating, dynamic acoustics, and a warm, stressless atmosphere.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
