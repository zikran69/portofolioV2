import React from "react"

export default function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 lg:mt-[-100px] lg:pb-20">
        <div className="flex flex-col justify-between mb-[50px]">
          <h4 className="text-secondary font-secondary font-semibold text-[24px] text-center mb-2">
            Recent Work
          </h4>
          <div className="text-gradient font-primary mas-w-[700px] mx-auto text-[24px] text-center">
            {" "}
            Several projects that I created, while I was practicing Full Stack
            Web Developer, hopefully this can be a reference, you can also check
            my github page to see all full code.
          </div>
        </div>
        <div className="order-1 lg:order-2 text-center">
          
          <div className="text-primary font-semibold font-primary max-w-[700px] mx-auto text-[24px] mb-[20px]">
            My Best Projects
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="./images/port1.png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h4 className="text-gradient">My Hotel</h4>
                  </div>
                  <p>
                    This website build for booking hotel service, this also for
                    client site who want to book hotel for his vacation or any
                    purpose
                  </p>
                  <div className="grid grid-cols-2 justify-center ">
                    <i
                      href="https://client-dashboard-hazel.vercel.app/home"
                      className="ri-global-line text-[20px]"></i>
                    <i href="#" className="ri-code-box-line text-[20px]"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
