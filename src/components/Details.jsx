import React from "react";

const Details = ({ details1, details2, details3, margin }) => {
  return (
    <div
      className={`flex justify-between items-center mx-24 pt-10 pb-16 bg-black text-white border-zinc-500 ${
        margin && "border-y-1"
      }`}
    >
      <h1 className="text-6xl font-bold">{details1}</h1>
      <div className="flex w-[80%] justify-between">
        <h1 className="text-4xl ml-56 text-zinc-500">{details2}</h1>
        <p className="w-80 text-zinc-500">{details3}</p>
      </div>
    </div>
  );
};

export default Details;
