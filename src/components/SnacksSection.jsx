import React from "react";
import { motion } from "framer-motion";
import snackImage from "../assets/allsweets.jpg";
import snackImg1 from "../assets/sweets.webp";
import snackImg2 from "../assets/murukku.jpg";
import snackImg3 from "../assets/temp.webp";
import snackImg4 from "../assets/chips.jpg";

function SnacksSection() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  const popItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <div className="font-lato w-full flex justify-center px-4 md:px-16 py-6 md:py-20 mt-0 md:mt-20 mb-8 md:mb-20">

//   <div className="max-w-7xl w-full relative flex flex-col md:flex-row items-center md:pb-20">


        {/* LEFT IMAGE - PARALLAX FEEL */}
        <motion.div
          className="w-full md:w-[44%] flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full max-w-[350px] md:max-w-[500px] rounded-[30px] overflow-hidden"
            whileHover={{ x: 10 }} // 👈 subtle parallax shift
            transition={{ type: "spring", stiffness: 120 }}
          >
            <img
              src={snackImage}
              alt="snacks"
              className="w-full h-[260px] md:h-[480px] object-cover"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT CARD - SCALE BOUNCE */}
        <motion.div
          className="bg-[rgb(243,255,207)] rounded-[30px] md:rounded-[40px] pt-8 md:pt-12 pb-4 px-6 md:px-12 w-full md:w-[65%] mt-6 md:mt-0 md:absolute md:right-[-30px] md:top-16 shadow-md z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[20px] md:text-[23px] font-semibold mb-6 md:mb-8">
            Snacks
          </h3>

          {/* ITEMS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            {[
              {
                img: snackImg1,
                title: "Indian Sweets",
                desc: "Rich desserts made with milk, sugar & tradition."
              },
              {
                img: snackImg2,
                title: "Murukku",
                desc: "Crunchy, spiral snack with bold flavor."
              },
              {
                img: snackImg3,
                title: "Palkova",
                desc: "Sweet, creamy, melt-in-mouth delight."
              },
              {
                img: snackImg4,
                title: "Banana Chips",
                desc: "Crispy Kerala-style salted chips."
              }
            ].map((item, i) => (

              <motion.div
                key={i}
                variants={popItem}
                className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start group bg-white/40 rounded-xl p-3"
                whileHover={{
                  y: -8,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.12)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >

                {/* IMAGE */}
                <motion.div
                  className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm"
                  whileHover={{ scale: 1.12 }}
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

      </div>
    </div>
  );
}

export default SnacksSection;