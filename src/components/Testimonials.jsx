const testimonials = [
  {
    name: "Ajas Ahammed CK",
    role: "Local Fisher",
    image: "https://media.licdn.com/dms/image/v2/D5622AQEijDd3pPTzKA/feedshare-shrink_2048_1536/B56ZwJN8iEIoAk-/0/1769681179399?e=1772064000&v=beta&t=SYJz4txdGgKqFjgLGTxKxUcoNsf_pUANG36jyRdEyMI",
    text: "KadalConnect helped us earn directly from our daily fishing practices without changing our way of life.",
  },
  {
    name: "Ananya Rao",
    role: "Traveler",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    text: "This was the most authentic coastal experience I’ve had. It felt real, respectful, and deeply human.",
  },
  {
    name: "Hamza Ali",
    role: "Home Host",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    text: "Our home was approved by the community itself. Guests respected our traditions, not exploited them.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#548C92] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-6xl font-black text-center mb-6 text-[#F5F1E8] uppercase tracking-tighter">
          Voice of the Coast
        </h2>

        <p className="text-center text-[#B4D7D8] max-w-2xl mx-auto mb-20 text-lg md:text-xl font-medium">
          Stories from local communities and travelers who believe in preserving
          coastal traditions by making them valuable.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#B4D7D8] shadow-lg">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F5F1E8] text-lg leading-tight">{item.name}</h4>
                  <span className="text-sm text-[#B4D7D8] uppercase tracking-widest font-bold">{item.role}</span>
                </div>
              </div>

              <p className="text-[#F5F1E8]/90 text-lg leading-relaxed italic">
                “{item.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
