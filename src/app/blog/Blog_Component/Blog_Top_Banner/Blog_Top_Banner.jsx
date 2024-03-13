import React from "react";
import BlogTopBannerImg from "../../../../../public/images/Blog/blog-top-banner.png";
import Image from "next/image";
const Blog_Top_Banner = () => {
  return (
    <>
      {/* Blog Banner section start */}

      <section className="bg-[#F0FAF7] pb-0 md:pb-10 lg:pb-10 2xl:h-[520px] xl:h-[478px] lg:h-[370px] md:h-[270px] h-[476px]">
        <div className=" flex flex-wrap ">
          <div className="w-full md:w-1/2 order-1 md:order-1 ">
            <div className=" items-center text-center 2xl:ml-48 xl:ml-30 lg:ml-10 md:ml-10 ml-5 lg:pt-10 md:text-left md:pt-0 pt-8 pb-8">
              <p className="xl:text-[70px] lg:text-[50px] md:text-[50px] text-[30px] font-bold text-[#000000]">
                Blog{" "}
              </p>
              <p className=" xl:text-3xl lg:text-[20px] sm:text-[16px] font-base text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500sn
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
              src={BlogTopBannerImg}
              alt=""
              width={785}
              height={520}
              className=" 2xl:h-[520px] xl:h-[478px] xl:w-[785px] lg:h-[370px] md:h-[270px] h-[250px] "
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog_Top_Banner;
