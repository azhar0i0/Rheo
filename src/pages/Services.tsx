import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown, Copy } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import webDevTeam from '@/assets/web-dev-team.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('plan');

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
      desc: 'Turn raw ideas into clear, structured development blueprints.'
    },
    {
      title: 'Code Assistance',
      desc: 'Build faster with clean, smart, AI-guided code support.'
    },
    {
      title: 'UI/UX Support',
      desc: 'Create intuitive, modern interfaces with guided design insights.'
    },
    {
      title: 'Deployment Guidance',
      desc: 'Ship your product confidently with optimized launch support.'
    },
    {
      title: 'API & Integration Help',
      desc: 'Connect services and systems smoothly with guided integrations.'
    }
  ];

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const testimonials = [
    { name: 'Rana Saqib', quote: 'Rheo delivers clean, reliable software with clear communication throughout the process.' },
    { name: 'Abdullah', quote: 'Working with Rheo feels smooth, organized, and genuinely collaborative.' },
    { name: 'Rana Hashir', quote: 'Rheo turns complex ideas into simple, scalable solutions.' },
    { name: 'Azhr Ali', quote: 'Every project with Rheo is handled with precision and care.' },
    { name: 'Abdullah', quote: "Rheo's development process is structured, efficient, and transparent." },
    { name: 'Haris', quote: 'The team at Rheo focuses on quality without slowing down progress.' },
  ];

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src={webDevTeam}
                alt="Web Development"
                className="w-full h-64 md:h-80 object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-primary">★★★</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Web Development
              </h1>
              <p className="text-muted-foreground">
                Modern, fast, and scalable websites and web applications.
              </p>
              <p className="text-muted-foreground text-sm">
                From landing pages to complex dashboards, we build responsive experiences that 
                perform across all devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/start-project" className="btn-primary flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="btn-secondary flex items-center justify-center gap-2">
                  Contact Us
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tab Content */}
            <div className="md:col-span-2 bg-card rounded-xl p-6 md:p-8">
              {/* Tab Navigation */}
              <div className="flex gap-4 mb-8 border-b border-border pb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-foreground border-b-2 border-primary pb-2 -mb-[18px]'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-display text-2xl font-bold text-primary mb-6">
                  {currentContent.title}
                </h2>
                <div className="space-y-6">
                  {currentContent.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {section.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Side Info */}
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Develop frontend, backend, and integrations.</p>
                <p className="text-foreground font-semibold">Build</p>
              </div>
              <div className="bg-card rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Deploy, optimize, and grow with confidence.</p>
                <p className="text-primary font-semibold flex items-center gap-2">
                  <span className="text-xs">&lt;/&gt;</span> Scale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-12">
        <div className="section-container">
          <div className="space-y-3">
            {accordionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-border"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <div>
                    <h4 className={`font-display font-semibold ${openAccordion === index ? 'text-primary' : 'text-foreground'}`}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform ${openAccordion === index ? 'rotate-180' : ''}`}
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
          >
            About Our <span className="text-primary">Service</span>
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

export default Services;
