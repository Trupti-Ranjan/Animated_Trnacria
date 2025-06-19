import React, { useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Faq = () => {
  const faq = [
    {
      que: "What makes our clothes eco-friendly?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description2:
        "Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      que: "Who is your target audience?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description2:
        "Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      que: "How does your product/service work?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description2:
        "Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      que: "What inspired you to start this company?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description2:
        "Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
  ];

  const refs = useRef([]);

  useGSAP(() => {
    refs.current.forEach((ref) => {
      if (ref) {
        gsap.set(ref, { height: 0, autoAlpha: 0, overflow: "hidden" });
      }
    });
  }, []);

  const handleMouseEnter = (index) => {
    const el = refs.current[index];
    if (el) {
      gsap.killTweensOf(el);
      gsap.to(el, {
        height: el.scrollHeight,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index) => {
    const el = refs.current[index];
    if (el) {
      gsap.killTweensOf(el);
      gsap.to(el, {
        height: 0,
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className="mb-56 mt-96">
      <div className="flex justify-center gap-7 items-center mx-24 mt-40 mb-16 pb-7 border-b border-zinc-500">
        <div className="h-5 w-5 bg-[#ce3437] rounded-full"></div>
        <h1 className="text-[42px] font-medium text-white">
          Frequently Asked Questions
        </h1>
      </div>

      {faq.map((items, index) => (
        <div
          key={index}
          className="text-white mx-24 cursor-pointer border-b border-zinc-600"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="flex justify-between items-center px-4 py-8">
            <h1 className="text-2xl font-medium">{items.que}</h1>
            <MdOutlineKeyboardArrowRight className="transition-transform duration-300 text-2xl" />
          </div>

          <div
            className="px-4 text-sm text-zinc-300"
            ref={(el) => (refs.current[index] = el)}
          >
            <p className="py-2">{items.description}</p>
            <p className="pb-6">{items.description2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
