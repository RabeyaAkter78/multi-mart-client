import { AllImages } from "@/assets/AllImages";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full mb-10">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full  text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
          Explore the Latest Tech Gadgets
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
          Discover cutting-edge technology that will revolutionize your world.
        </p>
        <a
          href="/shop"
          className="inline-block bg-gradient-to-r from-[#f45525] to-[#491303] text-white text-lg md:text-xl px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Shop Now
        </a>
      </div>

      {/* Dark gradient overlay (optional for better text contrast) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-150"></div>
    </div>
  );
};

export default Hero;
