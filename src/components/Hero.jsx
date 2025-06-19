import React from "react";
import Marquee from "./Marquee";

const Hero = () => {
  const firstWords = ["ELEVATE", "DOMINATE", "DISCOVER"];

  return (
    <>
      <div>
        <img
          className="h-screen w-full object-cover absolute left-0 top-0"
          src="/images/hero.jpg"
          alt=""
        />
        <div className="bg-black/20 absolute inset-0 z-10"></div>
      </div>

      <Marquee items={firstWords} margin="mt-12" />

      <div className="absolute left-[51%] top-[92%] text-center flex items-center gap-7 z-20">
        <div className="h-5 w-5 rounded-full bg-[#ce3437]"></div>
        <div className="text-xl font-medium text-white">Our Core Fetures.</div>
      </div>
    </>
  );
};

export default Hero;
