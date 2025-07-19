import { useEffect, useState } from "react";
import { BACKEND_URL } from "../utils/constant";
import ContactForm from "./ContactForm";

const Footer = () => {
  const [totalViews, setTotalViews] = useState(null);

  useEffect(() => {
    fetch(`${BACKEND_URL}/log/stats`)
      .then((res) => res.json())
      .then((data) => {
        setTotalViews(data.totalPageViews);
      })
      .catch((err) => {
        console.error("Failed to fetch stats:", err);
      });
  }, []);

  return (
    <>
      <ContactForm />
      <section id="contact" className="mt-4 px-4 text-center">
        <footer className="mt-16 border-t border-gray-200 py-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400 space-y-1">
          <p>
            © {new Date().getFullYear()} Roshan Kajulkar. All bugs reserved 🐞
          </p>
          <p className="my-4">
            👁️ Total visits: {totalViews !== null ? totalViews : "Loading..."}
          </p>
          <p>
            🔐 We only log basic location info (like{" "}
            <strong>city, region, and country</strong>) - just curious to know
            who's dropping by 😇
          </p>
        </footer>
      </section>
    </>
  );
};

export default Footer;
