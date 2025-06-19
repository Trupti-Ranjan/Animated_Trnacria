import React from "react";

const GradientButton = () => {
  return (
    <button className="group relative flex items-center justify-start h-[3.5em] px-4 pr-14 bg-black text-white text-xs uppercase tracking-wider font-medium rounded-full cursor-pointer border border-zinc-500 overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-black">
      <span className="z-10 px-4">Get started</span>
      <div className="absolute right-[0.1em] h-[3em] w-[3em] rounded-full bg-red-500 flex items-center justify-center transition-all duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[calc(100%-0.3em)] group-active:scale-90"></div>
    </button>
  );
};

export default GradientButton;
