import { FaDiscord } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(to bottom, #161f2a, #091116)",
      }}
    >
      <section className="md:w-10/12 mx-auto footer sm:footer-horizontal text-white py-10 px-6 md:px-0 lg:p-10 font-light">
        <aside>
          <img src="/main-logo.png" alt="" className="h-14 w-auto" />
          <p className=" text-[#FFFFFFB8] text-sm lg:text-base mt-3">
            Neurix is the powerful cloud platform <br /> for ambitious eCommerce
            brands and <br /> SaaS startups — fast to deploy, easy <br /> to
            manage, and ready to scale.
          </p>
          <div className="flex gap-2 mt-8 md:mt-10">
            <a href="#"><FaTiktok className="h-10 w-10 bg-[#bac0c425] p-2.5 rounded-full"/></a>
            <a href="#"><FaFacebook className="h-10 w-10 bg-[#1c2328] p-2.5 rounded-full"/></a>
            <a href="#"><AiFillInstagram className="h-10 w-10 bg-[#1c2328] p-2.5 rounded-full"/></a>
            <a href="#"><FaDiscord className="h-10 w-10 bg-[#1c2328] p-2.5 rounded-full"/></a>
          </div>
        </aside>

        <nav>
          <h6 className="text-[#FFFFFFE0] text-lg capitalize font-normal mb-1 md:mb-4">
            Our Products
          </h6>
          <a href="#" className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white">Domains</a>
          <a href="#" className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white">
            Cloud Services
          </a>
        </nav>
        <nav>
          <h6 className="text-[#FFFFFFE0] text-lg capitalize font-normal mb-1 md:mb-4">
            Company
          </h6>
          <a href="#" className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white">About</a>
          <a href="#" className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white">Contact us</a>
          <a href="#" className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white">Why Neurix</a>
          <a href="#" className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white">Blog</a>
        </nav>
        <nav>
          <h6 className="text-[#FFFFFFE0] text-lg capitalize font-normal mb-1 md:mb-4">
            Legal
          </h6>
          <a href="#" className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white">
            Refund Policye
          </a>
          <Link href="/terms_&_conditions" className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white">
            Affiliate Terms
          </Link>
          <a href="#" className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white">
            Cookie Policy
          </a>
        </nav>
        <nav>
          <h6 className=" mb-1 md:mb-4text-[#FFFFFFE0] text-lg capitalize font-normal md:mb-4">
            Office Address
          </h6>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">
            Registered Address: 40 Penarth Road,
            <br />
            Cardiff, Wales, CF10 5GP, United Kingdom.
          </a>
          <a className="link link-hover text-[#FFFFFFB8] text-sm">
            Company Number (UK): 15189998
          </a>
          <a href="#" className="bg-[#FFFFFF29] text-white text-xs md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full flex items-center justify-center gap-1 md:gap-2 w-48 lg:w-70 mt-8 cursor-pointer hover:bg-gradient-to-r from-[#1488fc]  to-[#042f4e] transition hover:text-white">
            <img src="/chat.png" alt="" />
            Chat with Massenger
          </a>
        </nav>
      </section>

      <div className="border-t-1 border-[#171e23]">
        <div className="md:w-10/12 mx-auto text-white flex flex-col lg:flex-row items-center justify-between gap-4 p-6">
          <p className="text-sm text-white font-light">
            <span className="text-[#939EA7]">
              © 2025 Neurix. All rights reserved
            </span>{" "}
            <a href="#">| Powered by Nextup Global Ltd</a>
          </p>
          <div className="w-[50%]">
            <img src="pay-with.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
