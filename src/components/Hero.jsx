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
          src="https://videos.pexels.com/video-files/5192112/5192112-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
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

      {/* Video Controls Overlay (Simulation) */}
      <div className="absolute bottom-10 left-0 w-full px-10 z-20 hidden md:flex flex-col gap-4">
        {/* Progress Bar Container */}
        <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 bg-white/60 h-full w-1/4"></div>
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
        </div>

        {/* Control Icons & Time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Play Button */}
            <button className="hover:text-gray-300 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className="text-lg font-medium">0:03 / 0:31</span>
          </div>

          <div className="flex items-center">
            {/* Volume Button */}
            <button className="hover:text-gray-300 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
