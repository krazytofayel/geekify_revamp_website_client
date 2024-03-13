import React from "react";
import SelectImg from "../../../../../public/images/Home_images/select-service.png";
import PickDateImg from "../../../../../public/images/Home_images/pick-a-date.png";
import ProvideDetailImg from "../../../../../public/images/Home_images/provide-detail.png";
import MakePaymentImg from "../../../../../public/images/Home_images/make-payment.png";
import GeeksOnWayImg from "../../../../../public/images/Home_images/geeks-on-way.png";

import Image from "next/image";
const Book_Online = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:pt-10 mb-0 lg:pb-20 md:pb-10 mx-auto">
          <div className="flex flex-col text-center w-full md:mb-3 mb-10">
            <h1 className="sm:text-3xl text-[25px] xl:text-[46px] font-medium title-font mb-4 text-gray-900">
              Book online and get <span className="text-[#20B486]">10%</span> off
            </h1>
            <p className="lg:w-2/3 xl:text-[26px] mx-auto leading-relaxed text-[#20B486] text-xl font-semibold">
              Easiest way to get a service
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="md:p-4 py-0 px-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-0 border-gray-200 md:px-4 md:py-6  px-4 py-3 rounded-lg">
                <div className="flex justify-center items-center">
                  <Image src={SelectImg} alt="" className="h-20 w-20 item-center" />
                </div>
                <div className=" my-5">
                  <p className="lg:text-xl md:text-lg text-lg font-medium leading-relaxed">
                    Select Service
                  </p>
                </div>
              </div>
            </div>

            <div className="md:p-4 py-0 px-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center items-center">
                  <Image src={PickDateImg} alt="" className="h-20 w-20 item-center" />
                </div>
                <div className=" my-5">
                  <p className="lg:text-xl md:text-lg text-lg font-medium leading-relaxed text-[#20B486]">
                    Pick a Date
                  </p>
                </div>
              </div>
            </div>
            <div className="md:p-4 py-0 px-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center items-center">
                  <Image
                    src={ProvideDetailImg}
                    alt=""
                    className="h-20 w-20 item-center"
                  />
                </div>
                <div className=" my-5">
                  <p className="lg:text-xl md:text-lg text-lg font-medium leading-relaxed">
                    Provide Details
                  </p>
                </div>
              </div>
            </div>
            <div className="md:p-4 py-0 px-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center items-center">
                  <Image
                    src={MakePaymentImg}
                    alt=""
                    className="h-20 w-20 item-center"
                  />
                </div>

                <div className=" my-5">
                  <p className="lg:text-xl md:text-lg text-lg font-medium leading-relaxed">
                    Make Payment
                  </p>
                </div>
              </div>
            </div>
            <div className="md:p-4 py-0 px-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center items-center">
                  <Image
                    src={GeeksOnWayImg}
                    alt=""
                    className="h-20 w-20 item-center"
                  />
                </div>
                <div className=" my-5">
                  <p className="lg:text-xl md:text-lg text-lg font-medium leading-relaxed">
                    Geeks on your way
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Book_Online;
