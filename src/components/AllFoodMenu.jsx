import React from "react";
import menuImg from "../assets/menu.jpeg";

const menuData = [
  {
    title: "BREAKFAST",
    items: ["Idly (2pcs)", "Poori (3pcs)", "Pongal", "Dosa", "Kichadi", "Idiyappam"],
  },
  {
    title: "QUICK STARTERS",
    items: ["Vada", "Bajji", "Samosa", "Puffs", "Veg salad", "Kuzhi paniyaram", "Pineapple kesari", "Ellu Urudai", "Samber Vada"],
  },
  {
    title: "KANADHAN SPL",
    items: ["Ragi Dosa", "Kambu Dosa", "Kid’s Meals", "Ragi Kali", "Kambu Kali"],
  },
  {
    title: "DOSA SPECIAL",
    items: ["Plain", "Masala", "Onion Dosa", "Onion Masala dosa", "Ghee Dosa", "Ghee Masala Dosa", "Uttaappam", "Onion Uttaappam", "Podi dosa", "Ghee Podi dosa", "Rava dosa", "Onion Rava Dosa", "Rava Masala Dosa", "Onion Rava Masala Dosa"],
  },
  {
    title: "LUNCH",
    items: ["Spl. Meals", "Mine Meals", "Limited Meals", "Chappathi (2pcs)", "Parotta (2pcs)"],
  },
  {
    title: "VARIETY RICE",
    items: ["Veg Pulao", "Lemon Rice", "Malli Rice", "Tomato Rice", "Samber Rice", "Curd Rice"],
  },
  {
    title: "SPL BRIYANI",
    items: ["Veg Briyani", "Gobi Briyani", "Mushroom Briyani", "Paneer Briyani"],
  },
  {
    title: "CHINESE ITEMS",
    items: ["Veg Fried Rice", "Paneer Fried Rice", "Gobi Fried Rice", "Mushroom Fried Rice", "Veg Noodles", "Mushroom Noodles", "Paneer Noodles", "Gobi Noodles"],
  },
  {
    title: "BEVERAGE",
    items: ["Tea", "Lemon Tea", "Green Tea", "Black Tea", "Coffee", "Boost", "Horlicks"],
  },
  {
    title: "FRESH JUICE",
    items: ["Apple", "Grape", "Orange", "Pomegranate", "Pineapple", "Watermelon"],
  },
  {
    title: "ICE CREAM",
    items: ["Chocolate", "Vanilla", "Strawberry", "Butterscotch"],
  },
];

function AllFoodMenu() {
  return (
    <div className="font-lato bg-white min-h-screen">

      {/* 🔥 TOP BANNER */}
      <div className="max-w-6xl mx-auto px-4 pt-4 relative">

        {/* GREEN BACKGROUND */}
        <div className="hidden md:block absolute w-full h-[350px] bg-[rgb(243,255,207)] rounded-3xl"></div>

        {/* IMAGE */}
        {/* ✅ FIXED HERE: removed overflow-hidden */}
        <div className="relative rounded-3xl shadow-lg mt-6 md:translate-y-10">
          <img
            src={menuImg}
            alt="menu"
            className="w-full h-[200px] md:h-[340px] object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-3xl"></div>
        </div>

      </div>

      {/* 🔥 MENU CONTENT */}
      <div className="px-6 md:px-20 py-10 md:py-16 space-y-10 md:space-y-12 mt-6 md:mt-16">

        {menuData.map((section, index) => (
          <div key={index}>

            {/* TITLE */}
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-5 tracking-wide border-l-4 border-green-500 pl-3">
              {section.title}
            </h2>

            {/* ITEMS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 text-base md:text-lg">

              {section.items.map((item, i) => (
                <p
                  key={i}
                  className="flex justify-between border-b border-gray-200 py-2 pr-4"
                >
                  {item}
                  <span className="text-gray-400">•</span>
                </p>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AllFoodMenu;