import { AllImages } from "@/assets/AllImages";
import Image from "next/image";
import CountdownCard from "./CountdownCard";
import Link from "next/link";
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

const Hero = () => {
  const categories = [
    { id: 1, name: "Headphones", icon: <TbHeadphones className="h-6 w-6" /> },
    { id: 2, name: "Laptops", icon: <TbDeviceLaptop className="h-6 w-6" /> },
    { id: 3, name: "Cameras", icon: <TbCamera className="h-6 w-6" /> },
    { id: 5, name: "Printers", icon: <TbPrinter className="h-6 w-6" /> },
    { id: 6, name: "Drones", icon: <TbDrone className="h-6 w-6" /> },
    { id: 7, name: "Microphones", icon: <TbMicrophone className="h-6 w-6" /> },
    { id: 10, name: "Wallets", icon: <TbWallet className="h-6 w-6" /> },
    { id: 11, name: "Tools", icon: <TbTools className="h-6 w-6" /> },
    { id: 12, name: "Keyboards", icon: <TbKeyboard className="h-6 w-6" /> },
    {
      id: 13,
      name: "Music Devices",
      icon: <TbFileMusic className="h-6 w-6" />,
    },
  ];

  const brands = [
    { id: 1, name: "Apple", image: AllImages.product1 },
    { id: 2, name: "Samsung", image: AllImages.product2 },
    { id: 3, name: "Sony", image: AllImages.product3 },
    { id: 4, name: "Apple", image: AllImages.product4 },
    { id: 5, name: "Samsung", image: AllImages.product5 },
    { id: 6, name: "Sony", image: AllImages.product6 },
  ];

  return (
    <div className="h-auto md:h-screen">
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[90%] ">
        {/* Left sidebar */}
        <div className="bg-[#854d0e] md:w-[20%] order-3 md:order-1">
          <div className="mt-8 mb-16 flex justify-center gap-2">
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

        {/* Middle bar */}
        <div className=" md:w-[60%] h-auto md:h-full order-1 md:order-2 mb-10 md:mb-0">
          <div className="relative w-full md:h-[80%] mb-10 md:mb-0">
            {/* Background image */}
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src={AllImages.hero}
                height={0}
                width={0}
                alt="Hero Image"
                className="h-full w-full object-cover z-0"
              />
            </div>

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-auto md:h-full text-center px-4 py-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                Explore the Latest Tech Gadgets
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
                Discover cutting-edge technology that will revolutionize your
                world.
              </p>
              <Link
                href=""
                className="inline-block  bg-card-color text-black text-lg md:text-xl px-8 py-3 rounded-full shadow-lg mb-5"
              >
                Shop Now
              </Link>
            </div>

            {/* Dark gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-auto md:h-full bg-gradient-to-b from-black to-transparent opacity-150"></div>
          </div>

          {/* Brand logos */}
          <div className="p-2 h-auto md:h-[20%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between items-center gap-2 bg-neutral-500 mb-10 md:mb-0">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex flex-col justify-center items-center gap-2 px-5"
              >
                <Image
                  src={brand.image}
                  height={0}
                  width={0}
                  alt={`${brand.name} logo`}
                  className="h-20 w-20 bg-neutral-950 rounded-full cursor-pointer"
                />
                <h1>{brand.name}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="bg-yellow-800 md:w-[20%] order-2 md:order-3 mb-10 md:mb-0">
          <div className=" flex flex-col items-center pt-20 px-4 ">
            <h3 className="text-white text-md font-semibold">
              Flash sale for you!
            </h3>
            <h1 className="md:text-xl xl:text-4xl text-white font-bold">
              50% <span className="text-sm">off</span>
            </h1>
            <CountdownCard />
            <button className="text-center inline-block bg-card-color text-black text-lg md:text-xl px-8 py-2 rounded-full shadow-lg mb-5">
              <Link href="">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
