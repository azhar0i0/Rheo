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
  const wrapperRef = useRef(null);

  const { scrollY } = useScroll();

  return (
    <section className="relative bg-black text-white px-6 lg:px-24 mt-24">
      {/* Heading */}
      <div className="sticky top-24 z-50 mb-24">
        <h2 className="text-center text-4xl lg:text-6xl font-semibold text-[#d9f3ff]">
          Discover Our Top Services.
        </h2>
      </div>

      {/* Cards Wrapper */}
      <div ref={wrapperRef} className="relative">
        {cards.map((card, index) => {
          // Each card gets 600px scroll distance
          const start = index * 600;
          const end = start + 600;

          const y = useTransform(scrollY, [start, end], [300, 0]);

          return (
            <motion.div
              key={card.id}
              style={{
                y,
                zIndex: index + 1,
              }}
              className="sticky top-40 mx-auto mb-32 max-w-6xl rounded-3xl overflow-hidden
                         bg-black shadow-[0_40px_120px_rgba(0,0,0,0.85)]"
            >
              <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 p-10 lg:p-16">
                {/* Background */}
                <img
                  src={discoverBg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />

                {/* Left */}
                <div className="relative z-10 flex flex-col justify-between">
                  <span className="text-sm text-red-400">
                    {card.id} / 03
                  </span>

                  <h3 className="mt-6 text-3xl font-semibold leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Center */}
                <div className="relative z-10 flex justify-center">
                  <img
                    src={phoneMockup}
                    alt="Phone mockup"
                    className="max-h-[420px] w-auto"
                  />
                </div>

                {/* Right */}
                <div className="relative z-10">
                  <p className="text-sm text-gray-400">{card.subtitle}</p>

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
                        <li key={item} className="text-sm text-white">
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

        {/* Spacer to create exact scroll area */}
        <div style={{ height: `${cards.length * 600}px` }} />
      </div>
    </section>
  );
}
