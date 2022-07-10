import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <div className="font-nunito">
      <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200  relative overflow-hidden dark:from-slate-800 dark:to-slate-900">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
