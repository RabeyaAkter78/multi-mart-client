/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AllImages } from "@/assets/AllImages";

const LimitedtimeProducts = () => {
  // Sample products data
  const products = [
    {
      Id: "1",
      name: "Wireless Headphones",
      price: "$99.99",
      image: AllImages.product1,
      dealEndTime: "2024-09-30T23:59:59", // ISO format for countdown timer
      link: "/products/wireless-headphones",
    },
    {
      Id: "2",
      name: "Smartwatch",
      price: "$149.99",
      image: AllImages.product2,
      dealEndTime: "2024-09-25T23:59:59",
      link: "/products/smartwatch",
    },
    {
      Id: "3",
      name: "Wireless Headphones",
      price: "$99.99",
      image: AllImages.product3,
      dealEndTime: "2024-09-30T23:59:59",
      link: "/products/wireless-headphones",
    },
    {
      Id: "4",
      name: "Smartwatch",
      price: "$149.99",
      image: AllImages.product4,
      dealEndTime: "2024-09-25T23:59:59",
      link: "/products/smartwatch",
    },
    {
      Id: "5",
      name: "Smartwatch",
      price: "$149.99",
      image: AllImages.product5,
      dealEndTime: "2024-09-25T23:59:59",
      link: "/products/smartwatch",
    },
    {
      Id: "6",
      name: "Smartwatch",
      price: "$149.99",
      image: AllImages.product6,
      dealEndTime: "2024-09-25T23:59:59",
      link: "/products/smartwatch",
    },
  ];

  // Countdown Timer Hook
  const useCountdown = (endTime) => {
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
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);

      return () => clearInterval(interval);
    }, [endTime]);

    return timeLeft;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full bg-slate-900 p-2">
      <div className="lg:w-[20%] bg-card-color text-white flex flex-col justify-center items-center">
        <Image
          src={AllImages.limitedOffer}
          width={0}
          height={0}
          alt="card image"
          className="w-full mb-2"
        ></Image>

        <button className="bg-button-color px-4 pt-2 mb-2 rounded-md">
          view all
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-6 justify-center items-center md:w-[80%] ">
        {products.map((product) => {
          const timeLeft = useCountdown(product.dealEndTime);

          return (
            <div
              key={product.Id}
              className="bg-card-color text-black text-center md:w-44 mb-5 md:mb-0"
            >
              <Image
                src={product.image}
                width={0}
                height={0}
                alt="card image"
                className="h-24 w-full object-cover"
              />

              {/* Display Countdown */}
              <p className="text-lg font-bold text-red-500">{timeLeft}</p>

              <p className="font-semibold">{product.name}</p>
              <button className="bg-button-color px-4 py-2 rounded-md text-white mb-2">
                shop now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LimitedtimeProducts;
