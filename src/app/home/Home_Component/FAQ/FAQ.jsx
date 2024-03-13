"use client";
import React, { useState } from "react";
import Accordion from "./FAQ_Components/Accordion/Accordion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      <section className="FAQ-section  mb-10">
        <div className=" lg:p-5 ">
          <div className="text-center md:mx-0 mx-5">
            <h1 className="title-font text-[25px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-medium mt-12 mb-3 text-center">
              Frequently Asked <span className="text-[#20B486]">Questions</span>
            </h1>
            <p className="xl:w-1/3 lg:w-3/5 md:w-4/5 mx-auto leading-relaxed text-[18px] mb-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut
              sapien et ex volutpat tincidunt eget at felis.
            </p>
          </div>

          <div className="container mx-auto">
            <div className="  p-2 xl:mx-40 lg:mx-20 md:mx-5">
              {/* large div */}
              <div className=" mb-6  lg:mb-0">
                <div>
                  <Accordion
                    title="Do your services only work for businesses?"
                    content="Nope! Our tech experts are great at providing different IT solutions, whether you own a business or just need help with your home computers."
                    index={0}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                  <Accordion
                    title="Do you sell computer hardware?"
                    content="Absolutely! We're not only good at fixing tech problems but we also sell computers, laptops, and more!
                    Reply"
                    index={1}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                  <Accordion
                    title="I'm not good with tech. Will your experts explain things in simple terms?"
                    content="Definitely! Our tech experts are super friendly and good at explaining things in a way that anyone can understand. You don't need to know much about tech to talk to them."
                    index={2}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                  <Accordion
                    title="How much does your help cost?"
                    content="Check out our website for the prices. We have flexible services that fit different needs, and they're designed to be affordable for everyone!"
                    index={3}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                  <Accordion
                    title="How do I get help from Geekify?"
                    content="Easy! You can reach us by email, phone, or schedule appointments on our website. We'll send our tech experts your way!"
                    index={4}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section end */}
    </>
  );
};

export default FAQ;
