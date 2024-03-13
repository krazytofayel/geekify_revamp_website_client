
'use client'
import React, { useState } from 'react'
import Blog_Top_Banner from './Blog_Component/Blog_Top_Banner/Blog_Top_Banner'
import Navbar from '../components/navbar/navbar'
import Latest_Technology_Blog from './Blog_Component/Latest_Technology_Blog/Latest_Technology_Blog'
import Remote_Service from './Blog_Component/Remote_Service/Remote_Service'
import Footer from '../components/footer/footer'

const Page = () => {
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
    <div>
      <div
        className={`z-20  ${
          navfix
            ? "fixed top-0  shadow-lg w-full  bg-white transition-all duration-300 ease-in-out "
            : ""
        }`}
      >
        <Navbar className="relative " />
      </div>
      <Blog_Top_Banner />
      <Latest_Technology_Blog />
      <Remote_Service />
      <Footer/>
    </div>
  );
}

export default Page
