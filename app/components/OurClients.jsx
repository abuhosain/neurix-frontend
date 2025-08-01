"use client";
export default function OurClients() {
  const clientsFistRow = [
    {
      name: "Demetria Giles",
      title: "Digital marketer",
      desc: `Playing around with @neurix. I’m back logging key
            thoughts, details and soundbites from episodes, books,
            meetings, articles, etc from the past week. So far, it’s a
            knowledge worker’s dream come true.`,
      logo: "/client-1.png",
    },
    {
      name: "Sean Rose",
      title: "Co-Founder at PhoneStore",
      desc: `Really, really liking @neurix so far. It's just the
            right amount of simple/fast for a personal note taking
            app and does most of the hard work of organizing in
            the background.`,
      logo: "/client-2.png",
    },
    {
      name: "Ryan Delk",
      title: "Digital marketer",
      desc: `Don’t take it from me: @neurix is magic.`,
      logo: "/client-3.png",
    },
  ];

  const clientsSecondRow = [
    {
      name: "Jeremy McPeak",
      title: "@jwmcpeak",
      desc: `I just received an invite to @neurix, and holy crap!
            It is well thought out, and I can see this being my note-
            taking platform going forward. Well done! I'm looking
            forward to seeing how the app progresses.`,
      logo: "/client-4.png",
    },
    {
      name: "Fabrizio Rinaldi",
      title: "e-com store owner",
      desc: `I’m keeping @neurix open *all* the time, and I’m
            using both for simple journaling, and long form writing.
            It’s rare to see a single app work so well for both.`,
      logo: "/client-5.png",
    },
    {
      name: "Jonathan Simcoe",
      title: "@jdsimcoe",
      desc: `All righty. I have to give a massive shout-out to
            @neurix for pioneering @rabby. It is a daily driver for me. The
            speed, focus, and attention to detail (especially perfect
            bits of structured data) is superb.`,
      logo: "/client-6.jpg",
    },
  ];

  
  const sliderCardsOne = [...clientsFistRow, ...clientsFistRow];
  const sliderCardsTwo = [...clientsSecondRow, ...clientsSecondRow];

  return (
    <section className="py-20">
      <div className="text-center mb-12 md:mb-20 p-1.5">
        <h4 className="text-[#D0D5DD] text-xl">Our Happy Clients</h4>
        <h1 className="text-white text-[30px] md:text-[38px] lg:text-[50px]">Trusted by Growing Brands</h1>
      </div>

      <div className="overflow-hidden mt-12 relative">
         <div
        className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
        style={{
          background: "linear-gradient(to right, #0b0c0f 15%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
        style={{
          background: "linear-gradient(to left, #0b0c0f 15%, transparent 100%)",
        }}
      />
        <div className="flex gap-6 animate-client-slider w-max">
          {sliderCardsOne.map((client, idx) => (
            <div
              key={idx}
              className="bg-[#111c24] rounded-2xl py-4 px-6 md:py-5 md:px-8 flex flex-col items-start w-[300px] md:w-[360px] lg:w-[480px] h-[212px]"
            >
              
              <div className="flex gap-2">
                <img
                src={client.logo}
                alt={client.name}
                className="h-11 w-11 rounded-full mb-4 object-contain"
              />
              <div className="text-white">
                <h5 className="text-[#F4F0FF] font-light text-sm md:text-base">{client.name}</h5>
                <p className="text-sm text-[#EFEDFD99]">{client.title}</p>
              </div>
              </div>
              <p className="text-[#EFEDFDB3] text-sm md:text-base pb-2">
                {client.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden mt-6 relative">
         <div
        className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
        style={{
          background: "linear-gradient(to right, #0b0c0f 15%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
        style={{
          background: "linear-gradient(to left, #0b0c0f 15%, transparent 100%)",
        }}
      />
        <div className="flex gap-6 animate-client-slider-reverse w-max">
          {sliderCardsTwo.map((client, idx) => (
            <div
              key={idx}
              className="bg-[#111c24] rounded-2xl py-4 px-6 md:py-5 md:px-8 flex flex-col items-start w-[300px] md:w-[360px] lg:w-[480px] h-[212px]"
            >
              
              <div className="flex gap-2">
                <img
                src={client.logo}
                alt={client.name}
                className="h-11 w-11 rounded-full mb-4 object-contain"
              />
              <div className="text-white">
                <h5 className="text-[#F4F0FF] font-light text-sm md:text-base">{client.name}</h5>
                <p className="text-sm text-[#EFEDFD99]">{client.title}</p>
              </div>
              </div>
              <p className="text-[#EFEDFDB3] text-sm md:text-base pb-2">
                {client.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
