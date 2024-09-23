"use client";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import Link from "next/link";
import Image from "next/image";
import { AllImages } from "@/assets/AllImages";
// import dynamic from "next/dynamic";
function Footer() {
  const [selected, setSelected] = useState(null);
  const [form] = Form.useForm();
  const labels = [
    { name: "About Us", link: "" },
    { name: "Shop", link: "" },
    { name: "Category", link: "" },
    { name: "Contact Us", link: "" },
  ];

  const onFinish = async (values) => {
    const { email } = values;
    // console.log(values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-neutral-900">
      <ConfigProvider
        theme={{
          components: {
            Form: {
              itemMarginBottom: 20,
            },
            Input: {
              borderRadius: 0,
            },
            button: {
              borderRadius: 0,
            },
          },
        }}
      >
        <div className="container mx-auto">
          <div className=" py-10 text-neutral-300 flex flex-col lg:flex-row justify-between lg:items-center gap-5 px-5">
            <div className="flex gap-2 justify-center">
              <Image
                src={AllImages.logo}
                height={0}
                width={0}
                alt="footer logo"
                className="h-20 w-20"
              ></Image>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-xl font-semibold">Important Links</p>
              {labels.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button
                    className={`md:font-medium text-md py-1 md:text-lg ${
                      selected === index
                        ? "border-0 border-b-2 border-green-700"
                        : ""
                    }`}
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-5 justify-center items-start">
              <div>
                <h2 className="text-3xl">Newsletter </h2>
                <p>
                  Want to know what we are up to? Sign up to the newsletter and
                  join our tribe.
                </p>

                <div>
                  <Form
                    form={form}
                    name="basic"
                    labelCol={{ xs: 24, sm: 24, md: 24 }}
                    wrapperCol={{ xs: 24, sm: 24, md: 24 }}
                    style={{ maxWidth: "100%", width: "100%" }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please input your Email!" },
                      ]}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>

                    <Button block htmlType="submit">
                      Subscribe
                    </Button>
                  </Form>
                </div>
              </div>
              <p>Follow us on</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center">
                <FaFacebookF className="w-5 h-5 " />
                <FaTwitter className="w-5 h-5 " />
                <FaLinkedinIn className="w-5 h-5 " />
                <FaPinterestP className="w-5 h-5 " />
                <BsInstagram className="w-5 h-5 " />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center my-5 text-white pb-5">
          Copyright © 2024 Multi mart .
        </p>
        {/* <BackTop /> */}
      </ConfigProvider>
    </div>
  );
}

export default Footer;
// export default dynamic(() => Promise.resolve(Footer), {
//   ssr: false,
// });
