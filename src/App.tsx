import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import LifeLog from "./components/LifeLog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-full bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-2 lg:px-8">
        <Header />

        <Hero />

        <Skills />

        <LifeLog />

        <Footer />
      </div>
    </div>
  );
}

export default App;
