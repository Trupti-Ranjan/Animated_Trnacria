import React, { useRef } from "react";
import Button from "./Button";
import gsap from "gsap";

const Blog = () => {
  const firstRef = useRef();
  const secondRef = useRef();

  const handleMouseEnter = () => {
    gsap.to(firstRef.current, {
      width: 1000,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(firstRef.current, {
      width: 664.4,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  const handleMouseEnter2 = () => {
    gsap.to(secondRef.current, {
      width: 1000,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave2 = () => {
    gsap.to(secondRef.current, {
      width: 664.4,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="flex justify-center items-center mx-24 mb-56  ">
      {/* First Block */}
      <div
        ref={firstRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="h-[500px] overflow-hidden w-[50%] relative"
      >
        <img
          src="https://cdn.prod.website-files.com/67c716bb4f765b83a4301cd2/67c73b5f62839f9746b78c08_image25.jpg"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 p-10 text-white">
          <h1 className="text-4xl">
            Current Design Trends for Creative Agencies
          </h1>
          <div className="mt-5 absolute top-90">
            <Button />
          </div>
        </div>
      </div>

      {/* Second Block */}
      <div
        ref={secondRef}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
        className="h-[500px] overflow-hidden w-[50%] relative"
      >
        <div className="bg-black/50 absolute">
          <img
            src="https://cdn.prod.website-files.com/67c716bb4f765b83a4301cd2/67c73b8e5a03a7e8810cfad1_image10.jpg"
            alt=""
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 p-10 text-white">
          <h1 className="text-4xl">
            Best SEO Tips for Creative Agencies Get Started
          </h1>
          <div className="mt-5 absolute top-90">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
