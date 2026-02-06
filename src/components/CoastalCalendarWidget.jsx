// File: src/CoastalCalendarWidget.jsx
import React, { useState } from 'react';
import { Calendar, CloudRain, Sun, Anchor, Info, ChevronLeft, ChevronRight, X } from 'lucide-react';

// --- DATA SECTION: Kerala Coastal Calendar ---
const monthKeys = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

const seasonalData = {
  january: {
    name: "January",
    year: 2026,
    weatherNote: "Cool mornings. Best fishing season.",
    days: Array.from({ length: 31 }, (_, i) => {
       const day = i + 1;
       let status = 'calm'; 
       if (day === 26) status = 'festive'; 
       return { day, status };
    }),
    festivals: [
      { date: 26, name: "Republic Day Boat Parade", type: "National Festival", desc: "Decorated fishing boats in procession." }
    ]
  },
  february: {
    name: "February",
    year: 2026,
    weatherNote: "Sunny & Humid. Temple Season Peak.",
    days: Array.from({ length: 28 }, (_, i) => {
       const day = i + 1;
       let status = 'calm'; 
       if (day === 23) status = 'festive'; 
       return { day, status };
    }),
    festivals: [
      { date: 23, name: "Chettikulangara Bharani", type: "Ritual & Art", desc: "Spectacular 'Kettukazhcha' chariots." },
      { date: 28, name: "Pariyanampetta Pooram", type: "Temple Folk Art", desc: "Shadow puppetry and ritual folk songs." }
    ]
  },
  march: {
    name: "March",
    year: 2026,
    weatherNote: "Warm winds. Good sea conditions.",
    days: Array.from({ length: 31 }, (_, i) => {
       const day = i + 1;
       let status = 'moderate'; 
       if ([10, 20].includes(day)) status = 'festive'; 
       return { day, status };
    }),
    festivals: [
      { date: 10, name: "Holi Celebrations", type: "Spring Festival", desc: "Colors on fishing boats at dawn." },
      { date: 20, name: "Coastal Cleanup Drive", type: "Community Event", desc: "Beach preservation initiative." }
    ]
  },
  april: {
    name: "April",
    year: 2026,
    weatherNote: "Hot Days. Evenings perfect for Beach Fests.",
    days: Array.from({ length: 30 }, (_, i) => {
       const day = i + 1;
       let status = 'moderate'; 
       if (day <= 20) status = 'festive'; 
       return { day, status };
    }),
    festivals: [
      { date: "01-20", name: "Mannalamkunnu Beach Fest", type: "Community Event", desc: "Local food stalls and coastal games." },
      { date: 14, name: "Vishu", type: "New Year", desc: "Fishermen prepare boats for the new solar cycle." }
    ]
  },
  may: {
    name: "May",
    year: 2026,
    weatherNote: "Pre-monsoon. Hot & humid.",
    days: Array.from({ length: 31 }, (_, i) => {
       const day = i + 1;
       let status = 'moderate'; 
       if (day === 15) status = 'festive'; 
       return { day, status };
    }),
    festivals: [
      { date: 15, name: "Summer Market Fair", type: "Trading Event", desc: "Traditional spice and fish markets." }
    ]
  },
  june: {
    name: "June",
    year: 2026,
    weatherNote: "Southwest Monsoon begins.",
    days: Array.from({ length: 30 }, (_, i) => {
       const day = i + 1;
       let status = 'rough'; 
       if (day === 1) status = 'festive'; 
       return { day, status };
    }),
    festivals: [
      { date: 1, name: "Monsoon Season Opening", type: "Seasonal", desc: "Boats blessed before rain season." }
    ]
  },
  july: {
    name: "July",
    year: 2026,
    weatherNote: "Heavy monsoon rains.",
    days: Array.from({ length: 31 }, (_, i) => {
       const day = i + 1;
       let status = 'rough'; 
       if (day === 10) status = 'calm'; 
       return { day, status };
    }),
    festivals: [
      { date: 10, name: "Monsoon Retreat", type: "Traditional", desc: "Indoor net mending workshops." }
    ]
  },
  august: {
    name: "August",
    year: 2026,
    weatherNote: "Occasional Showers. Backwaters are full.",
    days: Array.from({ length: 31 }, (_, i) => {
       const day = i + 1;
       let status = 'rough'; 
       if (day === 8 || day === 29) status = 'festive'; 
       if (day > 15 && day < 25) status = 'calm'; 
       return { day, status };
    }),
    festivals: [
      { date: 8, name: "Nehru Trophy Boat Race", type: "Water Sport", desc: "The 'Olympics of the Backwaters' at Alappuzha.", action: "Book VIP View" },
      { date: 26, name: "Start of Onam", type: "Harvest", desc: "Community sadhyas (feasts) in coastal homes." },
      { date: 29, name: "Aranmula Uthrattathi", type: "Tradition", desc: "Ritual snake boat procession." }
    ]
  },
  september: {
    name: "September",
    year: 2026,
    weatherNote: "Monsoon end. Transitional weather.",
    days: Array.from({ length: 30 }, (_, i) => {
       const day = i + 1;
       let status = 'moderate'; 
       if (day === 18) status = 'festive'; 
       return { day, status };
    }),
    festivals: [
      { date: 18, name: "Athira Thiruvathira", type: "Dance Festival", desc: "Women's circle dance celebrations." }
    ]
  },
  october: {
    name: "October",
    year: 2026,
    weatherNote: "Clear skies. Perfect fishing season.",
    days: Array.from({ length: 31 }, (_, i) => {
       const day = i + 1;
       let status = 'calm'; 
       if ([2, 15].includes(day)) status = 'festive'; 
       return { day, status };
    }),
    festivals: [
      { date: 2, name: "Ganesh Chaturthi Celebrations", type: "Festival", desc: "Decorated boats carry clay idols." },
      { date: 15, name: "Diwali Festival", type: "Celebration", desc: "Lights and fireworks at harbors." }
    ]
  },
  november: {
    name: "November",
    year: 2026,
    weatherNote: "Cooler days. High catch season.",
    days: Array.from({ length: 30 }, (_, i) => {
       const day = i + 1;
       let status = 'calm'; 
       if (day === 11) status = 'festive'; 
       return { day, status };
    }),
    festivals: [
      { date: 11, name: "Guru Nanak Jayanthi", type: "Spiritual", desc: "Langar meals at fishing communities." }
    ]
  },
  december: {
    name: "December",
    year: 2026,
    weatherNote: "Cool & pleasant. Peak season.",
    days: Array.from({ length: 31 }, (_, i) => {
       const day = i + 1;
       let status = 'calm'; 
       if ([25, 31].includes(day)) status = 'festive'; 
       return { day, status };
    }),
    festivals: [
      { date: 25, name: "Christmas Celebrations", type: "Festival", desc: "Special catches and caroling." },
      { date: 31, name: "New Year's Eve", type: "Celebration", desc: "Harbor celebrations and fishing blessings." }
    ]
  }
};

