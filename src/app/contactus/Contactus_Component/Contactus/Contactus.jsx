import React from "react";
import BecomeTechImg from "../../../../../public/images/Become_A_Tech/become-a-tech-top-banner.png";
import ContactSideImg from "../../../../../public/images/Contact/contact-side-img.png";
import ContactBannerImg from "../../../../../public/images/Contact/contact-us-top-banner.png";
import Image from "next/image";
const Contactus = () => {
  return (
    <>
      <section className="bg-[#F0FAF7] pb-0 md:pb-10 lg:pb-10 2xl:h-[520px] xl:h-[478px] lg:h-[370px] md:h-[270px] h-[457px]">
        <div className=" flex flex-wrap items-center">
          <div className="w-full md:w-1/2 order-1 md:order-1 ">
            <div className="items-center text-center 2xl:ml-48 xl:ml-30 lg:ml-10 md:ml-10 ml-5 lg:pt-10 md:text-left md:pt-0 pt-8 pb-8 ">
              <p className="xl:text-[60px] lg:text-[50px] md:text-[30px] text-[30px] font-bold text-[#000000]">
                Contact <span className="text-[#4AC8AE]">Us</span>{" "}
              </p>
              <p className="xl:text-2xl lg:text-[20px] sm:text-[16px] font-base text-black">
                Why should you choose us? Simple, because we make a difference!
                Our motto is "You point it, we fix it!" and we live and conduct
                our business accordingly!
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-2 md:order-2 flex justify-end h-64">
            <Image
              src={ContactBannerImg}
              alt=""
              className="2xl:h-[520px] xl:h-[478px] xl:w-[785px] lg:h-[370px] md:h-[270px] h-[250px]"
            />
          </div>
        </div>
      </section>

      {/* <!--contact us start --> */}

      <section className="text-[#000000] body-font relative">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-start ">
          <div className="md:w-1/2 md:pr-12 md:py-8  mb-10 md:mb-0 pb-10 ">
            <div className="flex flex-col text-left  w-full mb-10">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">
                Get a Free <span className="text-[#20B486]">Consultation</span>
              </h1>
              <p className=" text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
                sapien et ex volutpat tincidunt eget at felis vivamus hendrerit.
              </p>
            </div>
            <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md py-10">
              <form>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="number"
                      placeholder="Phone No."
                      className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    />
                    <svg
                      fill="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      placeholder="Email"
                      className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path
                            d="M0 512h512V0H0Z"
                            data-original="#000000"
                          ></path>
                        </clipPath>
                      </defs>
                      <g
                        clipPath="uclassNamerl(#a)"
                        transform="matrix(1.33 0 0 -1.33 0 682.667)"
                      >
                        <path
                          fill="none"
                          strokeMiterlimit="10"
                          strokeWidth="40"
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="relative flex items-center sm:col-span-2">
                    <textarea
                      placeholder="Write Message"
                      className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    ></textarea>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path
                            d="M0 512h512V0H0Z"
                            data-original="#000000"
                          ></path>
                        </clipPath>
                      </defs>
                      <g
                        clipPath="url(#a)"
                        transform="matrix(1.33 0 0 -1.33 0 682.667)"
                      >
                        <path
                          fill="none"
                          strokeMiterlimit="10"
                          strokeWidth="40"
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full mt-12 flex items-center justify-center text-xl lg:ml-auto max-lg:w-full rounded-3xl px-4 py-2.5 font-semibold bg-[#20B486] text-white hover:bg-[#011c2bf3]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    className="mr-2"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      fillRule="evenodd"
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      clipRule="evenodd"
                      data-original="#000000"
                    />
                  </svg>
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12 mt-0">
            <div className=" flex items-center mb-4">
              <Image
                src={ContactSideImg}
                alt=""
                className="h-[250px] w-[350px]"
              />
            </div>

            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-[#20B486]">
              Contact us for tech support
            </h1>
            <p className="text-[18px] font-semibold  text-gray-900  flex items-center mb-2 ">
              <span className="mr-4">Phone : </span>
              <span className="mr-10"> (02) 9158 8497</span>
            </p>

            <p className="text-[18px] font-semibold text-gray-900 flex items-center mb-2 ">
              <span className="mr-4">Email : </span>
              <span className="mr-10"> www.info@krazyit.com</span>
            </p>
            <p className="text-[18px] font-semibold text-gray-900 flex  mb-2 ">
              <span className="mr-4">Hours : </span>
              <span className="mr-10">
                {" "}
                Monday – Friday: 8am – 9pm <br />
                Saturday: 8am – 5pm <br />
                Sunday: 9am – 6pm <br />
                Public Holidays: 9am – 6pm{" "}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* <!--contact us end --> */}
    </>
  );
};
export default Contactus;
