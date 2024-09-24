/* eslint-disable react/prop-types */
import { AllImages } from "@/assets/AllImages";
import Footer from "@/Components/Shared/Footer/Footer";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import React from "react";
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
  return (
    <div className="container mx-auto ">
      <div className="w-full flex flex-col md:flex-row ">
        {/* Left sidebar */}
        <div className="bg-[#854d0e] w-[15%] text-white pb-5 h-auto ">
          <div className="flex justify-center gap-2 pt-10 pb-5">
            <TbCategoryPlus className="h-8 w-8" />
            <h1 className="text-xl font-bold text-center"> All Categories</h1>
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
    </div>
  );
};

export default MainLayout;
