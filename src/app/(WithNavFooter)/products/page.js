"use client";
import { AllImages } from "@/assets/AllImages";
import { ConfigProvider, Pagination, Space } from "antd";
import Search from "antd/es/transfer/search";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductsPage = () => {
  const data = [
    {
      id: 1,
      name: "Wireless Bluetooth",
      price: "100",
      description: "Good product",
      rating: 4.5,
      image: AllImages.product1,
    },
    {
      id: 2,
      name: "Smartwatch",
      price: "150",
      description: "Stylish and functional",
      rating: 4.7,
      image: AllImages.product2,
    },
    {
      id: 3,
      name: "Noise Cancelling Headphones",
      price: "200",
      description: "Clear sound",
      rating: 4.8,
      image: AllImages.product3,
    },
    {
      id: 4,
      name: "Portable Speaker",
      price: "80",
      description: "Compact and powerful",
      rating: 4.2,
      image: AllImages.product4,
    },
    {
      id: 5,
      name: "Fitness Tracker",
      price: "50",
      description: "Track your fitness",
      rating: 4.3,
      image: AllImages.product5,
    },
    {
      id: 6,
      name: "Wireless Charger",
      price: "30",
      description: "Fast charging",
      rating: 4.1,
      image: AllImages.product6,
    },
    {
      id: 7,
      name: "Wireless Charger",
      price: "30",
      description: "Fast charging",
      rating: 4.1,
      image: AllImages.product7,
    },
    {
      id: 8,
      name: "Wireless Charger",
      price: "30",
      description: "Fast charging",
      rating: 4.1,
      image: AllImages.product8,
    },
  ];
  // Search handler
  const onSearch = (value) => {
    console.log("Search query: ", value);
  };
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  const pageSize = 10;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="container mx-auto">
      {/* Search bar in the center */}
      <div className="flex-grow flex justify-end">
        <Space direction="vertical" className="my-5">
          <Search
            placeholder="Search Products"
            onSearch={onSearch()}
            className="w-full md:w-2/3 lg:w-3/5"
          />
        </Space>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-black justify-center items-center px-2">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-[#ede5dc] rounded-md flex flex-col justify-center items-center"
          >
            <Image
              src={product.image}
              width={0}
              height={0}
              alt="card image"
              className="h-44 w-full object-cover"
            ></Image>
            <h2 className="font-semibold pt-4">{product.name}</h2>
            <p className="text-neutral-500">Price: ${product.price}</p>
            <Link href={`/products/${product.id}`}>
              <button className="bg-button-color px-4 py-2 rounded text-white mb-5">
                view details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className=" my-8 ml-4">
        <ConfigProvider
          theme={{
            components: {
              // Pagination: {
              //   colorPrimary: "rgb(0,0,0)",
              //   colorPrimaryHover: "rgb(0,0,0)",
              // },
            },
          }}
        >
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={50}
            onChange={handlePageChange}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default ProductsPage;
