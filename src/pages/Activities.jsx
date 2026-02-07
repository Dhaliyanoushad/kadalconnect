import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Users,
  Phone,
  Flag,
  Calendar,
  User,
  Minus,
  Plus
} from "lucide-react";


const activities = [
  {
    title: "Shore Seining (Kambavala)",
    location: "Kerala Coast",
    image: "https://i.pinimg.com/1200x/d8/79/11/d87911d1df960ce3a274db697bdfa709.jpg",
    desc:
      "Join over twenty local fishermen as you pull massive community nets from the shore, moving in perfect rhythm — a living tradition passed down for generations.",
  },
  {
    title: "Traditional Boat Navigation",
    location: "Coastal Backwaters",
    image: "https://i.pinimg.com/736x/37/cf/b6/37cfb698cf2c4303366520dd3d9e6987.jpg",
    desc:
      "Learn the art of navigating wooden Vanjie or Dhoni boats using only oars, wind direction, and ancestral knowledge of tides.",
  },
  {
    title: "Midnight Crab Hunting",
    location: "Mangroves & Shores",
    image: "https://i.pinimg.com/1200x/6c/ee/ce/6ceece38e0cc4219711faede8d06454b.jpg",
    desc:
      "Walk the shores at low tide with traditional lamps and bamboo baskets, guided by locals who know where the crabs hide after dark.",
  },
  {
    title: "Net Repair & Weaving",
    location: "Fishing Villages",
    image: "https://i.pinimg.com/736x/3c/72/8d/3c728def4d2c81888c2e59665b6aef3d.jpg",
    desc:
      "Sit with village elders and learn the intricate knots and patterns used to repair and weave fishing nets by hand.",
  },
  {
    title: "Catch to Kitchen",
    location: "Coastal Homes",
    image: "https://i.pinimg.com/736x/eb/8a/54/eb8a54eefad9a113d8f3c1393389fabd.jpg",
    desc:
      "Buy fresh fish from the morning auction and cook a traditional red fish curry inside a local home, following a family recipe.",
  },
  {
    title: "Toddy Tapping Experience",
    location: "Coconut Groves",
    image: "https://i.pinimg.com/1200x/4e/a3/4b/4ea34ba2b49472aed4153d3f928e66cd.jpg",
    desc:
      "Watch skilled Chethukaran climb coconut trees to collect fresh sap, followed by tasting and a traditional coastal breakfast.",
  },
  {
    title: "Sun-Drying & Pickling",
    location: "Seaside Yards",
    image: "https://i.pinimg.com/736x/36/33/69/363369f2880e461783fccb587d297301.jpg",
    desc:
      "Learn how fish and mangoes are preserved using sea salt, sunlight, and age-old coastal techniques.",
  },
  {
    title: "Coir Spinning & Weaving",
    location: "Craft Hamlets",
    image: "https://i.pinimg.com/736x/d2/fa/d9/d2fad9edf6211f76dea61e2af443931b.jpg",
    desc:
      "Turn coconut husk into golden coir fiber and weave a small mat — a handmade souvenir of your coastal journey.",
  },
  {
    title: "Coastal Folklore Night",
    location: "Beachside Campfire",
    image: "https://i.pinimg.com/736x/c1/9d/21/c19d2120f31f07df6598e1bb7daa5160.jpg",
    desc:
      "Gather under the stars as elders share sea legends, folklore, and ghost stories that have shaped coastal belief systems.",
  },
  {
    title: "Bio-Luminescence Kayaking",
    location: "Backwaters",
    image: "https://i.pinimg.com/1200x/c3/83/44/c38344ebd4abfdece4f6666bd1aee0c2.jpg",
    desc:
      "Paddle through glowing waters at night and witness natural sea sparkle while learning traditional explanations of the phenomenon.",
  },
];



