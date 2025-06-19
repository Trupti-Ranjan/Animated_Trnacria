import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

gsap.registerPlugin(ScrollTrigger);

const Pages = () => {
  const details = [
    {
      name: "PROJECT MOMA",
      image:
        "https://cdn.prod.website-files.com/67c716bb4f765b83a4301cd2/67c9c3b908c35eb282760d0a_image27.jpg",
      color: "#CD3437",
    },
    {
      name: "PROJECT DELTA",
      image:
        "https://cdn.prod.website-files.com/67c716bb4f765b83a4301cd2/67c9c8059e7c268f184bc3ab_image36.jpg",
      color: "#82AE82",
    },
    {
      name: "PROJECT GOMORRA",
      image:
        "https://cdn.prod.website-files.com/67c716bb4f765b83a4301cd2/67c9c7356d068b4dfc632d05_image34.jpg",
      color: "#AE14D5",
    },
  ];

  const marqueeRefs = [useRef(), useRef(), useRef()];
  const tiltRefs = [useRef(), useRef(), useRef()];

  const repeatedText = details.map((d) => new Array(20).fill(d.name));

  // GSAP Marquee
  useGSAP(() => {
    marqueeRefs.forEach((ref) => {
      const track = ref.current.querySelector(".marquee-track");
      const width = track.offsetWidth;
      gsap.fromTo(
        track,
        { x: -width / 2 },
        {
          x: 0,
          duration: 75,
          ease: "linear",
          repeat: -1,
        }
      );
    });
  }, []);

  // VanillaTilt
  useGSAP(() => {
    tiltRefs.forEach((ref) => {
      if (ref.current) {
        VanillaTilt.init(ref.current, {
          reverse: true,
          max: 20,
          speed: 1000,
          scale: 1.05,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          transition: true,
          gyroscope: false,
        });
      }
    });
  }, []);

  // ScrollTrigger: pin each section and stack them
  useGSAP(() => {
    const sections = gsap.utils.toArray(".section");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });
  }, []);

  return (
    <>
      {details.map((item, index) => (
        
        <div
          key={index}
          className="section h-screen w-full flex justify-center items-center overflow-hidden relative"
          style={{ backgroundColor: item.color }}
        >
          {/* Marquee */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-full"
            ref={marqueeRefs[index]}
          >
            <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
              {repeatedText[index].map((text, i) => (
                <div key={i} className="flex items-center gap-4 px-4 shrink-0">
                  <div className="h-5 w-5 rounded-full bg-white"></div>
                  <span className="text-8xl font-medium text-white">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image with Tilt */}
          <div ref={tiltRefs[index]} className="relative h-screen w-full">
            <img
              src={item.image}
              alt=""
              className="absolute top-1/2 left-1/2 w-[720px] h-[550px] object-cover -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Pages;
