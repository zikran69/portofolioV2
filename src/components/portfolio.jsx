import React from "react";

const project = [
  {
    title: "My Hotel",
    image: "./images/port1.png",
    linkDemo: "https://f-pro-clientsite-v2-dktswwdb5-zikran-a.vercel.app",
    linkCode: "https://github.com/zikran69/client-dashboardV2",
    des: "This website build for booking hotel service, this also for client site who want to book hotel for his vacation or any related purpose",
    aos: "flip-right",
    aosDuration: 1500,
  },
  {
    title: "Dashboard Admin",
    image: "./images/port2.png",
    linkDemo: "https://dashboard-admin-ver-2-react.vercel.app/",
    linkCode: "https://github.com/zikran69/dashboard-admin-ver.2",
    des: "This web for admin dashboard, related to 'My Hotel' project, complete with backend system (API & DB) ",
    aos: "flip-right",
    aosDuration: 2000,
  },
  {
    title: "Landing Page",
    image: "./images/port3.png",
    linkDemo: "https://joblos-jobseeker-assignment-react-hsb-8.vercel.app/",
    linkCode: "https://github.com/zikran69/Assignment_React_HSB8",
    des: "Simply landing page for Job Seekers, build with react&tailwind",
    aos: "flip-right",
    aosDuration: 2500,
  },
  {
    title: "Portfolio V1",
    image: "./images/port4.png",
    linkDemo: "https://portfolio-zikran.vercel.app/",
    linkCode: "https://github.com/zikran69/PortfolioSaya",
    des: "My Firts Portfolio, build with HTML,CSS,JS only",
    aos: "flip-right",
    aosDuration: 3000,
  },
];

export default function Portfolio() {
  const globalOffset = 2 === 0 ? "-200" : "200";
  const globalDelay = 200;

  return (
    <div id="portfolio" className="section mb-[40px] ">
      <div className="container mx-auto max-w-[1200px] px-3 lg:mt-[-100px] lg:pb-[20px]">
        <div
          data-aos="fade-up"
          data-aos-delay={globalDelay}
          data-aos-duration="1000"
          className="flex flex-col justify-between mb-[50px]">
          <h4 className="text-secondary font-secondary font-semibold text-[24px] text-center mb-2">
            Recent Work
          </h4>
          <div className="text-gradient font-primary max-w-[700px] mx-auto lg:text-[24px] text-center my-auto">
            Several projects that I created, while I was practicing Full Stack
            Web Developer, hopefully this can be a reference, you can also check
            my github page to see all full code.
          </div>
        </div>
        <div className="order-1 lg:order-2 text-center">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay={globalDelay}
            className="text-primary font-semibold font-primary max-w-[700px] mx-auto text-[30px] mb-[20px]">
            My Projects :
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-center ">
          {project.map((project, index) => (
            <div
              key={index}
              data-aos={project.aos}
              data-aos-duration={project.aosDuration}
              data-aos-offset={globalOffset}
              data-aos-delay={globalDelay}
              className="w-full pb-[10px]">
              <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-2 relative group">
                <img src={project.image} alt="" />
                <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                  <div className="text-center w-full text-white lg:mt-[-60px] group-hover:mt-[0] transition-all">
                    <div className="bg-white rounded-full px-2 mb-1 my-2  lg:px-5 inline-block mb-2">
                      <h4 className="text-gradient text-[12px] lg:text-[15px]">
                        {project.title}
                      </h4>
                    </div>
                    <p className="text-[9px] lg:text-[15px]">{project.des}</p>
                    <div className="grid grid-cols-2 justify-center ">
                      <i
                        onClick={() => window.open(project.linkDemo, "_blank")}
                        className="ri-global-line text-[20px]"
                        title="visit website"></i>
                      <i
                        onClick={() => window.open(project.linkCode, "_blank")}
                        className="ri-code-box-line text-[20px]"
                        title="view code"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
