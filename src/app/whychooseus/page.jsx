"use client";
import React, { useState } from "react";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Why_Choose_Us_Top_Banner from "./Why_Choose_Us_Component/Why_Choose_Us_Top_Banner/Why_Choose_Us_Top_Banner";

const page = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <>
      <div
        className={`z-20  ${
          navfix
            ? "fixed top-0  shadow-lg w-full  bg-white transition-all duration-300 ease-in-out "
            : ""
        }`}
      >
        <Navbar className="relative " />
      </div>
   <Why_Choose_Us_Top_Banner/>
      <Footer />
    </>
  );
};

export default page;
