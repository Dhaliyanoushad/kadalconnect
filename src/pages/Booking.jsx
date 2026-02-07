import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, Users, Calendar, ArrowLeft, Star, Wifi, Coffee, 
  Wind, ShieldCheck, X, CheckCircle, CreditCard, User, Phone 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dummyRooms = [
  {
    id: 1,
    title: "The Shell House",
    location: "Varkala Cliff",
    price: 8500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200",
    description: "Experience the world's most unique architectural coastal stay, exclusively on KadalConnect.",
    features: ["Ocean View", "Free WiFi", "Breakfast Included", "AC"]
  },
  {
    id: 2,
    title: "Heritage Backwater Villa",
    location: "Alleppey",
    price: 6200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?auto=format&fit=crop&q=80&w=1200",
    description: "Tropical paradise nestled in the heart of Kerala backwaters with private deck access.",
    features: ["River View", "Traditional Food", "Private Deck", "Fishing Gear"]
  },
  {
    id: 3,
    title: "Sunset Driftwood Cabin",
    location: "Marari Beach",
    price: 4500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1200",
    description: "Minimalist eco-conscious cabin built from reclaimed ocean driftwood and local palm.",
    features: ["Beachfront", "Eco-friendly", "Outdoor Shower", "Hammock"]
  }
];

