
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";


import Link from "next/link";

import SocialIcon from "./SocialIcon/SocialIcon";
//  import FooterlogoImg from '../../../../public/Footer'
import FooterlogoImg from "../../../../public/images/Footer/footer-logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="w-full  h-full  pb-5  text-white px-5 bg-[#20313B]  ">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Image
              src={FooterlogoImg}
              alt=" main logo"
              className=" "
              href="/"
            />
            <p className="my-3 text-[16px] text-white mt-5 mb-10">
              Lorem Ipsum is simply dummy text of the p text ever since the 150
            </p>

            <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-2">
              <SocialIcon
                icon={<BiLogoFacebookCircle size={30} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                alt="Facebook"
                link="https://facebook.com"
              />
              <SocialIcon
                icon={<BiLogoTwitter size={30} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/twitter.png"
                alt="Twitter"
                link="https://twitter.com"
              />
              <SocialIcon
                icon={<BiLogoInstagramAlt size={30} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                alt="Instagram"
                link="https://instagram.com"
              />
              <SocialIcon
                icon={<BiLogoLinkedinSquare size={30} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
                alt="LinkedIn"
                link="https://linkedin.com"
              />
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-2/6 md:w-1/2 w-full px-6">
              <h2 className=" mb-[18px]  text-white text-[18px] font-bold select-none">
                Quick Links
              </h2>
              <nav className="list-none mb-5">
                <ul className="flex flex-col gap-1 text-white">
                  <a className="hover:underline" href="">
                    <li>Our Services</li>
                  </a>

                  <li>
                    <Link href="/becomeatech" className="hover:underline">
                      {" "}
                      Become A Tech
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className="hover:underline">
                      {" "}
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      {" "}
                      Terms and condition
                    </Link>
                  </li>
                  <li>
                    <Link href="/whychooseus" className="hover:underline">
                      Why Choose Us
                    </Link>
                  </li>

                  <Link href="/customerreview" className="hover:underline">
                    <li>Customers Review </li>
                  </Link>
                  {/* <Link to={'/user_guide'} className="hover:underline" href="">
										<li>User Guide</li>
									</Link> */}

                  {/* <Link className="hover:underline" href="">
										<li>Career</li>
									</Link> */}
                </ul>
              </nav>
            </div>

            <div className="lg:w-2/6 md:w-1/2 w-full px-6">
              <Link
                href="/contact_us"
                className="font-bold text-lg text-white "
              >
                Services
              </Link>

              <nav className="list-none mt-3 mb-10">
                <ul className="flex flex-col gap-[10px] text-white">
                  <a className="hover:underline" href="#">
                    <li>Geekify - Your Onsite Tech Specialist</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Services</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Remote Service</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Tech Support</li>
                  </a>
                </ul>
              </nav>
            </div>
            <div className="lg:w-2/6 md:w-1/2 w-full px-6">
              <h2 className="mb-[18px]  text-white text-[18px] font-bold select-none">
                Download Our App
              </h2>
              <nav className="list-none mb-10">
                <ul className="flex flex-col gap-[10px] text-white">
                  <p>App is available for free on the app store</p>

                  <div>
                    {/* <form>
											<label className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none">

												</div>
												<input type="email" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border  rounded-lg bg-white " placeholder="Email..." required />
												<button type="submit" className=" absolute right-3.5 bottom-1.5 border-2 border-[#2c6777] rounded-full p-0.5">
													<BsSendFill size={15} color='#2c6777' />
												</button>
											</div>
										</form> */}
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-[#20313B] border-t text-center border-[#ffffff] py-5 mt-0">
        <p className="text-gray-300 text-[15px] font-semibold">
          Copyright © 2024
          <a href="#" target="_blank" className="hover:underline mx-1">
            Copyright by geeks.
          </a>
          All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
