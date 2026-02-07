import React, { useState } from 'react';
import { Calendar, Tag, ArrowRight, Sparkles, X, User, Mail, CheckCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const promotions = [
  {
    id: 1,
    title: "Onam Harvest Festival",
    subtitle: "Authentic Sadhya & Boat Races",
    dates: "Aug 20 - Aug 31",
    image: "https://i.pinimg.com/1200x/c1/9d/21/c19d2120f31f07df6598e1bb7daa5160.jpg",
    type: "Festival",
    sponsored: true,
    desc: "Experience the pinnacle of Kerala's culture with exclusive village feast invitations and front-row seats to the iconic snake boat races."
  },
  {
    id: 2,
    title: "Monsoon Mist Expedition",
    subtitle: "Rainforest & Backwater Trek",
    dates: "Jun 15 - Jul 15",
    image: "https://i.pinimg.com/1200x/c3/83/44/c38344ebd4abfdece4f6666bd1aee0c2.jpg",
    type: "Tourist Peak",
    sponsored: false,
    desc: "Witness the coast in its most dramatic form. High-intensity guided treks through lush mangroves and misty backwater trails."
  },
  {
    id: 3,
    title: "Coastal Craft Expo 2026",
    subtitle: "Meet the Master Artisans",
    dates: "Oct 05 - Oct 12",
    image: "https://i.pinimg.com/736x/3c/72/8d/3c728def4d2c81888c2e59665b6aef3d.jpg",
    type: "Special Event",
    sponsored: true,
    desc: "A week-long celebration of coir weaving, shell art, and coconut wood carving. Sponsored by the Kerala Artisans Collective."
  }
];

const SeasonalPromotions = () => {
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [isJoined, setIsJoined] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleJoin = (promo) => {
    setSelectedPromo(promo);
    setIsJoined(false);
    setFormData({ name: "", email: "" });
  };

  const handleConfirmJoin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsJoined(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-[var(--earth-silver)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--earth-copper)] mb-4 block">
              Time-Bound Opportunities
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-[var(--earth-slate)] uppercase tracking-tighter leading-[0.9]">
              Seasonal <br /> <span className="text-[var(--earth-copper)]">& Event</span> Spotlight
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[var(--earth-slate)]/40 text-xs font-black uppercase tracking-widest pb-2">
            <Sparkles size={16} className="text-[var(--earth-copper)]" />
            Boosted Visibility for Local Partners
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div 
              key={promo.id} 
              className="group relative h-[500px] rounded-[40px] overflow-hidden border border-[var(--earth-slate)]/5 shadow-2xl transition-all hover:-translate-y-2 hover:shadow-3xl bg-[var(--earth-slate)]"
            >
              {/* Image Background */}
              <img 
                src={promo.image} 
                alt={promo.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-slate)] via-[var(--earth-slate)]/40 to-transparent" />

              {/* Badges */}
              <div className="absolute top-8 left-8 flex flex-col gap-2 items-start">
                <span className="bg-white/10 backdrop-blur-md text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/20">
                  {promo.type}
                </span>
                {promo.sponsored && (
                  <span className="bg-[var(--earth-copper)] text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                    <Tag size={10} /> Sponsored
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="absolute inset-x-8 bottom-8">
                <div className="flex items-center gap-2 text-[var(--earth-copper)] mb-2">
                  <Calendar size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{promo.dates}</span>
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-1">
                  {promo.title}
                </h3>
                <p className="text-[var(--earth-silver)] font-bold text-sm mb-4 italic opacity-80">
                  {promo.subtitle}
                </p>
                <p className="text-[var(--earth-silver)]/60 text-[11px] font-medium leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {promo.desc}
                </p>
                
                <button 
                  onClick={() => handleJoin(promo)}
                  className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] bg-white/10 hover:bg-[var(--earth-copper)] px-6 py-3 rounded-2xl border border-white/10 transition-all active:scale-95 group/btn"
                >
                  Join Experience
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JOIN MODAL */}
      <AnimatePresence>
        {selectedPromo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPromo(null)}
              className="absolute inset-0 bg-[var(--earth-slate)]/60 backdrop-blur-md" 
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-lg bg-[var(--earth-silver)] rounded-[40px] border border-[var(--earth-slate)]/10 shadow-3xl overflow-hidden text-[var(--earth-slate)]"
            >
              {!isJoined ? (
                <div className="p-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-[10px] font-black text-[var(--earth-copper)] uppercase tracking-[0.4em] mb-2 block">Event Reservation</span>
                      <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">{selectedPromo.title}</h2>
                    </div>
                    <button onClick={() => setSelectedPromo(null)} className="p-3 hover:bg-[var(--earth-slate)]/5 rounded-full transition-colors text-[var(--earth-slate)]/30 hover:text-[var(--earth-slate)]">
                      <X size={24} />
                    </button>
                  </div>

                  <div className="bg-[var(--earth-slate)]/5 p-4 rounded-2xl mb-8 flex items-center gap-3 border border-[var(--earth-slate)]/5">
                    <Info size={16} className="text-[var(--earth-copper)]" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--earth-slate)]/60 leading-relaxed">
                      You are requesting a slot for the upcoming seasonal experience. A coordinator will reach out with final details.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] font-black text-[var(--earth-slate)]/40 uppercase tracking-widest ml-1">
                        <User size={12} /> Full Name
                      </label>
                      <input 
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/40 border border-[var(--earth-slate)]/10 rounded-2xl px-6 py-4 text-[var(--earth-slate)] font-bold focus:outline-none focus:border-[var(--earth-copper)] transition-colors placeholder:text-[var(--earth-slate)]/20 shadow-inner" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] font-black text-[var(--earth-slate)]/40 uppercase tracking-widest ml-1">
                        <Mail size={12} /> Email Address
                      </label>
                      <input 
                        placeholder="hello@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/40 border border-[var(--earth-slate)]/10 rounded-2xl px-6 py-4 text-[var(--earth-slate)] font-bold focus:outline-none focus:border-[var(--earth-copper)] transition-colors placeholder:text-[var(--earth-slate)]/20 shadow-inner" 
                      />
                    </div>

                    <button 
                      onClick={handleConfirmJoin}
                      disabled={loading || !formData.name || !formData.email}
                      className="w-full py-6 bg-[var(--earth-copper)] text-white rounded-3xl font-black uppercase text-xs tracking-[0.2em] hover:bg-[var(--earth-moss)] transition-all shadow-xl shadow-[var(--earth-copper)]/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 mt-4"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Confirm Interest"
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-20 text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                    className="w-24 h-24 bg-[var(--earth-copper)]/10 rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <CheckCircle size={48} className="text-[var(--earth-copper)]" />
                  </motion.div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">You're on the list!</h2>
                  <p className="text-[var(--earth-slate)]/60 leading-relaxed max-w-xs mx-auto mb-10 font-medium italic">
                    We've received your interest for <span className="text-[var(--earth-copper)] font-black">{selectedPromo.title}</span>. We'll be in touch soon.
                  </p>
                  <button 
                    onClick={() => setSelectedPromo(null)}
                    className="px-12 py-5 bg-[var(--earth-slate)] text-white rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[var(--earth-moss)] active:scale-95 transition-all shadow-xl"
                  >
                    Clear Skies
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SeasonalPromotions;
