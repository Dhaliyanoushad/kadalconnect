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
          src="/videos/waves2.mp4"
          type="video/mp4"
        />
      </video>

      {/* Light Black Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Bottom Gradient Fade (KEY PART) */}
      <div className="absolute bottom-0 left-0 w-full h-64 z-20 bg-gradient-to-b from-transparent to-[var(--earth-silver)]" />

      {/* Hero Content */}
<div className="relative z-30 text-center px-6 max-w-5xl">
  <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl text-[var(--earth-silver)]">
    EXPERIENCE THE <br /> COAST, AUTHENTICALLY
  </h1>

  <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-lg text-[var(--earth-silver)]/90">
    Discover Kerala’s coastal life through people, culture, and tradition
  </p>

  <button className="px-10 py-3 rounded-full bg-[var(--earth-copper)] text-white font-semibold hover:bg-[var(--earth-moss)] transition-all transform hover:scale-105 duration-300 shadow-xl">
    Explore Experiences
  </button>
</div>

    </section>
  );
};

export default Hero;
