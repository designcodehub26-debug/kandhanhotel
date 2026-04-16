import React from "react";
import { motion } from "framer-motion";
import foodImage from "../assets/lunch.jpg";
import lunchImg1 from "../assets/meals.jpg";
import lunchImg2 from "../assets/parotta.jpg";
import lunchImg3 from "../assets/curdrice.jpg";
import lunchImg4 from "../assets/chappathi.jpg";

function LunchSection() {

  const list = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const waveItem = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 }
  };

  return (
<div className="font-lato w-full flex justify-center px-4 md:px-16 py-6 md:py-20 mt-0 md:mt-20 mb-8 md:mb-20">

  <div className="max-w-7xl w-full relative flex flex-col md:flex-row items-center md:pb-20">


        {/* LEFT CARD - BLUR REVEAL */}
        <motion.div
          className="order-2 md:order-1 bg-[rgb(243,255,207)] rounded-[30px] md:rounded-[40px] pt-8 md:pt-12 pb-8 px-6 md:px-12 w-full md:w-[65%] mt-6 md:mt-0 md:absolute md:left-[-30px] md:top-16 shadow-md z-10"
          initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[20px] md:text-[23px] font-semibold mb-6 md:mb-8">
            Lunch
          </h3>

          {/* ITEMS */}
          <motion.div variants={list} initial="hidden" whileInView="show" viewport={{ once: true }}>

            {[ 
              { img: lunchImg1, title: "Veg Meals", desc: "Steamed rice with dal and curries." },
              { img: lunchImg2, title: "Parotta", desc: "Flaky layered south Indian bread." },
              { img: lunchImg3, title: "Curd Rice", desc: "Cooling dish after spicy meals." },
              { img: lunchImg4, title: "Chapathi", desc: "Soft wheat flatbread with mild flavor." }
            ].map((item, i) => (

              <motion.div
                key={i}
                variants={waveItem}
                className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start group"
              >

                {/* IMAGE */}
                <motion.div
                  className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm"
                  whileHover={{ y: -6 }} // 👈 lift instead of rotate
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img src={item.img} className="w-full h-full object-cover" alt="" />
                </motion.div>

                {/* TEXT */}
                <div>
                  <h4 className="font-semibold text-base md:text-lg">
                    {item.title}
                  </h4>
                  <p className="text-dark text-[14px] md:text-[16px]">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE - CLIP REVEAL */}
        <motion.div
          className="order-1 md:order-2 w-full md:w-[56%] md:ml-auto mt-6 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 60, clipPath: "inset(20% 0% 20% 0%)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-[30px] w-full max-w-[350px] md:max-w-[450px]">
            <img
              src={foodImage}
              alt="lunch"
              className="w-full h-[260px] md:h-[480px] object-cover"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default LunchSection;