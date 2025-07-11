import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-full bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-2 lg:px-8">
        <Header />

        <Hero />

        <Skills />

        <div className="mt-36 pb-16">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="my-4 text-center text-2xl"
          >
            🚧 Building my portfolio...
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="text-center text-2xl"
          >
            Please check back later to check out projects!
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default App;
