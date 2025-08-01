import { MdKeyboardArrowRight } from "react-icons/md";

export default function Services() {
  return (
    <div className="pt-28 pb-10">
      <div className="w-10/12 mx-auto ">
        <h4 className="text-[#D0D5DD] text-lg md:text-xl mb-3">Our Services</h4>
        <h2 className="text-white text-3xl md:text-5xl md:w-5/6 lg:w-3/6 leading-[120%]">
          Everything You Need to Launch & Grow Online
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 pt-16">
          <div
            className="text-white rounded-lg p-8 lg:w-[50%] w-full"
            style={{
              background: "linear-gradient(to right, #111c24, #121314)",
              borderLeft: "2px solid #132129",
              borderRight: "2px solid #132129",
              borderBottom: "2px solid #132129",
              borderTop: "none",
              borderRadius: '20px'
            }}
          >
            <img
              className="bg-[#283038] h-16 w-16 rounded-full p-4 mb-8"
              src="/domain.png"
              alt=""
            />
            <h4 className="text-xl md:text-2xl mb-2 md:mb-3">Domains</h4>
            <p className="text-[#99AAB6] text-base md:text-xl mb-3 md:mb-5 lg:mb-7 lg:w-11/12">
              Easy-to-manage domains designed to grow with your business.
            </p>
            <a
              href="#"
              className="flex items-center gap-1 text-sm md:text-base font-light "
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "0.5px",
              }}
            >
              Get Your Domain
              <MdKeyboardArrowRight className="text-base md:text-base" />
            </a>
          </div>
          <div
            className="text-white rounded-lg p-8 lg:w-[50%] w-full"
            style={{
              background: "linear-gradient(to right, #111c24, #121314)",
              borderLeft: "2px solid #132129",
              borderRight: "2px solid #132129",
              borderBottom: "2px solid #132129",
              borderTop: "none",
              borderRadius: '20px'
            }}
          >
            <div className="flex justify-between">
                <img
              className="bg-[#283038] h-16 w-16 rounded-full p-4 mb-8"
              src="/cloud.png"
              alt=""
            />
            <div className="">
                <p className="text-[#0A80D7] bg-[#11222d] px-4 py-1.5 rounded-full text-sm">Coming soon</p>
            </div>
            </div>
            <h4 className="text-xl md:text-2xl mb-2 md:mb-3">Cloud Services</h4>
            <p className="text-[#99AAB6] text-base md:text-xl mb-3 md:mb-5 lg:mb-7">
              Scalable, secure, and lightning-fast <br /> cloud solutions.
            </p>
            <a
              href="#"
              className="flex items-center gap-1 text-sm md:text-base font-light "
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "0.5px",
              }}
            >
              Learn More
              <MdKeyboardArrowRight className="text-base md:text-base" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// #111c24
// #121314
