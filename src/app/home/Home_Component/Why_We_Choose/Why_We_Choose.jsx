import React from "react";
import Image from "next/image";
import WhyWeChooseSideImg from "../../../../../public/images/Home_images/why-we-choose-side-img.png";

const Why_We_Choose = () => {
  return (
    <>
     

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex md:px-5 md:pb-10 md:pt-10 pb-14  md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={WhyWeChooseSideImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
            <h1 className="title-font sm:text-4xl text-3xl xl:text-[46px] mb-4 font-medium text-gray-900">
              Why <span className="text-[#20B486]">Choose Us</span>
            </h1>
            <p className="mb-8 leading-relaxed md:mx-0 mx-5">
              Your satisfaction is our goal. If you’re not happy. Please let us
              know, we will work with you to make it right.
            </p>
            <div className="flex justify-center"></div>
            <div className="flex items-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                className="fill-green-500 shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                ></path>
              </svg>
              <h6 className="text-xl font-semibold ml-4">Rework Assurance</h6>
            </div>
            <div className="flex items-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                className="fill-green-500 shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                ></path>
              </svg>
              <h6 className="text-xl font-semibold ml-4">Background Check</h6>
            </div>
            <div className="flex items-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                className="fill-green-500 shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                ></path>
              </svg>
              <h6 className="text-xl font-semibold ml-4">24/7 Support</h6>
            </div>

            <div className="flex items-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                className="fill-green-500 shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  data-original="#000000"
                ></path>
              </svg>
              <h6 className="text-xl font-semibold ml-4">Expert Professional</h6>
            </div>
            <a
              href=""
              className=" inline-block bg-[#00B79C] text-white no-underline hover:bg-gray-800 mt-6 px-9 py-2 rounded-xl text-[20px] font-[600]"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Why_We_Choose;
