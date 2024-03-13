"use client";
import React, { useState } from "react";

const Accordion = ({ title, content, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  const toggleAccordion = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="border border-gray-200 rounded mb-5">
      <button
        className="w-full py-4 px-6 text-left font-semibold text-white bg-[#20B486] hover:bg-[#256651] focus:outline-none"
        onClick={toggleAccordion}
      >
        {title}
        <span
          className={`float-right transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          &#11167;
        </span>
      </button>
      <div
        className={`overflow-hidden transition-height ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="p-6 bg-[#256651]">
          <p className="text-white ">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
