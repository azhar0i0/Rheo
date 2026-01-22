import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import earthFooter from '@/assets/earth-footer.jpg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return (
    <footer className="relative mt-20">
      {/* Earth Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={earthFooter}
          alt="Earth from space"
          className="w-full h-full object-cover object-top opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 section-container pt-40 pb-8">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-sm text-muted-foreground mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link to="/all-services" className="text-foreground hover:text-primary transition-colors font-medium">
                Works
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
                Blog
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm text-muted-foreground mb-4">Social</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Twitter(X)
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                LinkedIn
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Dribbble
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © 2025 Rheo. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Pakistan {currentTime}
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
