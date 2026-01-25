import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronDown, ArrowUp,
  LayoutGrid,
  Smartphone,
  Server,
  Code2,
  Pencil,
  Plug,
  Disc,
  Workflow,
} from 'lucide-react';
import { useState } from 'react';

// Import images
import heroAbstract from '@/assets/hero-abstract.jpg';
import discoverBg from '@/assets/discover-bg.jpg';
import webDevTeam from '@/assets/web-dev-team.jpg';
import mobileDev from '@/assets/mobile-dev.jpg';
import uiUxDesign from '@/assets/ui-ux-design.jpg';
import cloudSolutions from '@/assets/cloud-solutions.jpg';
import devops from '@/assets/devops.jpg';
import flowFunction from '@/assets/flow-function.jpg';
// UI Components
import Header from '@/components/ui/LandingPageUI/Header';
import PressableButton from '@/components/ui/PressableButton';
import HeroLoop from '@/components/ui/HeroLoop';
import ProcedurePlan from '@/components/ui/LandingPageUI/ProcedurePlan';
import DiscoverCards from '@/components/ui/LandingPageUI/DiscoverCards';
import BlogSection from '@/components/ui/LandingPageUI/BlogSection';
import OurWorks from '@/components/ui/LandingPageUI/OurWorks';
import AboutServicesSection from '@/components/ui/LandingPageUI/AboutServicesSection';
import WorkflowSection from '@/components/ui/LandingPageUI/WorkflowSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { title: 'Branding', items: ['Logo Design', 'Brand Identity', 'Style Guides'] },
    { title: 'App Development', items: ['iOS Apps', 'Android Apps', 'Cross-Platform'] },
    { title: 'Web3 dApps', items: ['Smart Contracts', 'DeFi', 'NFT Platforms'] },
    { title: 'SaaS', items: ['Cloud Solutions', 'API Integration', 'Scalable Systems'] },
  ];

  const features = [
    { title: 'Parallel Workflows', desc: 'Run 10+ projects simultaneously' },
    { title: 'Full Scalability', desc: 'Scale from MVP to enterprise level' },
    { title: 'No-code options', desc: 'Quick prototypes for non-tech teams' },
    { title: 'Dev-ops Friendly', desc: 'CI/CD pipelines included' },
    { title: 'Privacy-First', desc: 'All code is yours, always' },
    { title: 'Cloud & Infrastructure', desc: 'Automated cloud setup' },
    { title: 'TechBolt Engine', desc: 'Our proprietary tech stack' },
    { title: 'Real-time Support', desc: 'Talk to devs, not chatbots' },
    { title: 'Team On-boarding', desc: 'Full documentation provided' },
    { title: 'Quality Assurance', desc: 'Rigorous testing protocols' },
  ];

  const portfolioItems = [
    { image: webDevTeam, title: 'Web Dashboard' },
    { image: mobileDev, title: 'Mobile App' },
    { image: uiUxDesign, title: 'UI Design' },
    { image: cloudSolutions, title: 'Cloud Platform' },
    { image: devops, title: 'DevOps Pipeline' },
    { image: flowFunction, title: 'Full Stack' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* ========== NAVBAR ========== */}
      <Header />

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen overflow-hidden bg-black pt-[72px]">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroAbstract}
            alt=""
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black" /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-[140px] text-center">

          {/* Headline */}
          <h1 className="mx-auto max-w-[900px] font-display text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tight text-white">
            From architecture to deployment
            <br />
            <span className="inline-flex items-center gap-2">
              <span className="text-white">—</span>
              <span className="text-[#1fb6ff]">flawlessly executed.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-[1.7] text-white/60">
            Full-service software development studio delivering web, mobile,
            cloud, and custom solutions — from concept to scale.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <PressableButton />
          </div>
        </div>
      </section>
      <HeroLoop />

      {/* ========== SERVICES SECTION ========== */}
      <section className="py-24 bg-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 items-start">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />
                <span className="text-[#8b5cf6] text-[14px] tracking-wide">
                  Services
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-white text-[22px] leading-[1.2] mb-5">
                Our development services cover every stage of building modern software.
              </h2>

              {/* Description */}
              <p className="text-[#9ca3af] text-[12px] mb-3 max-w-[360px]">
                From idea to launch, we develop software that scales, performs, and connects.
              </p>

              {/* Button */}
              <motion.div>
                <Link
                  to="/all-services"
                  className="group flex items-center justify-between w-full bg-[#0096C7] hover:bg-[#0289b6] transition-colors text-white font-medium text-[14px] px-4 py-3 rounded-lg"
                >
                  {/* Text flush left */}
                  <span className="flex-1 text-center">All Services</span>

                  {/* Arrow flush right + rotate on hover */}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </Link>
              </motion.div>

            </motion.div>

            {/* RIGHT GRID */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 height-[1500px]"
            >
              {/* Card 1 */}
              <Link
                to="/services"
                className="block">
                <div className="flex flex-col justify-between bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-xl p-6 min-h-[200px] hover:border-[#22d3ee]/30 transition-colors">
                  <div className="text-[#06b6d4] mb-6">
                    <LayoutGrid size={22} />
                  </div>
                  <div>
                    <h3 className="text-white text-[17px] font-semibold mb-1">
                      Web Development
                    </h3>
                    <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                      Modern, fast, and scalable websites and web applications.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 2 */}
              <Link
                to="/services"
                className="block">
                <div className="flex flex-col justify-between bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[200px] hover:border-[#22d3ee]/30 transition-colors">
                  <div className="text-[#06b6d4] mb-6">
                    <Smartphone size={22} />
                  </div>
                  <div>
                    <h3 className="text-white text-[17px] font-semibold mb-1">
                      Mobile App Development
                    </h3>
                    <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                      Mobile solutions crafted to inspire, engage.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 3 */}
              <Link to="/services" className="block">
                <div className="flex flex-col justify-between bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[200px] hover:border-[#22d3ee]/30 transition-colors">
                  <div className="text-[#06b6d4] mb-6">
                    <Server size={22} />
                  </div>
                  <div>
                    <h3 className="text-white text-[17px] font-semibold mb-1">
                      Backend Development
                    </h3>
                    <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                      Powerful systems behind the scenes.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 4 */}
              <Link to="/services" className="block">
                <div className="flex flex-col justify-between bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[200px] hover:border-[#22d3ee]/30 transition-colors">
                  <div className="text-[#06b6d4] mb-6">
                    <Code2 size={22} />
                  </div>
                  <div>
                    <h3 className="text-white text-[17px] font-semibold mb-1">
                      SaaS Model
                    </h3>
                    <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                      Cloud-ready SaaS products engineered to scale with your business and future needs.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 5 */}
              <Link to="/services" className="block">
                <div className="flex flex-col justify-between bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[200px] hover:border-[#22d3ee]/30 transition-colors">
                  <div className="text-[#06b6d4] mb-6">
                    <Pencil size={22} />
                  </div>
                  <div>
                    <h3 className="text-white text-[17px] font-semibold mb-1">
                      Custom Software Development
                    </h3>
                    <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                      Custom software built for efficiency and scale.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 6 */}
              <Link to="/services" className="block">
                <div className="flex flex-col justify-between bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[200px] hover:border-[#22d3ee]/30 transition-colors">
                  <div className="text-[#06b6d4] mb-6">
                    <Plug size={22} />
                  </div>
                  <div>
                    <h3 className="text-white text-[17px] font-semibold mb-1">
                      API & Third-Party Integrations
                    </h3>
                    <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                      Systems that communicate seamlessly.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========== PROCEDURE PLAN SECTION ========== */}
      <ProcedurePlan />

      {/* ========== DISCOVER CARDS SECTION ========== */}
      <DiscoverCards />

      {/* ========== OUR WORKS SECTION ========== */}
      <OurWorks />

      {/* ========== BLOG SECTION ========== */}
      <BlogSection />

      {/* ========== ABOUT SERVICES SECTION ========== */}
      <AboutServicesSection />

      {/* ========== WORKFLOW SECTION ========== */}
      <WorkflowSection />

      {/* ========== JOIN US SECTION ========== */}
      <section className="bg-black pt-24 overflow-hidden">
        <div className="relative px-6">

          <div className="relative max-w-[520px] -translate-x-6 md:-translate-x-10">

            <div className="relative rounded-2xl border border-white/10 bg-black px-8 py-10 pl-[60px]">
              {/* Hide left border */}
              <div className="absolute left-0 top-0 h-full w-6 bg-black" />

              <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }} className="text-white text-[26px] font-semibold mb-4">
                Join Us
              </motion.h3>

              <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
               className="text-white/70 text-[15px] leading-[1.7] max-w-[420px] mb-8">
                Be part of a team that builds meaningful software with
                clarity, creativity, and purpose.
              </motion.p>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#0b0b0b] border border-[#1f1f1f]
               rounded-xl px-4 pr-28 py-4 text-[14px] text-white
               placeholder:text-[#666] outline-none
               focus:border-[#1fb6ff]/50"
                />

                <button
                  className="absolute right-1 top-1 bottom-1
               bg-[#0196c8] hover:bg-[#1fb6ff]
               transition-colors text-white text-[14px] font-bold
                px-10 rounded-md"
                >
                  Enter
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========== FOOTER ========== */}
      <Footer />
    </div>
  );
};

export default Index;
