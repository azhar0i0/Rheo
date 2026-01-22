import { Link } from "react-router-dom";
import logo from "@/assets/rheo-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="h-[72px] w-full bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Rheo"
              className="h-7 w-auto"
            />
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-10">
            <nav className="flex items-center gap-8">
              <Link
                to="/all-services"
                className="text-sm font-medium text-white/90 hover:text-white transition"
              >
                Services
              </Link>
              <Link
                to="/blog"
                className="text-sm font-medium text-white/90 hover:text-white transition"
              >
                Blog
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              to="/start-project"
              className="px-5 py-2 rounded-lg bg-[#00A3D9] text-sm font-semibold text-white hover:bg-[#0092c4] transition"
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
