import { BsArrowRight } from "react-icons/bs";


export default function Hero() {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto pt-20 md:pt-40 md:pb-16">
      <div className="text-white p-1 m-3">
        <h4 className="text-[14px] md:text-[20px] text-[#D0D5DD] w-5/6 md:w-full">
          Powerful, Scalable, and Easy-to-Managed Platform
        </h4>
        <h1 className="text-[34px] md:text-[48px] lg:text-[70px] leading-[105%] mt-4 w-5/6 md:w-4/6 lg:w-3/6">
          Reliable Cloud Solution for SaaS & eCommerce
        </h1>
        <p className="text-[16px] md:text-[20px] leading-[140%] font-normal text-[#FFFFFFB3] mt-9 w-5/6 lg:w-3/6">
          Deploy, scale, and grow — without limits — built to power your next
          big product or online store.
        </p>
        <div className="space-x-5 mt-11 flex">
          <a href="" className="bg-white text-xs md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full text-[#324351] flex items-center gap-1 md:gap-2 hover:bg-gradient-to-r from-[#1488fc]  to-[#042f4e] transition hover:text-white">
            Get Started Now
            <BsArrowRight className="text-base md:text-lg"/>
          </a>
          <a href="" className="bg-[#303437] text-xs md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full text-white hover:bg-gradient-to-r from-[#042f4e] to-[#1488fc]   transition hover:text-white">
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
