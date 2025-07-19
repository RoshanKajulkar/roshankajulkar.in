import { motion } from "motion/react";

const timelineData = [
  {
    year: "July 2025",
    title: "Launched My Portfolio Website",
    descriptionLines: [
      "- Designed and deployed a personal portfolio using AWS EC2, Route 53, and HTTPS via Let's Encrypt",
      "- Built with React, Tailwind CSS, and Framer Motion to showcase projects and experience interactively",
    ],
  },
  {
    year: "2024",
    title: "DevOps & System Architecture Focus",
    descriptionLines: [
      "- Set up CI/CD pipelines and containerized services with Docker",
      "- Refined system architecture for better scalability, deployment efficiency, and reliability",
    ],
  },
  {
    year: "Aug 2023",
    title: "Promoted to Senior Software Engineer",
    descriptionLines: [
      "- Promoted at Dassault Systèmes for delivering high-impact solutions",
      "- Took ownership of architecture, mentored peers, and led platform-level projects",
    ],
  },
  {
    year: "2023",
    title: "Leadership & System Optimization",
    descriptionLines: [
      "- Developed a scalable REST API with JWT authentication and rate limiting using Spring Boot",
      "- Replaced manual sprint tracking with a custom full-stack web app, boosting team productivity by 50%",
      "- Built modular frontend widgets to improve internal tooling and reduce maintenance",
      '- Received the "Evangelist Award" for exceptional contributions and technical leadership',
    ],
  },
  {
    year: "2022",
    title: "Platform Modernization & Technical Mentorship",
    descriptionLines: [
      "- Migrated 10+ legacy components to a modern frontend stack, improving performance by 30%",
      "- Built reusable UI libraries to accelerate delivery and maintain consistency",
      "- Optimized backend systems with Spring Boot and Node.js, reducing API latency by 40%",
      "- Led a team of 4 to build a real-time data visualization platform for 100k+ records",
      "- Integrated CAS authentication to strengthen access control and security",
      "- Mentored juniors and led frontend workshops across teams",
    ],
  },
  {
    year: "Sept 2021",
    title: "Joined Dassault Systèmes",
    descriptionLines: [
      "- Started as a Software Engineer responsible for building web applications",
      "- Built modular full-stack widgets for enterprise-grade applications",
    ],
  },
  {
    year: "July 2021",
    title: "Graduated with B.E. in Information Technology",
    descriptionLines: [
      "- Earned a Bachelor of Engineering degree from Pune University",
    ],
  },
  {
    year: "Early 2021",
    title: "Internships & Freelance Projects",
    descriptionLines: [
      "- Delivered responsive React websites for local businesses and startups",
      "- Gained hands-on experience through internships and real-world freelance work",
    ],
  },
];

const LifeLog = () => {
  return (
    <section className="mt-16 px-4">
      <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
        My Journey
      </h2>

      <div className="flex justify-center">
        <img src="/ds_logo.svg" alt="Dassault Logo" className="h-24 w-24" />
      </div>
      <p className="mb-12 text-center text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
        Currently working as a Senior Software Engineer at Dassault Systèmes
        <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
          Sept 2021 – Present
        </span>
      </p>
      <ol className="relative border-l border-gray-300 dark:border-gray-700 max-w-3xl mx-auto">
        {timelineData.map((item, index) => {
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full">
                <img src="/twitter_badge.svg" alt="check" className="h-4 w-4" />
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <time className="mb-1 block text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.year}
              </time>

              <div className="mt-1 flex flex-col gap-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {item.descriptionLines.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
};

export default LifeLog;
