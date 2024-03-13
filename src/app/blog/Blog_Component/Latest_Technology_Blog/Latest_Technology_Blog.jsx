import React from "react";
import VideoFeatureImg from "../../../../../public/images/Blog/feature-video.png";
import Image from "next/image";
import Link from "next/link";
const Latest_Technology_Blog = () => {
  return (
    <>
      {/* Our latest technology start max-md:max-w-lg mx-auto */}
      <div className="bg-white font-[sans-serif] my-4">
        <div className="container mx-auto">
          <div className="text-left mt-16 lg:ml-5  md:ml-5">
            <h2 className=" xl:text-4xl lg:w-2/4 w-full text-3xl md:text-left text-center font-bold text-[#333] inline-block relative after:absolute after:w-2/5 after:h-1 after:left-10 after:right-0 after:-bottom-4  after:bg-[#20B486] after:rounded-full">
              Stay Trendy with Our Latest Technology Insights
            </h2>
          </div>
          <section className=" ">
            <div className=" ">
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16  mx-5">
                <div className="bg-[#F0FAF7] cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                  <div className="m-4">
                    <Image
                      src="https://readymadeui.com/Imagination.webp"
                      alt="Blog Post 1"
                      width={100}
                      height={240}
                      priority={true}
                      className="w-full h-60 object-cover rounded"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#333]">
                      A Guide to Igniting Your Imagination
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis accumsan, nunc et tempus blandit, metus mi
                      consectetur felis turpis vitae ligula.
                    </p>
                    <hr className="my-6" />
                    <div className="flex pl-1 mt-4  w-full mx-auto">
                      <span className=" font-bold text-sm block text-[#333333] mb-0">
                        Jane Doe | 5min read
                      </span>
                      <Link
                        href="/blogdetails"
                        className="font-bold inline-flex items-center md:mb-2 lg:mb-0 ml-auto text-[#333333] text-sm"
                      >
                        Learn More
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg> */}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F0FAF7] cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                  <div className="m-4">
                    <Image
                      src="https://readymadeui.com/hacks-watch.webp"
                      alt="Blog Post 2"
                      width={100}
                      height={240}
                      className="w-full h-60 object-cover rounded"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#333]">
                      Hacks to Supercharge Your Day
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis accumsan, nunc et tempus blandit, metus mi
                      consectetur felis turpis vitae ligula.
                    </p>
                    <hr className="my-6" />
                    <div className="flex pl-1 mt-4  w-full mx-auto">
                      <span className=" font-bold text-sm block text-[#333333] mb-0">
                        Jane Doe | 5min read
                      </span>
                      <Link
                        href="/blogdetails"
                        className="font-bold inline-flex items-center md:mb-2 lg:mb-0 ml-auto text-[#333333] text-sm"
                      >
                        Learn More
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg> */}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F0FAF7] cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                  <div className="m-4">
                    <Image
                      src="https://readymadeui.com/prediction.webp"
                      alt="Blog Post 2"
                      width={100}
                      height={240}
                      className="w-full h-60 object-cover rounded"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#333]">
                      Hacks to Supercharge Your Day
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis accumsan, nunc et tempus blandit, metus mi
                      consectetur felis turpis vitae ligula.
                    </p>
                    <hr className="my-6" />
                    <div className="flex pl-1 mt-4  w-full mx-auto">
                      <span className=" font-bold text-sm block text-[#333333] mb-0">
                        Jane Doe | 5min read
                      </span>

                      <Link
                        href="/blogdetails"
                        className=" inline-flex items-center md:mb-2 lg:mb-0 ml-auto text-[#333333] text-sm hover:text-[#20B486] font-bold"
                      >
                        Learn More
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* our latest technology end */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 py-10 mx-auto flex flex-wrap ">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 items-center">
            <Image src={VideoFeatureImg} alt="" />
          </div>
          <div className="lg:w-2/6 md:w-1/2   flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <div className=" bg-gray-100 xl:p-6 lg:p-3 md:p-2 p-3 rounded-lg mb-3 ">
              <h2 className="text-gray-900 lg:text-lg md:text-[16px] font-medium title-font mb-1">
                Reader Spotlight: Transformation Stories
              </h2>
              <hr className="xl:my-6 lg:my-2 my-1" />
              <div className="flex pl-1   w-full mx-auto">
                <span className=" font-base xl:text-[16px] lg:text-[14px] md:text-[12px] block text-[#333333] mb-0">
                  Advice 15:48
                </span>
                <a
                  href="/blog_details"
                  className="font-bold inline-flex items-center md:mb-2 lg:mb-0 ml-auto text-[#333333] text-sm"
                >
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-4 h-4"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className=" bg-gray-100 xl:p-6 lg:p-3 md:p-2 p-3 rounded-lg mb-3 ">
              <h2 className="text-gray-900 lg:text-lg md:text-[16px] font-medium title-font mb-1">
                Reader Spotlight: Transformation Stories
              </h2>
              <hr className="xl:my-6 lg:my-2 my-1" />
              <div className="flex pl-1   w-full mx-auto">
                <span className=" font-base xl:text-[16px] lg:text-[14px] md:text-[12px] block text-[#333333] mb-0">
                  Advice 15:48
                </span>
                <a
                  href="/blogdetails"
                  className="font-bold inline-flex items-center md:mb-2 lg:mb-0 ml-auto text-[#333333] text-sm"
                >
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-4 h-4"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className=" bg-gray-100 xl:p-6 lg:p-3 md:p-2 p-3 rounded-lg mb-3 ">
              <h2 className="text-gray-900 lg:text-lg md:text-[16px] font-medium title-font mb-1">
                Reader Spotlight: Transformation Stories
              </h2>
              <hr className="xl:my-6 lg:my-2 my-1" />
              <div className="flex pl-1   w-full mx-auto">
                <span className=" font-base xl:text-[16px] lg:text-[14px] md:text-[12px] block text-[#333333] mb-0">
                  Advice 15:48
                </span>
                <Link
                  href="/blogdetails"
                  className="font-bold inline-flex items-center md:mb-2 lg:mb-0 ml-auto text-[#333333] text-sm"
                >
                  {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-4 h-4"
                    viewBox="0 0 384 512"
                  >
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Latest_Technology_Blog;
