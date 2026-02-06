
const AboutSection = () => {
  return (
    <section className="relative bg-[#F5F1E8] pt-24 pb-20">
      
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,32 720,32 960,32 1200,96 1440,64 L1440,0 L0,0 Z"
            fill="#F5F1E8"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Circular Image with Palm/Architecture */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Outer Glow/Shadow effect seen in reference */}
              <div className="absolute inset-0 rounded-full bg-white/30 blur-2xl transform scale-110"></div>
              
              <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-xl border-4 border-white/50">
                <img 
                  src="https://i.pinimg.com/1200x/1f/47/8e/1f478e1c355d44d6e8a7d6f785670fb4.jpg" 
                  alt="Coastal community view" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Right Side: Content */}
          <div className="text-left space-y-6">
            <span className="text-gray-600 font-medium tracking-widest uppercase text-sm">
              About
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7FB3C2] leading-tight uppercase">
              From Coast to Community, <br />
              <span className="text-[#6DA5B4]">Kadal Connects it all</span>
            </h2>

            <div className="space-y-4 max-w-lg">
              <p className="text-gray-700 leading-relaxed">
                Kadal Connect is a digital bridge between coastal communities and the world beyond. 
                Rooted in tradition and powered by modern technology, we help preserve coastal 
                culture while creating sustainable opportunities for people who live by the sea.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                We believe progress doesn’t mean erasing heritage. It means strengthening it — 
                responsibly, transparently, and together.
              </p>
            </div>

            <button className="mt-4 px-8 py-3 bg-[#7FB3C2] text-white rounded-full font-medium hover:bg-[#6DA5B4] transition-colors shadow-lg">
              Learn more
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutSection;
