import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight , Search } from 'lucide-react';
import servicesHeader from '@/assets/services-header.webp';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const PageHeader = ({ title, subtitle, description }: PageHeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    // PAGE WRAPPER
    <div className="relative">
      {/* Back button OUTSIDE header */}
      <button
        onClick={handleBack}
        className="
          absolute
          top-6
          left-6
          z-50
          p-3
          rounded-sm
          bg-black
          text-white
          hover:bg-black/80
          transition-colors
        "
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L8 12L15 19"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* HEADER SECTION */}
      <div className="relative overflow-hidden rounded-b-[100px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={servicesHeader}
            alt="Header background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 section-container pt-10 pb-[70px]">
          {/* Top Navigation */}
          <div className="flex items-center justify-end">
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
              className="
                bg-[#599DCB]
                px-8
                py-3
                rounded-full
                inline-flex
                items-center
                gap-2
                shadow-[0_10px_20px_0px_rgba(0,0,0,0.35)]
              "
            >
              Start your project <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
