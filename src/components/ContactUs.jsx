import React from "react";
import Marquee from "./Marquee";

const ContactUs = ({ formRef }) => {
  let words = ["CONTACT US"];

  return (
    <div className="h-screen w-full relative overflow-hidden flex justify-center items-center">
      <img
        src="https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67c0aad6ef3deedaafa0fd85_image15.jpg"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-[30%]">
        <Marquee items={words} margin="" />
      </div>
      <form
        ref={formRef}
        className="h-[480px] w-[700px] bg-black/60 backdrop-blur-sm absolute z-10 p-10 border border-white/10"
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-5">
            <label className="uppercase text-[10px] font-light tracking-widest">
              First Name
            </label>
            <input
              type="text"
              className="border-b border-white w-72 outline-none focus:outline-none pb-3"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="uppercase text-[10px] font-light tracking-widest">
              Last Name
            </label>
            <input
              type="text"
              className="border-b border-white w-72 outline-none focus:outline-none pb-3"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <label className="uppercase text-[10px] font-light tracking-widest">
            Email
          </label>
          <input
            type="email"
            className="border-b border-white w-full outline-none focus:outline-none pb-3"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <label className="uppercase text-[10px] font-light tracking-widest mb-7">
            Message
          </label>
          <input
            type="text"
            className="border-b border-white w-full outline-none focus:outline-none pb-3"
            placeholder="Message"
          />
        </div>

        <button className="px-28 py-2 bg-white text-black uppercase rounded-full mt-10 font-medium hover:bg-[#ce3437] hover:text-white transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
