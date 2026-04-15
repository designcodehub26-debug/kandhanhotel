import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo2 from "../assets/logo2.png";
export default function FooterSection() {
  return (
    <footer className="font-lato bg-[rgb(243,255,207)] text-black px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        
        {/* LEFT */}
        <div className="flex-1 flex gap-6">
          
          {/* Vertical Line */}
          <div className="w-[2.5px] bg-black"></div>

          {/* Content */}
          <div>
                 
            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
               <img
               src={logo2}
               alt="logo"
               className="absolute left-[230px] -translate-x-1/2 -translate-y-1/2 w-52 md:w-80 z-20 drop-shadow-xl"
             />
              We’d Love to Hear from You!
            </h1>

            {/* Text */}
            <p className="text-[22px] leading-relaxed max-w-xl mb-10 font-bold">
              Have a question, a special request? Reach out to us anytime! Our
              team is ready to assist you with fast responses and top-notch
              service.
            </p>

            {/* Icons */}
           <div className="flex gap-5 text-[25px] mt-20">
            <a 
  href="https://www.instagram.com/rpskandhanvegtreat/?utm_source=qr&igsh=eG5iMXB1b3JvZnVn" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaInstagram className="cursor-pointer hover:scale-110 transition" />
</a>
              <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
              <FaTwitter className="cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 space-y-8 text-[17px]">
          
          <div>
            <h3 className="font-semibold mb-2">Opening hours:</h3>
            <p>Mon - Sun: 06:00 AM - 10:30 PM</p>
          </div>
<div className="space-y-4">
   <h3 className="font-semibold mb-2">Phone:</h3>
  <p>+918903000994</p>
  <p>+919865333986</p>
</div>

          <div>
            <h3 className="font-semibold mb-2">Email:</h3>
            <p>rpskandhanvegtreat@gmail.com</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold mb-2 ">Location:</h3>
            <p>Tiruvannamalai road, Andanur, Chengam</p>
            <p>Tiruvannamalai - 606709</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center text-sm">
       <p>&copy; 2024 — rps-groups.com</p>


        <div className="flex gap-8 mt-4 md:mt-0">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">Cookies</span>
          <span className="cursor-pointer hover:underline">Terms</span>
        </div>
      </div>
    </footer>
  );
}