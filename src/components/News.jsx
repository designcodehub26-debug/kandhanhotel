import React from "react";

function News() {
  return (
    <div className="font-lato bg-[rgb(243,255,207)] rounded-b-[40px] md:rounded-b-[60px] py-12 md:py-16 px-4 md:px-20">

      <div className="max-w-7xl mx-auto text-center md:text-left">

        {/* TITLE */}
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
          Latest news from Food Haven
        </h1>

        {/* SUBTEXT */}
        <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0">
          Discover the secrets behind our Veg Food and get the scoop on exclusive discounts.
        </p>

        {/* OPTIONAL LINE */}
        <div className="mt-6 md:mt-8 w-20 h-1 bg-green-500 rounded-full mx-auto md:mx-0"></div>

      </div>

    </div>
  );
}

export default News;