import { motion } from "framer-motion";

const items = [
  "App Development",
  "Integrations",
  "BackEnd",
  "FrontEnd",
  "Web Development",
];

const HeroLoop = () => {
  
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section className="relative w-full overflow-hidden bg-[#1b1b1b] py-6 md:py-3 border-y border-white/5">
      
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#1b1b1b] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#1b1b1b] to-transparent z-10" />

      <div className="flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 md:gap-12 px-6 md:px-12"
            >
              {/* Responsive Text */}
              <span className="text-[20px] sm:text-[32px] md:text-[48px] lg:text-[32px] font-bold tracking-tight text-white/90">
                {item}
              </span>

              {/* Professional Icon/Separator */}
              <span className="text-[18px] sm:text-[28px] md:text-[40px] text-lime-400 select-none">
                ✳
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroLoop;