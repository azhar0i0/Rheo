import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import servicesHeader from '@/assets/services-header.jpg';

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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      <div className="relative z-10 section-container pt-24 pb-16">
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-12">
          <Link
            to="/"
            className="p-2 rounded-full bg-card/80 text-foreground hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <button className="p-2 text-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
            {title}
          </h1>
          {subtitle && (
            <h2 className="font-display text-2xl md:text-3xl text-muted-foreground mb-4">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {description}
            </p>
          )}
          <Link
            to="/start-project"
            className="btn-primary inline-flex items-center gap-2"
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
