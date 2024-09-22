/* eslint-disable react/prop-types */
import Footer from "@/Components/Shared/Footer/Footer";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="">
      <NavBar />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
