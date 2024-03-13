import React from 'react'
import BecomeTechImg from "../../../../../public/images/Become_A_Tech/become-a-tech-top-banner.png";
import YouBenefitImg from "../../../../../public/images/Become_A_Tech/your-benefit-side-img.png";
import SupportForBusinessImg from "../../../../../public/images/Become_A_Tech/support-for-business.png";
import EagernessToLearnImg from "../../../../../public/images/Become_A_Tech/eagerness-to-learn.png";
import GreatCommSkillImg from "../../../../../public/images/Become_A_Tech/great-comm-skill.png";
import TeamOrientedImg from "../../../../../public/images/Become_A_Tech/team-oriented-img.png";
import Image from 'next/image';
const Become_A_Tech_Top_Banner = () => {
  return (
    <>
      <section className="bg-[#F0FAF7] pb-0 md:pb-10 lg:pb-10 2xl:h-[520px] xl:h-[478px] lg:h-[370px] md:h-[270px] h-[457px]">
        <div className=" flex flex-wrap items-center">
          <div className="w-full md:w-1/2 order-1 md:order-1 ">
            <div className="items-center text-center 2xl:ml-48 xl:ml-30 lg:ml-10 md:ml-10 ml-5 lg:pt-10 md:text-left md:pt-0 pt-8 pb-8 ">
              <p className="xl:text-[60px] lg:text-[50px] md:text-[30px] text-[30px] font-bold text-[#000000]">
                Become a <span className="text-[#4AC8AE]">Tech</span>{" "}
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
              src={BecomeTechImg}
              alt=""
              className="2xl:h-[520px] xl:h-[478px] xl:w-[785px] lg:h-[370px] md:h-[270px] h-[250px]"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto pt-24 px-10">
        <p className="title-font sm:text-4xl text-3xl xl:text-[46px] mb-4 font-medium text-gray-900 lg:text-left text-center">
          About This <span className="text-[#4AC8AE]">Position</span>
        </p>
        <p className="mb-8 leading-relaxed text-xl lg:text-left text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={YouBenefitImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl xl:text-[46px] mb-4 font-medium text-gray-900 lg:text-left text-center">
              Your<span className=" text-[#4AC8AE]">Benefit</span>{" "}
            </h2>
            <p className=" mb-8 leading-relaxed text-xl lg:text-left text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. <br /> Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font bg-[#F0FAF7]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="title-font sm:text-4xl text-3xl xl:text-[46px] mb-4 font-medium text-gray-900 lg:text-center text-center">
              What is <span className="text-[#20B486]">expected</span> from you
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4  sm:w-1/2 w-full">
              <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center items-center">
                  <Image
                    src={SupportForBusinessImg}
                    alt=""
                    className="h-20 w-20 item-center"
                  />
                </div>
                <div className=" my-5">
                  <p className="text-xl font-medium leading-relaxed">
                    A background in providing relevant tech support for business
                    and homes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center items-center">
                  <Image
                    src={EagernessToLearnImg}
                    alt=""
                    className="h-20 w-20 item-center"
                  />
                </div>
                <div className=" my-5">
                  <p className="text-xl font-medium leading-relaxed text-[#20B486]">
                    A good attitude, eagerness to learn and adapt
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center items-center">
                  <Image
                    src={GreatCommSkillImg}
                    alt=""
                    className="h-20 w-20 item-center"
                  />
                </div>
                <div className=" my-5">
                  <p className="text-xl font-medium leading-relaxed">
                    Great communication skills
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-0 border-gray-200 px-4 py-6 rounded-lg">
                <div className="flex justify-center items-center">
                  <Image
                    src={TeamOrientedImg}
                    alt=""
                    className="h-20 w-20 item-center"
                  />
                </div>

                <div className=" my-5">
                  <p className="text-xl font-medium leading-relaxed">
                    A team-oriented mindset
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative py-16  bg-[#4AC8AE]">
        <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center ">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[#20313B]">
            If you think to become a tech lets start
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
          <button
            type="button"
            className="bg-[#20313B] hover:bg-[#20313B] text-white text-lg font-semibold px-16 py-6 rounded-xl transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Become_A_Tech_Top_Banner
