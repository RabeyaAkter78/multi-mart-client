import { AllImages } from '@/assets/AllImages';
import SectionTitle from '@/Components/Shared/SectionTitle/SectionTitle';
import { Image } from 'antd';
import Link from 'next/link';
import React from 'react';
import headphone from"../../../../assets/images/headphone1.jpg"
const Headphones = () => {
    const data = [
        {
          id: 1,
          name: "Wireless Bluetooth",
          price: "100",
          description: "Good product",
          rating: 4.5,
          image: AllImages.headphone1,
        },
        {
          id: 2,
          name: "Smartwatch",
          price: "150",
          description: "Stylish and functional",
          rating: 4.7,
          image: AllImages.headphone2,
        },
        {
          id: 3,
          name: "Noise Cancelling Headphones",
          price: "200",
          description: "Clear sound",
          rating: 4.8,
          image: AllImages.headphone3,
        },
        {
          id: 4,
          name: "Portable Speaker",
          price: "80",
          description: "Compact and powerful",
          rating: 4.2,
          image: AllImages.headphone4,
        },
        {
          id: 5,
          name: "Fitness Tracker",
          price: "50",
          description: "Track your fitness",
          rating: 4.3,
          image: AllImages.headphone5,
        },
     
      ];
    return (
        <div className='container mx-auto'>
<SectionTitle heading={"Your Desired Headphones"}/>

             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  justify-center items-center px-2 mb-5">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-[#ede5dc] p-5 rounded-md flex flex-col justify-center items-center"
          >
            <Image
              src={headphone}
              width={40}
              height={40}
              alt="card image"
              className=""
            ></Image>
            <h2 className="font-semibold pt-4">{product.name}</h2>
            <p className="text-neutral-500">Price: ${product.price}</p>
            <Link href={`/products/${product.id}`}>
              <button className="bg-button-color px-4 py-2 rounded text-white">
                view details
              </button>
            </Link>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Headphones;