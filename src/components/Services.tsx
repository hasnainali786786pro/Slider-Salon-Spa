import { useState } from 'react';
import { SERVICES_DATA } from '../data/salonData';
import { Clock, Star, Sparkles, CheckCircle, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

type CategoryFilter = 'all' | 'hair' | 'beard' | 'skin' | 'spa' | 'package';

export default function Services({ onSelectService }: ServicesProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const categories = [
    { label: 'All Treatments', value: 'all' },
    { label: 'Haircut & Styling', value: 'hair' },
    { label: 'Beard Artistry', value: 'beard' },
    { label: 'Skincare / Facials', value: 'skin' },
    { label: 'Therapeutic Spa', value: 'spa' },
    { label: 'Special Packages', value: 'package' }
  ];

  const filteredServices = activeFilter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(service => service.category === activeFilter);

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative vertical texts & soft ambient halos */}
      <div className="absolute right-0 top-1/4 translate-x-12 rotate-90 text-[120px] font-serif font-black text-white/5 uppercase select-none pointer-events-none tracking-widest hidden xl:block">
        TREATMENTS
      </div>
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-extrabold block mb-3">
            MEMBERS EXCLUSIVE MENU
          </span>
          <h2 className="luxury-text text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Elite Grooming &amp; Spa Services
          </h2>
          <div className="h-[1.5px] w-24 gold-gradient mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-400 font-sans font-light leading-relaxed">
            Curate your look with individual tailored treatments or indulge in our comprehensive, executive-level head-to-toe package series.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 md:mb-20 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value as CategoryFilter)}
              className={`px-5 py-3 rounded-full text-xs tracking-widest uppercase font-bold border transition-all duration-300 ${
                activeFilter === cat.value
                  ? 'green-blue-gradient text-white border-cyan-500/50 shadow-md shadow-cyan-500/20 hover:scale-[1.03] hover:opacity-95'
                  : 'bg-white/5 backdrop-blur-md text-gray-400 border-white/10 hover:border-cyan-500/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid (AnimatePresence used to trigger smooth tab switching fades) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                id={`service_card_${service.id}`}
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group glass-card rounded-xl overflow-hidden border border-white/5 hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Card Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-[0.8] contrast-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                    
                    {/* Category Label Pin */}
                    <span className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-gold-500/15 text-[9px] font-sans font-bold tracking-widest uppercase text-gold-400 px-3.5 py-1 rounded-full">
                      {service.category === 'hair' ? 'Hair Cut & Styling' :
                       service.category === 'beard' ? 'Beard Grooming' :
                       service.category === 'skin' ? 'Skin Treatment' :
                       service.category === 'spa' ? 'Body Spa' : 'Imperial Package'}
                    </span>
                    
                    {/* Duration badge */}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-1.5 bg-black/75 backdrop-blur-sm border border-white/5 py-1 px-2.5 rounded-md text-[10px] font-mono tracking-wider text-gray-300">
                      <Clock className="h-3 w-3 text-gold-400" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Core Card Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="luxury-text text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-gold-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      {/* Price styling */}
                      <span className="font-sans font-bold text-xs sm:text-sm text-gold-400 whitespace-nowrap bg-gold-950/20 px-3 py-1 rounded-full border border-gold-500/25">
                        Rs. {service.price}
                      </span>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-400 font-sans tracking-wide font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card CTA Booking Trigger */}
                <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between">
                  {/* Rating or Trust label */}
                  <div className="flex items-center space-x-1">
                    <Sparkles className="h-3.5 w-3.5 text-gold-500 animate-pulse" />
                    <span className="text-[10px] uppercase text-gray-400 font-light tracking-wider">
                      Premium Quality
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.name)}
                    className="green-blue-gradient text-white font-semibold text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:scale-[1.03] cursor-pointer hover:opacity-95"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer info box */}
        <div className="mt-16 text-center max-w-xl mx-auto rounded-2xl p-6 glass-card">
          <p className="text-xs text-gray-300 font-sans font-light leading-relaxed">
            Need customized packages or group booking for weddings/groom parties? Contact us directly on WhatsApp or over call for exclusive imperial arrangements.
          </p>
        </div>

      </div>
    </section>
  );
}
