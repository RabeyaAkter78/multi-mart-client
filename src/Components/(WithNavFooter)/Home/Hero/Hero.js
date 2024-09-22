const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* Use a direct video link here */}
        <source
          src="https://cdn.videvo.net/videvo_files/video/free/2018-10/large_watermarked/181003_07_London_4k_031_preview.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center px-4">
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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-50"></div>
    </div>
  );
};

export default Hero;
