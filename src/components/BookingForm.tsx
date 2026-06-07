import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data/salonData';
import { Calendar, Clock, User, Phone, AlignLeft, CheckCircle2, MessageCircle, Mail, HelpCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingFormProps {
  isOpenModal?: boolean;
  onClose?: () => void;
  preSelectedServiceName?: string;
  onClearPreSelect?: () => void;
}

export default function BookingForm({ isOpenModal = false, onClose, preSelectedServiceName, onClearPreSelect }: BookingFormProps) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [generatedRef, setGeneratedRef] = useState('');

  // Handle pre-selected service when modal opens or state changes
  useEffect(() => {
    if (preSelectedServiceName) {
      if (!selectedServices.includes(preSelectedServiceName)) {
        setSelectedServices([preSelectedServiceName]);
      }
    }
  }, [preSelectedServiceName]);

  // Set minimum date to today
  const getTodayDateString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleServiceToggle = (serviceName: string) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceName));
      if (preSelectedServiceName === serviceName && onClearPreSelect) {
        onClearPreSelect();
      }
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    selectedServices.forEach(srvName => {
      const match = SERVICES_DATA.find(s => s.name === srvName);
      if (match) {
        const numStr = match.price.replace(/,/g, '');
        total += parseInt(numStr, 10);
      }
    });
    return total.toLocaleString();
  };

  // Generate Available Time Slots from 9:30 AM to 10:30 PM (closes 11 PM)
  const timeSlots = [
    '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
    '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM',
    '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM',
    '10:00 PM', '10:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !preferredDate || !preferredTime || selectedServices.length === 0) {
      alert("Please fill out all required fields and select at least 1 service.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API booking delay
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmed(true);
      // Generate a dynamic reference code
      const randNo = Math.floor(1000 + Math.random() * 9000);
      setGeneratedRef(`SLDR-${randNo}`);
    }, 2000);
  };

  // WhatsApp Message Generator
  const generateWhatsAppLink = () => {
    const formattedServices = selectedServices.join(', ');
    const priceText = calculateTotalPrice();
    const textMessage = `*SLIDER SALON & SPA BOOKING RECEIPT*
---------------------------------------
*Reference Code:* ${generatedRef}
*Client Name:* ${fullName}
*Phone Number:* ${phoneNumber}
*Email:* ${emailAddress || 'Not Provided'}
*Services Booked:* ${formattedServices}
*Total Estimated Price:* Rs. ${priceText}
*Preferred Appointment:* ${preferredDate} at ${preferredTime}
---------------------------------------
*Note:* ${message || 'No instructions'}

Please confirm my appointment slot. Thank you!`;

    const encodedText = encodeURIComponent(textMessage);
    return `https://wa.me/923136562320?text=${encodedText}`;
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setEmailAddress('');
    setSelectedServices([]);
    setPreferredDate('');
    setPreferredTime('');
    setMessage('');
    setBookingConfirmed(false);
    if (onClearPreSelect) onClearPreSelect();
    if (onClose) onClose();
  };

  const formContent = (
    <div className="w-full">
      {!bookingConfirmed ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full name input */}
            <div className="relative">
              <label htmlFor="fullName" className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 block">
                Full Name *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                  <User className="h-4 w-4" />
                </span>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Zain Siddique"
                  className="w-full bg-white/5 font-sans text-sm text-white pl-10 pr-4 py-3.5 rounded-full border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all font-light"
                />
              </div>
            </div>

            {/* Phone Number input */}
            <div className="relative">
              <label htmlFor="phoneNumber" className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 block">
                Phone Number *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                  <Phone className="h-4 w-4" />
                </span>
                <input
                  type="tel"
                  id="phoneNumber"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. 0313 1234567"
                  className="w-full bg-white/5 font-sans text-sm text-white pl-10 pr-4 py-3.5 rounded-full border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all font-light"
                />
              </div>
            </div>

            {/* Email backup input */}
            <div className="relative md:col-span-2">
              <label htmlFor="emailAddress" className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 block">
                Email Address (Optional for notifications)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  id="emailAddress"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="e.g. zain@gmail.com"
                  className="w-full bg-white/5 font-sans text-sm text-white pl-10 pr-4 py-3.5 rounded-full border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all font-light"
                />
              </div>
            </div>

            {/* Grid Box: Service Multiselections */}
            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-[#06b6d4] font-semibold mb-2 block">
                Services Selection * (Select one or multiple)
              </label>
              <div className="bg-black/45 p-4 rounded-2xl border border-white/10 max-h-[220px] overflow-y-auto space-y-3">
                {SERVICES_DATA.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedServices.includes(service.name)
                        ? 'bg-cyan-500/10 border-cyan-500/40 text-white'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:border-cyan-500/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.name)}
                        onChange={() => handleServiceToggle(service.name)}
                        className="accent-cyan-500 h-4 w-4 rounded"
                      />
                      <div>
                        <span className="text-xs sm:text-sm font-sans font-medium block">
                          {service.name}
                        </span>
                        <span className="text-[10px] text-gray-500 font-sans">
                          {service.duration} • {service.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <span className="text-xs font-sans font-bold text-cyan-400">
                      Rs. {service.price}
                    </span>
                  </label>
                ))}
              </div>

              {/* Tally counter on active selection */}
              {selectedServices.length > 0 && (
                <div className="mt-3 flex justify-between items-center bg-cyan-950/20 px-4 py-3.5 rounded-xl border border-cyan-500/20">
                  <span className="text-xs font-sans text-gray-300 font-light">
                    Selected <strong className="text-white font-semibold">{selectedServices.length} service(s)</strong>
                  </span>
                  <span className="text-sm luxury-text font-bold text-cyan-450">
                    Est. Total: Rs. {calculateTotalPrice()}
                  </span>
                </div>
              )}
            </div>

            {/* Date Selection */}
            <div>
              <label htmlFor="preferredDate" className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 block">
                Preferred Date *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                  <Calendar className="h-4 w-4" />
                </span>
                <input
                  type="date"
                  id="preferredDate"
                  required
                  min={getTodayDateString()}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-white/5 font-sans text-sm text-white pl-10 pr-4 py-3.5 rounded-full border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all font-light"
                />
              </div>
            </div>

            {/* Time Slots selector */}
            <div>
              <label htmlFor="preferredTime" className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 block">
                Preferred Time *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                  <Clock className="h-4 w-4" />
                </span>
                <select
                  id="preferredTime"
                  required
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full bg-white/5 font-sans text-sm text-white pl-10 pr-4 py-3.5 rounded-full border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all appearance-none font-light"
                >
                  <option value="" disabled className="text-gray-500">Select Slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="text-white bg-neutral-950 font-sans">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message input */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 block">
                Special Instructions (Optional)
              </label>
              <div className="relative">
                <span className="absolute top-4 left-3.5 text-gray-550">
                  <AlignLeft className="h-4 w-4" />
                </span>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Define any concerns e.g. skin allergy, requested senior barber..."
                  rows={3}
                  className="w-full bg-white/5 font-sans text-sm text-white pl-10 pr-4 py-3.5 rounded-2xl border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:bg-white/10 transition-all font-light"
                />
              </div>
            </div>

          </div>

          <button
            id="submit_booking_btn"
            type="submit"
            disabled={isSubmitting}
            className="w-full green-blue-gradient disabled:from-neutral-700 disabled:to-neutral-800 disabled:text-gray-400 text-white py-4 rounded-full font-extrabold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg hover:scale-[1.02] flex items-center justify-center space-x-2 border-none cursor-pointer hover:opacity-95"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <span className="animate-spin border-2 border-t-transparent border-white rounded-full h-4 w-4" />
                <span>Synchronizing Appointment Slot...</span>
              </div>
            ) : (
              <span>CONFIRM SECURE APPOINTMENT</span>
            )}
          </button>
        </form>
      ) : (
        /* CONFIRMATION POPUP CARD */
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center p-6 sm:p-10 border border-gold-500/25 glass-card rounded-2xl flex flex-col items-center shadow-2xl"
        >
          <span className="p-3 bg-emerald-500/10 rounded-full border border-emerald-500/25 mb-6">
            <CheckCircle2 className="h-12 w-12 text-emerald-400 fill-emerald-500/10" />
          </span>

          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gold-500 block mb-1 font-bold">
            APPOINTMENT CONFIRMED
          </span>
          <h3 className="luxury-text text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Reservation Secured
          </h3>
          <p className="text-xs sm:text-sm text-gray-250 font-sans font-light max-w-md mx-auto mb-8 leading-relaxed">
            Your booking reference is <strong className="text-gold-400 uppercase font-semibold font-mono text-sm">{generatedRef}</strong>. We have registered your details for a premium session. A direct email alert has been simulated to <span className="text-white font-medium underline font-mono">{emailAddress || 'your inbox'}</span>. Please confirm on WhatsApp for dynamic real-time slot lock-in!
          </p>

          {/* Core Reciept breakdown card */}
          <div className="w-full text-left bg-black/50 p-6 rounded-2xl border border-white/10 space-y-3.5 mb-8">
            <div className="flex justify-between border-b border-white/5 pb-2 text-xs">
              <span className="text-gray-400">Patron Name:</span>
              <span className="text-white font-semibold">{fullName}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2 text-xs">
              <span className="text-gray-400">Appointment Schedule:</span>
              <span className="text-gold-400 font-semibold">{preferredDate} @ {preferredTime}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2 text-xs">
              <span className="text-gray-400">Services List:</span>
              <span className="text-white font-medium text-right max-w-[200px] line-clamp-1">{selectedServices.join(', ')}</span>
            </div>
            <div className="flex justify-between pt-2 text-sm font-bold">
              <span className="text-white">Est. Total Price:</span>
              <span className="text-gold-400">Rs. {calculateTotalPrice()}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase py-4 px-6 rounded-full flex items-center justify-center space-x-2 transition-all shadow-md shadow-green-500/5 text-center cursor-pointer"
            >
              <MessageCircle className="h-4.5 w-4.5 fill-white/10" />
              <span>Confirm on WhatsApp</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full bg-transparent hover:bg-white/5 text-gray-300 font-bold text-[10px] sm:text-xs tracking-wider uppercase py-4 px-6 rounded-full border border-white/15 hover:border-gold-500/40 transition-all cursor-pointer"
            >
              Book Another Session
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );

  if (isOpenModal) {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            onClick={handleReset}
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3 }}
            className="relative glass-card p-6 sm:p-10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl space-y-4 border border-gold-500/25"
          >
            {/* Close button top right */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gold-400 transition-colors cursor-pointer"
              aria-label="Close booking modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase block mb-1 font-bold">
                MEMBERS PRIORITY SYSTEM
              </span>
              <h2 className="luxury-text text-2xl sm:text-3xl font-extrabold text-white">
                Book Priority Seat
              </h2>
              <p className="text-xs text-gray-305 mt-1 max-w-sm mx-auto">
                Select your luxury treatments and block our senior barber&apos;s schedule instantly.
              </p>
            </div>

            {formContent}
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  return (
    <section id="booking-section" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-gold-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-80 h-80 bg-gold-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Visual Badge/Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-extrabold block mb-3">
            LOCK IN YOUR SEAT TODAY
          </span>
          <h2 className="luxury-text text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Bespoke Grooming Booking System
          </h2>
          <div className="h-[1.5px] w-24 gold-gradient mx-auto mb-6" />
          <p className="text-sm text-gray-300 font-sans font-light leading-relaxed">
            Fill out our fully encrypted reservation form below. All appointment submissions generate instant high-fidelity WhatsApp receipts customized for immediate verification.
          </p>
        </div>

        {/* Real Dynamic Booking Card */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl shadow-2xl relative border border-gold-500/20">
          
          {/* Glass background glowing shapes behind form */}
          <div className="absolute -left-12 -top-12 w-24 h-24 bg-gold-500/5 rounded-full blur-xl pointer-events-none" />
          
          {formContent}

        </div>

      </div>
    </section>
  );
}
