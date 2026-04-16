import React from "react";
import { motion } from "framer-motion";

function News() {
  return (
    <motion.div
      className="font-lato bg-[rgb(243,255,207)] rounded-b-[40px] md:rounded-b-[60px] py-12 md:py-16 px-4 md:px-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      <div className="max-w-7xl mx-auto text-center md:text-left">

        {/* TITLE - SPLIT STYLE */}
        <motion.h1
          className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Latest news from <br className="hidden md:block" />
          Food Haven
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Discover the secrets behind our Veg Food and get the scoop on exclusive discounts.
        </motion.p>

        {/* LINE - GROW EFFECT */}
        <motion.div
          className="mt-6 md:mt-8 w-20 h-1 bg-green-500 rounded-full mx-auto md:mx-0"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          style={{ originX: 0 }}
          viewport={{ once: true }}
        />

      </div>

    </motion.div>
  );
}

export default News;