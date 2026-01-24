import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PressableButton = () => {
  return (
    <motion.div className="relative inline-block">
      {/* Bottom depth layer (never moves) */}
      <div
        className="
          absolute inset-0
          translate-y-[10px]
          rounded-full
          bg-[#406581]
          border-2 border-black
        "
      />

      {/* Middle rim layer (never moves) */}
      <div
        className="
    absolute inset-0
    translate-y-[6px]
    rounded-full
    bg-[#4BB3FD]
    border-2 border-black
  "
      >
        <span className="pointer-events-none absolute inset-y-[0px] left-1/2 -translate-x-1/2 flex justify-content-between gap-[130px]">
          <span className="w-[2px] rounded-full bg-black/60" />
          <span className="w-[2px] rounded-full bg-black/60" />
        </span>
      </div>

      {/* Top face (only this moves) */}
      <motion.div
        whileTap={{ y: 4 }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        className="relative z-10"
      >
        <Link
          to="/start-project"
          className="
            inline-flex items-center justify-center
            rounded-full
            bg-[#0496FF]
            border-2 border-black
            px-6 py-4 mb-[1px]
            text-[15px]
            text-white
            tracking-wide
            select-none
            font-bold
          "
        >
          Start Your Project
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PressableButton;
