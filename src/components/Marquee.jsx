import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Marquee = ({ items, margin }) => {
  const scrollRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "linear",
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  const repeatedElement = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="">
      <div
        className={`relative top-20 z-10 overflow-hidden w-full whitespace-nowrap ${margin}`}
        ref={scrollRef}
      >
        <div className="flex marquee-track w-max items-center gap-10">
          {repeatedElement.map((items, index) => (
            <div key={`${index}`} className="flex items-center gap-4">
              <div className="h-5 w-5 rounded-full bg-[#ce3437] flex-shrink-0 mr-3"></div>
              <span className="text-8xl font-medium font-primary text-white leading-none px-2">
                {items}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
