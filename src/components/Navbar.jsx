const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-[100px] px-10 py-8 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-[#B4D7D8] text-[#285260] flex items-center justify-center rounded-lg shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-xl font-black">K</span>
          </div>
          <div className="text-2xl font-bold tracking-tight">KadalConnect</div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase">
          <a href="#" className="hover:text-[#B4D7D8] transition flex items-center gap-2 group">
            <span className="opacity-30 group-hover:opacity-100 group-hover:text-[#AB9072] transition-all">—</span> About
          </a>
          <a href="#" className="hover:text-[#B4D7D8] transition flex items-center gap-2 group">
            <span className="opacity-30 group-hover:opacity-100 group-hover:text-[#AB9072] transition-all">—</span> Marketplace
          </a>
          <a href="#" className="hover:text-[#B4D7D8] transition flex items-center gap-2 group">
            <span className="opacity-30 group-hover:opacity-100 group-hover:text-[#AB9072] transition-all">—</span> Book Now
          </a>
          <a href="#" className="hover:text-[#B4D7D8] transition flex items-center gap-2 group">
            <span className="opacity-30 group-hover:opacity-100 group-hover:text-[#AB9072] transition-all">—</span> Chatbot
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
