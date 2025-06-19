import gsap from "gsap";
import React, { useRef } from "react";
import Marquee from "./Marquee";
import { useGSAP } from "@gsap/react";

const Business = () => {
  const first = useRef();
  const second = useRef();

  const logos = [
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67a4be01bd473222fe19cc5f_Hudon-colored.svg",
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67a4be01bd473222fe19cc64_Bristol-colored.svg",
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67a4be01bd473222fe19cc66_Philadelphia-colored%20(1).svg",
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67a4be01bd473222fe19cc60_Basel-colored%20(1).svg",
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67a4be01bd473222fe19cc68_italic-colored.svg",
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67a4be01bd473222fe19cc61_Nairobi-colored%20(1).svg",
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67a4be01bd473222fe19cc62_Seoul-colored.svg",
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67a4be01bd473222fe19cc65_Vertigo-Color%20(2).svg",
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67a4be01bd473222fe19cc67_denmark-colored.svg",
  ];

  const words = ["CONTACT US"];

  useGSAP(() => {
    gsap.to(second.current, {
      scrollTrigger: {
        trigger: second.current,
        pin: true,
      },
    });
  });

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Second Section (background) */}
      <section
        ref={second}
        className="h-screen w-full relative overflow-hidden flex justify-center items-center z-0"
      >
        <img
          src="https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67c0aad6ef3deedaafa0fd85_image15.jpg"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-[30%]">
          <Marquee items={words} margin="" />
        </div>
        <form className="h-[480px] w-[700px] bg-black/60 backdrop-blur-sm absolute z-10 p-10 border border-white/10">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-5">
              <label className="uppercase text-[10px] font-light tracking-widest">First Name</label>
              <input type="text" className="border-b border-white w-72 outline-none pb-3" placeholder="First Name" />
            </div>
            <div className="flex flex-col gap-5">
              <label className="uppercase text-[10px] font-light tracking-widest">Last Name</label>
              <input type="text" className="border-b border-white w-72 outline-none pb-3" placeholder="Last Name" />
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <label className="uppercase text-[10px] font-light tracking-widest">Email</label>
            <input type="email" className="border-b border-white w-full outline-none pb-3" placeholder="Email" />
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <label className="uppercase text-[10px] font-light tracking-widest mb-7">Message</label>
            <input type="text" className="border-b border-white w-full outline-none pb-3" placeholder="Message" />
          </div>

          <button className="px-28 py-2 bg-white text-black uppercase rounded-full mt-10 font-medium hover:bg-[#ce3437] hover:text-white transition">
            Submit
          </button>
        </form>
      </section>

      {/* First Section (on top) */}
      <section
        ref={first}
        className="absolute top-0 left-0 w-full bg-black z-20 pt-5 h-screen"
      >
        <h5 className="text-center text-zinc-400 text-sm mb-20">
          Trusted by the Best in the Business
        </h5>
        <div className="grid grid-cols-3 mx-20">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center border border-zinc-500 px-16 py-10"
            >
              <img
                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
                src={logo}
                alt={`Business Logo ${index + 1}`}
                className="max-w-[200px] object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Business;
