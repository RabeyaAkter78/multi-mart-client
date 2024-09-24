"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AllImages } from "@/assets/AllImages"; // Assuming you have this file
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaCheckCircle,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { ConfigProvider, Rate } from "antd";
import SingleReview from "@/Components/(WithNavFooter)/Product/Review/Review";
import AddReview from "@/Components/(WithNavFooter)/Product/Review/AddReview";
const SingleProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const data = [
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      price: "100",
      description:
        "Experience high-quality audio with our Wireless Bluetooth Headphones. Perfect for music lovers and professionals alike, these headphones offer clear, immersive sound without the hassle of wires. The over-ear design provides comfort for long listening sessions, while the built-in microphone makes it easy to take calls on the go.",
      rating: <Rate style={{ color: "#854d0e" }} />,
      image: AllImages.product1,
    },
    {
      id: "2",
      name: "Smartwatch",
      price: "150",
      description:
        "Stylish and functional, this smartwatch not only tells time but also tracks your steps, monitors your heart rate, and keeps you connected with notifications directly on your wrist. Its sleek design makes it perfect for both casual and professional settings.",
      rating: <Rate style={{ color: "#854d0e" }} />,
      image: AllImages.product2,
    },
    {
      id: "3",
      name: "Noise Cancelling Headphones",
      price: "200",
      description:
        "Immerse yourself in sound with our premium noise-cancelling headphones. Whether you are on a flight, in a noisy office, or just relaxing at home, these headphones block out distractions, allowing you to enjoy crystal-clear audio.",
      rating: <Rate style={{ color: "#854d0e" }} />,
      image: AllImages.product3,
    },
    {
      id: "4",
      name: "Portable Speaker",
      price: "80",
      description:
        "Compact and powerful, this portable speaker lets you take your music anywhere. With a sleek, water-resistant design and Bluetooth connectivity, it’s perfect for outdoor gatherings, travel, or simply enhancing the sound in any room.",
      rating: <Rate style={{ color: "#854d0e" }} />,
      image: AllImages.product4,
    },
    {
      id: "5",
      name: "Fitness Tracker",
      price: "50",
      description:
        "Track your fitness journey with ease using our fitness tracker. Monitor your steps, calories burned, sleep patterns, and more. Its lightweight, sleek design makes it comfortable to wear all day, whether you're at the gym or at the office.",
      rating: <Rate style={{ color: "#854d0e" }} />,
      image: AllImages.product5,
    },
    {
      id: "6",
      name: "Wireless Charger",
      price: "30",
      description:
        "Fast and efficient wireless charging for all your devices. This charger is compatible with most smartphones and other Qi-enabled devices, offering a sleek and clutter-free solution to keep your gadgets powered up.",
      rating: <Rate style={{ color: "#854d0e" }} />,
      image: AllImages.product6,
    },
    {
      id: "7",
      name: "Wireless Charger",
      price: "30",
      description:
        "Fast charging capabilities in a sleek, compact design. Our wireless charger is designed for those who want a clutter-free, high-performance charging solution. It's compatible with a wide range of smartphones and devices.",
      rating: <Rate style={{ color: "#854d0e" }} />,
      image: AllImages.product7,
    },
    {
      id: "8",
      name: "Wireless Charger",
      price: "30",
      description:
        "Charge your devices quickly and easily with this fast wireless charger. Designed to be compact and efficient, it fits perfectly on your desk or nightstand, keeping your space neat and your devices powered.",
      rating: <Rate style={{ color: "#854d0e" }} />,
      image: AllImages.product8,
    },
  ];

  useEffect(() => {
    const product = data.find((item) => item.id === id);
    setProduct(product);
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white px-10 py-10 w-full">
      <ConfigProvider
        theme={{
          components: {
            Rate: {
              colorPrimary: "#854d0e",
              colorTextDisabled: "#6b7280",
            },
          },
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Image Section */}
          <div className="border-2 border-gray-300 p-5 md:w-1/2">
            <Image
              src={product.image}
              alt="product image"
              className="h-96 w-96 object-cover"
            />
          </div>

          {/* Product Details Section */}
          <div className="ml-5 md:w-1/2">
            <div className="flex justify-between items-center">
              <h1 className="text-black font-bold text-xl md:text-2xl">
                {product.name}
              </h1>
              <p className="text-button-color font-semibold text-lg">
                ${product.price}
              </p>
            </div>

            {/* Ratings and Reviews */}
            <div className="flex items-center gap-5 my-2 border-b pb-2">
              <p className="text-gray-600">{product.rating}</p>
              <p className="text-gray-600">2 customer reviews</p>
            </div>

            {/* Product Description */}
            <p className="text-gray-700 md:my-10">{product.description}</p>
            <p className="text-gray-700 flex items-center">
              <FaCheckCircle className="mr-2 text-green-500" /> Available in
              Store
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2 my-4">
              <h2 className="text-gray-800 font-semibold">Quantity :</h2>
              <div className="flex items-center border-2 border-gray-300">
                <button className="px-3 py-1">-</button>
                <input
                  type="text"
                  className="w-12 text-center border-none outline-none"
                  value="1"
                  readOnly
                />
                <button className="px-3 py-1">+</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center  gap-4 my-3">
              <button className="px-4 py-2 bg-gray-800 text-white">
                Add to Wishlist
              </button>
              <button className="px-4 py-2 bg-button-color text-white">
                Add to Cart
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-start gap-4">
              <div>Share with friends:</div>
              <FaFacebookF className="w-6 h-6 text-blue-600" />
              <FaPinterestP className="w-6 h-6 text-red-600" />
              <BsInstagram className="w-6 h-6 text-pink-500" />
            </div>
          </div>
        </div>
      </ConfigProvider>
      <div className="mt-20">
        <SingleReview />
      </div>
      <div className="mt-20">
        <AddReview />
      </div>
    </div>
  );
};

export default SingleProductDetails;
