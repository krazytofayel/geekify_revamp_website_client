"use client";
import React, { useState } from "react";
import Image from "next/image";
const SocialIcon = ({ icon, hoverIconSrc, alt, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href='link'
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <Image src={hoverIconSrc} alt={alt} /> : icon}
    </a>
  );
};

export default SocialIcon;
