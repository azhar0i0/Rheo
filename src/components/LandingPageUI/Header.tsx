import { Link } from "react-router-dom";
import logo from "@/assets/rheo-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative h-[72px] w-full bg-black/80 backdrop-blur-md">

        {/* 90% Bottom Border */}
        <div className="absolute bottom-0 left-1/2 h-px w-[90%] -translate-x-1/2 bg-white/10" />
        <div className="max-w-[80%] mx-auto h-full px-6 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Rheo Technologies Logo"
              className="w-12 h-12 object-contain"
            />
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-10">
            <nav className="flex items-center gap-3">
              <Link
                to="/all-services"
                className="text-sm font-medium text-white hover:bg-[#2C2C2C] px-4 rounded-sm py-3 transition-all"
              >
                Services
              </Link>
              <Link
                to="/blog"
                className="text-sm font-medium text-white/90 hover:bg-[#2C2C2C] px-4 rounded-sm py-3 transition-all"
              >
                Blog
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              to="/start-project"
              className="group relative overflow-hidden h-12 min-w-[10rem] px-5 rounded-md bg-[#0096C7] text-sm text-white hover:bg-[#0092c4] transition flex items-center justify-center"
            >
              <span className="absolute transition-transform duration-300 group-hover:-translate-y-12">
                Create Project
              </span>

              <span className="absolute translate-y-12 transition-transform duration-300 group-hover:translate-y-0">
                Create Project
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
