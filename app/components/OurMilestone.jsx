import { BsArrowRight } from "react-icons/bs";

export default function OurMilestone() {
  return (
    <section
      className=" text-white flex flex-col items-center pb-30 bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/galaxy-circle.png')" }}
    >
      <div className="-mt-10">
        <img src="/hand-blue-logo.jpg" alt="Hand Logo" className="mx-auto mix-blend-lighten w-[462px] h-[462px]" 
        
        />
      </div>
      <div className="-mt-8">
        <div className="w-full ">
          <h1 className="text-[30px] md:text-[38px] lg:text-[50px] font-semibold text-center leading-[115%]">
            Ready to Launch Your
            <br />
            Business Online?
          </h1>
          <div className="text-[#FFFFFFCC] text-lg md:text-xl flex gap-2 justify-center mt-8 items-center uppercase">
            <img src="/power.png" alt="Power Icon" className="h-6 w-6" />
            Our Milestone
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5 md:gap-4 px-4">
          <div
            className="mt-6 px-2 py-3 rounded-lg md:rounded-xl border border-gray-800"
            style={{
              background: "linear-gradient(to right, #131b2b, #111e3b)",
            }}
          >
            <h2 className="text-[16px] md:text-[24px] font-semibold text-center">
              95.6%
            </h2>
            <p className="text-[#FFFFFF99] text-xs md:text-sm text-center mt-1 font-light">
              Client Satisfaction
            </p>
          </div>
          <div
            className="mt-6 bg-[#111f40] px-6 py-3 rounded-lg md:rounded-xl border border-gray-800"
            style={{
              background: "linear-gradient(to bottom, #112145, #111e3d)",
            }}
          >
            <h2 className="text-[18px] md:text-[24px] font-semibold text-center">
              3+
            </h2>
            <p className="text-[#FFFFFF99] text-xs md:text-sm text-center mt-1 font-light">
              Years of Service
            </p>
          </div>
          <div
            className="mt-6 bg-[#111c36] px-6 py-3 rounded-lg md:rounded-xl border border-gray-800"
            style={{
              background: "linear-gradient(to right, #111e3b, #121a2b)",
            }}
          >
            <h2 className="text-[18px] md:text-[24px] font-semibold text-center">
              1,500+
            </h2>
            <p className="text-[#FFFFFF99] text-xs md:text-sm text-center mt-1 font-light">
              Domains Live
            </p>
          </div>
        </div>

        <div className="space-x-5 mt-11 flex justify-center">
          <a href="#"
            className="bg-white text-xs md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full text-[#324351] flex items-center gap-1 md:gap-2 hover:bg-gradient-to-r from-[#1488fc]  to-[#042f4e] transition hover:text-white"
          >
            Get Started Now
            <BsArrowRight className="text-base md:text-lg" />
          </a>
          <a
            href="#"
            className="bg-[#303437] text-xs md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full text-white hover:bg-gradient-to-r from-[#1488fc]  to-[#042f4e] transition hover:text-white"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
