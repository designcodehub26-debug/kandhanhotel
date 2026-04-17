import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";

function Navbar() {
  const [open, setOpen] = useState(false);
useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [open]);
  return (
    <div className="w-full bg-white border-b-2 border-[rgb(243,255,207)] relative z-50">

      {/* NAV BAR */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-3">

        {/* LOGO */}
        <div className="flex items-center">
          <img src={logo} className="h-[70px]" alt="logo" />
          <span className="text-lg font-medium ml-1">-groups</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 font-semibold">
          <NavLink to="/">Menu</NavLink>
          <NavLink to="/news">News</NavLink>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rpskandhanvegtreat@gmail.com&su=Table Booking&body=Hi, I would like to book a table."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white px-7 py-3 rounded-full text-[16px] font-semibold hover:opacity-90 transition">
              Book table
            </button>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <>
          {/* OVERLAY */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          ></div>

          {/* CENTER MENU */}
         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">

           <div className="bg-white w-[85%] max-w-[300px] rounded-2xl shadow-2xl p-6 relative mx-auto">
              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-2xl"
              >
                ✕
              </button>

              {/* MENU */}
              <div className="flex flex-col gap-6 mt-6 text-lg font-semibold text-center">

                <NavLink to="/menu" onClick={() => setOpen(false)}>
                  Menu
                </NavLink>

                <NavLink to="/news" onClick={() => setOpen(false)}>
                  News
                </NavLink>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rpskandhanvegtreat@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-black text-white px-6 py-3 rounded-full w-full">
                    Book table
                  </button>
                </a>

              </div>
            </div>

          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;