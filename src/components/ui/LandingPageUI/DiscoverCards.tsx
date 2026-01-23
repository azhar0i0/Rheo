import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

export default function DiscoverCards() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[300vh] bg-black text-white px-6 lg:px-24 mt-24"
    >
      {/* Section Heading */}
      <div className="sticky top-24 z-20 mb-32">
        <h2 className="text-center text-4xl lg:text-6xl font-semibold text-[#d9f3ff]">
          Discover Our Top Services.
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative h-[200vh]">
        {cards.map((card, index) => {
          const start = index * 0.33;
          const end = start + 0.33;

          const scale = useTransform(scrollYProgress, [start, end], [0.88, 1]);
          const opacity = useTransform(scrollYProgress, [start, end], [0.35, 1]);
          const x = useTransform(scrollYProgress, [start, end], [90, 0]);

          return (
            <motion.div
              key={card.id}
              style={{ scale, opacity, x }}
              className="sticky top-40 mx-auto mb-32 max-w-6xl rounded-3xl overflow-hidden
                         bg-black shadow-[0_40px_120px_rgba(0,0,0,0.85)]"
            >
              <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 p-10 lg:p-16">
                {/* Background Image */}
                <img
                  src={discoverBg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />

                {/* Left Content */}
                <div className="relative z-10 flex flex-col justify-between">
                  <span className="text-sm text-red-400">
                    {card.id} / 03
                  </span>

                  <h3 className="mt-6 text-3xl font-semibold leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Center Image */}
                <div className="relative z-10 flex justify-center">
                  <img
                    src={phoneMockup}
                    alt="Phone mockup"
                    className="max-h-[420px] w-auto"
                  />
                </div>

                {/* Right Content */}
                <div className="relative z-10">
                  <p className="text-sm text-gray-400">
                    {card.subtitle}
                  </p>

                  <h4 className="mt-2 text-2xl font-semibold">
                    {card.heading}
                  </h4>

                  <p className="mt-4 text-gray-300 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="mt-8">
                    <p className="mb-3 text-sm text-gray-400">
                      Key Properties:
                    </p>

                    <ul className="space-y-2">
                      {card.properties.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-white"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
