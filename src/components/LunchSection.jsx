import React from "react";
import foodImage from "../assets/lunch.jpg";
import lunchImg1 from "../assets/meals.jpg";
import lunchImg2 from "../assets/parotta.jpg";
import lunchImg3 from "../assets/curdrice.jpg";
import lunchImg4 from "../assets/chappathi.jpg";

function LunchSection() {
  return (
    <div className="font-lato w-full flex justify-center px-4 md:px-16 py-12 md:py-20 mt-16 md:mt-32">

      <div className="max-w-7xl w-full relative flex flex-col md:flex-row items-center">

        {/* LEFT CARD */}
        <div
          className="
            bg-[rgb(243,255,207)]
            rounded-[30px] md:rounded-[40px]
            pt-8 md:pt-12 pb-8 md:pb-12 px-6 md:px-12
            w-full md:w-[65%]
            mt-6 md:mt-0
            md:absolute md:left-[-30px] md:top-16
            shadow-md
            z-10
          "
        >
          <h3 className="text-[20px] md:text-[23px] font-semibold mb-6 md:mb-8">
            Lunch
          </h3>

          {/* ITEM 1 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={lunchImg1} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">Veg Meals</h4>
              <p className="text-dark text-[14px] md:text-[16px] leading-relaxed">
                We have steamed rice with lentils (dal) and curries. Apart from steamed rice being cooked in almost every household
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={lunchImg2} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">Parotta</h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                the popular south indian layered paratha recipe made with maida or plain flour. it is known for its crisp and flaky taste with multiple layers of folded and twisted parotta layers in it.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={lunchImg3} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">Yogurt Rice</h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                is traditionally eaten at the end of lunch and dinner as this helps ease the effects of spicy food consumed prior.
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={lunchImg4} className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <h4 className="font-semibold text-base md:text-lg">Chapathi</h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                Like other flatbreads, chapati doesn't offer a profound taste on its own. However, there is a mild nutty-sweet flavor from the whole wheat, which is the principal ingredient in chapati dough.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[56%] md:ml-auto mt-6 md:mt-0 flex justify-center md:justify-end">
          <div className="overflow-hidden rounded-[30px] w-full max-w-[350px] md:max-w-[450px]">
            <img
              src={foodImage}
              alt="lunch"
              className="w-full h-[260px] md:h-[480px] object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default LunchSection;