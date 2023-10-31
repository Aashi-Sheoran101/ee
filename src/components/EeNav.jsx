import React, { useState } from "react";
import navlogo from "../assets/images/svg/navlogo.svg";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import Herobubble from "../assets/images/png/herobubble.png";
import bubbletab from "../assets/images/png/tab-bubble.png";
import herodots from "../assets/images/png/herodots.png";

const EeNav = () => {
  const [nav, setNav] = useState(true);

  function shownav() {
    setNav(false);
    document.body.classList.add("overflow-hidden");
  }
  function hidenav() {
    setNav(true);
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div className=" relative">
      <img
        className=" hidden lg:block z-[-1] absolute top-[-208%] left-[-7%]"
        src={Herobubble}
        alt="bubble"
      />
      <img
        className="absolute top-[-1%] z-[-1] lg:hidden"
        src={bubbletab}
        alt="bubbletab"
      />
      <img
        className="absolute hidden xl:block right-0 top-[50%]"
        src={herodots}
        alt="herodots"
      />
      <div className="container xl:w-[1180px] 2xl:w-[1320px] mx-auto px-3 sm:px-5 xl:px-0">
        <div className="py-4 sm:py-10">
          <div className="flex items-center justify-between">
            <div>
              <img
                className="height_width_logo cursor-pointer w-[68px] h-[75px]"
                src={navlogo}
                alt="logo"
                height={60}
                width={155}
              />
            </div>
            <label htmlFor="menuIcon" className="z-50">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <ul
              className={
                nav
                  ? "flex nav_bar mb-0 ps-0 items-center me-[70px]"
                  : "ps-0 flex nav_bar items-center show mb-0 gap-4"
              }
            >
              <li onClick={hidenav} className="xl:me-[30px] mb-4 xl:mb-0">
                <a
                  href="#section_2"
                  className=" text-[white] hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  About
                </a>
              </li>
              <li onClick={hidenav} className="xl:me-[30px] mb-4 xl:mb-0">
                <a
                  href="#section_3"
                  className=" text-[white] hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  IBO Event
                </a>
              </li>
              <li onClick={hidenav} className="xl:me-[30px] mb-4 xl:mb-0">
                <a
                  href="#section_4"
                  className=" text-[white] hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  EEFI Tokenomics
                </a>
              </li>
              <li onClick={hidenav} className="xl:me-[30px] mb-4 xl:mb-0">
                <a
                  href="#section_5"
                  className=" text-[white] hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  Team
                </a>
              </li>
              <li onClick={hidenav} className="xl:me-[30px] mb-4 xl:mb-0">
                <a
                  href="#section_6"
                  className=" text-[white] hover-line whitespace-nowrap font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  Partners
                </a>
              </li>
              <li onClick={hidenav} className="xl:me-[30px] mb-4 xl:mb-0">
                <a
                  href="#section_7"
                  className=" text-[white] hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  Roadmap
                </a>
              </li>
              <li onClick={hidenav} className="xl:me-[30px] mb-4 xl:mb-0">
                <a
                  href="#section_7"
                  className=" text-[white] hover-line font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs "
                >
                  More
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-5">
              <ul>
                <li
                  onClick={() => {
                    setNav(true);
                  }}
                >
                  <a
                    href="#"
                    className="inline-block font-Jakarta font-medium text-[4vw] sm:text-[3vw] md:text-[2vw] xl:text-xs bg-[transparent] rounded-lg py-4 sm:py-[19px] px-4 sm:px-[29px] border-[1px] border-[white] text-[white] xl:border-[#1643C3] xl:text-[#1643C3] hover:bg-[transparent] duration-500 cursor-pointer"
                  >
                    Enter App
                  </a>
                </li>
              </ul>
              <div
                className="position-relative z-3 xl:hidden cross_btn z_100"
                onClick={nav ? shownav : hidenav}
              >
                {" "}
                {nav ? (
                  <Icon icon={menu} size={45} className="icons_color" />
                ) : (
                  <Icon icon={x} size={45} className="icons_color2" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EeNav;
