import React, { Fragment } from "react";
import FaceBook from "./img/facebook.png";
import Instagram from "./img/instagram.png";
import Linkedin from "./img/linkedin.png";
import Twitter from "./img/twitter.png";

const Footer = () => {
  return (
    <Fragment>
      {/* <!-- footer --> */}
      <div class="w-full bg-gray-800">
        <div class="container mx-auto py-5 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img class="w-8" src="./img/logo.png" alt="" />
            <span class="text-2xl font-bold text-white">Portwind.</span>
          </div>
          <span class="hidden md:block font-medium text-white">
            © 2022 Portwind. Design with ♥️ by Hovsep Stepanian.
          </span>
          <div class="flex gap-2">
            <img class="w-4 cursor-pointer" src={FaceBook} alt="facebook" />
            <img class="w-4 cursor-pointer" src={Instagram} alt="instagram" />
            <img class="w-4 cursor-pointer" src={Linkedin} alt="linkedin" />
            <img class="w-4 cursor-pointer" src={Twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
