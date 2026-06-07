import { CHOOSE_US_DATA } from '../data/salonData';
import { UserCheck, Sparkles, Shield, Crown, Scissors, Settings, Gem, Smile, Sofa } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'user-check':
        return <UserCheck className="h-6 w-6 text-gold-400" />;
      case 'sparkles':
        return <Sparkles className="h-6 w-6 text-gold-400" />;
      case 'shield':
        return <Shield className="h-6 w-6 text-gold-400" />;
      case 'crown':
        return <Crown className="h-6 w-6 text-gold-400" />;
      case 'scissors':
        return <Scissors className="h-6 w-6 text-gold-400" />;
      case 'cog':
        return <Settings className="h-6 w-6 text-gold-400" />;
      case 'gem':
        return <Gem className="h-6 w-6 text-gold-400" />;
      case 'smile':
        return <Smile className="h-6 w-6 text-gold-400" />;
      case 'sofa':
        return <Sofa className="h-6 w-6 text-gold-400" />;
      default:
        return <Sparkles className="h-6 w-6 text-gold-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-black to-neutral-950 relative overflow-hidden">
      {/* Absolute backgrounds */}
      <div className="absolute right-1/4 top-1/3 w-96 h-96 bg-gold-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-extrabold block mb-3">
            UNCOMPROMISING REFINEMENT
          </span>
          <h2 className="luxury-text text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Why Gentlemen Choose Slider
          </h2>
          <div className="h-[1.5px] w-24 gold-gradient mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-300 font-sans font-light leading-relaxed">
            From hospital-grade tool sterilization to our master stylists and international skin serums, we set the standard for premium male service in Pir Mahal.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHOOSE_US_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group glass-card p-8 rounded-2xl border border-white/5 hover:border-gold-500/40 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background glow on card hover */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/10 transition-colors" />

              <div className="flex items-center space-x-4 mb-5">
                <span className="p-3 bg-black/40 border border-gold-500/15 rounded-xl group-hover:border-gold-500/40 group-hover:text-gold-300 transition-all shadow-md">
                  {getIcon(item.iconName)}
                </span>
                <h3 className="luxury-text text-md font-bold text-white tracking-wide">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-405 font-sans font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic visual stat panel */}
        <div className="mt-16 glass-card p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="luxury-text text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
              Ready to Treat Yourself to an Upgraded Standard?
            </h4>
            <p className="text-xs sm:text-sm text-gray-350 font-sans font-light">
              Appointments fill up rapidly on weekends. Tap to reserve your premium spot within seconds.
            </p>
          </div>
          <a
            href="#booking-section"
            className="w-full md:w-auto green-blue-gradient text-white font-extrabold text-[11px] tracking-widest uppercase px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all inline-block text-center whitespace-nowrap green-blue-glow shrink-0 cursor-pointer hover:opacity-95"
          >
            Schedule Session Now
          </a>
        </div>

      </div>
    </section>
  );
}
