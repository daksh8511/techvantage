import React, { useState } from "react";
import "./Header.css";

import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [active, setActive] = useState(true);

  const handleMenu = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <header className="p-5">
      <div className="flex justify-between items-center">
        <div className="logo">
          <h2 className="text-xl min-sm:text-xl min-md:text-3xl font-bold text-[#18216d]">TechVantage Solution</h2>
        </div>
        <div className="menu hidden min-sm:hidden min-md:block">
          <ul className="flex items-center gap-16 *:hover:border-b *:duration-150">
            <li>About</li>
            <li>Mission</li>
            <li>Product</li>
            <button className="bg-[#18216d] text-white px-7 py-3 rounded cursor-pointer duration-300">
              Contact
            </button>
          </ul>
        </div>

        <CiMenuFries onClick={handleMenu} className='block min-sm:block min-md:hidden' />
      </div>
      <div className={active == true ? "hidden menu" : "menu"}>
        <ul className="block pt-2 *:py-4 *:text-center  ">
          <li>About</li>
          <li>Mission</li>
          <li>Product</li>
          <button className="bg-[#18216d] text-white px-7 py-3 rounded cursor-pointer duration-300 w-full">
            Contact
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
