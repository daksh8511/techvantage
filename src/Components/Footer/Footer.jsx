import React from "react";

import { VscGithub } from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="p-5">
        <div className="grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-3 gap-9">
          <div>
            <h3 className="font-bold text-[#18216d] text-lg mb-2">Contact</h3>
            <h4 className="mb-2">Tell us everything</h4>
            <span className="block mb-2">
              Do you have any question? Feel free to reach out.
            </span>
            <a
              href=""
              className="border-b text-xl font-light hover:text-[#ff825c] duration-150"
            >
              Let's Chat
            </a>
          </div>
          <div>
            <h3 className="font-bold text-[#18216d] text-lg mb-2">Policy</h3>
            <h4 className="mb-2">Tell us everything</h4>
            <ul className="cursor-pointer *:w-50 *:mb-1 *:hover:border-b *:hover:border-[#ff825c] *:hover:text-[#ff825c] *:duration-300">
              <li>Application Security</li>
              <li>Software Principles</li>
            </ul>
          </div>
          <div className="mt-10">
          <h3 className="font-bold text-[#18216d] text-lg mb-2">Company Support</h3>
            <ul className="cursor-pointer *:w-50 *:mb-1 *:hover:border-b *:hover:border-[#ff825c] *:hover:text-[#ff825c] *:duration-300">
              <li>Support Center</li>
              <li>Customer Support</li>
              <li></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-[#18216d] text-lg mb-2">Address</h2>
            <p>Rancho Santa Margarita 2131 Elk Street California</p>
          </div>
          <div>
            <h2 className="font-bold text-[#18216d] text-lg mb-2">Company</h2>
            <ul className="cursor-pointer *:w-36 *:mb-1 *:hover:border-b *:hover:border-[#ff825c] *:hover:text-[#ff825c] *:duration-300">
                <li>About</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Career & Culture</li>
            </ul>
          </div>
        </div>
        <hr className="mt-5 border-gray-500" />
        <div className="flex py-5 justify-between items-center">
            <div className="logo">
                <h2 className="text-sm min-sm:text-sm min-md:text-3xl font-bold text-[#18216d]">TechVantage Solution</h2>
            </div>
            <div className="social flex items-center gap-5 *:cursor-pointer *:text-[#18216d] *:text-xl">
                <VscGithub />
                <FaTwitter />
                <FaLinkedinIn/>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
