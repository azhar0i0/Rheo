import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown, Copy } from 'lucide-react';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
// Images
import ServiceImage from '@/assets/BackendServices.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const BackendServices = () => {
  const [activeTab, setActiveTab] = useState('plan');
  const navigate = useNavigate();


  const tabs = [
    { id: 'plan', label: 'Plan' },
    { id: 'design', label: 'Design' },
    { id: 'build', label: 'Build' },
    { id: 'scale', label: 'Scale' },
  ];

  const tabContent = {
    plan: {
      title: 'PLAN',
      sections: [
        {
          title: 'Strategy & Discovery',
          desc: 'Planning is the foundation of everything we build. This phase aligns vision, users, and technology before execution begins.'
        },
        {
          title: 'Product Goals',
          desc: 'We identify what success looks like, defining clear objectives and measurable outcomes'
        },
        {
          title: 'User Research',
          desc: 'Understanding user needs, behaviors, and pain points to guide meaningful decisions'
        },
        {
          title: 'Technical Planning',
          desc: 'Selecting the right technologies, architecture, and development approach.'
        },
        {
          title: 'Scope Definition',
          desc: 'Breaking ideas into achievable features, timelines, and priorities.'
        }
      ]
    },
    design: {
      title: 'DESIGN',
      sections: [
        {
          title: 'UI/UX Design',
          desc: 'Creating intuitive, visually compelling interfaces that delight users.'
        },
        {
          title: 'Wireframing',
          desc: 'Mapping out user flows and layouts before development begins.'
        },
        {
          title: 'Prototyping',
          desc: 'Building interactive prototypes to validate design decisions.'
        },
        {
          title: 'Design Systems',
          desc: 'Establishing consistent components and styling guidelines.'
        },
        {
          title: 'Accessibility',
          desc: 'Ensuring designs are usable by everyone, regardless of ability.'
        }
      ]
    },
    build: {
      title: 'BUILD',
      sections: [
        {
          title: 'Frontend Development',
          desc: 'Building responsive, performant user interfaces with modern frameworks.'
        },
        {
          title: 'Backend Development',
          desc: 'Creating robust APIs and server-side logic for your application.'
        },
        {
          title: 'Database Design',
          desc: 'Structuring data for optimal performance and scalability.'
        },
        {
          title: 'Integration',
          desc: 'Connecting third-party services and APIs seamlessly.'
        },
        {
          title: 'Testing',
          desc: 'Rigorous quality assurance to catch issues before launch.'
        }
      ]
    },
    scale: {
      title: 'SCALE',
      sections: [
        {
          title: 'Performance Optimization',
          desc: 'Fine-tuning for speed, efficiency, and user experience.'
        },
        {
          title: 'Infrastructure',
          desc: 'Cloud architecture designed for growth and reliability.'
        },
        {
          title: 'Monitoring',
          desc: 'Real-time tracking of performance and error detection.'
        },
        {
          title: 'Maintenance',
          desc: 'Ongoing support and updates to keep your product running smoothly.'
        },
        {
          title: 'Growth Support',
          desc: 'Helping you scale from MVP to enterprise-level solutions.'
        }
      ]
    }
  };

  const accordionItems = [
    {
      title: 'Product Planning',
      desc: 'Turn raw ideas into clear, structured development blueprints.',
      details:
        'We help you define product scope, prioritize features, and create a realistic roadmap. This phase ensures alignment between business goals, user needs, and technical feasibility before development begins.',
    },
    {
      title: 'Code Assistance',
      desc: 'Build faster with clean, maintainable development support.',
      details:
        'Our engineers assist with architecture decisions, code reviews, and implementation guidance. We focus on clean code, scalability, and long-term maintainability—not shortcuts.',
    },
    {
      title: 'UI/UX Support',
      desc: 'Design interfaces that are intuitive, accessible, and modern.',
      details:
        'From wireframes to polished interfaces, we help design user experiences that feel natural. Accessibility, usability, and visual clarity are built into every screen.',
    },
    {
      title: 'Deployment Guidance',
      desc: 'Launch confidently with a reliable deployment strategy.',
      details:
        'We guide you through CI/CD pipelines, environment setup, and production releases. Your product ships with stability, security, and monitoring in place.',
    },
    {
      title: 'API & Integration Help',
      desc: 'Connect systems and services without friction.',
      details:
        'We design and integrate APIs that communicate reliably with third-party tools, payment gateways, and internal services—ensuring seamless data flow and performance.',
    },
  ];

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const testimonials = [
    { name: 'Rana Saqib', quote: 'Rheo delivers clean, reliable software with clear communication throughout the process.' },
    { name: 'Abdullah', quote: 'Working with Rheo feels smooth, organized, and genuinely collaborative.' },
    { name: 'Rana Hashir', quote: 'Rheo turns complex ideas into simple, scalable solutions.' },
    { name: 'Azhar Ali', quote: 'Every project with Rheo is handled with precision and care.' },
    { name: 'Abdullah', quote: "Rheo's development process is structured, efficient, and transparent." },
    { name: 'Haris', quote: 'The team at Rheo focuses on quality without slowing down progress.' },
  ];

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <div className="bg-[#000000]">

      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-[1300px] mx-auto">

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
                alt="App Development"
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
                  Backend Development
                </h1>

                {/* Description */}
                <p className="text-white/70 text-[15px] leading-[1.7] max-w-[520px] mb-3">
                  Modern, fast, and scalable Backend Services.
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
      <section className=" pb-12">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">

            {/* TAB CONTENT */}
            <div className="md:col-span-2 bg-card rounded-xl p-6 md:p-8">

              {/* Tab Navigation */}
              <div className="relative flex gap-6 mb-10 border-b border-border">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="relative pb-4"
                    >
                      {/* Tab Label */}
                      <motion.span
                        layout
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className={`text-sm font-medium ${isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                          }`}
                      >
                        {tab.label}
                      </motion.span>

                      {/* Animated Underline */}
                      {isActive && (
                        <motion.div
                          layoutId="active-tab-underline"
                          className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-primary rounded-full"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 35,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Animated Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.35,
                    ease: 'easeOut',
                  }}
                >
                  <motion.h2
                    layout
                    className="font-display text-2xl font-extrabold text-primary mb-6"
                  >
                    {currentContent.title}
                  </motion.h2>

                  <motion.div
                    layout
                    className="space-y-6"
                  >
                    {currentContent.sections.map((section, index) => (
                      <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.3,
                          ease: 'easeOut',
                        }}
                      >
                        <h3 className="font-display font-semibold text-foreground mb-2">
                          {section.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-[1.6]">
                          {section.desc}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* SIDE INFO */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-xl p-4"
              >
                <p className="text-sm text-muted-foreground mb-1">
                  Develop frontend, backend, and integrations.
                </p>
                <p className="text-foreground">Build</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-card rounded-xl p-4"
              >
                <p className="text-sm text-muted-foreground mb-1">
                  Deploy, optimize, and grow with confidence.
                </p>
                <p className=" flex items-center gap-2">
                  <span className="text-primary text-xs">&lt;/&gt;</span> Scale
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== ACCORDION SECTION ========== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="py-12">
        <div className="max-w-[1300px] mx-auto">
          <div className="space-y-3">

            {accordionItems.map((item, index) => {
              const isOpen = openAccordion === index;

              return (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="border-b border-border rounded-lg overflow-hidden"
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : index)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left"
                  >
                    <div>
                      <motion.h4
                        layout
                        className={`font-display font-semibold ${isOpen ? 'text-primary' : 'text-foreground'
                          }`}
                      >
                        {item.title}
                      </motion.h4>

                      <motion.p
                        layout
                        className="text-sm text-muted-foreground mt-1"
                      >
                        {item.desc}
                      </motion.p>
                    </div>

                    {/* Chevron */}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className="text-primary mt-1"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.35, ease: 'easeOut' },
                          opacity: { duration: 0.25, ease: 'easeOut' },
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -6 }}
                          animate={{ y: 0 }}
                          exit={{ y: -6 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="pb-6 pr-10 text-sm text-muted-foreground leading-[1.7]"
                        >
                          {item.details}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <section className="py-20 mt-24">
        <div className="max-w-[1300px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
          >
            About Our Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BackendServices;
