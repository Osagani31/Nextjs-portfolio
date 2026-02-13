import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-300 pt-10 pb-6">
      
     
      <div className="text-center">
        <h2 className="text-2xl font-semibold font-ovo">
          Osagani Perera
        </h2>
      </div>

      <div className="flex items-center justify-center gap-3 mt-4 font-ovo">
        <Image
          src={assets.mail_icon}
          alt="Mail Icon"
          width={24}
          height={24}
          className="object-contain"
        />
        <a
          href="mailto:osaganiperera123@gmail.com"
          className="text-gray-600 hover:text-black transition font-ovo"
        >
          osaganiperera123@gmail.com
        </a>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6 font-ovo">
        © {new Date().getFullYear()} Osagani Perera. All rights reserved.
        <ul>
            <li>
                <a target='_blank' href="https://github.com/Osagani31" className="hover:text-black transition">Github</a>
            </li>
            <li>
                <a target='_blank' href="https://linkedin.com/in/osagani-perera-0660842a3" className="hover:text-black transition">LinkedIn</a>
            </li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
