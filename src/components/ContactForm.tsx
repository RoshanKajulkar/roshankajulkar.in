// components/ContactForm.tsx

import { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzzgnqqw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);

      alert("Failed to send. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mt-20 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Get in Touch
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Drop me a message and I’ll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full rounded border border-gray-300 px-4 py-2 text-sm text-gray-900 dark:bg-[#1f1f1f] dark:border-gray-700 dark:text-white"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full rounded border border-gray-300 px-4 py-2 text-sm text-gray-900 dark:bg-[#1f1f1f] dark:border-gray-700 dark:text-white"
        />

        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={4}
          className="w-full rounded border border-gray-300 px-4 py-2 text-sm text-gray-900 dark:bg-[#1f1f1f] dark:border-gray-700 dark:text-white"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {submitted && (
          <p className="text-sm text-green-600 dark:text-green-400">
            Thanks! Your message has been sent 🎉
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
