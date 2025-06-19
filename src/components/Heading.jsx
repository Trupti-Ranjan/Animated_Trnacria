import React from "react";
import Button from "./Button";
import SubHeading from "./SubHeading";

const Heading = ({ text }) => {
  return (
    <div className="mx-24 pb-9 flex justify-between mt-28 border-b border-zinc-500 mb-16">
      <SubHeading text= {text} />
      <Button />
    </div>
  );
};

export default Heading;
