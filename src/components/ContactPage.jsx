import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Business from "./Business";
import ContactUs from "./ContactUs";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    tl.fromTo(
      formRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, ease: "power2.out" }
    );
  }, []);

  return (
    <div>
      <section ref={contactRef}>
        <ContactUs formRef={formRef} />
      </section>
      <Business />
    </div>
  );
};

export default ContactPage;
