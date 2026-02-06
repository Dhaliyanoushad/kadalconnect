const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/videos/waves.MP4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Bottom Gradient Fade (KEY PART) */}
      <div className="absolute bottom-0 left-0 w-full h-64 z-20 bg-gradient-to-b from-transparent to-[#F5F1E8]" />

      {/* Hero Content */}
      <div className="relative z-30 text-center px-6 max-w-5xl">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4 drop-shadow-2xl">
          OCEAN OF <br /> POSSIBILITIES
        </h1>

        <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-lg text-gray-100">
          Turn Your Dreams Into Reality With Us
        </p>

        <button className="px-10 py-3 rounded-full bg-[#E5D3B3] text-black font-semibold hover:bg-white transition-all transform hover:scale-105 duration-300">
          Join Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
