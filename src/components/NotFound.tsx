import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,182,255,0.08),transparent_40%)]" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-[92%] md:max-w-3xl text-center">

          {/* 404 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="block font-display text-[96px] sm:text-[120px] font-bold leading-none text-white/10">
              404
            </span>
          </motion.div>

          {/* Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4"
          >
            This page doesn’t exist
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-[420px] text-sm sm:text-base leading-relaxed text-white/60 mb-10"
          >
            The page you’re looking for may have been moved, renamed,
            or never existed. Let’s get you back on track.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#1fb6ff]
                px-6
                py-3
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-[#7fd4ff]
                active:scale-95
              "
            >
              Go to homepage
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/start-project"
              className="
                text-sm
                text-white/60
                underline-offset-4
                hover:text-white
                hover:underline
                transition
              "
            >
              Start a project
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
