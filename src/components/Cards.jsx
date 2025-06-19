import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  let firstRef = useRef();
  let secondRef = useRef();
  let thirdRef = useRef();

  useGSAP(() => {
    gsap.to(firstRef.current, {
      ease: "power1.out",
      scrollTrigger: {
        trigger: firstRef.current,
        start: "top 15%",
        end: "top -122.7%",
        scrub: 1.5,
        pin: true,
      },
    });
    gsap.to(secondRef.current, {
      ease: "power1.out",
      scrollTrigger: {
        trigger: secondRef.current,
        start: "top 15%",
        end: "top -64.3%",
        pin: true,
        scrub: 1.5,
      },
    });
    gsap.to(thirdRef.current, {
      ease: "power1.out",
      scrollTrigger: {
        trigger: thirdRef.current,
        start: "top 15%",
        end: "top -5.7%",
        pin: true,
        scrub: 1.5,
      },
    });
  });

  return (
    <div className="flex px-10 mt-72 justify-between parent">
      <div
        ref={firstRef}
        className="relative h-[500px] w-[435px] bg-black border-gray-600 border p-16 bg-contain bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67cf8469afff19706cbbdfd3_Logo%20First%20Part.svg')",
        }}
      >
        <div className="absolute inset-0 bg-black/95 z-0"></div>

        <div className="relative z-10 flex flex-col justify-between h-[372px] text-white">
          <h1 className="text-3xl font-medium">Powered Marketing Automation</h1>
          <p>
            Leverage advanced audience segmentation and data analytics to ensure
            your marketing reaches the right people at the right time.
          </p>
        </div>
      </div>

      <div
        ref={secondRef}
        className="mt-[370px] relative h-[500px] w-[435px] bg-[#ce3437] border-gray-600 border p-16 bg-contain bg-center"
        style={{
          backgroundImage:
            'url("https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67cf846956ca9dcf0b92abda_Logo%20Second%20Part.svg")',
        }}
      >
        <div className="absolute inset-0 bg-[#ce3437]/95 z-0"></div>

        <div className="relative z-10 flex flex-col justify-between h-[372px] text-white">
          <h1 className="text-3xl font-medium">
            Customer-Centric Growth Strategies
          </h1>
          <p>
            Build an emotional connection with your audience through compelling
            narratives, visually stunning content, and persuasive.
          </p>
        </div>
      </div>

      <div
        ref={thirdRef}
        className="mt-[740px] relative h-[500px] w-[435px] bg-black border-gray-600 border p-16 bg-contain bg-center"
        style={{
          backgroundImage:
            'url("https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67cf84690b2bbee964cde222_Logo%20Third%20Part.svg")',
        }}
      >
        <div className="absolute inset-0 bg-black/95  z-0"></div>

        <div className="relative z-10 flex flex-col justify-between h-[372px] text-white">
          <h1 className="text-4xl font-medium">Driven Targeting Strategies</h1>
          <p>
            Create and optimize ad campaigns that drive measurable results,
            increase lead generation, and boost sales by using data-driven.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
