import React, { useRef } from "react";
import { Layout } from "./components/Layout.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Experience } from "./components/Experience.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { AILab } from "./components/AILab.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

const App = () => {
  const contactRef = useRef(null);

  const handleHireMeClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <Hero onHireMeClick={handleHireMeClick} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <AILab />
      <Contact ref={contactRef} />
      <Footer />
    </Layout>
  );
};

export default App;
