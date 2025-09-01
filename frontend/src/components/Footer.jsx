import React from "react";
import { assets } from "../assets/assets";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src="/logo.png" alt="" className="mb-5 w-36 " />
          <p className="w-full md:w-2/3 text-gray-600">
            TrendyWear is about expressing personality, staying updated with
            fashion movements, and finding the perfect balance between comfort
            and style.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 7845184245</li>
            <li>contect@trendywear.com</li>
            <div className="flex gap-3 mt-2 ">
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
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
