import Image from "next/image";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-11/12 md:w-10/12 mx-auto">
      <div className="navbar text-white p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-transparent border-none lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 border-white/90 shadow-lg backdrop-blur-md"
              style={{
                background: "linear-gradient(to bottom, #072045, #081124)",
              }}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <details>
                  <summary>Product</summary>
                  <ul className="px-3 py-1.5 text-[#E2E2E2] bg-[#061d42] w-34 text-xs flex justify-start rounded-md">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <img
                        className="h-6 w-6 bg-[#15274a] rounded-full p-1 ml-1"
                        src="/cloud.png"
                      />
                      Cloud Services
                    </a>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Domain</summary>
                  <ul
                    className="p-3 text-[#E2E2E2] text-xs w-44 flex flex-col items-center gap-2 rounded-md"
                    style={{
                      background:
                        "linear-gradient(to bottom, #071f44, #071227)",
                    }}
                  >
                    <a
                      href="#"
                      className="flex items-center justify-center gap-1.5 cursor-pointer border-b border-[#1a2a4c] pb-2"
                    >
                      <img
                        className="h-6 w-6 bg-[#15274a] rounded-full p-1"
                        src="/domain.png"
                      />
                      Register Domain
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-1.5 cursor-pointer border-b border-[#1a2a4c] pb-2"
                    >
                      <img
                        className="h-6 w-6 bg-[#15274a] rounded-full p-1"
                        src="/switch-horizontal.png"
                      />
                      Transfer Domain
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <img
                        className="h-6 w-6 bg-[#15274a] rounded-full p-1"
                        src="/dollar-circle.png"
                      />
                      Domain Pricing
                    </a>
                  </ul>
                </details>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>

          <a href="#" className="cursor-pointer mr-3">
            <Image
              src="/main-logo.png"
              alt="Hero"
              width={211}
              height={57}
              className="w-full h-auto"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6 text-[#FFFFFFB3] text-[16px] font-light">
            <li>
              <a href="#">Home</a>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 text-[#FFFFFFB3] font-light">
                Product
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-7 left-0 mt-2 hidden group-hover:block z-20">
                <div
                  className="p-2 text-[#E2E2E2] w-44 text-sm flex flex-col items-center gap-2 rounded-md shadow-lg"
                  style={{
                    background: "linear-gradient(to bottom, #071f44, #071227)",
                  }}
                >
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs p-1 w-full rounded-lg dropdown-item"
                  >
                    <img
                      className="h-9 w-9 bg-[#15274a] rounded-full p-2 dropdown-item-img"
                      src="/cloud.png"
                      alt="Cloud Services"
                    />
                    Cloud Services
                  </a>
                </div>
              </div>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 text-[#FFFFFFB3] font-light">
                Domain
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-7 left-0 mt-2 hidden group-hover:block z-20">
                <div
                  className="p-3 text-[#E2E2E2] w-44 text-sm flex flex-col items-center gap-2 rounded-md shadow-lg"
                  style={{
                    background: "linear-gradient(to bottom, #071f44, #071227)",
                  }}
                >
                  <a
                    href="#"
                    className="flex items-center gap-1.5 border-b border-[#1a2a4c] text-xs p-1 w-full rounded-lg dropdown-item"
                  >
                    <img
                      className="h-9 w-9 bg-[#15274a] rounded-full p-2 dropdown-item-img"
                      src="/domain.png"
                      alt="Register Domain"
                    />
                    Register Domain
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 border-b border-[#1a2a4c] text-xs p-1 w-full rounded-lg dropdown-item"
                  >
                    <img
                      className="h-9 w-9 bg-[#15274a] rounded-full p-2 dropdown-item-img"
                      src="/switch-horizontal.png"
                      alt="Transfer Domain"
                    />
                    Transfer Domain
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 border-b border-[#1a2a4c] text-xs p-1 w-full rounded-lg dropdown-item"
                  >
                    <img
                      className="h-9 w-9 bg-[#15274a] rounded-full p-2 dropdown-item-img"
                      src="/dollar-circle.png"
                      alt="Domain Pricing"
                    />
                    Domain Pricing
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="#"
            className="mr-2 md:mr-6 text-xs md:text-base text-[#FFFFFFB3] font-light"
          >
            Support
          </a>
          <a
            href="#"
            className="bg-white text-black flex gap-1 items-center font-normal text-xs md:text-[16px] rounded-full px-2.5 py-1.5  md:px-6 md:py-3 border-0 hover:bg-blue-300 shadow-none cursor-pointer 
            hover:bg-gradient-to-r from-[#1488fc]  to-[#042f4e] transition hover:text-white
            "
          >
            <span className="text-xs md:text-[20px]">
              <FiUser />
            </span>
            Client Area
          </a>
        </div>
      </div>
    </nav>
  );
}