// --- COMPONENT SECTION ---
const CoastalCalendarWidget = () => {
  const [monthIndex, setMonthIndex] = useState(7); // Default to August (index 7)
  const currentMonth = monthKeys[monthIndex];
  const data = seasonalData[currentMonth];
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setMonthIndex((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
  };

  // Function to check if a date has festivals
  const getDateFestivals = (dayNumber) => {
    return data.festivals.filter(fest => {
      if (typeof fest.date === 'number') {
        return fest.date === dayNumber;
      } else if (typeof fest.date === 'string' && fest.date.includes('-')) {
        // Handle date ranges like "01-20"
        const [start, end] = fest.date.split('-').map(Number);
        return dayNumber >= start && dayNumber <= end;
      }
      return false;
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'calm': return 'bg-green-400'; 
      case 'rough': return 'bg-red-400';
      case 'festive': return 'bg-purple-400 ring-2 ring-purple-200'; 
      default: return 'bg-transparent';
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-2xl font-sans"
         style={{
           backgroundImage: "url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1000&auto=format&fit=crop')",
           backgroundSize: 'cover',
           minHeight: '600px'
         }}>
      
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-[var(--deep-sea)]/60 backdrop-blur-sm"></div>

      <div className="relative z-10 p-6 h-full flex flex-col text-white">
        
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-6xl font-light tracking-tighter">17:57</h1>
          <div className="flex justify-between items-center mt-2">
            <div>
                <div className="flex items-center gap-2 text-white">
                    <Sun size={18} className="text-[var(--sand-gold)]" />
                    <span className="text-lg uppercase tracking-widest font-bold">{data.name}</span>
                </div>
                <p className="text-xs text-[var(--foam-white)] mt-1 italic opacity-80">{data.weatherNote}</p>
            </div>
            
            {/* Month Navigation Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={handlePrevMonth}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors border border-white/20"
                title="Previous Month"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={handleNextMonth}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors border border-white/20"
                title="Next Month"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-blue-100 mb-2 opacity-70">
            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>
          <div className="grid grid-cols-7 gap-y-3 gap-x-1">
            {data.days.map((d) => {
              const hasFestivals = getDateFestivals(d.day).length > 0;
              return (
                <div key={d.day} 
                     onClick={() => hasFestivals && setSelectedDate(d)}
                     className={`flex items-center justify-center p-1 rounded-lg transition-all ${hasFestivals ? 'ring-2 ring-[var(--sand-gold)] cursor-pointer hover:ring-white bg-[var(--sand-gold)]/20' : 'cursor-default'}`}>
                  <span className="text-sm font-medium">{d.day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Monthly Programs Section */}
        <div className="mt-6 bg-black/40 rounded-xl p-4 backdrop-blur-xl border-t border-white/10">
          <h3 className="text-xs font-bold uppercase text-blue-200 mb-3 flex items-center gap-2 tracking-wider">
            <Anchor size={12} /> Monthly Programs
          </h3>
          <div className="space-y-4 overflow-y-auto max-h-40 pr-2 scrollbar-hide">
            {data.festivals.length > 0 ? (
              data.festivals.map((fest, idx) => (
                <div key={idx} className="flex gap-3 items-start border-l-2 border-[var(--sand-gold)] pl-3 relative group">
                  <div className="text-center min-w-[30px]">
                    <span className="block text-[10px] font-bold text-[var(--shallow-teal)] uppercase">{data.name.substring(0,3)}</span>
                    <span className="block text-lg font-bold leading-none text-white">{fest.date}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-semibold text-white leading-tight">{fest.name}</h4>
                    </div>
                    <span className="text-[10px] bg-[var(--sand-gold)]/30 px-1.5 rounded text-[var(--sand-gold)] inline-block mb-1 mt-1">
                        {fest.type}
                    </span>
                    <p className="text-xs text-white/70">{fest.desc}</p>
                    
                    {fest.action && (
                      <button className="mt-2 text-[10px] bg-[var(--sand-gold)] hover:bg-[#d97706] text-[var(--deep-sea)] px-2 py-1 rounded shadow transition-colors w-full font-bold tracking-wide">
                        🎟️ {fest.action}
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-blue-200/60 text-center py-4">No programs scheduled</p>
            )}
          </div>
        </div>

      </div>

      {/* Popup Modal for Selected Date */}
      {selectedDate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedDate(null)}
          ></div>
          
          {/* Popup Card */}
          <div className="relative z-10 bg-gradient-to-br from-[var(--deep-sea)]/95 to-[#1e293b]/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl max-w-sm w-full p-6 max-h-[80vh] overflow-y-auto min-h-[300px]">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedDate(null)}
              className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{data.name} {selectedDate.day}</h2>
              <p className="text-sm text-blue-200">Programs on this date</p>
            </div>

            {/* Festival Details */}
            <div className="space-y-4">
              {getDateFestivals(selectedDate.day).length > 0 ? (
                getDateFestivals(selectedDate.day).map((fest, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <h3 className="text-lg font-bold text-white mb-2">{fest.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-[var(--sand-gold)]/30 px-2.5 py-1 rounded text-[var(--sand-gold)] font-medium">
                        {fest.type}
                      </span>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed mb-3">{fest.desc}</p>
                    {fest.action && (
                      <button className="w-full text-sm bg-[var(--sand-gold)] hover:bg-[#d97706] text-[var(--deep-sea)] px-4 py-2 rounded-lg font-bold transition-colors">
                        🎟️ {fest.action}
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-sm text-blue-200/60">No programs scheduled for this date.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoastalCalendarWidget;