/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import React from "react";
import { Collapse, ConfigProvider } from "antd";
import Image from "next/image";
import { AllImages } from "@/assets/AllImages";

function Faq() {
  const items = [
    {
      key: "1",
      label: "What types of gadgets do you sell?",
      children: (
        <p>
          We offer a wide range of gadgets, including smartphones, laptops,
          tablets, smartwatches, and accessories. Our collection includes the
          latest models from top brands at competitive prices.
        </p>
      ),
    },
    {
      key: "2",
      label: "Do you offer warranties on your products?",
      children: (
        <p>
          Yes, all of our gadgets come with a manufacturer’s warranty. The
          warranty period depends on the specific product and brand. Detailed
          warranty information is available on each product page.
        </p>
      ),
    },
    {
      key: "3",
      label: "Can I return or exchange a product?",
      children: (
        <p>
          Absolutely! We offer a hassle-free return and exchange policy within
          30 days of purchase, provided the product is in its original
          condition. Please refer to our return policy for detailed instructions
          on how to proceed.
        </p>
      ),
    },
    {
      key: "4",
      label: "What payment methods do you accept?",
      children: (
        <p>
          We accept various payment methods, including credit cards, debit
          cards, PayPal, and other secure online payment options. You can choose
          the one that suits you best at checkout.
        </p>
      ),
    },
    {
      key: "5",
      label: "Do you offer international shipping?",
      children: (
        <p>
          Yes, we ship to many countries worldwide. Shipping costs and delivery
          times may vary depending on the destination. You can find more
          information about our international shipping options at checkout or in
          our shipping policy.
        </p>
      ),
    },
    {
      key: "6",
      label: "How can I track my order?",
      children: (
        <p>
          Once your order is shipped, you'll receive an email with tracking
          information. You can also track your order directly on our website by
          entering your order number on the "Track My Order" page.
        </p>
      ),
    },
  ];

  return (
    <div>
      <div>
        <SectionTitle heading={"Have a Question?"} />
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 w-full">
          <div className="w-[50%] relative">
            <div>
              {/* <Image
                src={AllImages.arrow}
                height={0}
                width={0}
                alt="arrow"
                className="absolute -top-96 left-z"
              ></Image> */}
            </div>
            <div className="">
              <h1 className="text-xl md:text-3xl font-bold">
                Frequently Asked Questions
              </h1>
              <p>
                Find answers to common questions about our gadget sales,
                including product details, payment options, returns, shipping,
                and more. Our FAQ section is designed to help make your shopping
                experience as smooth as possible.
              </p>
            </div>
          </div>
          <div className="w-[50%]">
            <ConfigProvider
              theme={{
                token: {},
                components: {
                  Collapse: {
                    borderRadiusLG: 0,
                  },
                },
              }}
            >
              <div className=" bg-card-color p-5 rounded-md">
                <Collapse accordion items={items} />
              </div>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
