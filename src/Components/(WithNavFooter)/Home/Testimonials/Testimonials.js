"use client";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { AllImages } from "@/assets/AllImages";
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";

const testimonials = [
  {
    name: "James Lee",
    role: "Tech Enthusiast",
    testimonial:
      "The wireless Bluetooth headphones I bought from MultiMart exceeded my expectations. The sound quality is top-notch, and the battery life is amazing. I would definitely recommend it to anyone who loves music on the go!",
  },
  {
    name: "Maria Rodriguez",
    role: "Gadget Lover",
    testimonial:
      "The smartwatch I purchased is a game-changer. It tracks all my activities and has a sleek design that goes with everything. MultiMart’s delivery was fast and the customer service was helpful.",
  },
  {
    name: "David Kim",
    role: "Fitness Instructor",
    testimonial:
      "I bought a fitness tracker from MultiMart, and it's the best investment I’ve made in my fitness journey. It accurately tracks my steps and heart rate. Plus, it syncs seamlessly with my smartphone.",
  },
  {
    name: "Sophie Turner",
    role: "Traveler",
    testimonial:
      "The portable speaker from MultiMart has great sound for its size. It’s compact, perfect for my travels, and the battery lasts all day. The overall shopping experience was smooth and hassle-free.",
  },
  {
    name: "Liam Smith",
    role: "Tech Reviewer",
    testimonial:
      "The noise-canceling headphones are incredible. The quality is better than I expected for the price. MultiMart offers excellent deals and the product arrived in perfect condition.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1, // Adjust as needed
    slidesToScroll: 1, // Adjust as needed
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-32">
      <SectionTitle heading={"What Our Customers Say"} />
      <div className="container mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 mb-8 bg-card-color rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              <Image
                width={0}
                height={0}
                src={AllImages.user} // Replace with actual image
                alt={testimonial.name}
                className="w-24 h-24 rounded-full border-4 border-primary mb-4 text-center mx-auto"
              />
              <div className="relative text-black">
                <FaQuoteLeft className="absolute top-0 left-0 text-gray-400 text-3xl transform -translate-x-4 -translate-y-4" />
                <p className="text-lg italic px-6">{testimonial.testimonial}</p>
                <FaQuoteRight className="absolute bottom-0 right-0 text-gray-400 text-3xl transform translate-x-4 translate-y-4" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-neutral-500">
                  {testimonial.name}
                </h3>
                <p className="text-black">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
