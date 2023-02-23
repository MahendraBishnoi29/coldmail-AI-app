import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center pt-8 px-4 sm:pt-12 sm:px-2">
      <div className="lg:w-2/3 border-black sm:w-11/12 text-center">
        <h1 className="md:text-5xl mx-auto max-w-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-normal text-gray-900">
          Job Hunting <span className="text-blue-600">Sucks.</span> Let Me Make
          it Suck a <span className="text-blue-600">Little Less.</span>
        </h1>
        <p className="text-base sm:text-base lg:text-xl mx-auto lg:max-w-2xl sm:max-w-md md:max-w-xl mt-5 sm:mt-3 font-semibold text-gray-500">
          Let our web app revolutionize your job search with personalized cold
          emails that make a lasting impression on employers. Say goodbye to
          generic templates and hello to your dream job.
        </p>
      </div>
    </div>
  );
};

export default Header;
