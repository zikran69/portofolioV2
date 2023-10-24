import React from "react"

export default function Header() {
  const handleEmailClick = () => {
    const emailAddress = "zikranasnawi69@gmail.com"
    const emailLink = `mailto:${emailAddress}`
    window.open(emailLink, "_blank")
  }

  return (
    <div className="container mx-auto mas-w-[1200px] mt-4 px-3 relative lg:absolute left-0 right-0">
      <div className="flex justify-between py-5 items-center">
        <div
          className="text-gradient"
          data-aos="fade-right"
          data-aos-easeing="ease-in-sine"
          data-aos-duration="800"
          data-aos-delay="100">
          <a href="/">
            <h2 className="text-[20px] leading-none font-semibold">Asrari</h2>
            <h1 className="text-[30px] leading-none font-bold">Zikran</h1>
          </a>
        </div>
        <div
          className="flex items-center space-x-3"
          data-aos="fade-left"
          data-aos-easeing="ease-in-sine"
          data-aos-duration="800"
          data-aos-delay="100">
          <a
            href="https://github.com/zikran69"
            target="_blank"
            rel="noreferrer">
            <i className="ri-github-fill text-[40px]"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/asrarizikran/"
            target="_blank"
            rel="noreferrer">
            <i className="ri-linkedin-box-fill text-[40px]"></i>
          </a>
          <a href="/" onClick={handleEmailClick}>
            <i className="ri-mail-send-fill text-[40px]"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
