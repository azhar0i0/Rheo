const items = [
  "App Development",
  "Integrations",
  "BackEnd",
  "FrontEnd",
  "Web Development",
];

const HeroLoop = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#1b1b1b]">
      <div className="hero-loop-mask">
        <div className="hero-loop-track">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-10 px-10"
            >
              <span className="text-[32px] font-semibold text-white/90 whitespace-nowrap">
                {item}
              </span>

              {/* Center Icon */}
              <span className="text-[34px] font-bold text-lime-400">
                ✳
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroLoop;
