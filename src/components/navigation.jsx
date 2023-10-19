import React from "react"
import { Link } from "react-scroll"

export default function Navigation() {
  return (
    <div className="fixed right-5 left-5 bottom-2 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5">
      <div className="backdrop-blur-md bg-white/30 shadow-md flex flex-row justify-between lg:flex-col mx-auto  text-secondary p-2 rounded-full border-secondary border-solid border-[2px] max-w-[200px]">
        <Link
          to="home"
          className="flex w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] justify-center items-center cursor-pointer mb-2 lg:mb-0"
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}>
          <i className="ri-arrow-up-circle-line"></i>
        </Link>
        <Link
          to="profil"
          className="flex w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] justify-center items-center cursor-pointer mb-2 lg:mb-0"
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}>
          <i className="ri-account-circle-line"></i>
        </Link>
        <Link
          to="education"
          className="flex w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] justify-center items-center cursor-pointer mb-2 lg:mb-0"
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}>
          <i className="ri-graduation-cap-fill"></i>
        </Link>
        <Link
          to="portfolio"
          className="flex w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] justify-center items-center cursor-pointer mb-2 lg:mb-0"
          activeClass="active"
          offset={-100}
          smooth={true}
          spy={true}>
          <i className="ri-code-s-slash-fill"></i>
        </Link>
      </div>
    </div>
  )
}
