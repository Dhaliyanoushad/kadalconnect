import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="min-h-screen bg-[#F5F1E8] pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Search Form */}
          <div className="space-y-12">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#AB9072] mb-4 block">
                Stay with us
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-[#285260] uppercase tracking-tighter leading-[0.9]">
                Find your <br /> <span className="text-[#548C92]">coastal home</span>
              </h1>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-[#AB9072]/10 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#AB9072]">Location</label>
                  <input type="text" placeholder="Where to?" className="w-full bg-[#F5F1E8] px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-[#548C92] transition outline-none font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#AB9072]">Guests</label>
                  <select className="w-full bg-[#F5F1E8] px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-[#548C92] transition outline-none font-medium">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#AB9072]">Dates</label>
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" className="bg-[#F5F1E8] px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-[#548C92] outline-none font-medium" />
                  <input type="date" className="bg-[#F5F1E8] px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-[#548C92] outline-none font-medium" />
                </div>
              </div>

              <button className="w-full py-5 bg-[#285260] text-white rounded-full font-bold text-lg hover:bg-[#548C92] transition-all transform hover:scale-[1.02] shadow-xl shadow-[#285260]/20">
                Search Availability
              </button>
            </div>
          </div>

          {/* Right Column: Featured Teaser */}
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200" 
                alt="Coastal Cottage" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-x-8 bottom-8 p-8 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 text-white">
                <h3 className="font-bold text-2xl mb-2 italic">The Shell House</h3>
                <p className="text-sm font-medium opacity-90">Experience the world's most unique architectural coastal stay, exclusively on KadalConnect.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
