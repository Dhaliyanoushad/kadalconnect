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
     <div className="relative max-w-7xl mx-auto px-6 py-20">

  {/* About Text */}
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      About KadalConnect
    </h2>
    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
      KadalConnect connects travelers with authentic coastal life while helping
      local communities earn through their everyday traditions — without
      turning villages into commercial resorts.
    </p>
  </div>

  {/* Cards */}
  <div className="grid gap-8 md:grid-cols-3">

    {/* Card 1 */}
    <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">
        Authentic Experiences
      </h3>
      <p className="text-gray-600">
        Discover fishing practices, coastal cooking, crafts, and traditions
        hosted directly by local communities.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">
        Community Verified Homes
      </h3>
      <p className="text-gray-600">
        Stay in homes approved by the community and ranked using a Tradition
        Score based on real guest feedback.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">
        Rooted Coastal Economy
      </h3>
      <p className="text-gray-600">
        Support local livelihoods through live fish auctions and access to
        traditional coastal products.
      </p>
    </div>

  </div>
</div>



    </section>
  );
};

export default AboutSection;
