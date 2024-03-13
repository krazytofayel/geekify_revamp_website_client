'use client'
import React, { useState } from 'react'
import Our_Service_Top_Banner from './Our_Service_Component/Our_Service_Top_Banner/Our_Service_Top_Banner'
import Navbar from '../components/navbar/navbar';

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
      <Our_Service_Top_Banner />
    </>
  );
}

export default page
