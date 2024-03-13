'use client'
import React, { useState } from 'react'
import Blog_Details_Full_Page from './Blog_Details_Component/Blog_Details_Full_Page/Blog_Details_Full_Page'
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
      <Blog_Details_Full_Page />
    </>
  );
}

export default page
