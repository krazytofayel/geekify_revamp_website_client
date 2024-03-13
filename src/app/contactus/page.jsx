'use client'
import { useState } from "react";
import Contactus from "./Contactus_Component/Contactus/Contactus";
import Navbar from "../components/navbar/navbar";





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
      <Contactus />
    </>
  );
};

export default page;
