import React from "react";
import Cards from "./Cards";
import Marquee from "./Marquee";
import Details from "./Details";
import ImageMarquee from "./ImageMarquee";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import Pages from "./Pages";
import SubHeading from "./SubHeading";
import Faq from "./Faq";
import Blog from "./Blog";
import Business from "./Business";
import Footer from "./Footer";

const Hero2 = () => {
  let secondWorks = ["DiSCOVER", "STARTAGY", "GROWTH"];
  let images = [
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67c75025295e2f63f202d88a_image22.jpg",
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67c73d2ea4eb49b0c4311eea_image30.jpg",
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67c73cdedcc5ff41092db6c0_image8.jpg",
    "https://cdn.prod.website-files.com/67a4baa464dc16c27c984079/67c73ceec35109dcc3eb2fe4_image7.jpg",
  ];

  return (
    <div className="h-[100%] bg-black text-white">
      <Cards />
      <Marquee items={secondWorks} margin="my-80" />
      <Details
        details1="97%"
        details2="Happy Clients Served"
        details3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."
        margin={false}
      />
      <Details
        details1="15K"
        details2="Completed Projects"
        details3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."
        margin={true}
      />
      <Details
        details1="1M+"
        details2="Campaigns Visitors"
        details3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."
        margin={false}
      />
      <ImageMarquee images={images} />
      <Paragraph />
      <Heading text="Selected Projects" />
      <Pages />
      <SubHeading
        text="Frequenly Asked Questions"
        margin="mx-24 mt-96 mb-16 pb-7"
        border="mt-28 border-b border-zinc-500"
      />
      <Faq />
      <Heading text="Recent From Blog" />
      <Blog />
      <Business />
      <Footer />
    </div>
  );
};

export default Hero2;