export default function ActivitiesSlider() {
  const [active, setActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    people: 1,
    contact: "",
    nationality: "",
    days: 1
  });

  // Auto play
  useEffect(() => {
    if (isModalOpen) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % activities.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isModalOpen]);

  const next = () => setActive((prev) => (prev + 1) % activities.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? activities.length - 1 : prev - 1));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleConfirm = () => {
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", people: 1, contact: "", nationality: "", days: 1 });
    }, 300);
  };

  // Next 3 events only
  const nextThree = Array.from({ length: 3 }, (_, i) => {
    return activities[(active + i + 1) % activities.length];
  });

  return (
    <section className="relative h-screen overflow-hidden bg-[var(--earth-silver)]">
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
          <div className="absolute inset-0 bg-[var(--earth-silver)]/70 backdrop-blur-[2px]" />
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
            className="max-w-xl text-[var(--earth-slate)]"
          >
            <p className="uppercase tracking-[0.3em] text-sm mb-4 font-bold text-white">
              {activities[active].location}
            </p>

            <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              {activities[active].title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white font-medium">
              {activities[active].desc}
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-10 px-10 py-4 rounded-full bg-[var(--earth-copper)] text-white font-bold uppercase text-xs tracking-widest hover:bg-[var(--earth-moss)] hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
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
                className="relative w-[300px] h-[170px] rounded-[32px] overflow-hidden cursor-pointer shadow-2xl border-4 border-white/50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[var(--earth-slate)]/20" />
                <div className="absolute bottom-4 left-6 text-white font-black uppercase text-xs tracking-widest bg-[var(--earth-copper)]/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
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
          className="w-14 h-14 border-2 border-[var(--earth-slate)]/20 rounded-full text-[var(--earth-slate)] hover:bg-[var(--earth-slate)] hover:text-white transition-all flex items-center justify-center font-bold text-2xl shadow-lg bg-[var(--earth-silver)]/50 backdrop-blur-sm"
        >
          ‹
        </button>

        <div className="flex flex-col items-center">
          <span className="text-[var(--earth-slate)] font-black text-xl tracking-tighter">
            {String(active + 1).padStart(2, "0")}
          </span>
          <div className="w-8 h-1 bg-[var(--earth-copper)] rounded-full my-1" />
          <span className="text-[var(--earth-slate)]/40 font-bold text-xs uppercase tracking-widest">
            {String(activities.length).padStart(2, "0")}
          </span>
        </div>

        <button
          onClick={next}
          className="w-14 h-14 border-2 border-[var(--earth-slate)]/20 rounded-full text-[var(--earth-slate)] hover:bg-[var(--earth-slate)] hover:text-white transition-all flex items-center justify-center font-bold text-2xl shadow-lg bg-[var(--earth-silver)]/50 backdrop-blur-sm"
        >
          ›
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-[var(--earth-slate)]/40 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[var(--earth-silver)] border border-[var(--earth-slate)]/10 p-8 rounded-[48px] shadow-3xl text-[var(--earth-slate)] w-full max-w-xl overflow-hidden"
            >
              <button
                onClick={handleClose}
                className="absolute top-8 right-8 text-[var(--earth-slate)]/30 hover:text-[var(--earth-slate)] transition-colors p-2 hover:bg-[var(--earth-slate)]/5 rounded-full"
              >
                <X size={24} />
              </button>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <div className="mb-8">
                      <span className="text-[10px] font-bold text-[var(--earth-copper)] uppercase tracking-[0.4em] mb-2 block">
                        Exclusive Booking
                      </span>
                      <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-[var(--earth-slate)]">
                        {activities[active].title}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-5">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] font-bold text-[var(--earth-slate)]/40 uppercase tracking-widest ml-1">
                            <User size={12} /> Full Name
                          </label>
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className="w-full bg-[var(--earth-silver)] border border-[var(--earth-slate)]/10 rounded-2xl px-5 py-4 text-[var(--earth-slate)] focus:outline-none focus:border-[var(--earth-copper)] transition-colors placeholder:text-[var(--earth-slate)]/20"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] font-bold text-[var(--earth-slate)]/40 uppercase tracking-widest ml-1">
                            <Phone size={12} /> Contact No
                          </label>
                          <input
                            name="contact"
                            value={formData.contact}
                            onChange={handleInputChange}
                            placeholder="+91..."
                            className="w-full bg-[var(--earth-silver)] border border-[var(--earth-slate)]/10 rounded-2xl px-5 py-4 text-[var(--earth-slate)] focus:outline-none focus:border-[var(--earth-copper)] transition-colors placeholder:text-[var(--earth-slate)]/20"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] font-bold text-[var(--earth-slate)]/40 uppercase tracking-widest ml-1">
                            <Flag size={12} /> Nationality
                          </label>
                          <input
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            placeholder="e.g. Indian"
                            className="w-full bg-[var(--earth-silver)] border border-[var(--earth-slate)]/10 rounded-2xl px-5 py-4 text-[var(--earth-slate)] focus:outline-none focus:border-[var(--earth-copper)] transition-colors placeholder:text-[var(--earth-slate)]/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] font-bold text-[var(--earth-slate)]/40 uppercase tracking-widest ml-1">
                            <Users size={12} /> No of People
                          </label>
                          <div className="flex items-center justify-between bg-[var(--earth-silver)] border border-[var(--earth-slate)]/10 rounded-2xl px-4 py-3">
                            <button onClick={() => setFormData(p => ({...p, people: Math.max(1, p.people - 1)}))} className="p-2 hover:bg-white rounded-xl transition-all shadow-sm">
                              <Minus size={16} />
                            </button>
                            <span className="text-xl font-black">{formData.people}</span>
                            <button onClick={() => setFormData(p => ({...p, people: p.people + 1}))} className="p-2 hover:bg-white rounded-xl transition-all shadow-sm">
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-[10px] font-bold text-[var(--earth-slate)]/40 uppercase tracking-widest ml-1">
                            <Calendar size={12} /> No of Days
                          </label>
                          <div className="flex items-center justify-between bg-[var(--earth-silver)] border border-[var(--earth-slate)]/10 rounded-2xl px-4 py-3">
                            <button onClick={() => setFormData(p => ({...p, days: Math.max(1, p.days - 1)}))} className="p-2 hover:bg-white rounded-xl transition-all shadow-sm">
                              <Minus size={16} />
                            </button>
                            <span className="text-xl font-black">{formData.days}</span>
                            <button onClick={() => setFormData(p => ({...p, days: p.days + 1}))} className="p-2 hover:bg-white rounded-xl transition-all shadow-sm">
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>

                        <button 
                          onClick={handleConfirm}
                          className="w-full bg-[var(--earth-copper)] text-white py-5 rounded-[24px] font-black uppercase text-xs tracking-[0.2em] hover:bg-[var(--earth-moss)] active:scale-95 transition-all shadow-xl shadow-[var(--earth-copper)]/20 mt-2"
                        >
                          Confirm Request
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-[var(--earth-silver)] rounded-full flex items-center justify-center mx-auto mb-8 border border-[var(--earth-slate)]/10">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 10 }}
                      >
                        <Calendar size={40} className="text-[var(--earth-copper)]" />
                      </motion.div>
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-[var(--earth-slate)]">Request Confirmed!</h2>
                    <p className="text-[var(--earth-slate)]/60 leading-relaxed max-w-sm mx-auto mb-10 font-medium">
                      We've received your request for <span className="text-[var(--earth-copper)] font-black">{activities[active].title}</span>. Our local hosts will contact you shortly to finalize details.
                    </p>
                    <button 
                      onClick={handleClose}
                      className="px-12 py-4 bg-[var(--earth-slate)] text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-[var(--earth-moss)] active:scale-95 transition-all shadow-xl"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
