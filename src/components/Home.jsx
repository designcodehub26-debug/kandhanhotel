import React from "react";
import { Star } from "lucide-react";
import homeImage from "../assets/home1.jpg";
import logo2 from "../assets/logo2.png";

function Home() {
  return (
   <div className="home font-lato w-full min-h-screen flex items-center justify-center px-4 md:px-10 mt-24">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          {/* Rating */}
          <div className="inline-flex items-center gap-2 md:gap-3 bg-[rgb(243,255,207)] px-4 md:px-6 py-2 md:py-3 rounded-full mb-5 md:mb-6">
            <span className="font-medium text-sm md:text-base">Uber Eats:</span>
            <div className="flex gap-1 text-[#10003B]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="#10003B" stroke="none" />
              ))}
            </div>
            <span className="text-sm md:text-base">(4.9)</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5 md:mb-6">
            Crafting Flavors <br />
            Creating Memories
          </h1>

          {/* Paragraph */}
          <p className="text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Welcome to RPS Kandhan Veg Treat Haven, where every bite is a
            step closer to happiness.
          </p>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          
          {/* BACK SHAPE */}
          <div className="absolute w-[300px] h-[240px] md:w-[560px] md:h-[420px] bg-[rgb(243,255,207)] rounded-[20px] md:rounded-[30px] top-[-10px] md:top-[-28px] right-[10px] md:right-[30px] z-0"></div>

          {/* IMAGE WRAPPER */}
          <div className="relative z-10">
            <img
              src={homeImage}
              alt="food"
              className="w-[310px] h-[240px] md:w-[570px] md:h-[420px] object-cover rounded-[20px] md:rounded-[40px]"
            />
          </div>

          {/* ✅ FIXED CENTER LOGO */}
          {/* Moved outside the image wrapper and adjusted top to 30% to sit nicely over the food */}
        <img

  src={logo2}
  alt="logo"
  className="absolute top-[-120px]  left-[-40px] -translate-x-1/2 -translate-y-1/2 w-52 md:w-80 z-20 drop-shadow-xl"
/>
        </div>

      </div>
    </div>
  )
}

export default Home;