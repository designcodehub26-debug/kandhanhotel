import React from "react";
import drinkImage from "../assets/drinks.jpg";
import drinkImg1 from "../assets/abc.jpg";
import drinkImg2 from "../assets/greenjuice.jpg";
import drinkImg3 from "../assets/yellowjuice.jpg";
import drinkImg4 from "../assets/redjuice.jpg";

function DrinksSection() {
  return (
    <div className="font-lato w-full flex justify-center px-4 md:px-16 py-12 md:py-20 mt-16 md:mt-48">

      <div className="max-w-7xl w-full relative flex flex-col md:flex-row items-center">

        {/* LEFT CARD */}
        <div
          className="
            bg-[rgb(243,255,207)]
            rounded-[30px] md:rounded-[40px]
            pt-8 md:pt-12 pb-4 md:pb-0 px-6 md:px-12
            w-full md:w-[65%]
            mt-6 md:mt-0
            md:absolute md:left-[-30px] md:top-16
            shadow-md
            z-10
          "
        >
          <h3 className="text-[20px] md:text-[23px] font-semibold mb-6 md:mb-8">
            Drinks
          </h3>

          {/* ITEM 1 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={drinkImg1} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">ABC Juice</h4>
              <p className="text-dark text-[14px] md:text-[16px] leading-relaxed">
                a blend of apple, beetroot, and carrot, is known for its refreshing sweet flavor from the apple and carrot, complemented by a mild, earthy taste from the beetroot
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={drinkImg2} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">Green Machine Juice</h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                his invigorating juice. Packed with kale, spinach, and other nutritious goodies, this juice will make you feel like a million bucks.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={drinkImg3} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">Orange Juice</h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                as a refreshing and tangy beverage, offering a balance of sweet and sour flavors.
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={drinkImg4} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">Pomegranate Juice</h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                a blend of sweetness and tartness, with a slightly astringent (pucker-inducing) mouthfeel. 
                Here's a more detailed breakdown:
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[44%] md:ml-auto flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src={drinkImage}
            alt="drinks"
            className="w-full max-w-[350px] md:max-w-[450px] h-[260px] md:h-[480px] object-cover rounded-[30px]"
          />
        </div>

      </div>
    </div>
  );
}

export default DrinksSection;