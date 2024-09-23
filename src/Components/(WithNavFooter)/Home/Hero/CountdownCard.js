/* eslint-disable react/prop-types */
"use client";
import { AllImages } from "@/assets/AllImages";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Product list with dealEndTime in ISO format
const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: "$99.99",
    image: AllImages.product1,
    dealEndTime: "2024-09-30T23:59:59", // ISO format for countdown timer
    link: "/products/wireless-headphones",
  },
  // {
  //   id: "2",
  //   name: "Wireless Headphones",
  //   price: "$99.99",
  //   image: AllImages.product1,
  //   dealEndTime: "2024-09-30T23:59:59", // ISO format for countdown timer
  //   link: "/products/wireless-headphones",
  // },
];

// CountdownCard Component to handle countdown logic
const CountdownCard = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = new Date(endTime) - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("Deal Expired");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [endTime]);

  return <p className="text-md font-bold text-red-500">{timeLeft}</p>;
};

// Main component to render product list
const ProductList = () => {
  return (
    <div className=" w-full ">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-card-color text-black text-center w-full flex flex-col mb-10 rounded"
        >
          <Image
            src={product.image}
            width={0}
            height={0}
            alt={`${product.name} image`}
            className="h-24 w-full object-cover rounded"
          />
          {/* Pass dealEndTime to CountdownCard */}
          <div className="p-2">
            <CountdownCard endTime={product.dealEndTime} />
            <p className="font-semibold">{product.name}</p>
            <p>{product.price}</p>
            <button className="bg-button-color px-4 py-2 rounded-md text-white">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
