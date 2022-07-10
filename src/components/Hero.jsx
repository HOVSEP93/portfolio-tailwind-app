import React, { Fragment } from "react";
import Typewriter from "typewriter-effect";
import Man from "./img/man.png";

const Hero = () => {
  return (
    <Fragment>
      {/* image */}
      <img
        src={Man}
        alt="man"
        className=" lg:absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover  "
      />
      {/* circle */}
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>
      {/* animation */}
      <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
        <span className="text-gray-800">Freelances</span>
        <p className="text-red-500">
          <Typewriter
            options={{
              strings: ["Developer", "Designer", "Content Creator"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      {/* text */}
      <div class="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white  p-6 h-fit w-1/3 dark:bg-slate-900 dark:shadow-slate-800">
        <h1 class="text-4xl font-bold text-indigo-900">Hi, I'm Hovsep</h1>
        <p class="text-gray-400">
          with over 2 years of experience on web design and development. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. N oumquam quo
          provident, facere minus temporibus veniam nostrum reprehenderit nihil?
        </p>
        <a
          class="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#contact"
        >
          Hire Me
        </a>
      </div>
    </Fragment>
  );
};

export default Hero;
