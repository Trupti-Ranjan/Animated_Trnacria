import React, { useRef } from "react";
import Dropdown from "./Dropdown";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.to(navRef.current, {
      backgroundColor: "rgba(39, 39, 42, 0.5)", 
      backdropFilter: "blur(8px)", 
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: document.body,
        start: "top+=20 top", 
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 text-white transition-all duration-500"
      style={{
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
      }}
    >
      <div className="flex justify-between items-center px-5 py-5">
        {/* Left links */}
        <div className="flex gap-3">
          <a className="hover:bg-[#ffffff33] px-2.5 py-0.5" href="#">
            Home
          </a>
          <a className="hover:bg-[#ffffff33] px-2.5 py-0.5" href="#">
            About
          </a>
          <Dropdown />
        </div>

        {/* Center brand */}
        <h1 className="uppercase w-fit px-2.5 py-[1px] border border-white text-lg font-semibold hover:bg-[#ce3437] hover:cursor-pointer">
          trinacria
        </h1>

        {/* Right links */}
        <div className="flex gap-3">
          <a className="hover:bg-[#ffffff33] px-2.5 py-0.5" href="#">
            Pricing
          </a>
          <a className="hover:bg-[#ffffff33] px-2.5 py-0.5" href="#">
            News
          </a>
          <a className="hover:bg-[#ffffff33] px-2.5 py-0.5" href="#">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
