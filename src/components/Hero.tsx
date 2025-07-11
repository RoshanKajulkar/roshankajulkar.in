import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="mt-12 text-center">
      <motion.img
        loading="lazy"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        src="/photo_small.png"
        alt="Roshan Kajulkar"
        className="mx-auto mb-4 h-auto w-24 rounded-full shadow-lg md:w-32"
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
      >
        Roshan Kajulkar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-2 text-lg text-gray-700 dark:text-gray-100"
      >
        Fullstack Developer who gets things done — from Pixel to Production 🚀
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mx-auto mt-1 max-w-xl text-sm text-gray-800 dark:text-gray-300"
      >
        I build fast frontends, scalable backends, deploy with DevOps, and
        innovate with GenAI — delivering value end to end.
      </motion.p>
    </section>
  );
};

export default Hero;
