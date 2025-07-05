import { motion } from "motion/react";

function App() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className="text-center text-2xl"
      >
        Hello, I am Roshan
      </motion.h1>
    </>
  );
}

export default App;
