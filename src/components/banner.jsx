import React from "react";
import { TypeAnimation } from "react-type-animation";
export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto mas-w-[1200px] px-3 mb-[100px] lg:mb-[20px] items-center">
      <div className="w-full">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hello, I'm
          <div>
            <TypeAnimation
              sequence={[
                "Zikran",
                3000,
                "Full Stack Developer",
                2000,
                "Front-end Web Developer",
                2000,
                "Back-end Web Developer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="ml-3 text-secondary"
            />
          </div>
          <h4 className="font-primary font-normal">
            Welcome to my website, here you can see the information you need
            about me, I hope this website can help you and me in achieving the
            goals we hope for.
          </h4>
        </div>
      </div>
    </div>
  );
}
