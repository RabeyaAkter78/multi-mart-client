import { AllImages } from "@/assets/AllImages";
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import Image from "next/image";
import React from "react";

const TrendingProducts = () => {
  const data = [
    {
      id: 1,
      name: "Wireless Bluetooth",
      price: "100",
      description: "Good product",
      rating: 4.5, // New attribute for product rating
    },
    {
      id: 2,
      name: "Smartwatch",
      price: "150",
      description: "Stylish and functional",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Noise Cancelling Headphones",
      price: "200",
      description: "Clear sound",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Portable Speaker",
      price: "80",
      description: "Compact and powerful",
      rating: 4.2,
    },
    {
      id: 5,
      name: "Fitness Tracker",
      price: "50",
      description: "Track your fitness",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Wireless Charger",
      price: "30",
      description: "Fast charging",
      rating: 4.1,
    },
    {
      id: 7,
      name: "Wireless Charger",
      price: "30",
      description: "Fast charging",
      rating: 4.1,
    },
    {
      id: 8,
      name: "Wireless Charger",
      price: "30",
      description: "Fast charging",
      rating: 4.1,
    },
  ];

  return (
    <div>
      <SectionTitle heading={"All Trending Product"} />{" "}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-black justify-center items-center">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-[#ede5dc] p-5 rounded-md flex flex-col justify-center items-center"
          >
            <Image
              src={AllImages.airpods}
              width={0}
              height={0}
              alt="card image"
              className="h-44 w-full"
            ></Image>
            <h2 className="font-semibold pt-4">{product.name}</h2>
            <p className="text-neutral-500">Price: ${product.price}</p>
            <button className="bg-button-color px-4 py-2 rounded text-white">
              view details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
