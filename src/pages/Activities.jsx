import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const activities = [ /* same data, unchanged */ ];

export default function ActivitiesSlider() {
  const [active, setActive] = useState(0);

  // Auto play
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % activities.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActive((prev) => (prev + 1) % activities.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? activities.length - 1 : prev - 1));

  // 🔹 GET NEXT 3 EVENTS (circular)
  const nextThree = Array.from({ length: 3 }, (_, i) => {
    return activities[(active + i + 1) % activities.length];
  });

  return (
    <section className="relative h-screen overflow-hidden">
      {/* BACKGROUND */}
      <AnimatePresence>
        <motion.div
          key={active}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${activities[active].image})`,
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-10 flex items-center">
        <div className="w-full flex justify-between items-center gap-10">

          {/* LEFT TEXT */}
          <motion.div
            key={active + "text"}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-xl"
          >
            <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-80">
              {activities[active].location}
            </p>

            <h1 className="text-6xl font-extrabold leading-tight">
              {activities[active].title}
            </h1>

            {/* 🔹 DESCRIPTION ADDED */}
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              {activities[active].desc}
            </p>

            <button className="mt-10 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
              Join Experience
            </button>
          </motion.div>

          {/* RIGHT – ONLY NEXT 3 EVENTS */}
          <div className="hidden md:flex flex-col gap-6">
            {nextThree.map((item, index) => (
              <motion.div
                key={index}
                onClick={() =>
                  setActive((active + index + 1) % activities.length)
                }
                whileHover={{ scale: 1.05 }}
                className="relative w-[300px] h-[170px] rounded-2xl overflow-hidden cursor-pointer shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4 text-white font-semibold">
                  {item.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 z-20">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
        >
          ‹
        </button>

        <div className="text-white font-semibold tracking-widest">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(activities.length).padStart(2, "0")}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
