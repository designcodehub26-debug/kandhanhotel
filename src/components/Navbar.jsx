import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white border-b relative z-50">

      {/* NAV BAR */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-3">

        {/* LOGO */}
        <div className="flex items-center">
          <img src={logo} className="h-[55px]" />
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
            <button className="bg-black text-white px-7 py-3 rounded-full text-[16px] font-semibold tracking-wide hover:opacity-90 transition">
              Book table
            </button>
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* 🔥 OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* 🔥 SIDEBAR MENU */}
     {/* SIDEBAR MENU */}
<div
  className={`
    fixed top-0 right-0 h-full w-[75%] max-w-[300px]
    bg-white shadow-xl z-50
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
>

  {/* CLOSE */}
  <div className="flex justify-end p-3">
    <button onClick={() => setOpen(false)} className="text-2xl">
      ✕
    </button>
  </div>

  {/* MENU */}
  <div className="flex flex-col gap-4 px-5 pt-6 text-base font-semibold">

    <NavLink to="/" onClick={() => setOpen(false)}>
      Menu
    </NavLink>

    <NavLink to="/news" onClick={() => setOpen(false)}>
      News
    </NavLink>

     <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rpskandhanvegtreat@gmail.com&su=Table Booking&body=Hi, I would like to book a table."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white px-7 py-3 rounded-full text-[16px] font-semibold tracking-wide hover:opacity-90 transition">
              Book table
            </button>
          </a>

  </div>

</div>

    </div>
  );
}

export default Navbar;