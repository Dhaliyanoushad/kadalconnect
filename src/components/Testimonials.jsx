const testimonials = [
  {
    name: "Ravi Menon",
    role: "Local Fisher",
    text: "KadalConnect helped us earn directly from our daily fishing practices without changing our way of life.",
  },
  {
    name: "Ananya Rao",
    role: "Traveler",
    text: "This was the most authentic coastal experience I’ve had. It felt real, respectful, and deeply human.",
  },
  {
    name: "Suresh Kumar",
    role: "Home Host",
    text: "Our home was approved by the community itself. Guests respected our traditions, not exploited them.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#0b1f2a] py-20">
      <div className="max-w-6xl mx-auto px-6 text-white">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Voices from the Coast
        </h2>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Stories from local communities and travelers who believe in preserving
          coastal traditions by making them valuable.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:scale-105 transition"
            >
              <p className="text-gray-200 mb-4">“{item.text}”</p>

              <div className="mt-4">
                <h4 className="font-semibold">{item.name}</h4>
                <span className="text-sm text-gray-400">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
