import React from "react";
import heroimg from "../../assets/heroimg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroimg}
        alt="UrbanCore"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-top object-cover"
      />
      <div className="absolute inset-0 bg-opacity-5 flex items-center justify-center mt-69">
        <div className="text-center text-white p-6">
          <h2 className="text-2xl md:text-8xl font-bold tracking-tighter uppercase mb-4">
            NEW SEASON
          </h2>
          <h2 className="text-2xl md:text-7xl tracking-tighter uppercase mb-4">
            STREET WEAR
          </h2>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
