/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import Link from "next/link";
import React from "react";
import { FaShieldAlt, FaHeadset, FaMobileAlt, FaBug } from "react-icons/fa";

const WhyChoseUs = () => {
  const services = [
    {
      icon: <FaShieldAlt className="text-button-color  h-20 w-20" />,
      title: "Warranty Service",
      description:
        "We provide a comprehensive warranty covering all parts and services to give you peace of mind.",
    },
    {
      icon: <FaHeadset className="text-button-color  h-20 w-20 " />,
      title: "Customer Service",
      description:
        "Our 24/7 customer support ensures all your queries are resolved in the shortest time possible.",
    },
    {
      icon: <FaMobileAlt className="text-button-color  h-20 w-20" />,
      title: "Secured Device",
      description:
        "Your devices are protected with the latest security protocols to safeguard all your data.",
    },
    {
      icon: <FaBug className="text-button-color  h-20 w-20" />,
      title: "No Virus Threat",
      description:
        "Our software solutions are virus-free, ensuring a secure and seamless user experience.",
    },
  ];

  return (
    <div className=" mx-2 md:mx-0">
      <SectionTitle heading={"Gadget Repair For Everyone"} />
      <div className="text-center mb-8">
        <h1 className="text-xl font-light text-center text-card-color">
          Gadget Repair for Everyone offers reliable and affordable solutions
          for all your tech devices.
          <br /> Whether it's a smartphone, laptop, or tablet, we ensure quality
          repairs that are accessible to all.
          <br /> Our goal is to make technology maintenance simple and
          hassle-free for everyone.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-card-color shadow-md rounded-md flex items-center space-x-4"
          >
            <div>{service.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-button-color">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p>
          Get proper services from us{" "}
          <Link href="" className="text-red-500 underline">
            guideline and knowledge
          </Link>
        </p>
      </div>
    </div>
  );
};

export default WhyChoseUs;
