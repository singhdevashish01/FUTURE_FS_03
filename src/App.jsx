import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

import Hero from "./sections/Hero";
import About from "./sections/About";
import FeaturedMenu from "./sections/FeaturedMenu";
import WhyChooseUs from "./sections/WhyChooseUs";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
