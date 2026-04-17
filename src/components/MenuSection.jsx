import React from "react";
import menuImg from "../assets/menu.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function MenuSection() {
  return (
    <div className="w-full py-8 md:py-12 mt-8 md:mt-12 px-4 md:px-16 flex flex-col items-start">

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

          <Link to="/menu">
<motion.button
  className="bg-black text-white px-6 py-3 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium shadow-md mt-4"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
>
  All Food Menu
</motion.button>
</Link> 
        </div>

      </div>

    </div>
  );
}

export default MenuSection;