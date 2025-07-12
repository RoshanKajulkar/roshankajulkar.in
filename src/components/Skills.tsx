import { motion } from "motion/react";

const Skills = () => {
  return (
    <section className="mt-16 px-4 text-center">
      <motion.h2 
        className="mb-4 text-2xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5}}
      >
        My Skills
      </motion.h2>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {[
          {
            title: "Frontend",
            tools: [
              { name: "React", icon: "/tech/react.svg" },
              { name: "Vue", icon: "/tech/vue.svg" },
              { name: "Tailwind", icon: "/tech/tailwind.svg" },
              { name: "Motion", icon: "/tech/framer.svg" },
              { name: "TypeScript", icon: "/tech/typescript.svg" },
            ],
          },
          {
            title: "Backend",
            tools: [
              { name: "Node.js", icon: "/tech/node.svg" },
              { name: "MongoDB", icon: "/tech/mongodb.svg" },
              { name: "PostgreSQL", icon: "/tech/postgres.svg" },
            ],
          },
          {
            title: "DevOps & CI/CD",
            tools: [
              { name: "Docker", icon: "/tech/docker.svg" },
              { name: "AWS", icon: "/tech/aws.svg" },
              { name: "Git", icon: "/tech/git.svg" },
            ],
          },
          {
            title: "GenAI",
            tools: [
              {
                name: "Prompt Engineering, LLM Powered Apps & RAG",
                icon: "/tech/google-bard-1.svg",
              },
            ],
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.2 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-[#1f1f1f] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
              {card.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {card.tools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    title={tool.name}
                    className="h-8 w-8 object-contain"
                  />
                  <span className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
