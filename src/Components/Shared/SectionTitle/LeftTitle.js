import React from "react";

const LeftTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <h1 className="text-xl uppercase font-semibold text-card-color">
        {heading}____________
      </h1>

      <h1 className="font-bold text-2xl">{subHeading}</h1>
    </div>
  );
};

export default LeftTitle;
