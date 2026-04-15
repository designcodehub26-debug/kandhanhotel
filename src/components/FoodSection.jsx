import React from "react";
import foodImage from "../assets/foodimg1.jpg";
import foodImage1 from "../assets/itly.jpg";
import foodImage2 from "../assets/dosa.jpg";
import foodImage3 from "../assets/idiyappam.jpg";
import foodImage4 from "../assets/fruit.jpg";

function FoodSection() {
  return (
    <div className="font-lato w-full flex justify-center px-4 md:px-16 py-12 md:py-20">

      <div className="max-w-7xl w-full relative flex flex-col md:flex-row items-center">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-[44%] flex justify-center md:justify-start">
          <div className="w-full max-w-[350px] md:max-w-[500px] rounded-[30px] overflow-hidden">
            <img
              src={foodImage}
              alt="food"
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
          "
        >
          <h3 className="text-[20px] md:text-[23px] font-semibold mb-6 md:mb-8">
            Break Fast
          </h3>

          {/* ITEM */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={foodImage1} className="w-full h-full object-cover" alt="" />
            </div>

            <div>
              <h4 className="font-semibold text-base md:text-lg">Idli</h4>
              <p className="text-dark text-[14px] md:text-[16px] leading-relaxed">
                A soft and healthy south Indian breakfast recipe. Learn how to make the batter, ferment to right texture and cook.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={foodImage2} className="w-full h-full object-cover" alt="" />
            </div>

            <div>
              <h4 className="font-semibold text-base md:text-lg">Dosa</h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                should be crispy, soft and nicely golden brown in color.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={foodImage3} className="w-full h-full object-cover" alt="" />
            </div>

            <div>
              <h4 className="font-semibold text-base md:text-lg">Idiyappam</h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                is generally reviewed positively for its quick and easy preparation, delicious taste, and versatility.
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 min-w-[80px] md:min-w-[96px] rounded-full overflow-hidden shadow-sm">
              <img src={foodImage4} className="w-full h-full object-cover" alt="" />
            </div>

            <div>
              <h4 className="font-semibold text-base md:text-lg">
                Fruit and Vegetable Salad
              </h4>
              <p className="text-dark text-[14px] md:text-[16px]">
                so yummy! You only need 20 minutes to make this crunchy, tangy, and delicious summer salad with fruits and veggies.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FoodSection;