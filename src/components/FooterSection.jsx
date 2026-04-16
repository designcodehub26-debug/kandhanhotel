import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import logo2 from "../assets/logo2.png";

export default function FooterSection() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      className="font-lato bg-[rgb(243,255,207)] text-black px-6 md:px-20 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">

        {/* LEFT */}
        <div className="flex-1 flex gap-6">

          {/* LINE - DRAW EFFECT */}
          <motion.div
            className="w-[2.5px] bg-black origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            {/* LOGO */}
            <motion.img
              src={logo2}
              alt="logo"
              className="w-[220px] mb-8"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />

            {/* HEADING */}
            <motion.h1
              variants={fadeItem}
              className="text-[40px] font-extrabold leading-tight -mt-6"
            >
              We'd Love to Hear from You!
            </motion.h1>

            {/* TEXT */}
            <motion.p
              variants={fadeItem}
              className="text-[22px] leading-relaxed max-w-xl mb-10 font-bold"
            >
              Have a question, a special request? Reach out to us anytime!
            </motion.p>

            {/* ICONS */}
            <motion.div
              className="flex gap-5 text-[25px] mt-10"
              variants={container}
            >
              {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  variants={fadeItem}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>

          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          className="flex-1 space-y-8 text-[17px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <motion.div variants={fadeItem}>
            <h3 className="font-semibold mb-2">Opening hours:</h3>
            <p>Mon - Sun: 06:00 AM - 10:30 PM</p>
          </motion.div>

          <motion.div variants={fadeItem}>
            <h3 className="font-semibold mb-2">Phone:</h3>
            <p>+918903000994</p>
            <p>+919865333986</p>
          </motion.div>

          <motion.div variants={fadeItem}>
            <h3 className="font-semibold mb-2">Email:</h3>
            <p>rpskandhanvegtreat@gmail.com</p>
          </motion.div>

          <motion.div variants={fadeItem}>
            <h3 className="font-semibold mb-2">Location:</h3>
            <p>Tiruvannamalai road, Andanur, Chengam</p>
            <p>Tiruvannamalai - 606709</p>
          </motion.div>

        </motion.div>
      </div>

      {/* BOTTOM */}
      <motion.div
        className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>&copy; 2024 — rps-groups.com</p>

        <div className="flex gap-8 mt-4 md:mt-0">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">Cookies</span>
          <span className="cursor-pointer hover:underline">Terms</span>
        </div>
      </motion.div>

    </motion.footer>
  );
}