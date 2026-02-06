const AboutSection = () => {
  return (
    <section className="relative bg-[#F5F1E8] pt-32 pb-20">

      {/* TOP WAVE (INVERTED) */}
      <div className="absolute -top-[119px] left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C240,96 480,96 720,64 960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#F5F1E8"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          From Dream to Reality
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Experience coastal living through community-driven traditions and verified homes.
        </p>
      </div>

    </section>
  );
};

export default AboutSection;
