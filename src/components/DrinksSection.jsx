import React from "react";
import { motion } from "framer-motion";
import drinkImage from "../assets/drinks.jpg";
import drinkImg1 from "../assets/abc.jpg";
import drinkImg2 from "../assets/greenjuice.jpg";
import drinkImg3 from "../assets/yellowjuice.jpg";
import drinkImg4 from "../assets/redjuice.jpg";

function DrinksSection() {

  const fadeItem = {
    hidden: { opacity: 0, scale: 0.95 },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5
      }
    })
  };

  return (
    <div className="font-lato w-full flex justify-center px-4 md:px-16 py-6 md:py-20 mt-0 md:mt-20 mb-8 md:mb-20">

 <div className="max-w-7xl w-full relative flex flex-col md:flex-row items-center md:pb-40">
        {/* LEFT CARD - FLOATING EFFECT */}
        <motion.div
          className="order-2 md:order-1 bg-[rgb(243,255,207)] rounded-[30px] md:rounded-[40px] pt-8 md:pt-12 pb-4 px-6 md:px-12 w-full md:w-[65%] mt-6 md:mt-0 md:absolute md:left-[-30px] md:top-16 shadow-md z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          animate={{ y: [0, -8, 0] }} // 👈 floating loop
        >
          <h3 className="text-[20px] md:text-[23px] font-semibold mb-6 md:mb-8">
            Drinks
          </h3>

          {[
            {
              img: drinkImg1,
              title: "ABC Juice",
              desc: "Apple, beetroot & carrot refreshing blend."
            },
            {
              img: drinkImg2,
              title: "Green Juice",
              desc: "Healthy mix of greens and nutrients."
            },
            {
              img: drinkImg3,
              title: "Orange Juice",
              desc: "Sweet and tangy refreshing drink."
            },
            {
              img: drinkImg4,
              title: "Pomegranate Juice",
              desc: "Sweet, tart and rich in flavor."
            }
          ].map((item, i) => (

            <motion.div
              key={i}
              custom={i}
              variants={fadeItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start"
              whileHover={{ y: -5 }} // 👈 soft lift
              transition={{ type: "spring", stiffness: 150 }}
            >

              {/* IMAGE */}
              <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
                <img src={item.img} className="w-full h-full object-cover" alt="" />
              </div>

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

        {/* RIGHT IMAGE - LIQUID WIPE */}
        <motion.div
          className="order-1 md:order-2 w-full md:w-[44%] md:ml-auto flex justify-center md:justify-end mt-6 md:mt-0 overflow-hidden rounded-[30px]"
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
         <img
  src={drinkImage}
  alt="drinks"
  className="w-full max-w-[350px] md:max-w-[450px] h-[260px] md:h-[480px] object-cover rounded-[30px]"
/>
        </motion.div>

      </div>
    </div>
  );
}

export default DrinksSection;