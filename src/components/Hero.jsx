import React from "react";
import mainhero from "../assets/images/png/main-img-hero.png";
import tabhero from "../assets/images/png/tab-img-hero.png"
const Hero = () => {
  return (
    <div className="container xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0 relative">
      <div className=" lg:flex">
        <div>
          <h1 className=" fs_85 ff_machina uppercase font-medium md:max-w-[463px] max-w-[708px] text-center mx-auto lg:mx-0 lg:text-start text-[white]">
            Building elastic Protocol
          </h1>
          <p className=" text-[16px] ff_raleway capitalize font-normal max-w-[524px] mt-[8px] sm:mt-[31px] text-center lg:text-start mx-auto text-[white]">
            An ecosystem of unique yield strategies that help you earn yield,
            amplify, and stretch it across all market conditions
          </p>
          <p className=" text-[18px] ff_raleway font-bold underline sm:mt-[26px] mt-[5px] text-[white] text-center lg:text-start">
            Audited by Omniscia
          </p>
        </div>
        <div>
          <img
            className=" absolute hidden max-w-[44%] xl:max-w-[100%] lg:block  xl:top-[-25%] z-[-1] lg:top-[0px]"
            src={mainhero}
            alt="mainhero"
          />
          <img className="lg:hidden" src={tabhero} alt="tabhero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
