import React from "react";
import snackImage from "../assets/allsweets.jpg";
import snackImg1 from "../assets/sweets.webp";
import snackImg2 from "../assets/murukku.jpg";
import snackImg3 from "../assets/Paalkova.webp";
import snackImg4 from "../assets/chips.jpg";

function SnacksSection() {
  return (
    <div className="font-lato w-full flex justify-center px-4 md:px-16 py-12 md:py-20 mt-16 md:mt-48">

      <div className="max-w-7xl w-full relative flex flex-col md:flex-row items-center">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-[44%] flex justify-center md:justify-start">
          <div className="w-full max-w-[350px] md:max-w-[500px] rounded-[30px] overflow-hidden">
            <img
              src={snackImage}
              alt="snacks"
              className="w-full h-[260px] md:h-[480px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="
            bg-[rgb(243,255,207)]
            rounded-[30px] md:rounded-[40px]
            pt-8 md:pt-12 pb-4 md:pb-0 px-6 md:px-12
            w-full md:w-[65%]
            mt-6 md:mt-0
            md:absolute md:right-[-30px] md:top-16
            shadow-md
            z-10
          "
        >
          <h3 className="text-[20px] md:text-[23px] font-semibold mb-6 md:mb-8">
            Snacks
          </h3>

          {/* ITEM 1 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={snackImg1} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">
                Indian sweets and desserts
              </h4>
              <p className="text-dark text-[14px] md:text-[16px] leading-relaxed">
                are known for their unique taste and experimental behavior when it comes to food. Many Indian desserts are fried foods made with sugar, milk or condensed milk.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={snackImg2} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">Murukku</h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                has an uneven texture that gives it an extra crunch. The Kai murukku (hand murukku) is made by hand using a stiffer dough. Pakoda muṟukku is another ribbon-shaped variety of the snack
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={snackImg3} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">Palkova</h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                a popular milk-based sweet from Srivilliputhur in Tamil Nadu, is known for its rich, sweet, and slightly caramelized flavor, with a smooth, melt-in-your-mouth texture.
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={snackImg4} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">Banana Chips</h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                especially those made in the Kerala style, are often praised for their thin, crispy texture and savory taste
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SnacksSection;