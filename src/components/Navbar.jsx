const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-10 py-8 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-sm">
            <span className="text-sm font-bold">H</span>
          </div>
          <div className="text-2xl font-medium tracking-tight">Homeunity</div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-12 text-sm font-light tracking-widest uppercase">
          <a href="#" className="hover:text-gray-300 transition flex items-center gap-2">
            <span className="opacity-50">—</span> About
          </a>
          <a href="#" className="hover:text-gray-300 transition flex items-center gap-2">
            <span className="opacity-50">—</span> Ecosystem
          </a>
          <a href="#" className="hover:text-gray-300 transition flex items-center gap-2">
            <span className="opacity-50">—</span> Features
          </a>
          <a href="#" className="hover:text-gray-300 transition flex items-center gap-2">
            <span className="opacity-50">—</span> Partners
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
