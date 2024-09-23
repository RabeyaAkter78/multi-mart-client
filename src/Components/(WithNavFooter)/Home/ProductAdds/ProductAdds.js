import React from "react";

const ProductAdds = () => {
  return (
    <div className="flex flex-col md:flex-row w-full mt-10">
      {/* Left Text Section */}
      <div className="flex items-center justify-center w-full md:w-[20%] bg-button-color p-4">
        <h1 className="text-white text-lg"></h1>
      </div>

      {/* Right Video Section */}
      <div className="relative flex items-center justify-center w-full md:w-[80%] bg-card-color p-4">
        {/* Video background (Placeholder) */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-50"
            autoPlay
            loop
            muted
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </div>

        {/* Overlay text and button */}
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-2xl font-bold"></h1>
          <button className="bg-button-color text-white px-6 py-2 rounded-md shadow-lg hover:bg-white hover:text-black transition">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAdds;
