import { motion } from "motion/react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className="text-center text-2xl my-4"
      >
        🚧 Building my portfolio...
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className="text-center text-2xl"
      >
        Please check back later!
      </motion.p>
    </div>
  );
}

export default App;
