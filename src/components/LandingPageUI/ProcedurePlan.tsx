import { useState } from 'react';
import { motion } from 'framer-motion';

// Images
import heroAbstract from '@/assets/contact-illustration.png';

const ProcedurePlan = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Rheo Vision: Strategizing Next-Gen Workflows',
      desc: 'Planning adaptive, scalable workflows for tomorrow’s digital challenges.',
      image: heroAbstract,
    },
    {
      title: 'Rheo Architecture: Building Intelligent Workflow Systems',
      desc: 'Designing AI-powered, modular systems that optimize operations seamlessly.',
      image: heroAbstract,
    },
    {
      title: 'Rheo Impact: Delivering Scalable and Insightful Solutions',
      desc: 'Deploying workflows that drive measurable results and business growth.',
      image: heroAbstract,
    },
  ];

  return (
    <section className="py-24 bg-black">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }} 
          className="max-w-[90%] mx-auto px-6">

        {/* Top label + heading */}
        <div className="mb-16">
          <div className="mb-2">
            <span className="text-[#8b2fc9] text-[14px]">
              ⬤ ‎ (Procedure) Plan. Build. Deploy
            </span>
          </div>

          <h2 className="text-white text-[32px] md:text-[36px] font-light leading-[1.2]">
            Rheo plannings Building, <span className="text-gray-400">to deployment</span>
          </h2>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_35%] gap-20 items-start">

          {/* LEFT IMAGE */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative"
          >
            <img
              src={steps[activeStep].image}
              alt=""
              className="w-full max-w-[480px] mx-auto"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="space-y-14">

            {steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="group cursor-pointer relative pl-8"
                >
                  {/* Vertical line */}
                  <span
                    className={`absolute left-0 top-1 h-full w-[2px] transition-colors ${
                      isActive ? 'bg-[#22d3ee]' : 'bg-[#1f1f1f]'
                    }`}
                  />

                  {/* Title */}
                  <h3
                    className={`text-[20px] font-medium leading-[1.4] mb-3 transition-colors ${
                      isActive ? 'text-white' : 'text-white/90'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-[14px] leading-[1.7] max-w-[420px] transition-colors ${
                      isActive ? 'text-[#9ca3af]' : 'text-[#6b7280]'
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProcedurePlan;
