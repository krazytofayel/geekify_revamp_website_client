import React from 'react'
import AboutUsImg from "../../../../../public/images/About_Us/about-us.png";
import OurPromiseImg from "../../../../../public/images/Why_Choose_Us/our-promise.png";
import HelpYouImg from "../../../../../public/images/Why_Choose_Us/help-you.png";
import WeAreAboutImg from "../../../../../public/images/About_Us/we-are-about.png";
import Image from 'next/image';
const About_Us_Top_Banner = () => {
  return (
    <>
      {/*  why choose banner section start  */}

      <section className="bg-[#F0FAF7] pb-0 md:pb-10 lg:pb-10 2xl:h-[520px] xl:h-[478px] lg:h-[370px] md:h-[270px] h-[455px]">
        <div className=" flex flex-wrap ">
          <div className="w-full md:w-1/2 order-1 md:order-1 ">
            <div className=" items-center text-center 2xl:ml-48 xl:ml-30 lg:ml-10 md:ml-10 ml-5 lg:pt-10 md:text-left md:pt-0 pt-8 pb-8">
              <p className="xl:text-[70px] lg:text-[50px] md:text-[50px] text-[30px] font-bold text-[#000000]">
                About <span className="text-[#4AC8AE]">Us</span>
              </p>
              <p className=" xl:text-3xl lg:text-[20px] sm:text-[16px] font-base text-black">
                Geekify is the fastest growing Micro tech service provider who
                offers 360 degrees of IT solutions. Learn more about the origins
                of Australia’s favourite Geeks.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-2 md:order-2 flex justify-end h-64">
            <Image
              src={AboutUsImg}
              alt=""
              className=" 2xl:h-[520px] xl:h-[478px] xl:w-[785px] lg:h-[370px] md:h-[270px] h-[250px]"
              priority
            />
          </div>
        </div>
      </section>
      {/* why choose banner section start end  */}

      {/* <!-- Our Promise section start --> */}

      <section className="container mx-auto">
        <div className="px-8 xl:pt-20 xl:pb-20 md:pt-14 pt-10 ">
          <div className="grid md:grid-cols-2 items-left gap-12 ">
            <div className="lg:text-left md:text-center text-center">
              <h2 className="title-font font-medium text-gray-800 tracking-wider lg:text-[46px] text-3xl md:mb-3 mb-1 py-3 ">
                The <span className=" text-[#4AC8AE] ">Geekify Story</span>
              </h2>
              <p className="md:mt-6 mt-1 md:text-xl text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                accumsan, nunc et tempus blandit, metus mi consectetur nibh, a
                pharetra felis turpis vitae ligula. Etiam laoreet velit nec
                neque ultrices, non consequat mauris tincidunt.
              </p>
              <p className="mt-6 md:text-xl text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                accumsan, nunc et tempus blandit, metus mi consectetur nibh, a
                pharetra felis turpis vitae ligula. Etiam laoreet velit nec
                neque ultrices, non consequat mauris tincidunt.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#4AC8AE] flex flex-col items-center text-center rounded xl:p-8 lg:p-6 md:p-4 p-6">
                <h3 className="xl:text-5xl lg:text-3xl text-3xl font-extrabold text-white">
                  0.9
                </h3>
                <div className="mt-4">
                  <p className="text-sm text-white">Years Of Exprience</p>
                </div>
              </div>
              <div className="bg-[#ffffff] flex flex-col items-center text-center rounded xl:p-8 lg:p-6 md:p-4 p-6">
                <h3 className="xl:text-5xl lg:text-3xl text-3xl font-extrabold text-black">
                  40K
                </h3>
                <div className="mt-4">
                  <p className="text-sm text-black">Professional Expers</p>
                </div>
              </div>
              <div className="bg-[#4AC8AE] flex flex-col items-center text-center rounded xl:p-8 lg:p-6 md:p-4 p-6">
                <h3 className="xl:text-5xl lg:text-3xl text-3xl font-extrabold text-white">
                  4,000+
                </h3>
                <div className="mt-4">
                  <p className="text-sm text-white">Client Served</p>
                </div>
              </div>
              <div className="bg-[#ffffff] flex flex-col items-center text-center rounded xl:p-8 lg:p-6 md:p-4 p-6">
                <h3 className="xl:text-5xl lg:text-3xl text-3xl font-extrabold text-black">
                  95%
                </h3>
                <div className="mt-4">
                  <p className="text-sm text-black">Retention Rate</p>
                </div>
              </div>
              <div className="bg-[#4AC8AE] flex flex-col items-center text-center rounded xl:p-8 lg:p-6 md:p-4 p-6">
                <h3 className="xl:text-5xl lg:text-3xl text-3xl font-extrabold text-white">
                  75+
                </h3>
                <div className="mt-4">
                  <p className="text-sm text-white">City Service</p>
                </div>
              </div>
              <div className="bg-[#ffffff] flex flex-col items-center text-center rounded xl:p-8 lg:p-6 md:p-4 p-6">
                <h3 className="xl:text-5xl lg:text-3xl text-3xl font-extrabold text-black">
                  99%
                </h3>
                <div className="mt-4">
                  <p className="text-sm text-black">Satisfaction Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Promise section end --> */}

      {/* <!-- we about you section start --> */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-col-reverse flex-col-reverse  lg:pb-20 md:pb-10 pt-10 lg:flex-row  lg:items-left md:items-center text-center ">
          <div className=" flex xl:max-w-xl xl:w-1/2 lg:w-2/5 md:w-1/2 w-5/6 mb-10 md:mb-0 lg:items-start md:items-center items-center ml-8 mt-8">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={WeAreAboutImg}
            />
          </div>
          <div className="xl:flex-grow xl:w-1/2 lg:w-3/5 lg:pl-24 md:px-5 flex flex-col lg:text-left md:items-center text-center lg:my-0 md:my-5 my-0">
            <h2 className="title-font font-medium text-gray-800 tracking-wider lg:text-[46px] text-3xl mb-3 py-3 ">
              What <span className=" text-[#4AC8AE] ">we’re about</span>
            </h2>
            <p className=" md:text-xl text-lg text-black lg:text-left md:text-center text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. <br /> Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xl:gap-6 lg:gap-2 md:gap-4">
              <div className="bg-[#4AC8AE] text-white xl:p-8 lg:p-4 md:p-4 p-4 rounded-xl mt-5">
                <h1 className="text-2xl font-medium text-white mb-2">
                  {" "}
                  Mission
                </h1>
                <p className="md:text-xl text-lg text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type
                </p>
              </div>
              <div className="bg-[#ece9e9] text-black xl:p-8 lg:p-4 md:p-4 p-4 rounded-xl mt-5">
                <h1 className="text-2xl font-medium text-black mb-2">
                  {" "}
                  Vision
                </h1>
                <p className="md:text-xl text-lg text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- we about section end --> */}

      {/* <!-- Always on the job section start --> */}
      <section className=" xl:mt-5 xl:mb-20 mt-10">
        <div className="container mx-auto px-5 ">
          <h1 className="title-font sm:text-4xl text-3xl xl:text-[46px] mb-4 font-medium text-gray-900 lg:text-left text-center">
            How we approved by our customer
          </h1>
          <p className="mb-8 leading-relaxed text-xl lg:text-left text-center">
            Always on the job No matter the type of tech trouble you have,
            whether it be repair, installation, troubleshooting, security or
            even consultation and regular maintenance work, our geeks leave no
            corner unattended – and no customer unhappy! <br />
            With that in mind, if you would like solutions to your tech troubles
            lighting fast, then you have come to the right decision!
          </p>
        </div>
      </section>

      {/* <!-- Always on the job section end --> */}

      {/* <!-- Ready to book section start --> */}
      <section className="bg-[#4AC8AE] ">
        <div className="container py-20 mx-auto ">
          <div className="">
            <div className=" flex px-5 items-center justify-center flex-col">
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Need Tech Service?
                </h1>
                <p className="mb-8 leading-relaxed text-2xl text-black">
                  You can get in touch with us over the phone or by using our
                  online booking portal! We’ll be out to fix your tech issues in
                  a flash!
                </p>
              </div>
            </div>
            <div className=" flex flex-wrap mx-10 mb-5 ">
              <div className="lg:w-1/3 md:w-1/2 w-full p-4 px-10">
                <div className=" justify-center mx-auto flex flex-wrap xl:p-6 lg:p-5 md:p-6 p-4 rounded-xl text-black xl:text-2xl lg:text-[16px]  text-[16px] tracking-wider font-medium outline-none border-4 border-[#20313B] hover:bg-[#20313B] hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:h-5 xl:w-5 lg:h-4 lg:w-4 md:h-4 md:w-4 w-3 h-3 text-center my-2 m-2 "
                    viewBox="0 0 512 512"
                  >
                    <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                  </svg>
                  1300 894 946
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full p-4 px-10">
                <div className=" justify-center mx-auto flex flex-wrap xl:p-6 lg:p-5 md:p-6 p-4 rounded-xl text-black xl:text-2xl lg:text-[16px] md:text-xl text-[16px] tracking-wider font-medium outline-none border-4 border-[#20313B] hover:bg-[#20313B] hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:h-5 xl:w-5 lg:h-4 lg:w-4 md:h-4 md:w-4 w-3 h-3 text-center my-2 m-2 "
                    viewBox="0 0 512 512"
                  >
                    <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
                  </svg>
                  Request call back
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full p-4 px-10">
                <div className="justify-center flex flex-wrap xl:p-6 lg:p-5 md:p-6 p-5 rounded-xl text-black xl:text-2xl lg:text-[16px] text-[16px] tracking-wider font-medium outline-none border-4 border-[#20313B] hover:bg-[#20313B] hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xl:h-5 xl:w-5 lg:h-4 lg:w-4 md:h-4 md:w-4 w-3 h-3 text-center my-2 m-2 "
                    viewBox="0 0 448 512"
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
}

export default About_Us_Top_Banner
