import { useEffect, useState } from "react";
import { BACKEND_URL } from "../utils/constant";
import { motion } from "motion/react";

type Blog = {
  id: number;
  title: string;
  description: string;
  url: string;
  page_views_count: number;
  reading_time_minutes: number;
  published_at: string;
};

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/devto/stats`)
      .then((res) => res.json())
      .then((res) => setBlogs([...res.data]))
      .catch((err) => console.error("Failed to load blogs:", err));
  }, []);

  return (
    <section className="mt-16 px-4 text-center">
      <motion.h2
        className="mb-4 text-2xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
      >
        My Blogs
      </motion.h2>

      <div className="mx-auto grid max-w-4xl gap-6">
        {blogs.map((blog, i) => (
          <motion.a
            key={blog.id}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.2 }}
            className="block rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-md transition hover:shadow-lg dark:border-gray-700 dark:bg-[#1f1f1f] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {blog.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              👀 {blog.page_views_count} views
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
