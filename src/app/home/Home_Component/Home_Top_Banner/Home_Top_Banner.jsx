import React from 'react'
import Image from 'next/image';
import HomeBannerImg from '../../../../../public/images/Home_images/home-banner-img.png'
const Home_Top_Banner = () => {
  return (
    <>
      <section className="bg-[#F0FAF7] pb-0 md:pb-10 lg:pb-10 2xl:h-[520px] xl:h-[478px] lg:h-[370px] md:h-[270px] h-[476px]">
        <div className=" flex flex-wrap ">
          <div className="w-full md:w-1/2 order-1 md:order-1 ">
            <div className=" items-center text-center 2xl:ml-48 xl:ml-30 lg:ml-10 md:ml-10 ml-5 lg:pt-10 md:text-left md:pt-0 pt-8 pb-8">
              <p className="xl:text-[70px] lg:text-[50px] md:text-[50px] text-[30px] font-bold text-[#000000]">
                You <span className="text-[#4AC8AE]">point</span> it, We{" "}
                <span className="text-[#4AC8AE]">Fix</span> it{" "}
              </p>
              <p className=" xl:text-3xl lg:text-[20px] sm:text-[16px] font-base text-black">
                One-stop solution for your IT needs,Order any service, anytime.
              </p>
              <a
                href=""
                className=" inline-block bg-[#00B79C] text-white no-underline hover:bg-gray-800 mt-6 px-9 py-2 rounded-xl text-[20px] font-[600]"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-2 md:order-2 flex justify-end h-64">
            <Image
              src={HomeBannerImg}
              alt=""
              className=" 2xl:h-[520px] xl:h-[478px] xl:w-[785px] lg:h-[370px] md:h-[270px] h-[250px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* <!-- Reasdy to book section start --> */}
      <section className="bg-[#20313B] ">
        <div className="container  py-10  mx-auto ">
          <div className="">
            <div className=" flex flex-wrap mx-10 mb-5 ">
              <div className="lg:w-1/3 md:w-1/2 w-full p-4 px-10">
                <a className=" justify-center mx-auto flex flex-wrap xl:p-6 lg:p-5 py-5 md:p-6 rounded-xl text-white xl:text-2xl lg:text-[16px] text-lg tracking-wider font-medium outline-none border-4 border-[#4AC8AE] bg-[#4AC8AE] hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:h-4 xl:w-4 lg:h-4 lg:w-4 md:h-4 md:w-4 h-4 w-4 text-center my-2 m-2 "
                    viewBox="0 0 512 512"
                    fill="#ffffff"
                  >
                    <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                  </svg>
                  1300 894 946
                </a>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full p-4 px-10">
                <div className=" justify-center mx-auto flex flex-wrap xl:p-6 lg:p-5 md:p-6 py-6 rounded-xl text-white xl:text-2xl lg:text-[16px] md:text-xl text-lg tracking-wider font-medium outline-none border-4 border-[#ffffff] hover:bg-[#20313B] hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:h-4 xl:w-4 lg:h-4 lg:w-4 md:h-4 md:w-4  h-4 w-4 text-center my-2 m-2 "
                    viewBox="0 0 512 512"
                    fill="#ffffff"
                  >
                    <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
                  </svg>
                  Request call back
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full p-4 px-10">
                <div className="justify-center flex flex-wrap xl:p-6 lg:p-5 md:p-6 py-6 rounded-xl text-white xl:text-2xl lg:text-[16px] text-lg tracking-wider font-medium outline-none border-4 border-[#ffffff] hover:bg-[#20313B] hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:h-4 xl:w-4 lg:h-4 lg:w-4 md:h-4 md:w-4 h-4 w-4 text-center my-2 m-2 "
                    viewBox="0 0 448 512"
                    fill="#ffffff"
                  >
                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                  </svg>
                  Book Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Ready to book section end --> */}
    </>
  );
};

export default Home_Top_Banner;
