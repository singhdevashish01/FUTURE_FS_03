import { useCallback, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Loader from "./components/Loader";

import Hero from "./sections/Hero";
import About from "./sections/About";
import FeaturedMenu from "./sections/FeaturedMenu";
import WhyChooseUs from "./sections/WhyChooseUs";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <Loader onComplete={handleLoaderComplete} />
      )}

      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <FeaturedMenu />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <FloatingActions />

      <Footer />
    </>
  );
}

export default App;