import { BsArrowRight } from "react-icons/bs";

export default function WhyNeurix() {
  return (
    <section className="text-white w-10/12 mx-auto pt-20 pb-5 flex flex-col-reverse md:flex-row items-center justify-between">
      <div>
        <h4 className="text-[#D0D5DD] text-lg md:text-xl">Why Neurix?</h4>

        <div className="flex items-center mb-4 md:mb-6">
          <h1 className="text-xl -mt-2 md:text-xl lg:text-[40px] lg:-mt-4">
            Trusted by
          </h1>
          <img className="w-[55%] ml-2" src="/why-neurix-frame.png" alt="" />
        </div>

        <p className="text-[#FFFFFFB3] text-lg md:text-xl mb-6 lg:mb-10">
          We combine fast, reliable, and secure service so you can focus on
          growing your business—without any hassles.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-2 md:gap-3 text-[#FFFFFFCC]">
            <img src="/nike.png" alt="" className="h-5 w-5" /> Reliable Service
          </li>
          <li className="flex items-center gap-2 md:gap-3 text-[#FFFFFFCC]">
            <img src="/nike.png" alt="" className="h-5 w-5" /> Easy Management
          </li>
          <li className="flex items-center gap-2 md:gap-3 text-[#FFFFFFCC]">
            <img src="/nike.png" alt="" className="h-5 w-5" /> Fast Setup
          </li>
          <li className="flex items-center gap-2 md:gap-3 text-[#FFFFFFCC]">
            <img src="/nike.png" alt="" className="h-5 w-5" /> Transparent
            Pricing
          </li>
        </ul>
        <a
          href="#"
          className="bg-white text-xs md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full text-[#324351] flex items-center justify-center gap-1 md:gap-2 w-46 md:w-56 mt-10 hover:bg-gradient-to-r from-[#1488fc]  to-[#042f4e] transition hover:text-white"
        >
          Get Started Now
          <BsArrowRight className="text-base md:text-lg" />
        </a>
      </div>
      <div className="w-full lg:w-5/6 mix-blend-lighten">
        <img src="/startup-logo.jpg" alt="" />
      </div>
    </section>
  );
}
