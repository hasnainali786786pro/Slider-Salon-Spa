import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Navigation, Copy, Check, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [emailText, setEmailText] = useState({ name: '', phone: '', note: '' });

  const address = "Slider Salon & Spa, QCMH+3JJ, Pir Mahal, Pakistan. Inside Al Jannat Mart.";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailText.name || !emailText.phone) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setEmailText({ name: '', phone: '', note: '' });
      alert("Your quick message was received! Our coordinator will contact you shortly.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
      {/* Decorative ornaments */}
      <div className="absolute left-1/3 bottom-0 w-[500px] h-[300px] bg-gold-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-extrabold block mb-3">
            VISIT THE TEMPLE OF REFINEMENT
          </span>
          <h2 className="luxury-text text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Hours &amp; Location
          </h2>
          <div className="h-[1.5px] w-24 gold-gradient mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-300 font-sans font-light leading-relaxed">
            Conveniently nestled inside Al Jannat Mart on the main strip of Pir Mahal. Come experience ultimate rest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Detail Columns (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              <h3 className="luxury-text text-2xl font-bold text-white tracking-wide">
                Slider Salon &amp; Spa
              </h3>
              
              <div className="h-[2px] w-16 gold-gradient" />
              
              <p className="text-sm text-gray-450 font-sans font-light leading-relaxed">
                Walk-ins are welcomed, but securing an appointment guarantees our senior stylist’s dedicated time. Ample customer parking is available on-site at Al Jannat Mart.
              </p>

              {/* Physical Address Block */}
              <div className="flex items-start space-x-4 max-w-md">
                <span className="p-3 bg-white/5 border border-gold-500/25 text-gold-400 rounded-xl shrink-0 mt-1">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="luxury-text text-sm font-bold tracking-wide text-white mb-1.5 flex items-center gap-2">
                    <span>Our Address</span>
                    <button
                      onClick={handleCopy}
                      className="text-[10px] uppercase font-sans tracking-widest text-gold-500 hover:text-white transition-colors bg-white/5 border border-white/10 px-2.5 py-1 rounded-full cursor-pointer font-bold"
                      title="Copy Address"
                    >
                      {copied ? (
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Check className="h-2.5 w-2.5" /> Copied
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Copy className="h-2.5 w-2.5" /> Copy
                        </span>
                      )}
                    </button>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-sans font-light leading-relaxed">
                    QCMH+3JJ, Pir Mahal, Pakistan.<br />
                    Nestled within <strong className="text-white font-semibold">Al Jannat Mart</strong>.
                  </p>
                </div>
              </div>

              {/* Call support block */}
              <div className="flex items-start space-x-4 max-w-md">
                <span className="p-3 bg-white/5 border border-gold-500/25 text-gold-400 rounded-xl shrink-0 mt-1">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="luxury-text text-sm font-bold tracking-wide text-white mb-1">
                    Phone Inoculation
                  </h4>
                  <a
                    href="tel:+923136562320"
                    className="text-sm font-sans font-bold text-gold-400 hover:text-white transition-colors block mb-1"
                    referrerPolicy="no-referrer"
                  >
                    +92 313 6562320
                  </a>
                  <p className="text-xs text-gray-400 font-sans font-light">
                    Direct call lines are active daily from 9:00 AM to 11:00 PM for booking adjustments.
                  </p>
                </div>
              </div>

              {/* Business Hours block */}
              <div className="flex items-start space-x-4 max-w-md">
                <span className="p-3 bg-white/5 border border-gold-500/25 text-gold-400 rounded-xl shrink-0 mt-1">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="luxury-text text-sm font-bold tracking-wide text-white mb-1">
                    Business Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-gold-400 font-semibold mb-1">
                    Open Daily — 9:00 AM to 11:00 PM
                  </p>
                  <p className="text-xs text-gray-400 font-sans font-light">
                    Including all Gazetted Holidays and Eid Festivals.
                  </p>
                </div>
              </div>

            </div>

            {/* Micro Quick Ask Form */}
            <form onSubmit={handleQuickContact} className="p-6 glass-card rounded-2xl space-y-3.5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-gold-500 font-bold block mb-1">
                Drop us a quick note
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={emailText.name}
                  onChange={(e) => setEmailText({ ...emailText, name: e.target.value })}
                  className="bg-white/5 text-xs px-3.5 py-3 rounded-full text-white font-sans border border-white/10 focus:outline-none focus:border-gold-500/40 w-full"
                />
                <input
                  type="text"
                  required
                  placeholder="Phone No"
                  value={emailText.phone}
                  onChange={(e) => setEmailText({ ...emailText, phone: e.target.value })}
                  className="bg-white/5 text-xs px-3.5 py-3 rounded-full text-white font-sans border border-white/10 focus:outline-none focus:border-gold-500/40 w-full"
                />
              </div>
              <textarea
                value={emailText.note}
                onChange={(e) => setEmailText({ ...emailText, note: e.target.value })}
                placeholder="How can we help you?"
                rows={2}
                className="bg-white/5 text-xs px-4 py-3 rounded-2xl text-white font-sans border border-white/10 focus:outline-none focus:border-gold-500/40 w-full resize-none"
              />
              <button
                type="submit"
                className="w-full green-blue-gradient text-white font-extrabold text-[10px] tracking-widest uppercase py-3.5 rounded-full shadow-md flex items-center justify-center space-x-1.5 border-none cursor-pointer hover:scale-105 transition-all hover:opacity-95"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Transmit Note</span>
              </button>
            </form>

          </div>

          {/* Interactive Live Map Iframe Column (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="aspect-[16/10] lg:aspect-auto lg:h-[450px] w-full bg-white/5 border border-gold-500/15 rounded-2xl overflow-hidden shadow-2xl relative group">
              
              {/* Map background */}
              <iframe
                title="Al Jannat Mart Locator Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.9351235311496!2d72.4332902!3d30.764516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39232b7754d7ebd7%3A0xc3910f5451bfbe20!2sAl%20Jannat%20Mart!5e0!3m2!1sen!2spk!4v1717777777777!5m2!1sen!2spk"
                className="w-full h-full border-none filter invert-[90%] hue-rotate-[180deg] brightness-[0.82] contrast-[1.25]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* GPS overlay trigger */}
              <div className="absolute bottom-4 left-4 glass-card border border-gold-500/25 max-w-xs px-4 py-3 rounded-xl hidden sm:flex items-center justify-between gap-4 pointer-events-auto">
                <div>
                  <span className="text-[9px] font-sans font-bold tracking-widest text-gold-500 uppercase block mb-0.5">
                    GPS COORDINATES
                  </span>
                  <span className="text-xs text-gray-300 font-sans font-light block leading-snug">
                    Main Bypass Road, Pir Mahal, Punjab
                  </span>
                </div>
                <a
                  href="https://maps.app.goo.gl/9bN62o1M7zC5qfF98"
                  target="_blank"
                  rel="noreferrer"
                  className="green-blue-gradient p-2.5 rounded-lg text-white transition-colors shrink-0 cursor-pointer hover:opacity-95"
                  aria-label="Open google GPS directions"
                  referrerPolicy="no-referrer"
                >
                  <Navigation className="h-4.5 w-4.5" />
                </a>
              </div>

            </div>
            
            {/* Direct Contact triggers footer layout */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <a
                href="https://wa.me/923136562320"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white font-bold text-[10px] sm:text-xs tracking-widest uppercase py-4 rounded-full text-center shadow-md flex items-center justify-center space-x-2 border-none cursor-pointer hover:scale-105 transition-all"
                referrerPolicy="no-referrer"
              >
                <MessageCircle className="h-4.5 w-4.5 fill-white/10" />
                <span>WhatsApp Live Chat</span>
              </a>

              <a
                href="tel:+923136562320"
                className="glass-card hover:bg-gold-500 border border-white/10 hover:border-gold-500 text-white hover:text-black font-bold text-[10px] sm:text-xs tracking-widest uppercase py-4 rounded-full text-center shadow-md flex items-center justify-center space-x-2 cursor-pointer hover:scale-105 transition-all"
                referrerPolicy="no-referrer"
              >
                <Phone className="h-4.5 w-4.5 text-gold-400 group-hover:text-black" />
                <span>Call +92 313 11-PM</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
