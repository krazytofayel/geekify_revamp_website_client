'use client'
import React, { useState } from 'react'
import Customer_Review_Top_Banner from './Customer_Review_Component/Customer_Review_Top_Banner/Customer_Review_Top_Banner';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';


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
      <Customer_Review_Top_Banner />
      <Footer/>
    </>
  );
}

export default page
