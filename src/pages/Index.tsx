import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  LayoutGrid,
  Smartphone,
  Server,
  Code2,
  Pencil,
  Plug,
} from 'lucide-react';
import { useState } from 'react';
// Import images
import heroAbstract from '@/assets/hero-abstract.avif';
import webDevTeam from '@/assets/web-dev-team.jpg';
import mobileDev from '@/assets/mobile-dev.jpg';
import uiUxDesign from '@/assets/ui-ux-design.jpg';
import cloudSolutions from '@/assets/cloud-solutions.jpg';
import devops from '@/assets/devops.jpg';
import flowFunction from '@/assets/flow-function.jpg';
// UI Components
import Header from '@/components/LandingPageUI/Header';
import PressableButton from '@/components/ui/PressableButton';
import HeroLoop from '@/components/ui/HeroLoop';
import ProcedurePlan from '@/components/LandingPageUI/ProcedurePlan';
import DiscoverCards from '@/components/LandingPageUI/DiscoverCards';
import BlogSection from '@/components/LandingPageUI/BlogSection';
import OurWorks from '@/components/LandingPageUI/OurWorks';
import AboutServicesSection from '@/components/LandingPageUI/AboutServicesSection';
import WorkflowSection from '@/components/LandingPageUI/WorkflowSection';
import Footer from '@/components/Footer';
import TextScroll from '@/components/LandingPageUI/TextScroll';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

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
      {/* Laptop & Desktop View */}
      <div className="hidden md:block">
        <motion.section
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative min-h-screen overflow-hidden bg-black pt-[72px]">
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
          <div className="relative min-h-screen flex items-center justify-center">
            <div className="relative z-10 mx-auto max-w-[90%] px-6 text-center">
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
          </div>
        </motion.section>
      </div>
      {/* Mobile Hero */}
      <div className="block md:hidden">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative min-h-[100svh] overflow-hidden bg-black pt-20 w-full"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={heroAbstract}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-[100svh] items-center">
            <div className="mx-auto max-w-[92%] text-left">

              {/* Eyebrow */}
              <span className="mb-4 inline-block text-[12px] tracking-widest text-[#1fb6ff] uppercase">
                Software Development Studio
              </span>

              {/* Headline */}
              <h1 className="font-display text-[32px] font-bold leading-tight text-white">
                From architecture
                <br />
                to deployment —
                <br />
                <span className="text-[#1fb6ff]">
                  flawlessly executed.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-[320px] text-[14px] leading-relaxed text-white/70">
                Full-service software development delivering web, mobile, cloud,
                and custom solutions — from concept to scale.
              </p>

              {/* CTA */}
              <div className="mt-8">
                <PressableButton />
              </div>

            </div>
          </div>
        </motion.section>
      </div>

      {/* ========== HERO LOOP ========== */}
      <HeroLoop />

      {/* ========== SERVICES SECTION ========== */}
      <section className="py-24 bg-black">
        <div className="max-w-[90%] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16 items-start">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Label */}
              <div className="mb-2">
                <span className="text-[#8b2fc9] text-[14px] tracking-wide">
                  ⬤ ‎ Services
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
                to="/web-services"
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
                to="/app-services"
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
                      Mobile solutions crafted to inspire, engage, User friendly interface.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 3 */}
              <Link to="/backend-services" className="block">
                <div className="flex flex-col justify-between bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[200px] hover:border-[#22d3ee]/30 transition-colors">
                  <div className="text-[#06b6d4] mb-6">
                    <Server size={22} />
                  </div>
                  <div>
                    <h3 className="text-white text-[17px] font-semibold mb-1">
                      Backend Development
                    </h3>
                    <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                      Powerful systems behind the scenes, Proper professionally managable.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 4 */}
              <Link to="/saas-services" className="block">
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
              <Link to="/custom-software-services" className="block">
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
              <Link to="/api-integration-services" className="block">
                <div className="flex flex-col justify-between bg-gradient-to-b from-[#0b0b0b] to-[#050505] border border-[#1f1f1f] rounded-2xl p-6 min-h-[200px] hover:border-[#22d3ee]/30 transition-colors">
                  <div className="text-[#06b6d4] mb-6">
                    <Plug size={22} />
                  </div>
                  <div>
                    <h3 className="text-white text-[17px] font-semibold mb-1">
                      API & Third-Party Integrations
                    </h3>
                    <p className="text-[#9ca3af] text-[14px] leading-[1.6]">
                      Systems that communicate seamlessly, perfectly and professionally.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ========== PROCEDURE PLAN SECTION ========== */}
      <ProcedurePlan />

      {/* ========== DISCOVER CARDS SECTION ========== */}
      <DiscoverCards />

      {/* ========== OUR WORKS SECTION ========== */}
      <OurWorks />

      {/* ========== Scrolling Text ========== */}
      <TextScroll />

      {/* ========== BLOG SECTION ========== */}
      <BlogSection />

      {/* ========== ABOUT SERVICES SECTION ========== */}
      <AboutServicesSection />

      {/* ========== WORKFLOW SECTION ========== */}
      <WorkflowSection />

      {/* ========== JOIN US SECTION ========== */}
      <section>
        {/* Laptop view */}
        <section className="bg-black pt-24 overflow-hidden hidden md:block">
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

                  <Link to="/start-project">
                    <button
                      className="absolute right-1 top-1 bottom-1
                      bg-[#0196c8] hover:bg-[#1fb6ff]
                      transition-colors text-white text-[14px] font-bold
                      px-10 rounded-md"
                    >
                      Enter
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mobile view */}
        <section className="bg-black pt-20 md:pt-28 overflow-hidden block md:hidden">
          <div className="relative px-4 sm:px-6">

            {/* Wrapper */}
            <div className="
      relative
      mx-auto
      max-w-[520px]
      sm:-translate-x-4
      md:-translate-x-10
    ">

              {/* Card */}
              <div className="
        relative
        rounded-2xl
        border border-white/10
        bg-black
        px-6
        sm:px-8
        py-8
        sm:py-10
        pl-10
        sm:pl-[60px]
      ">
                {/* Hide left border */}
                <div className="absolute left-0 top-0 h-full w-4 sm:w-6 bg-black" />

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  viewport={{ once: true }}
                  className="
            text-white
            font-semibold
            text-xl
            sm:text-[26px]
            mb-3
            sm:mb-4
          "
                >
                  Join Us
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  viewport={{ once: true }}
                  className="
            text-white/70
            text-sm
            sm:text-[15px]
            leading-relaxed
            max-w-[420px]
            mb-6
            sm:mb-8
          "
                >
                  Be part of a team that builds meaningful software with
                  clarity, creativity, and purpose.
                </motion.p>

                {/* Input + CTA */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="
              w-full
              bg-[#0b0b0b]
              border border-[#1f1f1f]
              rounded-xl
              px-4
              py-4
              pr-24
              sm:pr-28
              text-sm
              text-white
              placeholder:text-[#666]
              outline-none
              focus:border-[#1fb6ff]/50
            "
                  />

                  <Link to="/start-project">
                    <button
                      className="
                absolute
                right-1
                top-1
                bottom-1
                rounded-lg
                bg-[#0196c8]
                px-6
                sm:px-8
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-[#1fb6ff]
                active:scale-95
              "
                    >
                      Enter
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      </section>

      {/* ========== FOOTER ========== */}
      <Footer />
    </div>
  );
};

export default Index;
