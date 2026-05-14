import { useState } from 'react';
import { Calendar, User, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PoojaBooking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '2026-09-14',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-12">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gold/10"
          >
            <div className="bg-temple-red p-8 text-white text-center">
              <h2 className="font-serif text-3xl mb-2">Book Pooja Ticket</h2>
              <p className="text-white/70 font-serif italic">Secure your auspicious daily pooja slot</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-1 opacity-60">
                  Devotee Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter full name"
                  className="w-full bg-white border border-[#D4AF37]/20 px-4 py-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-1 opacity-60">
                    Mobile Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91"
                    className="w-full bg-white border border-[#D4AF37]/20 px-4 py-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-1 opacity-60">
                    Select Date
                  </label>
                  <select
                    required
                    className="w-full bg-white border border-[#D4AF37]/20 px-4 py-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-all appearance-none"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  >
                    {[14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(day => (
                      <option key={day} value={`2026-09-${day}`}>
                        September {day}, 2026
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] uppercase tracking-widest font-bold mb-1 opacity-60">
                  Address
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Street, City, Pincode"
                  className="w-full bg-white border border-[#D4AF37]/20 px-4 py-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full gold-gradient text-white uppercase text-[11px] tracking-widest font-bold py-4 mt-4 shadow-lg hover:brightness-105 transition-all active:scale-[0.98]"
              >
                Confirm Seva Booking
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2rem] p-12 text-center shadow-xl border border-gold/10"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="font-serif text-3xl text-temple-red mb-4">Booking Successful!</h2>
            <p className="text-gray-600 mb-8 font-serif italic text-lg">
              Om Sri Siddi Vinayakaya Namaha. Your pooja ticket has been reserved for {formData.date}.
            </p>
            <div className="bg-sandalwood p-6 rounded-2xl text-left border border-gold/10 mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500 uppercase text-xs font-bold tracking-widest">Name</span>
                <span className="font-semibold">{formData.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-500 uppercase text-xs font-bold tracking-widest">Date</span>
                <span className="font-semibold">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase text-xs font-bold tracking-widest">Ref ID</span>
                <span className="font-mono text-sm">SV-2026-{Math.floor(Math.random()*10000)}</span>
              </div>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-temple-red font-serif underline underline-offset-4"
            >
              Make another booking
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
