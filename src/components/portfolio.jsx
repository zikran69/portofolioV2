import React from "react"

const project = [
  {
    title: "My Hotel",
    image: "./images/port1.png",
    linkDemo: "https://f-pro-clientsite-v2-dktswwdb5-zikran-a.vercel.app",
    linkCode: "https://github.com/zikran69/client-dashboardV2",
    des: "This website build for booking hotel service, this also for client site who want to book hotel for his vacation or any related purpose",
  },
  {
    title: "Dashboard Admin",
    image: "./images/port2.png",
    linkDemo: "",
    linkCode: "",
    des: "This web for admin dashboard, related to 'My Hotel' project, complete with backend system (API & DB) ",
  },
  {
    title: "Landing Page",
    image: "./images/port3.png",
    linkDemo: "",
    linkCode: "",
    des: "Simply landing page for Job Seekers, build with react&tailwind",
  },
  {
    title: "Portfolio V1",
    image: "./images/port4.png",
    linkDemo: "",
    linkCode: "",
    des: "My Firts Portfolio, build with HTML,CSS,JS only",
  },
]

export default function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 lg:mt-[-100px] lg:pb-20">
        <div className="flex flex-col justify-between mb-[50px]">
          <h4 className="text-secondary font-secondary font-semibold text-[24px] text-center mb-2">
            Recent Work
          </h4>
          <div className="text-gradient font-primary max-w-[700px] mx-auto lg:text-[24px] text-center">
            {" "}
            Several projects that I created, while I was practicing Full Stack
            Web Developer, hopefully this can be a reference, you can also check
            my github page to see all full code.
          </div>
        </div>
        <div className="order-1 lg:order-2 text-center">
          <div className="text-primary font-semibold font-primary max-w-[700px] mx-auto text-[30px] mb-[20px]">
            My Projects :
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {project.map((project, index) => (
            <div key={index} className="w-full">
              <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-2 relative group">
                <img src={project.image} alt="" />
                <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                  <div className="text-center w-full text-white lg:mt-[-60px] group-hover:mt-[0] transition-all">
                    <div className="bg-white rounded-full px-5 inline-block mb-2">
                      <h4 className="text-gradient text-[12px] lg:text-[15px]">
                        {project.title}
                      </h4>
                    </div>
                    <p className="text-[12px] lg:text-[15px]">{project.des}</p>
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
  )
}
