"use client";

/* eslint-disable react/prop-types */
import { AllImages } from "@/assets/AllImages";
import Footer from "@/Components/Shared/Footer/Footer";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import { ConfigProvider, Slider, Space } from "antd";
import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import {
  TbHeadphones,
  TbDeviceLaptop,
  TbCamera,
  TbSmartphone,
  TbSpeaker,
  TbGamepad,
  TbTablet,
  TbSmartHome,
  TbWatch,
  TbTv,
  TbPrinter,
  TbDrone,
  TbDesktop,
  TbMicrophone,
  TbBatteryCharging,
  TbGlobe,
  TbWallet,
  TbTools,
  TbKeyboard,
  TbFileMusic,
  TbCategoryPlus,
} from "react-icons/tb";
const MainLayout = ({ children }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]); // Initial price range
  const categories = [
    {
      id: 1,
      name: "Headphones",
      icon: <TbHeadphones className="h-6 w-6" />,
      image: AllImages.product1,
    },
    {
      id: 2,
      name: "Laptops",
      icon: <TbDeviceLaptop className="h-6 w-6" />,
      image: AllImages.product2,
    },
    {
      id: 3,
      name: "Cameras",
      icon: <TbCamera className="h-6 w-6" />,
      image: AllImages.product3,
    },
    {
      id: 5,
      name: "Printers",
      icon: <TbPrinter className="h-6 w-6" />,
      image: AllImages.product4,
    },
    {
      id: 6,
      name: "Drones",
      icon: <TbDrone className="h-6 w-6" />,
      image: AllImages.product5,
    },
    {
      id: 7,
      name: "Microphones",
      icon: <TbMicrophone className="h-6 w-6" />,
      image: AllImages.product6,
    },
    {
      id: 10,
      name: "Wallets",
      icon: <TbWallet className="h-6 w-6" />,
      image: AllImages.product7,
    },
    {
      id: 11,
      name: "Tools",
      icon: <TbTools className="h-6 w-6" />,
      image: AllImages.product8,
    },
    {
      id: 12,
      name: "Keyboards",
      icon: <TbKeyboard className="h-6 w-6" />,
      image: AllImages.product9,
    },
    {
      id: 13,
      name: "Music Devices",
      icon: <TbFileMusic className="h-6 w-6" />,
      image: AllImages.product10, // Optional, if you have an image for Music Devices
    },
  ];

  const onPriceChange = (value) => {
    setPriceRange(value);
  };
  return (
    <div className="container mx-auto ">
      <ConfigProvider
        theme={{
          components: {
            Slider: {
              dotActiveBorderColor: "rgb(133,77,14)",
              dotBorderColor: "rgb(133,77,14)",
              handleColor: "rgb(133,77,14)",
              handleActiveOutlineColor: "rgb(133,77,14)",
              handleActiveColor: "rgb(133,77,14)",
              railBg: "rgb(133,77,14)",
            },
          },
        }}
      >
        <div className="w-full flex flex-col md:flex-row ">
          {/* Left sidebar */}
          <div className="bg-card-color w-[15%] h-auto ">
            <div>
              <p className="text-xl font-bold ml-5 mt-10"> Price</p>
              <div className="px-5">
                {/* Display the selected price range */}
                <p className="text-lg mb-2 text-gray-500">
                  {`$${priceRange[0]} - $${priceRange[1]}`}
                </p>
                <Slider
                  range
                  min={0}
                  max={1000}
                  step={10}
                  defaultValue={priceRange}
                  onChange={onPriceChange}
                  style={{ color: "#854d0e" }}
                />
              </div>
            </div>
            <div className="flex ml-5 gap-2 pt-5 pb-2">
              <h1 className="text-xl font-bold "> Categories</h1>
            </div>

            <div className="flex flex-col justify-start items-start px-5 gap-5">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex gap-2 justify-center items-center cursor-pointer"
                >
                  {category.icon}
                  <h1>{category.name}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-neutral-900 w-[85%]">{children}</div>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default MainLayout;
