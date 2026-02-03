import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Copy } from 'lucide-react';
// components
import ServicesTabs from '@/components/ServicesTabs';
import AccordionSection from '@/components/accordionItems';
import ServicesTestimonials from '@/components/ServicesTestimonials';
import Footer from '@/components/Footer';
// Images
import ServiceImage from '@/assets/CustomSoftware.jpg';

const CustomSoftwareServices = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#000000]">

      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-[90%] mx-auto">

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
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
            Back
          </motion.button>

          <div className="grid grid-cols-1 md:grid-cols-[520px_1fr] gap-16 items-center 
          border-t border-x px-6 rounded-t-2xl pt-12">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative h-[420px] rounded-2xl overflow-hidden bg-black"
            >
              <img
                src={ServiceImage}
                alt="Custom Software Services"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col h-[420px] justify-between"
            >
              {/* Top */}
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 text-[#1fb6ff] mb-4">
                  ★★★
                </div>

                {/* Title */}
                <h1 className="text-white font-display text-[36px] leading-[1.15] font-extrabold mb-4">
                  Custom Software Services
                </h1>

                {/* Description */}
                <p className="text-white/70 text-[15px] leading-[1.7] max-w-[520px] mb-3">
                  Modern, fast, and scalable Custom Software Services.
                </p>

                <p className="text-white/60 text-[14px] leading-[1.7] max-w-[520px]">
                  From landing pages to complex dashboards, we build responsive
                  experiences that perform across all devices.
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="flex items-center gap-4 w-full pt-10">
                {/* Start Your Project */}
                <Link
                  to="/start-project"
                  className="relative flex-1 h-[48px] rounded-xl bg-[#0096C7] hover:bg-[#0289b6] transition-colors"
                >
                  {/* Centered Text */}
                  <span className="absolute inset-0 flex items-center justify-center text-white text-[14px] font-medium">
                    Start Your Project
                  </span>

                  {/* Right Arrow (Pinned) */}
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-white">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                {/* Contact Us */}
                <div className="relative group">
                  {/* Tooltip */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[56px]
                      left-1/2
                      -translate-x-1/2
                      opacity-0
                      group-hover:opacity-100
                      group-hover:translate-y-[-4px]
                      transition-all
                      duration-200
                      z-10
                    "
                  >
                    <div className="relative bg-white text-black text-[14px] leading-[1.5] px-5 py-3 rounded-xl shadow-lg whitespace-nowrap">
                      Get in touch and let’s make your development process
                      <br />
                      smooth simple and stress free.

                      {/* Arrow */}
                      <span className="absolute right-1/4 -bottom-2 -translate-x-1/3 w-0 h-0
                          border-l-9 border-r-8 border-t-8
                          border-l-transparent border-r-transparent border-t-white"
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    className="
                      h-[48px]
                      px-6
                      rounded-xl
                      bg-[#0b0b0b]
                      border border-white/15
                      text-white
                      text-[14px]
                      font-medium
                      inline-flex
                      items-center
                      gap-2
                      hover:bg-[#111]
                      hover:border-white/30
                      transition-colors
                    "
                  >
                    Contact Us
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== TABS SECTION ========== */}
      <ServicesTabs />

      {/* ========== ACCORDION SECTION ========== */}
      <AccordionSection />

      {/* ========== Testimonials Section ========== */}
      <ServicesTestimonials />

      {/* ========== Footer Section ========== */}
      <Footer />
    </div>
  );
};

export default CustomSoftwareServices;
