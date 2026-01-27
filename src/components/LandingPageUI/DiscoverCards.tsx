import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
// Assets
import discoverBg from '@/assets/discover-bg.jpg';
import phoneMockup from '@/assets/phone-mockup.png';

const cards = [
  {
    id: '01',
    title: 'Custom Web Development',
    subtitle: 'tailor-made web solutions',
    heading: 'Secure & Reliable',
    description:
      'Our backend solutions ensure fast, secure, and scalable systems that can handle complex business logic and high traffic efficiently.',
    properties: [
      'Fully Customizable Design',
      'Responsive Across Devices',
      'Scalable Architecture',
      'SEO & Performance Optimized',
    ],
  },
  {
    id: '02',
    title: 'UI / UX Design',
    subtitle: 'experience driven design',
    heading: 'Modern & Intuitive',
    description:
      'We craft visually stunning interfaces with user-first experiences that increase engagement and conversions.',
    properties: [
      'User-Centered Design',
      'Interactive Prototypes',
      'Design Systems',
      'Accessibility Ready',
    ],
  },
  {
    id: '03',
    title: 'Performance Optimization',
    subtitle: 'speed that converts',
    heading: 'Fast & Optimized',
    description:
      'We optimize load times, rendering, and architecture to deliver blazing-fast digital experiences.',
    properties: [
      'Core Web Vitals',
      'Code Splitting',
      'Image Optimization',
      'Caching Strategies',
    ],
  },
];

const Card = ({ card, index, progress, range, targetScale }) => {
  // This transform shrinks and dims the card as the NEXT card comes in
  const scale = useTransform(progress, range, [1.1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(10% + ${index * 25}px)`, // Slight offset for stacked look
        }}
        className="relative w-full max-w-6xl rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 p-10 lg:p-16">
          <img
            src={discoverBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />

          {/* Left */}
          <div className="relative z-10 flex flex-col justify-between">
            <span className="text-sm font-mono text-red-500">{card.id} / 03</span>
            <h3 className="mt-6 text-3xl font-bold leading-tight">{card.title}</h3>
          </div>

          {/* Center */}
          <div className="relative z-10 flex justify-center">
            <img src={phoneMockup} alt="Phone mockup" className="max-h-[380px] w-auto" />
          </div>

          {/* Right */}
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-widest text-gray-500">{card.subtitle}</p>
            <h4 className="mt-2 text-2xl font-semibold">{card.heading}</h4>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">{card.description}</p>
            <div className="mt-8">
              <ul className="space-y-2">
                {card.properties.map((item) => (
                  <li key={item} className="text-sm text-gray-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function DiscoverCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={container} className="relative bg-black pb-[10vh]">
      <div className="pt-24">
        <h2 className="text-center text-4xl lg:text-6xl font-bold text-[#d9f3ff] sticky top-10 mb-[-5vh]">
          Discover Our Top Services.
        </h2>
      </div>

      {cards.map((card, i) => {
        // Calculate the range for the "shrink" effect
        // It starts shrinking as soon as the next card begins to overlap it
        const targetScale = 1 - (cards.length - i) * 0.1;
        return (
          <Card
            key={`p_${i}`}
            index={i}
            card={card}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}