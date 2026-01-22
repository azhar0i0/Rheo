import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PressableButton = () => {
  return (
    <motion.div
      whileTap={{
        scale: 0.97,
        y: 4,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className="relative"
    >
      {/* Shadow */}
      <div className="absolute inset-0 translate-y-[6px] rounded-full bg-[#0a6fa1]" />

      {/* Button */}
      <Link
        to="/start-project"
        className="
          relative inline-flex items-center justify-center
          rounded-full bg-[#1fb6ff]
          px-8 py-3
          text-[14px] font-semibold text-white
          shadow-[0_8px_30px_rgba(31,182,255,0.35)]
          transition-colors
          hover:bg-[#16a6ea]
        "
      >
        Start Your Project
      </Link>
    </motion.div>
  );
};

export default PressableButton;
