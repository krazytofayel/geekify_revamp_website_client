'use client'
import React, { useState } from 'react'
import Home_Top_Banner from "./Home_Component/Home_Top_Banner/Home_Top_Banner";
import Why_We_Choose from './Home_Component/Why_We_Choose/Why_We_Choose';
import Book_Online from './Home_Component/Book_Online/Book_Online';
import Book_Any_Time from './Home_Component/Book_Any_Time/Book_Any_Time';
import FAQ from './Home_Component/FAQ/FAQ';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Customer_Speak_Slider from './Home_Component/Customer_Speak_Slider/Customer_Speak_Slider';
import Popular_Services from './Home_Component/Popular_Services/Popular_Services';



const Homepage = () => {
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
      <Home_Top_Banner />
      <Popular_Services/>
      <Why_We_Choose />

      <Book_Online />
      <Customer_Speak_Slider />
      <Book_Any_Time />
      <FAQ />
      <Footer />
    </>
  );
}

export default Homepage
