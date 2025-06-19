import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Paragraph = () => {
  const paraRef = useRef();

  useEffect(() => {
    const split = new SplitType(paraRef.current, { types: "chars" });

    gsap.fromTo(
      split.chars,
      { color: "#52525b" }, // Tailwind's zinc-600
      {
        color: "#ffffff",
        stagger: 0.02,
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center">
      <p
        ref={paraRef}
        className="w-[800px] text-[40px] leading-[1.5] text-zinc-600"
      >
        It's the spark that turns abstract ideas into compelling stories, static
        designs into dynamic experiences, and fleeting trends into lasting
        innovations. Insight allows us to see not just what is, but what could
        be—a perspective that fuels everything we create.
      </p>
    </div>
  );
};

export default Paragraph;
