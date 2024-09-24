"use client";

import { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { Button, ConfigProvider, Drawer, Space } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { Input } from "antd";
import Image from "next/image";
import { AllImages } from "@/assets/AllImages";
import { useRouter } from "next/navigation";

const { Search } = Input;

const LowerNavBar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter(); // Initialize router to detect active link

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const labels = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "Category", link: "/category" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  const handleMobileMenuClick = () => {
    setDrawerVisible(!drawerVisible);
  };

  const select = (index) => {
    if (isMobile) {
      setDrawerVisible(false);
    }
  };

  // Search handler
  const onSearch = (value) => {
    console.log("Search query: ", value);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            contentFontSize: 20,
            paddingBlock: 10,
            borderRadius: 2,
          },
          Drawer: {
            colorBgElevated: "rgb(0,0,0)",
            colorIcon: "rgb(255,255,255)",
          },
        },
      }}
    >
      <div className="w-full bg-neutral-900 pt-2">
        <div className="container mx-auto flex items-center justify-between gap-5 py-4 px-4 lg:px-8">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                height={0}
                width={0}
                src={AllImages.logo}
                alt="logo"
                className="h-10 w-10 rounded-full"
              />
            </Link>
          </div>

          {/* Search bar in the center */}
          {/* <div className="flex-grow flex justify-center">
            <Space direction="vertical" className="w-full max-w-lg">
              <Search
                placeholder="Search Products"
                onSearch={onSearch}
                className="w-full md:w-2/3 lg:w-3/5"
              />
            </Space>
          </div> */}

          {/* Tabs/Links on the right */}
          <div className="hidden lg:flex items-center ml-auto space-x-4">
            {labels.map((item, index) => (
              <Link href={item.link} key={index}>
                <button
                  className={`px-4 font-medium text-lg ${
                    router.pathname === item.link
                      ? "bg-button-color w-56 text-white"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
            <Link href="/auth/login">
              <button className="bg-button-color text-white px-10 py-2 rounded-md shadow-lg">
                Log In
              </button>
            </Link>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            <Button
              icon={<RxHamburgerMenu />}
              onClick={handleMobileMenuClick}
            />
          </div>
        </div>

        {/* Drawer for mobile navigation */}
        <Drawer
          title=""
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center space-y-2 w-full">
              {labels.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button
                    className={`w-56 px-4 py-2 font-medium text-lg text-white bg-neutral-800 rounded-md ${
                      router.pathname === item.link ? "bg-button-color" : ""
                    }`}
                    onClick={() => select(index)}
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
              <Link href="/auth/login">
                <button className="bg-button-color w-56 px-10 py-2 rounded-md shadow-lg text-white">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </ConfigProvider>
  );
};

export default LowerNavBar;
