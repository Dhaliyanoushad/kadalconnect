import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="mx-[100px] px-10 py-8 flex items-center justify-between text-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-[var(--earth-copper)] text-[var(--earth-slate)] flex items-center justify-center rounded-lg shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-xl font-black">K</span>
          </div>
          <div className="text-2xl font-bold tracking-tight">KadalConnect</div>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase items-center">
          <Link to="/" className="hover:text-[var(--earth-copper)] transition flex items-center gap-2 group">
            <span className="opacity-30 group-hover:opacity-100 group-hover:text-[var(--earth-moss)] transition-all">—</span> Home
          </Link>
          <Link to="/marketplace" className="hover:text-[var(--earth-copper)] transition flex items-center gap-2 group">
            <span className="opacity-30 group-hover:opacity-100 group-hover:text-[var(--earth-moss)] transition-all">—</span> Marketplace
          </Link>
          <Link to="/activities" className="hover:text-[var(--earth-copper)] transition flex items-center gap-2 group">
            <span className="opacity-30 group-hover:opacity-100 group-hover:text-[var(--earth-moss)] transition-all">—</span> Activities
          </Link>
          <Link to="/booking" className="hover:text-[var(--earth-copper)] transition flex items-center gap-2 group">
            <span className="opacity-30 group-hover:opacity-100 group-hover:text-[var(--earth-moss)] transition-all">—</span> Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
