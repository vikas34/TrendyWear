import React from "react";
import { assets } from "../assets/assets";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src="/logo.png" alt="" className="mb-5 w-36" />
       
          <p className="w-full md:w-2/3 text-gray-600">
            TrendyWear is about expressing personality, staying updated with
            fashion movements, and finding the perfect balance between comfort
            and style.
          </p>
        </div>

        <div>
          <p className="text-medium font-medium mb-5 tracking-wide">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-medium font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 7845184245</li>
            <li>contect@trendywear.com</li>
            <div className="flex gap-2 mt-2 ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-xl hover:text-blue-800 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-sky-500 text-xl hover:text-sky-700 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-pink-500 text-xl hover:text-pink-700 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-red-600 text-xl hover:text-red-800 transition duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2025@ trendywear.com - All Right Reserved!{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
