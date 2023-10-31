import React from "react"

const certivicate = [
  {
    title: "- Harisenin.com (Bootcamp). Jul-Dec,2023",
    des: "Fullstack Web Developer, Relevant Course works: JavaScript, React.js, Node.js, Express.js, and any other fullstack framework.",
  },
  {
    title:
      "- Certificate of Competence : Learn to Build Backend Applications for Beginners (Dicoding Academy). Oct, 2023",
    des: " Node.js Basics, Building Web Services using Node.js, Deploy Web Service (AWS Cloud), Consuming and Testing RESTful API using Postman",
  },
  {
    title:
      "- Certificate of Competence : Cloud Practitioner Essentials (Dicoding Academy). Oct, 2023",
    des: "Introduction to Amazon Web Services, Cloud Computing, Global Infrastructure, Networking, Storage and Databases, Security, AWS Certified Cloud Practitioner Fundamentals",
  },
  {
    title:
      "- Certificate of Competence : JavaScript Programming Basics (Dicoding Academy). Oct, 2023",
    des: "JavaScript Fundamentals, Data Structure, Function, Object-Oriented Programming, Functional Programming, Setup Environment, Node Package Manager, Error Handling, Concurrency, JavaScript Testing.",
  },
  {
    title: "- Certificate of Competence : (Prakerja.) Jun, 2022",
    des: "Learn to Create a Mobile App Using Flutter for IT Developer, and Flutter Application Programmer (Mobile Apps Developer).",
  },
]
export default function Education() {
  const globalOffset = 2 === 0 ? "-200" : "200"
  const globalDelay = 200

  return (
    <div id="education" className="section lg:mb-[100px] lg:mt-[30px] ">
      <div className="container mx-auto max-w-[1200px] p-2  ">
        <h4
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay={globalDelay}
          className="text-secondary font-secondary font-bold text-[22px] lg:text-[28px] text-center mb-[20px]">
          My Education Journey
        </h4>
        <div className="flex flex-col lg:flex-row jusstify-between gap-4 ">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-offset={globalOffset}
            data-aos-delay={globalDelay}
            className="backdrop-blur-md bg-white/30 p-[24px] rounded-xl shadow-xl">
            <h5 className="text-gradient font-secondary lg:text-[24px] font-semibold text-center">
              Formal Education
            </h5>
            <div className="font-semibold font-third mt-4 px-2 ">
              <h6 className="text-blue-900 lg:text-[18px]">
                Master of Management (Islamic Finance)
              </h6>
              <li className="text-slate-600 lg:text-[15px]">
                Indonesia Banking School (Jakarta)
              </li>
              <li className="text-slate-600 lg:text-[15px]">
                Graduate in 2021
              </li>
            </div>
            <div className="font-semibold font-third m-2 my-[20px] ">
              <h6 className="text-blue-900 lg:text-[18px]">
                Bachelor of Economic
              </h6>
              <li className="text-slate-600 lg:text-[15px]">
                Trilogi University (Jakarta)
              </li>
              <li className="text-slate-600 lg:text-[15px]">
                Graduate in 2015
              </li>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-offset={globalOffset}
            data-aos-delay={globalDelay}
            className="backdrop-blur-md bg-white/30 p-[24px] rounded-xl shadow-xl">
            <h5 className="text-gradient font-secondary lg:text-[24px] font-semibold text-center mb-4">
              Courses and Certifications
            </h5>
            <div className="grid grid-cols-auto gap-1 text-start group">
              {certivicate.map((certivicate, index) => (
                <div key={index} clsassName="w-full">
                  <div className="font-semibold font-third lg:m-2 lg:my-[15px] text-left">
                    <div className="text-blue-900 text-[15px] lg:text-[18px] justify-between lg:my-[5px] lg:mx-[17px]">
                      {certivicate.title}
                    </div>
                    <p className="text-slate-500 text-[11px] lg:text-[15px] lg:ml-[25px] mb-2 lg:mb-[-15px] lg:my-[2px] lg:mx-[17px]">
                      {certivicate.des}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