const Booking = () => {
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingStep, setBookingStep] = useState(1); // 1: Form, 2: Success
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    days: 1
  });

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1500);
  };

  const handleReserve = (room) => {
    setSelectedRoom(room);
    setBookingStep(1);
    setFormData({ name: "", phone: "", email: "", days: 1 });
  };

  const handleConfirmBooking = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setBookingStep(2);
    }, 2000);
  };

  const [loading, setLoading] = useState(false);

  if (showResults) {
    return (
      <div className="min-h-screen bg-[var(--earth-silver)] pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header & Back Button */}
          <div className="mb-12 flex items-center justify-between">
            <button 
              onClick={() => setShowResults(false)}
              className="flex items-center gap-2 text-[var(--earth-slate)] font-black uppercase tracking-widest text-xs hover:text-[var(--earth-copper)] transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Search
            </button>
            <div className="text-right">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--earth-copper)]">Results Found</span>
              <h2 className="text-3xl font-black text-[var(--earth-slate)] uppercase tracking-tighter leading-none">{dummyRooms.length} Available Stays</h2>
            </div>
          </div>

          {/* Room Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {dummyRooms.map((room) => (
              <div key={room.id} className="group bg-white/40 backdrop-blur-md rounded-[40px] border border-[var(--earth-slate)]/5 overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all hover:shadow-3xl hover:-translate-y-1">
                <div className="md:w-2/5 relative overflow-hidden">
                  <img src={room.image} alt={room.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-[var(--earth-slate)]/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/20">
                    Featured
                  </div>
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-black text-[var(--earth-slate)] uppercase tracking-tight leading-tight mb-1">{room.title}</h3>
                        <div className="flex items-center gap-1 text-[var(--earth-slate)]/60 text-xs font-bold">
                          <MapPin size={12} /> {room.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-[var(--earth-copper)]/10 text-[var(--earth-copper)] px-2 py-1 rounded-lg">
                        <Star size={14} fill="currentColor" />
                        <span className="text-sm font-black">{room.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-[var(--earth-slate)]/70 text-sm mb-6 line-clamp-2 italic font-medium">"{room.description}"</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {room.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-[8px] font-black uppercase tracking-widest bg-[var(--earth-slate)]/5 text-[var(--earth-slate)]/60 px-2 py-1 rounded-md border border-[var(--earth-slate)]/10">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-[var(--earth-slate)]/5">
                    <div>
                      <span className="text-[var(--earth-copper)] text-2xl font-black">₹{room.price}</span>
                      <span className="text-[var(--earth-slate)]/40 text-[10px] font-bold uppercase tracking-widest ml-1">/ night</span>
                    </div>
                    <button 
                      onClick={() => handleReserve(room)}
                      className="bg-[var(--earth-slate)] text-white px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[var(--earth-moss)] transition-all shadow-lg active:scale-95"
                    >
                      Reserve Stay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RESERVATION MODAL */}
        <AnimatePresence>
          {selectedRoom && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedRoom(null)}
                className="absolute inset-0 bg-[var(--earth-slate)]/60 backdrop-blur-md" 
              />
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative z-10 w-full max-w-xl bg-[var(--earth-silver)] rounded-[40px] border border-[var(--earth-slate)]/10 shadow-3xl overflow-hidden text-[var(--earth-slate)]"
              >
                {bookingStep === 1 ? (
                  <div className="p-10">
                    <div className="flex justify-between items-start mb-10">
                      <div>
                        <span className="text-[10px] font-black text-[var(--earth-copper)] uppercase tracking-[0.4em] mb-2 block">Confirm Reservation</span>
                        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">{selectedRoom.title}</h2>
                      </div>
                      <button onClick={() => setSelectedRoom(null)} className="p-3 hover:bg-[var(--earth-slate)]/5 rounded-full transition-colors text-[var(--earth-slate)]/30 hover:text-[var(--earth-slate)]">
                        <X size={24} />
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] font-black text-[var(--earth-slate)]/40 uppercase tracking-widest ml-1">
                            <User size={12} /> Full Name
                          </label>
                          <input 
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white/40 border border-[var(--earth-slate)]/10 rounded-2xl px-6 py-4 text-[var(--earth-slate)] font-bold focus:outline-none focus:border-[var(--earth-copper)] transition-colors placeholder:text-[var(--earth-slate)]/20 shadow-inner" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] font-black text-[var(--earth-slate)]/40 uppercase tracking-widest ml-1">
                            <Phone size={12} /> Contact No
                          </label>
                          <input 
                            placeholder="+91..."
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full bg-white/40 border border-[var(--earth-slate)]/10 rounded-2xl px-6 py-4 text-[var(--earth-slate)] font-bold focus:outline-none focus:border-[var(--earth-copper)] transition-colors placeholder:text-[var(--earth-slate)]/20 shadow-inner" 
                          />
                        </div>
                      </div>

                      <div className="p-6 bg-[var(--earth-slate)]/5 rounded-3xl border border-[var(--earth-slate)]/5 flex justify-between items-center">
                        <div>
                          <p className="text-[10px] font-black text-[var(--earth-slate)]/40 uppercase tracking-widest mb-1">Estimated Total</p>
                          <p className="text-2xl font-black text-[var(--earth-copper)]">₹{selectedRoom.price * formData.days}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-[10px] font-black text-[var(--earth-slate)]/40 uppercase tracking-widest mb-1">Duration</p>
                          <div className="flex items-center gap-4 bg-white/40 px-4 py-2 rounded-xl border border-[var(--earth-slate)]/5 shadow-sm">
                            <button onClick={() => setFormData(p => ({...p, days: Math.max(1, p.days - 1)}))} className="text-[var(--earth-slate)] hover:text-[var(--earth-copper)] transition-colors font-black">—</button>
                            <span className="font-black text-sm">{formData.days} Day{formData.days > 1 ? 's' : ''}</span>
                            <button onClick={() => setFormData(p => ({...p, days: p.days + 1}))} className="text-[var(--earth-slate)] hover:text-[var(--earth-copper)] transition-colors font-black">+</button>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={handleConfirmBooking}
                        disabled={loading || !formData.name || !formData.phone}
                        className="w-full py-6 bg-[var(--earth-copper)] text-white rounded-[32px] font-black uppercase text-sm tracking-[0.2em] hover:bg-[var(--earth-moss)] transition-all shadow-xl shadow-[var(--earth-copper)]/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <CreditCard size={20} />
                            Confirm Booking
                          </>
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
                      className="w-24 h-24 bg-[var(--earth-slate)]/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-[var(--earth-slate)]/5"
                    >
                      <CheckCircle size={48} className="text-[var(--earth-copper)]" />
                    </motion.div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Stay Confirmed!</h2>
                    <p className="text-[var(--earth-slate)]/60 leading-relaxed max-w-sm mx-auto mb-10 font-medium">
                      Your request for <span className="text-[var(--earth-copper)] font-black">{selectedRoom.title}</span> has been processed. The host will contact you shortly to finalize details.
                    </p>
                    <button 
                      onClick={() => setSelectedRoom(null)}
                      className="px-12 py-5 bg-[var(--earth-slate)] text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-[var(--earth-moss)] active:scale-95 transition-all shadow-xl"
                    >
                      Done
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--earth-silver)] pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Search Form */}
          <div className="space-y-12 text-[var(--earth-slate)]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--earth-copper)] mb-4 block">
                Stay with us
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-[var(--earth-slate)] uppercase tracking-tighter leading-[0.9]">
                Find your <br /> <span className="text-[var(--earth-copper)]">coastal home</span>
              </h1>
            </div>

            <div className="bg-white/40 backdrop-blur-md p-10 rounded-[40px] shadow-2xl border border-[var(--earth-slate)]/10 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--earth-slate)]/40 ml-1 flex items-center gap-1">
                    <MapPin size={12} /> Location
                  </label>
                  <input type="text" placeholder="Where to?" className="w-full bg-[var(--earth-silver)] px-4 py-3 rounded-2xl border border-transparent focus:border-[var(--earth-copper)] transition outline-none font-bold text-[var(--earth-slate)] placeholder:text-[var(--earth-slate)]/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--earth-slate)]/40 ml-1 flex items-center gap-1">
                    <Users size={12} /> Guests
                  </label>
                  <select className="w-full bg-[var(--earth-silver)] px-4 py-3 rounded-2xl border border-transparent focus:border-[var(--earth-copper)] transition outline-none font-bold text-[var(--earth-slate)] appearance-none cursor-pointer">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--earth-slate)]/40 ml-1 flex items-center gap-1">
                  <Calendar size={12} /> Dates
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" className="w-full bg-[var(--earth-silver)] px-4 py-3 rounded-2xl border border-transparent focus:border-[var(--earth-copper)] transition outline-none font-bold text-[var(--earth-slate)]" />
                  <input type="date" className="w-full bg-[var(--earth-silver)] px-4 py-3 rounded-2xl border border-transparent focus:border-[var(--earth-copper)] transition outline-none font-bold text-[var(--earth-slate)]" />
                </div>
              </div>

              <button 
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full py-5 bg-[var(--earth-slate)] text-white rounded-3xl font-black uppercase text-xs tracking-widest hover:bg-[var(--earth-moss)] transition-all transform hover:scale-[1.02] shadow-xl shadow-[var(--earth-slate)]/20 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSearching ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Searching...
                  </>
                ) : "Search Availability"}
              </button>
            </div>
            
            <div className="flex gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               <ShieldCheck size={40} className="text-[var(--earth-slate)]" />
               <div className="flex flex-col justify-center">
                 <p className="text-[10px] font-black uppercase tracking-widest">KadalVerified Safe</p>
                 <p className="text-[8px] font-bold uppercase tracking-widest">All stays inspected for safety and quality</p>
               </div>
            </div>
          </div>

          {/* Right Column: Featured Teaser */}
          <div className="relative group hidden md:block">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-3xl border-8 border-white/50 relative">
              <img 
                src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200" 
                alt="Coastal Cottage" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth-slate)]/80 to-transparent opacity-60" />
              <div className="absolute inset-x-8 bottom-8 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 text-[var(--earth-silver)]">
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--earth-copper)] mb-2 block">Weekly Featured Stay</span>
                <h3 className="font-black text-3xl mb-2 uppercase tracking-tight italic text-[var(--earth-silver)]">The Shell House</h3>
                <p className="text-sm font-medium opacity-80 leading-relaxed">Experience architectural coastal bliss, designed to mimic the natural curve of the waves.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
