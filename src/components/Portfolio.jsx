import React, { Fragment } from "react";
import Item from "./img/item.png";

const Portfolio = () => {
  return (
    <Fragment>
      {/* <!-- works --> */}
      <div id="works" class="py-40 dark:bg-slate-900">
        <div class="container mx-auto">
          {/* <!-- top --> */}
          <div class="flex flex-col gap-3 items-center">
            <h1 class="text-indigo-600 font-bold">PORTFOLIO</h1>
            <h1 class="text-3xl dark:text-white">Works & Projects</h1>
            <p class="w-1/2 text-center text-gray-400">
              I help designers, small agencies and businesses bring their ideas
              to life. Powered by Figma, VS Code and coffee, I turn your
              requirements into a well-designed websites
            </p>
          </div>
          {/* <!-- bottom --> */}
          <div class="p-5 sm:p-0 flex flex-wrap justify-between">
            {/* <!-- card --> */}
            <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Item} />
            </div>
            {/* <!-- card --> */}
            <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Item} />
            </div>
            {/* <!-- card --> */}
            <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Item} />
            </div>
            {/* <!-- card --> */}
            <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Item} />
            </div>
            {/* <!-- card --> */}
            <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Item} />
            </div>
            {/* <!-- card --> */}
            <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Item} />
            </div>
            {/* <!-- card --> */}
            <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Item} />
            </div>
            {/* <!-- card --> */}
            <div class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110">
              <img src={Item} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
