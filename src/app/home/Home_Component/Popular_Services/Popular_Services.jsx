import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import DataRecoveryImg from "../../../../../public/images/Home_images/data-recovery.png";
import PcConfigImg from "../../../../../public/images/Home_images/pc-configure.png";
import MiscellaneousImg from "../../../../../public/images/Home_images/miscellenious.png";
import CloudServiceImg from "../../../../../public/images/Home_images/cloud.png";
import Image from "next/image";
const Popular_Services = () => {
  return (
    <>
      <div className="container mx-auto md:mt-20 mt-5 mb-10 md:mb-10">
        <div className="text-center my-10 font-bold">
          <p className="lg:text-[46px] text-[25px] font-medium">
            Our Popular <span className="text-[#20B486]">services</span>{" "}
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            375: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="flex"
        >
          <SwiperSlide className="w-full lg:mx-10 md:mx-10 mx-10">
            <div className="p-4 text-left bg-[#f5f3f3] shadow-md rounded-lg xl:h-48 md:h-44 h-48  md:my-5 my-5 ">
              <Image src={DataRecoveryImg} className="h-12 w-12" alt="" />
              <h3 className="xl:text-xl lg:text-[17px] md:text-[16px] font-semibold mb-1 text-[#20B486] ">
                Data Recovery & Consultation Services
              </h3>
              {/* <a type="" class=" font-bold flex items-center text-lg  hover:text-[#20B486]">
                                Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" class="rotate-90 ml-1.5"><path fill="#333" d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z" data-original="#000000" paint-order="fill markers stroke"></path></svg>
                            </a> */}
              <a
                href=""
                className=" flex bg-[] text-black no-underline hover:text-[#20B486] mt-1 pb-2 rounded-xl text-[16px] font-[600]"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  className="rotate-90 ml-1.5"
                >
                  <path
                    fill="#333"
                    d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                    data-original="#000000"
                    paintOrder="fill markers stroke"
                  ></path>
                </svg>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="p-4 text-left bg-[#4AC8AE] shadow-md rounded-lg xl:h-48 h-48 my-5">
              <Image src={PcConfigImg} className="h-12 w-12" alt="" />
              <h3 className="xl:text-xl lg:text-[17px] md:text-[16px] font-semibold mb-1 text-[#ffffff] ">
                PC Configuration Solution
              </h3>
              <a
                href=""
                className=" flex bg-[] text-black no-underline hover:text-[#20B486] mt-1 pb-2 rounded-xl text-lg font-[600]"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  className="rotate-90 ml-1.5"
                >
                  <path
                    fill="#333"
                    d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                    data-original="#000000"
                    paintOrder="fill markers stroke"
                  ></path>
                </svg>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="p-4 text-left bg-[#f5f3f3] shadow-md rounded-lg xl:h-48 h-48 my-5">
              <Image src={DataRecoveryImg} className="h-12 w-12" alt="" />
              <h3 className="xl:text-xl lg:text-[17px] md:text-[16px] font-semibold mb-1 text-[#20B486] ">
                Miscellaneous <br /> Services
              </h3>
              <a
                href=""
                className=" flex bg-[] text-black no-underline hover:text-[#20B486] mt-1 pb-2 rounded-xl text-lg font-[600]"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  className="rotate-90 ml-1.5"
                >
                  <path
                    fill="#333"
                    d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                    data-original="#000000"
                    paintOrder="fill markers stroke"
                  ></path>
                </svg>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="p-4 text-left bg-[#f5f3f3] shadow-md rounded-lg xl:h-48 h-48 my-5">
              <Image src={MiscellaneousImg} className="h-12 w-12" alt="" />
              <h3 className="xl:text-xl lg:text-[17px] md:text-[16px] font-semibold mb-1 text-[#20B486] ">
                Cloud Application Development
              </h3>
              <a
                href=""
                className=" flex bg-[] text-black no-underline hover:text-[#20B486] mt-1  pb-2 rounded-xl text-lg font-[600]"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  className="rotate-90 ml-1.5"
                >
                  <path
                    fill="#333"
                    d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                    data-original="#000000"
                    paintOrder="fill markers stroke"
                  ></path>
                </svg>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="p-4 text-left bg-[#f5f3f3] shadow-md rounded-lg xl:h-48  h-48 my-5">
              <Image src={CloudServiceImg} className="h-12 w-12" alt="" />
              <h3 className="xl:text-xl lg:text-[17px] md:text-[16px] font-semibold mb-1 text-[#20B486] ">
                Cloud Application Development
              </h3>
              <a
                href=""
                className=" flex bg-[] text-black no-underline hover:text-[#20B486] mt-1  pb-2 rounded-xl text-lg font-[600]"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  className="rotate-90 ml-1.5"
                >
                  <path
                    fill="#333"
                    d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z"
                    data-original="#000000"
                    paintOrder="fill markers stroke"
                  ></path>
                </svg>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Popular_Services;


