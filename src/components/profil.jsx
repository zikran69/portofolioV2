import React from "react"

export default function Profil() {
  return (
    <div id="profil" className="section">
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        <div className="font-secondary text-center mb-12">
          <h4 className="text-secondary mb-3 font-bold">
            My Ability in Full Stack Developer Web
          </h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px] font-semibold">
            The following are some of the web programming language skills that I
            have
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row item-start justify-between">
          <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
            <div className="min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden">
              <img
                className="items-center justify-center w-full mt-[-50px]"
                src="./images/profil.png"
                alt=""
              />
            </div>
            <h2 className="text-gradient text-[50px] mt-[20px]">
              Asrari Zikran
            </h2>
          </div>
          <div className="w-full lg:pt-[50px] lg:ml-[50px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="./images/1.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">JavaScript</h4>
                      </div>
                      <p>My FullStack language</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="./images/5.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">TailwindCss</h4>
                      </div>
                      <p>My Favorite Frontend Framework</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="./images/3.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">React.js</h4>
                      </div>
                      <p>
                        I usualy work with React, almost all of my projects{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="./images/2.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">Node.js</h4>
                      </div>
                      <p>i also build an banckend system with Node.js</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="./images/4.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">PostgreeSQL</h4>
                      </div>
                      <p>
                        i currently work with PostgreeSQL for database projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="./images/6.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">Prisma</h4>
                      </div>
                      <p>i also work with Prisma for frontend projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="./images/7.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">Express.js</h4>
                      </div>
                      <p>i also work with this popular Framework</p>
                    </div>
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
