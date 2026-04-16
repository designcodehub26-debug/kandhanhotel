import React from "react";
import menuImg from "../assets/menu.jpeg";
import { Link } from "react-router-dom";

function MenuSection() {
  return (
    <div className="w-full py-12 md:py-20 mt-12 md:mt-20 px-4 md:px-16 flex flex-col items-start">

      {/* TITLE */}
      <h2 className="text-3xl md:text-5xl font-semibold mb-10 md:mb-16">
        Overall Menu
      </h2>

      {/* CENTER */}
      <div className="w-full flex justify-center">

        <div className="relative flex flex-col items-center">

          {/* GREEN BACKGROUND */}
          <div className="absolute -top-3 -left-3 w-full h-[85%] bg-[rgb(243,255,207)] rounded-[20px] md:rounded-[30px] z-0"></div>

         <Link to="/menu">
  <div className="relative z-10 w-full md:w-auto rounded-[20px] md:rounded-[30px] overflow-hidden shadow-lg cursor-pointer">
    <img
      src={menuImg}
      alt="menu"
      className="w-full md:w-[340px] h-[320px] md:h-[360px] object-cover hover:scale-105 transition duration-300"
    />
  </div>
</Link>

          {/* TEXT BELOW */}
          <p className="mt-4 md:mt-6  md:text-lg font-medium text-gray-800">
            All-food-menu
          </p>

        </div>

      </div>

    </div>
  );
}

export default MenuSection;