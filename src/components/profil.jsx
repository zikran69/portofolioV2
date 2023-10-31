import React from "react";

const skillData = [
  {
    image: "./images/1.png",
    title: "JavaScript",
    description: "My FullStack language",
    aos: "flip-left",
    aosDuration: 1000,
  },
  {
    image: "./images/5.png",
    title: "TailwindCss",
    description: "My Favorite Frontend Framework",
    aos: "flip-left",
    aosDuration: 1500,
  },
  {
    image: "./images/3.png",
    title: "React.js",
    description: "I usually work with React, almost all of my projects",
    aos: "flip-left",
    aosDuration: 2000,
  },
  {
    image: "./images/2.png",
    title: "Node.js",
    description: "I also build a backend system with Node.js",
    aos: "flip-left",
    aosDuration: 2500,
  },
  {
    image: "./images/4.png",
    title: "PostgreSQL",
    description: "I currently work with PostgreSQL for database projects",
    aos: "flip-left",
    aosDuration: 3000,
  },
  {
    image: "./images/6.png",
    title: "Prisma",
    description: "I also work with Prisma for frontend projects",
    aos: "flip-left",
    aosDuration: 3000,
  },
  {
    image: "./images/7.png",
    title: "Express.js",
    description: "also work with backend framework, Express.js",
    aos: "flip-left",
    aosDuration: 3000,
  },
  {
    image: "./images/8.png",
    title: "VCS",
    description: "use Git for version control, this helps me a lot",
    aos: "flip-left",
    aosDuration: 3000,
  },
];

export default function Profil() {
  const globalOffset = 2 === 0 ? "-200" : "200";
  const globalDelay = 200;

  return (
    <div id="profil" className="section">
      <div className="container mx-auto max-w-[1200px] lg:max-w-auto p-2 overflow-hidden lg:mb-[80px]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay={globalDelay}
          className="font-secondary text-center m-1 mb-10">
          <h4 className="text-secondary text-[20px] mb-3 font-bold">
            My Ability in Full Stack Developer Web
          </h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[20px] font-semibold">
            The following are some of the web programming language skills that I
            have
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="text-center lg:w-full lg:max-w-[350px] mx-auto mb-[20px] lg:mb-[50px]">
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-offset={globalOffset}
              data-aos-delay={globalDelay}
              className="lg:min-w-[250px] lg:min-h-[250px] bg-gradient pt-[50px] rounded-full overflow-hidden">
              <img
                className="justify-cente w-full mt-[-50px] "
                src="./images/profil.png"
                alt=""
              />
            </div>
            <h2 className="text-gradient text-[40px] mt-[5px]">
              Asrari Zikran
            </h2>
          </div>

          <div className="w-[300px] lg:w-full lg:h-auto lg:pt-[10px] ml-[30px] lg:ml-[30px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 text-center">
              {skillData.map((skill, index) => (
                <div
                  key={index}
                  data-aos={skill.aos}
                  data-aos-duration={skill.aosDuration}
                  data-aos-offset={globalOffset}
                  data-aos-delay={globalDelay}
                  className="w-full">
                  <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-3 lg:p-5 group">
                    <img src={skill.image} alt="" />
                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                      <div className="text-center w-full text-white">
                        <div className="bg-white rounded-full px-2 mb-1 lg:px-5 lg:py-2 inline-block lg:mb-2">
                          <h4 className="text-gradient ">{skill.title}</h4>
                        </div>
                        <p>{skill.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
