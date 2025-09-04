import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="px-5 sm:px-10 lg:px-20">
      {/* ---- About Us Section ---- */}
      <div className="text-2xl sm:text-3xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
        {/* Left Side Image */}
        <img
          className="w-full md:max-w-[400px] lg:max-w-[450px] rounded shadow-md"
          src={assets.about_img}
          alt="About TrendyWear"
        />

        {/* Right Side Text */}
        <div className="flex flex-col justify-center gap-4 sm:gap-6 md:w-2/3 text-gray-600 text-sm sm:text-base leading-relaxed">
          <p>
           "TrendyWear blends modern fashion with everyday comfort and versatility. Designed to stay stylish season after season, our collections feature quality fabrics, sharp fits, and contemporary designs for every lifestyle."
          </p>
          <p>
            What makes TrendyWear stand out is its blend of affordability and
            style, letting you stay on-trend without overspending. Whether you
            want a laid-back vibe or a statement look, TrendyWear clothing items
            make it easy to dress with confidence.
          </p>
          <b className="text-gray-800 text-base sm:text-lg">Our Mission</b>
          <p>
            At TrendyWear, our mission is to create fashion that is modern,
            versatile, and empowering. We believe that clothing should not only
            follow trends but also inspire individuality and confidence in
            everyone who wears it.
          </p>
        </div>
      </div>

      {/* ---- Why Choose Us Section ---- */}
      <div className="text-xl sm:text-2xl py-4 text-center">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm sm:text-base mb-20 border rounded overflow-hidden">
        {/* Quality Assurance */}
        <div className="px-6 py-6 sm:px-10 sm:py-10 md:px-12 flex flex-col gap-3 sm:gap-5 flex-1">
          <b className="text-base sm:text-lg">Quality Assurance</b>
          <p className="text-gray-600">
            At TrendyWear, every piece is crafted with premium fabrics and
            strict quality checks to ensure long-lasting style and comfort.
          </p>
        </div>

        {/* Convenience */}
        <div className="px-6 py-6 sm:px-10 sm:py-10 md:px-12 flex flex-col gap-3 sm:gap-5 flex-1 border-t md:border-t-0 md:border-l">
          <b className="text-base sm:text-lg">Convenience</b>
          <p className="text-gray-600">
            Enjoy a seamless shopping experience with easy navigation, secure
            payments, and quick doorstep delivery.
          </p>
        </div>

        {/* Customer Service */}
        <div className="px-6 py-6 sm:px-10 sm:py-10 md:px-12 flex flex-col gap-3 sm:gap-5 flex-1 border-t md:border-t-0 md:border-l">
          <b className="text-base sm:text-lg">Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our support team is always ready to assist you with personalized
            care, making your shopping worry-free.
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  );
};

export default About;
