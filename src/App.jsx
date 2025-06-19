import "./App.css";
import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showButton, setShowButton] = useState(false);

  useGSAP(() => {
    gsap.to("#progress-bar", {
      width: "100%",
      ease: "power1.out",
      scrollTrigger: {
        scrub: 0.3,
      },
    });
  }, []);

  // Show/hide back-to-top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-primary main overflow-hidden">
      

      <Navbar />
      <Hero />
      <Hero2 />

      <div
        id="progress-bar"
        className="fixed top-0 left-0 h-[5px] w-0 bg-gradient-to-r from-[#ce3437] via-red-500 to-orange-500 shadow-lg shadow-red-500/50 ro unded-r-full z-[60] rounded-r-full"
      ></div>
      
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 border border-white hover:bg-[#ce3437] hover:text-black hover:border-black px-4 py-2 rounded-full shadow-lg transition-all duration-300 z-[60] text-2xl font-semibold text-[#ce3437] active:text-3xl"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
