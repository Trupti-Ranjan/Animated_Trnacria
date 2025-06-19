import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PageMarquee = ({ items }) => {
  const scrollRef = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: 50,
        repeat: -1,
        duration: 45,
        ease: "linear",
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  const repeatedElement = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  return (
    <div>
      <div
        className={`relative z-10 overflow-hidden w-full whitespace-nowrap`}
        ref={scrollRef}
      >
        <div className="flex marquee-track w-max items-center gap-10">
          {repeatedElement.map((items, index) => (
            <div
              key={`${index}`}
              className="flex items-center justify-center gap-4"
            >
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

export default PageMarquee;
