import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="text-center">
        <p>
          NOTE: if the mail is not generating then my Open-AI free trial has
          been ended. Can not purchase Premium for now.{" "}
        </p>
        <Link
          target="_blank"
          className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-all"
          href="https://www.linkedin.com/feed/update/urn:li:activity:7034885862660194304/"
        >
          WATCH APP DEMO
        </Link>
      </div>
      <div className="flex items-center justify-center pt-8 px-4 sm:pt-12 sm:px-2">
        <div className="lg:w-2/3 border-black sm:w-11/12 text-center">
          <h1 className="text-4xl lg:text-6xl mx-auto max-w-4xl font-extrabold leading-none tracking-normal text-gray-900">
            Job Hunting <span className="text-blue-600">Sucks.</span> Let Me
            Make it Suck a <span className="text-blue-600">Little Less.</span>
          </h1>
          <p className="text-base sm:text-base lg:text-xl mx-auto lg:max-w-2xl sm:max-w-md md:max-w-xl mt-5 sm:mt-3 font-semibold text-gray-500">
            Let our web app revolutionize your job search with personalized cold
            emails that make a lasting impression on employers.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
