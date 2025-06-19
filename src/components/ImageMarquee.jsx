import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ImageMarquee = ({ images }) => {
  const marqueeRef = useRef();

  useGSAP(() => {
    const totalWidth = marqueeRef.current.scrollWidth / 2;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        marqueeRef.current,
        { x: -totalWidth },
        {
          x: 0,
          duration: 100,
          ease: "none",
          repeat: -1,
        }
      );
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  const loopImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  return (
    <div className="overflow-hidden w-full my-40">
      <div className="flex gap-4 w-max items-start" ref={marqueeRef}>
        {loopImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="w-[367px] h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
