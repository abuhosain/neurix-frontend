export default function HowItWorks() {
  return (
    <section className="w-10/12 mx-auto">
      <div className="text-center pb-36 p-1.5">
        <h4 className="text-[#D0D5DD] text-xl">How It Works</h4>
        <h1 className="text-white text-[30px] md:text-[38px] lg:text-[50px]">
          Get Online in Just 3 Easy Steps
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div
          className="text-center rounded-2xl px-8 py-12 mb-12 relative"
          style={{
            background: "linear-gradient(to top, #0d0e0f, #0c171f)",
            borderLeft: "2px solid #132129",
            borderRight: "2px solid #132129",
            borderBottom: "2px solid #132129",
            borderTop: "none",
            borderRadius: "20px",
          }}
        >
          <div className="flex justify-center relative -top-26 md:-top-28 lg:-top-30">
            <img
              className="w-[50%] md:w-[40%] lg:w-[35%]"
              src="/icon-1.png"
              alt=""
            />
          </div>
          <h2 className="text-3xl text-[#E2E2E2] mb-5 -mt-12">
            Search Your Domain
          </h2>
          <p className="text-lg text-[#99AAB6] w-5/6 mx-auto">
            Enter your desired domain name in our search tool to check real-time
            availability across popular extensions like .com, .net, .org, and
            more.
          </p>
        </div>
        <div
          className="text-center rounded-2xl px-8 py-12 mb-12 relative"
          style={{
            background: "linear-gradient(to top, #0d0e0f, #0c171f)",
            borderLeft: "2px solid #132129",
            borderRight: "2px solid #132129",
            borderBottom: "2px solid #132129",
            borderTop: "none",
            borderRadius: "20px",
          }}
        >
          <div className="flex justify-center relative -top-26 md:-top-28 lg:-top-30">
            <img
              className="w-[50%] md:w-[40%] lg:w-[35%]"
              src="/icon-2.png"
              alt=""
            />
          </div>
          <h2 className="text-3xl text-[#E2E2E2] mb-5 -mt-12">
            Register Instantly
          </h2>
          <p className="text-lg text-[#99AAB6] w-5/6 mx-auto">
            Once you find the perfect name, complete your registration in
            minutes with transparent pricing and no hidden fees.
          </p>
        </div>
        <div
          className="text-center rounded-2xl px-8 py-12 mb-12 relative"
          style={{
            background: "linear-gradient(to top, #0d0e0f, #0c171f)",
            borderLeft: "2px solid #132129",
            borderRight: "2px solid #132129",
            borderBottom: "2px solid #132129",
            borderTop: "none",
            borderRadius: "20px",
          }}
        >
          <div className="flex justify-center relative -top-26 md:-top-28 lg:-top-30">
            <img
              className="w-[50%] md:w-[40%] lg:w-[35%]"
              src="/icon-3.png"
              alt=""
            />
          </div>
          <h2 className="text-3xl text-[#E2E2E2] mb-5 -mt-12">
            Manage & Launch
          </h2>
          <p className="text-lg text-[#99AAB6] w-5/6 mx-auto">
            Use our intuitive dashboard to manage DNS, set up forwarding, enable
            WHOIS protection, or connect to your hosting—anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
}
