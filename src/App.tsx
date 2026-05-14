/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Bell, Sun, Flower2, Heart, Calendar } from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import GaneshaWisdom from './components/GaneshaWisdom';
import PoojaBooking from './components/PoojaBooking';

export default function App() {
  const festivalStartDate = "2026-09-14T08:00:00";

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white overflow-x-hidden relative flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 kolam-pattern pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="h-20 flex items-center justify-between px-6 md:px-10 border-b border-[#D4AF37]/30 bg-white/50 backdrop-blur-sm z-50 sticky top-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-xl font-bold bg-white text-temple-red shadow-sm">
            ॐ
          </div>
          <div>
            <h1 className="text-sm tracking-[0.2em] uppercase font-bold text-[#D4AF37]">Sri Siddi Vinayaka</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#5D1212]/60">Navaratri Mahostavalu 2026</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-semibold text-[#5D1212]">
          <span className="text-[#D4AF37] border-b border-[#D4AF37] cursor-pointer">Home</span>
          <span className="hover:text-[#D4AF37] cursor-pointer transition-colors" onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}>Festivals</span>
          <span className="hover:text-[#D4AF37] cursor-pointer transition-colors" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>Daily Pooja</span>
          <a href="mailto:srisiddivinayakatrust.org@gmail.com" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </nav>
        <button 
          onClick={() => {
            const element = document.getElementById('booking');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="md:hidden p-2 text-temple-red"
        >
          <Bell className="w-5 h-5" />
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-10 z-10">
        
        {/* Left Column: Intro & Info */}
        <section className="md:col-span-3 flex flex-col justify-between py-4 order-2 md:order-1">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-light italic mb-4 leading-tight text-temple-red">
                Blessings for <br/><span className="font-bold not-italic">New Beginnings</span>
              </h2>
              <p className="text-xs text-[#5D1212]/70 leading-relaxed italic max-w-[240px]">
                Join us in celebrating the 10-day divine journey at Kavalagoyyi Hanuman Temple Street, Rajamahendravaram.
              </p>
            </motion.div>

            <div className="space-y-4">
              <div className="bg-white/40 border-l-2 border-[#D4AF37] p-4 shadow-sm backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1 font-bold">Daily Highlight</p>
                <p className="text-sm font-bold text-temple-red">Prardhana Pooja</p>
                <p className="text-[11px] italic text-[#5D1212]/70">Morning 05:30 AM - 07:00 AM</p>
              </div>
              <div className="bg-white/40 border-l-2 border-[#D4AF37] p-4 shadow-sm backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1 font-bold">Special Event</p>
                <p className="text-sm font-bold text-temple-red">Lalitha Sahasranamam</p>
                <p className="text-[11px] italic text-[#5D1212]/70">Evening 06:00 PM onwards</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#D4AF37]/20 mt-8">
            <p className="text-[10px] uppercase tracking-[0.15em] mb-4 text-[#D4AF37] font-bold">Countdown to Mahostavalu</p>
            <CountdownTimer targetDate={festivalStartDate} />
          </div>
        </section>

        {/* Center Column: Hero Card */}
        <section className="md:col-span-5 flex flex-col items-center justify-center relative order-1 md:order-2 min-h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-[10px] md:border-[20px] border-[#D4AF37] rounded-full"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[4/5] bg-white p-4 md:p-6 shadow-divine relative flex flex-col items-center justify-center border border-[#D4AF37]/10 rounded-sm"
          >
            <div className="w-full h-full border border-[#D4AF37]/30 flex flex-col items-center justify-center p-6 md:p-8 text-center bg-[#FDFBF7]/50">
              <Sun className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 text-[#D4AF37] animate-spin-slow" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-temple-red font-display drop-shadow-sm">Vinayaka Chaturthi</h2>
              <p className="text-sm italic mb-8 max-w-[280px] text-[#5D1212]/80 leading-relaxed">
                Experience the divine presence of Lord Sri Siddi Vinayaka in the heart of Rajamahendravaram.
              </p>
              <div className="h-[1px] w-32 bg-[#D4AF37] mb-8"></div>
              <div className="text-xs tracking-[0.2em] uppercase font-bold text-[#D4AF37]">
                Sept 14 &mdash; Sept 24, 2026
              </div>
            </div>
            {/* Decorative Ornaments */}
            <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl text-[#D4AF37] bg-white border border-[#D4AF37]/20 rounded-full shadow-sm">❉</div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl text-[#D4AF37] bg-white border border-[#D4AF37]/20 rounded-full shadow-sm">❉</div>
          </motion.div>
        </section>

        {/* Right Column: Seva Booking */}
        <section id="booking" className="md:col-span-4 flex flex-col justify-center order-3">
          <div className="bg-white/70 p-6 md:p-8 shadow-divine border border-white rounded-sm backdrop-blur-md relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-gold opacity-[0.05] rounded-bl-full pointer-events-none"></div>
             <h3 className="text-xl md:text-2xl font-bold mb-1 text-temple-red">Pooja Ticket Booking</h3>
             <p className="text-[11px] italic opacity-70 mb-6 text-[#5D1212]">Book your divine seva slot for the festival.</p>
             
             <PoojaBooking />

             <div className="mt-6 pt-6 border-t border-[#D4AF37]/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-[10px] italic leading-tight text-center md:text-left">
                   <span className="font-bold block not-italic uppercase text-[#D4AF37] mb-1">Helpdesk</span>
                   +91 7416285636
                </div>
                <div className="text-[10px] italic leading-tight text-center md:text-right">
                   <span className="font-bold block not-italic uppercase text-[#D4AF37] mb-1">Email</span>
                   srisiddivinayakatrust.org@gmail.com
                </div>
             </div>
          </div>
        </section>
      </main>

      {/* Highlights Section (Daily Sevalu) */}
      <section id="highlights" className="bg-white py-20 px-6 md:px-10 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold text-temple-red font-display mb-2">Sacred Sevalu</h2>
              <p className="text-sm italic text-gray-500">Every day at Sri Siddi Vinayaka Navaratri is filled with divine rituals and spiritual energy. Join us in these sacred offerings.</p>
            </div>
            <div className="h-px flex-1 bg-[#D4AF37]/20 md:mx-10 mb-4"></div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37]">Rajamahendravaram • 2026</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Shobha Yatra", 
                desc: "Grand ceremonial procession through the streets of Rajamahendravaram.", 
                time: "06:00 AM" 
              },
              { 
                title: "Kumkumarchana", 
                desc: "Special sacred chanting and kumkuma ritual for divine energy.", 
                time: "05:00 PM" 
              },
              { 
                title: "Annaprasadam", 
                desc: "Traditional spiritual feast offered to all devotees daily.", 
                time: "12:30 PM" 
              },
            ].map((item, idx) => (
              <div key={idx} className="group border-b border-[#D4AF37]/10 pb-8 hover:border-[#D4AF37] transition-all duration-500">
                <span className="text-[10px] uppercase font-bold text-gold tracking-widest block mb-4">0{idx + 1} &mdash; {item.time}</span>
                <h3 className="text-2xl font-serif text-temple-red mb-3 group-hover:translate-x-2 transition-transform">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Message Section */}
      <section className="py-20 bg-sandalwood z-10 border-t border-[#D4AF37]/10">
        <div className="max-w-screen-xl mx-auto px-6">
          <GaneshaWisdom />
        </div>
      </section>

      {/* Footer */}
      <footer className="h-auto md:h-16 bg-[#5D1212] text-white/80 text-[10px] flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 md:py-0 uppercase tracking-widest gap-4 z-10">
        <div>&copy; 2026 Sri Siddi Vinayaka Trust</div>
        <div className="text-center md:text-left">Kavalagoyyi Hanuman Temple St, Rajamahendravaram, AP, India</div>
        <div>Sacred Moments • Eternal Blessings</div>
      </footer>
    </div>
  );
}
