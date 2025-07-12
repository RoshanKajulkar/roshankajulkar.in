import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <>
      <ContactForm />
      <section id="contact" className="mt-4 px-4 text-center">
        <footer className="mt-16 border-t border-gray-200 py-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          © {new Date().getFullYear()} Roshan Kajulkar. All bugs reserved 🐞
        </footer>
      </section>
    </>
  );
};

export default Footer;
