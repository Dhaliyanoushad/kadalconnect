import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const activities = [
  {
    title: "Shore Seining (Kambavala)",
    location: "Kerala Coast",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc:
      "Join over twenty local fishermen as you pull massive community nets from the shore, moving in perfect rhythm — a living tradition passed down for generations.",
  },
  {
    title: "Traditional Boat Navigation",
    location: "Coastal Backwaters",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    desc:
      "Learn the art of navigating wooden Vanjie or Dhoni boats using only oars, wind direction, and ancestral knowledge of tides.",
  },
  {
    title: "Midnight Crab Hunting",
    location: "Mangroves & Shores",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc:
      "Walk the shores at low tide with traditional lamps and bamboo baskets, guided by locals who know where the crabs hide after dark.",
  },
  {
    title: "Net Repair & Weaving",
    location: "Fishing Villages",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    desc:
      "Sit with village elders and learn the intricate knots and patterns used to repair and weave fishing nets by hand.",
  },
  {
    title: "Catch to Kitchen",
    location: "Coastal Homes",
    image: "https://images.unsplash.com/photo-1589135325022-710a7bc88274",
    desc:
      "Buy fresh fish from the morning auction and cook a traditional red fish curry inside a local home, following a family recipe.",
  },
  {
    title: "Toddy Tapping Experience",
    location: "Coconut Groves",
    image: "https://images.unsplash.com/photo-1604908177522-429c47d49f7b",
    desc:
      "Watch skilled Chethukaran climb coconut trees to collect fresh sap, followed by tasting and a traditional coastal breakfast.",
  },
  {
    title: "Sun-Drying & Pickling",
    location: "Seaside Yards",
    image: "https://images.unsplash.com/photo-1596797038530-2c39bb05fbc5",
    desc:
      "Learn how fish and mangoes are preserved using sea salt, sunlight, and age-old coastal techniques.",
  },
  {
    title: "Coir Spinning & Weaving",
    location: "Craft Hamlets",
    image: "https://images.unsplash.com/photo-1610448101349-14a589574c86",
    desc:
      "Turn coconut husk into golden coir fiber and weave a small mat — a handmade souvenir of your coastal journey.",
  },
  {
    title: "Coastal Folklore Night",
    location: "Beachside Campfire",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    desc:
      "Gather under the stars as elders share sea legends, folklore, and ghost stories that have shaped coastal belief systems.",
  },
  {
    title: "Bio-Luminescence Kayaking",
    location: "Backwaters",
    image: "https://images.unsplash.com/photo-1500534314209-a26db0f5a7d9",
    desc:
      "Paddle through glowing waters at night and witness natural sea sparkle while learning traditional explanations of the phenomenon.",
  },
];

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

  // Next 3 events only
  const nextThree = Array.from({ length: 3 }, (_, i) => {
    return activities[(active + i + 1) % activities.length];
  });

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={active}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${activities[active].image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-10 flex items-center">
        <div className="w-full flex justify-between gap-12 items-center">

          {/* Left Text */}
          <motion.div
            key={active}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-white"
          >
            <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-80">
              {activities[active].location}
            </p>

            <h1 className="text-6xl font-extrabold leading-tight">
              {activities[active].title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/90">
              {activities[active].desc}
            </p>

            <button className="mt-10 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
              Join Experience
            </button>
          </motion.div>

          {/* Right Cards – next 3 only */}
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

      {/* Controls */}
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
