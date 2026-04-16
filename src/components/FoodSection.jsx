// import React from "react";
// import foodImage from "../assets/foodimg1.jpg";
// import foodImage1 from "../assets/itly.jpg";
// import foodImage2 from "../assets/dosa.jpg";
// import foodImage3 from "../assets/idiyappam.jpg";
// import foodImage4 from "../assets/fruit.jpg";

// function FoodSection() {
//   return (
//     <div className="font-lato w-full flex justify-center px-4 md:px-16 py-6 md:py-20 mt-0 md:mt-20 mb-8 md:mb-20">

//   <div className="max-w-7xl w-full relative flex flex-col md:flex-row items-center md:pb-20">

//         {/* LEFT IMAGE */}
//         <div className="w-full md:w-[44%] flex justify-center md:justify-start">
//           <div className="w-full max-w-[350px] md:max-w-[500px] rounded-[30px] overflow-hidden">
//             <img
//               src={foodImage}
//               alt="food"
//               className="w-full h-[260px] md:h-[480px] object-cover"
//             />
//           </div>
//         </div>

//         {/* RIGHT CARD */}
//         <div
//           className="
//             bg-[rgb(243,255,207)]
//             rounded-[30px] md:rounded-[40px]
//             pt-8 md:pt-12 pb-4 md:pb-0 px-6 md:px-12
//             w-full md:w-[65%]
//             mt-6 md:mt-0
//             md:absolute md:right-[-30px] md:top-16
//             shadow-md
//           "
//         >
//           <h3 className="text-[20px] md:text-[23px] font-semibold mb-6 md:mb-8">
//             Break Fast
//           </h3>

//           {/* ITEM */}
//           <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
//             <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
//               <img src={foodImage1} className="w-full h-full object-cover" alt="" />
//             </div>

//             <div>
//               <h4 className="font-semibold text-base md:text-lg">Idli</h4>
//               <p className="text-dark text-[14px] md:text-[16px] leading-relaxed">
//                 A soft and healthy south Indian breakfast recipe. Learn how to make the batter, ferment to right texture and cook.
//               </p>
//             </div>
//           </div>

//           {/* ITEM 2 */}
//           <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
//             <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
//               <img src={foodImage2} className="w-full h-full object-cover" alt="" />
//             </div>

//             <div>
//               <h4 className="font-semibold text-base md:text-lg">Dosa</h4>
//               <p className="text-dark text-[14px] md:text-[16px]">
//                 should be crispy, soft and nicely golden brown in color.
//               </p>
//             </div>
//           </div>

//           {/* ITEM 3 */}
//           <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
//             <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
//               <img src={foodImage3} className="w-full h-full object-cover" alt="" />
//             </div>

//             <div>
//               <h4 className="font-semibold text-base md:text-lg">Idiyappam</h4>
//               <p className="text-dark text-[14px] md:text-[16px]">
//                 is generally reviewed positively for its quick and easy preparation, delicious taste, and versatility.
//               </p>
//             </div>
//           </div>

//           {/* ITEM 4 */}
//           <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
//             <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
//               <img src={foodImage4} className="w-full h-full object-cover" alt="" />
//             </div>

//             <div>
//               <h4 className="font-semibold text-base md:text-lg">
//                 Fruit and Vegetable Salad
//               </h4>
//               <p className="text-dark text-[14px] md:text-[16px]">
//                 so yummy! You only need 20 minutes to make this crunchy, tangy, and delicious summer salad with fruits and veggies.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default FoodSection;

import React from "react";
import { motion } from "framer-motion";
import foodImage from "../assets/foodimg1.jpg";
import foodImage1 from "../assets/itly.jpg";
import foodImage2 from "../assets/dosa.jpg";
import foodImage3 from "../assets/idiyappam.jpg";
import foodImage4 from "../assets/fruit.jpg";

function FoodSection() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
  <div className="font-lato w-full flex justify-center px-4 md:px-16 py-6 md:py-20 mt-0 md:mt-20 mb-8 md:mb-20">

  <div className="max-w-7xl w-full relative flex flex-col md:flex-row items-center md:pb-20">


        {/* LEFT IMAGE - PARALLAX ZOOM */}
        <motion.div
          className="w-full md:w-[44%] flex justify-center md:justify-start"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-[350px] md:max-w-[500px] rounded-[30px] overflow-hidden">
            <motion.img
              src={foodImage}
              alt="food"
              className="w-full h-[260px] md:h-[480px] object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* RIGHT CARD - SLIDE + ROTATE */}
        <motion.div
          className="bg-[rgb(243,255,207)] rounded-[30px] md:rounded-[40px] pt-8 md:pt-12 pb-4 px-6 md:px-12 w-full md:w-[65%] mt-6 md:mt-0 md:absolute md:right-[-30px] md:top-16 shadow-md"
          initial={{ opacity: 0, x: 80, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[20px] md:text-[23px] font-semibold mb-6 md:mb-8">
            Break Fast
          </h3>

          {/* ITEMS */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>

            {[ 
              { img: foodImage1, title: "Idli", desc: "Soft and healthy south Indian breakfast." },
              { img: foodImage2, title: "Dosa", desc: "Crispy, soft and golden brown." },
              { img: foodImage3, title: "Idiyappam", desc: "Quick, tasty and versatile dish." },
              { img: foodImage4, title: "Fruit Salad", desc: "Fresh, crunchy and tangy mix." }
            ].map((food, i) => (

              <motion.div
                key={i}
                variants={item}
                className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start group"
                whileHover={{ scale: 1.03 }}
              >

                {/* IMAGE */}
                <motion.div
                  className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <img src={food.img} className="w-full h-full object-cover" alt="" />
                </motion.div>

                {/* TEXT */}
                <div>
                  <h4 className="font-semibold text-base md:text-lg">
                    {food.title}
                  </h4>
                  <p className="text-dark text-[14px] md:text-[16px]">
                    {food.desc}
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

export default FoodSection;