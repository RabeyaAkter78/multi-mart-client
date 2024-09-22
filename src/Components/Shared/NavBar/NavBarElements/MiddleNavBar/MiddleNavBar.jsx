"use client";

import { AllImages } from "@/assets/AllImages";
import Image from "next/image";
import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const MiddleNavBar = () => {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className="flex justify-between items-center">
      <Image
        height={0}
        width={0}
        src={AllImages.logo}
        alt="logo"
        className="h-10 w-10 roundex-full"
      />
      <Space direction="vertical">
        <Search
          placeholder="Search users"
          onSearch={onSearch()}
          style={{ width: 150 }}
        />
      </Space>
    </div>
  );
};

export default MiddleNavBar;
