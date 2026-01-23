import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import servicesHeader from '@/assets/services-header.webp';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const PageHeader = ({ title, subtitle, description }: PageHeaderProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={servicesHeader}
          alt="Header background"
          className="w-full h-full object-cover rounded-b-[100px]"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" /> */}
      </div>

      <div className="relative z-10 section-container pt-10 pb-[70px]">
        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="p-2 rounded-sm bg-card/80 text-foreground hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <button className="p-2 text-foreground hover:text-primary transition-colors">
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-[-50px]"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
            {title}
          </h1>
          {subtitle && (
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-600 mb-1">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              {description}
            </p>
          )}
          <Link
            to="/start-project"
            className="bg-[#599DCB] px-8 py-3 rounded-full inline-flex items-center gap-2
           shadow-[0_10px_20px_0px_rgba(0,0,0,0.35)]"
          >
            Contact Us
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
