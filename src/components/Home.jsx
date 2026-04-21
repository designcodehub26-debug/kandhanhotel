import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion"; // ✅ add this
import homeImage from "../assets/home1.jpg";
import logo2 from "../assets/logo2.png";

function Home() {
  return (
    <div className="home font-lato w-full min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full px-4 md:px-16">

        {/* LOGO */}
        <motion.div
       className="flex justify-center pt-6 pb-2 md:pt-10 md:pb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={logo2}
            alt="logo"
 className="w-[150px] sm:w-[180px] md:w-[260px] h-auto object-contain"
          />
        </motion.div>

        {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center mt-6 md:mt-12">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Rating */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[rgb(243,255,207)] px-4 py-2 rounded-full mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="font-medium text-sm md:text-base">Uber Eats:</span>
              <div className="flex gap-1 text-[#10003B]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="#10003B" stroke="none" />
                ))}
              </div>
              <span className="text-sm md:text-base">(4.9)</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Crafting Flavors <br />
              Creating Memories
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-base md:text-lg max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Welcome to RPS Kandhan Veg Treat Haven, where every bite is a
              step closer to happiness.
            </motion.p>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute w-[300px] h-[240px] md:w-[560px] md:h-[420px] bg-[rgb(243,255,207)] rounded-[20px] md:rounded-[30px] top-[-10px] md:top-[-28px] right-[10px] md:right-[30px] z-0"></div>

            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05 }} // 🔥 hover effect
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={homeImage}
                alt="food"
                className="w-[310px] h-[240px] md:w-[570px] md:h-[420px] object-cover rounded-[20px] md:rounded-[40px]"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Home;