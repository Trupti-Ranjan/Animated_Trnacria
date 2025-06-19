import React from "react";

const SubHeading = ({ text, margin,border }) => {
  return (
    <div className={`flex justify-center gap-7 items-center ${margin} ${border}`}>
      <div className="h-5 w-5 bg-[#ce3437] rounded-full"></div>
      <h1 className="text-[42px] font-medium text-white">{text}</h1>
    </div>
  );
};

export default SubHeading;
