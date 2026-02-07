import React, { useState } from "react";
import { Calendar, X } from "lucide-react";
import CoastalCalendarWidget from "./CoastalCalendarWidget";
import "../App.css"; // keep animations working

function FloatingCalendar() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      {/* FLOATING CALENDAR BUTTON */}
      <div className="fixed bottom-8 left-8 z-50">
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="floating-btn group relative flex items-center justify-center h-16 w-16 bg-[var(--earth-copper)] hover:bg-[var(--earth-moss)] text-white rounded-2xl shadow-2xl shadow-[var(--earth-slate)]/20 transition-all hover:scale-105 active:scale-95 border border-white/30"
        >
          {showCalendar ? <X size={28} /> : <Calendar size={28} />}

          {/* Tooltip */}
          <span className="absolute left-full ml-4 bg-[var(--earth-slate)]/80 backdrop-blur-md text-white border border-white/10 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            Check Fishing Calendar
          </span>
        </button>
      </div>

      {/* MODAL OVERLAY */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[var(--earth-slate)]/80 backdrop-blur-md"
            onClick={() => setShowCalendar(false)}
          />

          {/* Calendar */}
          <div className="relative z-10 w-full max-w-md fade-in-up">
            <CoastalCalendarWidget />
            <p className="text-center text-slate-500 text-xs mt-4">
              Tap outside to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingCalendar;
