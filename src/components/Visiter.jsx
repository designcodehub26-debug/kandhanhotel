import React from "react";
import logo2 from "../assets/logo2.png";

function VisitSection() {
  return (
    <div className="font-lato w-full flex justify-center px-4 md:px-16 py-12 md:py-20 mb-20 md:mb-40">

      <div className="max-w-7xl w-full relative flex flex-col md:flex-row items-center">

        {/* LEFT MAP */}
        <div className="w-full md:w-[56%] flex justify-center md:justify-start">
          <div className="w-full max-w-[400px] md:max-w-none rounded-[25px] md:rounded-[30px] overflow-hidden">
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d249519.77097998306!2d78.73177419371505!3d12.265431971973797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTiruvannamalai%20road%2C%20Andanur%2C%20Chengam%20%20Tiruvannamalai%20-606709!5e0!3m2!1sen!2sin!4v1774936031840!5m2!1sen!2sin"
              className="w-full h-[250px] md:h-[480px] border-0"
              loading="lazy"
              title="map"
            ></iframe>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="
          bg-[rgb(243,255,207)]
          rounded-[30px] md:rounded-[40px]
          pt-10 md:pt-12 pb-8 md:pb-10 px-6 md:px-12
          w-full md:w-[65%]
          mt-6 md:mt-0
          md:absolute md:right-[-30px] md:top-8
          shadow-md
        "
        >

          {/* LOGO */}
          <div className="flex justify-center md:justify-start mb-6 relative">
            <img
              src={logo2}
              alt="logo"
              className="w-28 md:w-52 drop-shadow-xl"
            />
          </div>

          {/* HEADING */}
          <h3 className="text-xl md:text-[23px] font-semibold mb-4 md:mb-6 text-center md:text-left">
            Welcome to enjoy happiness
          </h3>

          {/* TEXT */}
          <p className="text-dark text-sm md:text-[16px] leading-relaxed mb-4 md:mb-6 text-center md:text-left">
            We are passionate about delivering the finest culinary experience,
            blending tradition with innovation. Our chefs use the freshest
            ingredients to create delightful dishes.
          </p>

          <p className="text-dark text-sm md:text-[16px] leading-relaxed mb-6 md:mb-10 text-center md:text-left">
            Join us at Food Haven and taste the difference passion and quality make.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-full">
              Contact us
            </button>

            <button className="border-2 border-black px-6 py-3 rounded-full">
              Explore menu
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default VisitSection;