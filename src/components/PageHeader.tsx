import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
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
    <section>
      {/* PAGE WRAPPER */}
      {/* Laptop View */}
      <div className="relative hidden md:block">
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

      {/* Mobile Page Header */}
      <div className="block md:hidden relative">

        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 z-50 p-3 rounded-md bg-black/60 backdrop-blur text-white"
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
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Header Section */}
        <div className="relative overflow-hidden rounded-b-[32px]">

          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={servicesHeader}
              alt="Header background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-5 pt-14 pb-12">

            {/* Top Actions */}
            <div className="flex justify-end mb-8">
              <button className="text-white/80 hover:text-white transition">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-left"
            >
              <h1 className="font-display text-3xl font-bold text-white leading-tight">
                {title}
              </h1>

              {subtitle && (
                <h2 className="font-display text-3xl font-bold text-white/60 mt-1">
                  {subtitle}
                </h2>
              )}

              {description && (
                <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-[90%]">
                  {description}
                </p>
              )}

              {/* CTA */}
              <Link
                to="/start-project"
                className="
            mt-7
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#599DCB]
            px-6
            py-3
            text-sm
            font-medium
            text-white
            shadow-lg
            transition
            active:scale-95
          "
              >
                Start your project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PageHeader;
