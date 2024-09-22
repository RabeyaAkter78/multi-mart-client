/* eslint-disable react/prop-types */
import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div data-aos="zoom-in" className="flex justify-center items-center my-28">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-card-color text-center my-20 inline-block relative uppercase">
        {heading}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-b-2 border-button-color w-1/2 "></span>
      </h1>
    </div>
  );
};

export default SectionTitle;
