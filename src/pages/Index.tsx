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
import phoneMockup from '@/assets/phone-mockup.png';
import contactIllustration from '@/assets/contact-illustration.png';
import earthFooter from '@/assets/earth-footer.jpg';
import logo from '@/assets/rheo-logo.png';
// UI Components
import Header from '@/components/Header';
import PressableButton from '@/components/ui/PressableButton';
import HeroLoop from '@/components/ui/HeroLoop';
import ProcedurePlan from '@/components/ui/LandingPageUI/ProcedurePlan';
import DiscoverCards from '@/components/ui/LandingPageUI/DiscoverCards';
import BlogSection from '@/components/ui/LandingPageUI/BlogSection';
import OurWorks from '@/components/ui/LandingPageUI/OurWorks';
import AboutServicesSection from '@/components/ui/LandingPageUI/AboutServicesSection';
import WorkflowSection from '@/components/ui/LandingPageUI/WorkflowSection';

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
    <div className="min-h-screen bg-[#000000] pb-10">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black" />
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
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 items-start">

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
              <h2 className="text-white text-[38px] leading-[1.2] font-semibold mb-6">
                Our development services cover every stage of building modern software.
              </h2>

              {/* Description */}
              <p className="text-[#9ca3af] text-[15px] leading-[1.7] mb-10 max-w-[360px]">
                From idea to launch, we develop software that scales, performs, and connects.
              </p>

              {/* Button */}
              <Link
                to="/services"
                className="inline-flex items-center gap-3 bg-[#06b6d4] hover:bg-[#22d3ee] transition-colors text-black font-medium text-[14px] px-6 py-3 rounded-lg"
              >
                All Services
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* RIGHT GRID */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Card 1 */}
              <div className="bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[190px] hover:border-[#22d3ee]/30 transition-colors">
                <div className="text-[#06b6d4] mb-6">
                  <LayoutGrid size={22} />
                </div>
                <h3 className="text-white text-[17px] font-semibold mb-3">
                  Web Development
                </h3>
                <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                  Modern, fast, and scalable websites and web applications.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[190px] hover:border-[#22d3ee]/30 transition-colors">
                <div className="text-[#06b6d4] mb-6">
                  <Smartphone size={22} />
                </div>
                <h3 className="text-white text-[17px] font-semibold mb-3">
                  Mobile App Development
                </h3>
                <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                  Mobile solutions crafted to inspire, engage.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[190px] hover:border-[#22d3ee]/30 transition-colors">
                <div className="text-[#06b6d4] mb-6">
                  <Server size={22} />
                </div>
                <h3 className="text-white text-[17px] font-semibold mb-3">
                  Backend Development
                </h3>
                <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                  Powerful systems behind the scenes.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[190px] hover:border-[#22d3ee]/30 transition-colors">
                <div className="text-[#06b6d4] mb-6">
                  <Code2 size={22} />
                </div>
                <h3 className="text-white text-[17px] font-semibold mb-3">
                  SaaS Model
                </h3>
                <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                  Cloud-ready SaaS products engineered to scale with your business and future needs.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[190px] hover:border-[#22d3ee]/30 transition-colors">
                <div className="text-[#06b6d4] mb-6">
                  <Pencil size={22} />
                </div>
                <h3 className="text-white text-[17px] font-semibold mb-3">
                  Custom Software Development
                </h3>
                <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                  Custom software built for efficiency and scale.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[190px] hover:border-[#22d3ee]/30 transition-colors">
                <div className="text-[#06b6d4] mb-6">
                  <Plug size={22} />
                </div>
                <h3 className="text-white text-[17px] font-semibold mb-3">
                  API & Third-Party Integrations
                </h3>
                <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                  Systems that communicate seamlessly.
                </p>
              </div>
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

              <h3 className="text-white text-[26px] font-semibold mb-4">
                Join Us
              </h3>

              <p className="text-white/70 text-[15px] leading-[1.7] max-w-[420px] mb-8">
                Be part of a team that builds meaningful software with
                clarity, creativity, and purpose.
              </p>

              <div className="flex items-center gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 bg-[#0b0b0b] border border-[#1f1f1f]
                       rounded-xl px-4 py-3 text-[14px] text-white
                       placeholder:text-[#666] outline-none
                       focus:border-[#1fb6ff]/50"
                />

                <button className="bg-[#0196c8] hover:bg-[#1fb6ff]
                             transition-colors text-white text-[14px]
                             font-medium px-6 py-3 rounded-xl">
                  Enter
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========== FOOTER ========== */}
      <footer className="relative mt-10">
        {/* Earth Background */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={earthFooter}
            alt=""
            className="w-full h-full object-cover object-top opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-48 pb-8">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h4 className="text-[12px] text-[#555] uppercase tracking-wider mb-4">Navigation</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/" className="text-white text-[14px] hover:text-[#22d3ee] transition-colors">About</Link>
                <Link to="/all-services" className="text-white text-[14px] hover:text-[#22d3ee] transition-colors">Works</Link>
                <Link to="/services" className="text-white text-[14px] hover:text-[#22d3ee] transition-colors">Services</Link>
                <Link to="/blog" className="text-white text-[14px] hover:text-[#22d3ee] transition-colors">Blog</Link>
              </nav>
            </div>

            <div>
              <h4 className="text-[12px] text-[#555] uppercase tracking-wider mb-4">Social</h4>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-white text-[14px] hover:text-[#22d3ee] transition-colors">Twitter(X)</a>
                <a href="#" className="text-white text-[14px] hover:text-[#22d3ee] transition-colors">LinkedIn</a>
                <a href="#" className="text-white text-[14px] hover:text-[#22d3ee] transition-colors">Dribbble</a>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <p className="text-[12px] text-[#555]">
              © 2025 Rheo. All rights reserved.
            </p>

            <p className="text-[12px] text-[#555]">
              Pakistan {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[12px] text-[#555] hover:text-white transition-colors"
            >
              Back to top
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
