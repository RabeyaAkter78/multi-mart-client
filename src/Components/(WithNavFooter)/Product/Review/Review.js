import { AllImages } from "@/assets/AllImages";
import { Rate } from "antd";
import Image from "next/image";
import React from "react";

const SingleReview = () => {
  return (
    <div className="p-4 border-b">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-20">
        Reviews
      </h1>
      <div className="flex justify-between items-start gap-10">
        {/* User Image */}
        <Image
          src={AllImages.user}
          width={0}
          height={0}
          alt="User image"
          className="rounded-full h-56 w-56"
        />

        {/* Review Content */}
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-center">
            {/* Reviewer Info */}
            <div>
              <p className="font-bold text-xl">Sarah Albert</p>
              <p className="text-button-color text-sm">
                20 July 2023 . 4:00 pm
              </p>
            </div>

            {/* Rating */}
            <Rate defaultValue={5} style={{ color: "#854d0e" }} />
          </div>

          {/* Review Text */}
          <p className="text-gray-600 mt-2">
            It has survived not only five centuries, but also the leap into
            electronic typesetting unchanged. It was popularised in the sheets
            containing Lorem Ipsum is simply free text. ClassName aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Vestibulum sollicitudin varius mauris non dignissim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
