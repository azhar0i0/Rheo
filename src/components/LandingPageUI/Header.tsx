import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/rheo-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", path: "/all-services" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full">
      {/* Container with Glassmorphism */}
      <div className="relative h-20 w-full bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src={logo}
              alt="Rheo Technologies"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              to="/start-project"
              className="group relative overflow-hidden h-11 px-6 rounded-full bg-[#0096C7] text-sm font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(0,150,199,0.4)]"
            >
              <div className="relative flex flex-col items-center">
                <span className="transition-transform duration-300 group-hover:-translate-y-12 py-3">
                  Create Project
                </span>
                <span className="absolute translate-y-12 transition-transform duration-300 group-hover:translate-y-0 py-3">
                  Let's Talk →
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`
          absolute top-20 left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ease-in-out md:hidden
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}>
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white border-b border-white/5 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/start-project"
              onClick={() => setIsOpen(false)}
              className="w-full h-12 flex items-center justify-center rounded-xl bg-[#0096C7] text-white font-bold"
            >
              Create Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;