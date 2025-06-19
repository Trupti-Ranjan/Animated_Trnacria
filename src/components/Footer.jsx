import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-10 h-[300px] mx-9 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="uppercase border-2 w-fit text-4xl font-semibold px-4 py-2">
            trinacria
          </h1>
        </div>
        <div className="flex gap-8 text-sm font-semibold">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Pricing</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="flex justify-between pb-6">
        <p className="text-sm text-zinc-500 font-medium">© {year}. All rights reserved. Powered by <span className="text-white">Webflow.</span></p>

        <div className="flex gap-10 text-2xl justify-center items-center">
          <span ><ImFacebook2 className="hover:cursor-pointer " /></span>
          <span ><FaSquareTwitter className="hover:cursor-pointer text-3xl" /></span>
          <span ><FaInstagramSquare className="hover:cursor-pointer text-3xl" /></span>
          <span ><FaYoutube className="hover:cursor-pointer text-3xl" /></span>
        </div>

        <div className="flex gap-8 text-sm font-semibold">
          <a href="#">Style-Guide</a>
          <a href="#">Licenses</a>
          <a href="#">Changelog</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
