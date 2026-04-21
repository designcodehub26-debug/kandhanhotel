
import React from "react";
import { motion } from "framer-motion";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
function VisitSection() {
  return (
    <div className="font-lato w-full flex justify-center px-4 md:px-16 py-12 md:py-20">

      <div className="max-w-7xl w-full">

        {/* HEADING */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Visit Us & Book a Table
        </motion.h1>

        <div className="relative flex flex-col md:flex-row items-center">

          {/* LEFT MAP - ZOOM EFFECT */}
          <motion.div
            className="w-full md:w-[56%] flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-[400px] md:max-w-none rounded-[25px] md:rounded-[30px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d249519.77097998306!2d78.73177419371505!3d12.265431971973797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTiruvannamalai%20road%2C%20Andanur%2C%20Chengam%20%20Tiruvannamalai%20-606709!5e0!3m2!1sen!2sin!4v1774936031840!5m2!1sen!2sin"
                className="w-full h-[250px] md:h-[480px] border-0"
                loading="lazy"
                title="map"
              ></iframe>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="bg-[rgb(243,255,207)] rounded-[30px] md:rounded-[40px] pt-10 md:pt-12 pb-8 px-6 md:px-12 w-full md:w-[65%] mt-6 md:mt-0 md:absolute md:right-[-30px] md:top-8 shadow-md"
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* LOGO - FLOAT + ROTATE */}
            <motion.div
              className="flex justify-center md:justify-start mb-6"
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={logo2}
                alt="logo"
                className="w-28 md:w-52 drop-shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </motion.div>

            {/* HEADING */}
            <motion.h3
              className="text-xl md:text-[23px] font-semibold mb-4 md:mb-6 text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Welcome to enjoy happiness
            </motion.h3>

            {/* TEXT */}
            <motion.p
              className="text-dark text-sm md:text-[16px] leading-relaxed mb-4 md:mb-6 text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              We are passionate about delivering the finest culinary experience,
              blending tradition with innovation.
            </motion.p>

            <motion.p
              className="text-dark text-sm md:text-[16px] leading-relaxed mb-6 md:mb-10 text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join us and taste the difference passion and quality make.
            </motion.p>

          {/* BUTTONS */}
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">

  {/* CONTACT */}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=rpskandhanvegtreat@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.button
      className="bg-black text-white px-6 py-3 rounded-full text-sm md:text-base font-medium shadow-md w-[180px]"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      Contact Us
    </motion.button>
  </a>

  {/* MENU */}
  <Link to="/menu">
    <motion.button
      className="border-2 border-black px-6 py-3 rounded-full text-sm md:text-base font-medium w-[180px] hover:bg-black hover:text-white transition"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      Explore Menu
    </motion.button>
  </Link>

</div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default VisitSection;