import React from "react"

const certivicate = [
  {
    title:"",
    des:"",
  },
]
export default function Education() {
  return (
    <div id="education" className="section ">
      <div className="container mx-auto max-w-[1200px] p-2 lg:mb-[100px] lg:mt-[-80px]">
        <h4 className="text-secondary font-secondary font-semibold lg:text-[24px] text-center mb-[20px]">
          My Education Journey
        </h4>
        <div className="flex flex-col lg:flex-row jusstify-between gap-4 ">
          <div className="backdrop-blur-md bg-white/30 p-[24px] rounded-xl shadow-xl">
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
              <li className="text-slate-600 lg:text-[15px]">Graduate in 2021</li>
            </div>
            <div className="font-semibold font-third m-2 my-[20px]">
              <h6 className="text-blue-900 lg:text-[18px]">
                Bachelor of Economic
              </h6>
              <li className="text-slate-600 lg:text-[15px]">
                Trilogi University (Jakarta)
              </li>
              <li className="text-slate-600 lg:text-[15px]">Graduate in 2015</li>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/30 p-[24px] rounded-xl shadow-xl">
            <div></div>
            <h5 className="text-gradient font-secondary lg:text-[24px] font-semibold text-center">
              Courses and Certifications
            </h5>

            <div className="font-semibold font-third m-2 my-[20px] text-left">
              <li className="text-blue-900 text-[18px]">
                Harisenin.com (Bootcamp). Jul-Dec,2023
              </li>
              <p className="text-slate-600 text-[15px] ml-[25px] mb-2">
                Fullstack Web Developer, Relevant Course works: JavaScript,
                React.js, Node.js, Express.js, and any other fullstack
                framework.
              </p>
              <li className="text-blue-900 text-[18px]">
                Certificate of Competence Learn to Build Backend Applications
                for Beginners (Dicoding Academy). Oct, 2023
              </li>
              <p className="text-slate-600 text-[15px] ml-[25px] mb-2">
                Node.js Basics, Building Web Services using Node.js, Deploy Web
                Service (AWS Cloud), Consuming and Testing RESTful API using
                Postman
              </p>
              <li className="text-blue-900 text-[18px]">
                Certificate of Competence Cloud Practitioner Essentials
                (Dicoding Academy). Oct, 2023
              </li>
              <p className="text-slate-600 text-[15px] ml-[25px] mb-2">
                Introduction to Amazon Web Services, Cloud Computing, Global
                Infrastructure, Networking, Storage and Databases, Security, AWS
                Certified Cloud Practitioner Fundamentals
              </p>
              <li className="text-blue-900 text-[18px]">
                Certificate of Competence JavaScript Programming Basics
                (Dicoding Academy). Oct, 2023
              </li>
              <p className="text-slate-600 text-[15px] ml-[25px] mb-2">
                JavaScript Fundamentals, Data Structure, Function,
                Object-Oriented Programming, Functional Programming, Setup
                Environment, Node Package Manager, Error Handling, Concurrency,
                JavaScript Testing.
              </p>
              <li className="text-blue-900 text-[18px]">
                Certificate of Competence Prakerja Jun. 2022
              </li>
              <p className="text-slate-600 text-[15px] ml-[25px] mb-2">
                Learn to Create a Mobile App Using Flutter for IT Developer, and
                Flutter Application Programmer (Mobile Apps Developer).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
