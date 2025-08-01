import Hero from "./Hero";
import LogoSlider from "./LogoSlider";
import Navbar from "./Navbar";

export default function Header() {
  return (
   
      <header
        className="bg-cover bg-center  lg:bg-right bg-no-repeat pb-16 md:pb-26 mix-blend-lighten"
        style={{ backgroundImage: "url('/hero-bg-original.png')" }}
        >
        <main
          className="bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/noise.png')" }}
        >
          <section
            className="bg-cover bg-[position:calc(100%+380px)_top] md:bg-[position:calc(100%+430px)_top] lg:bg-contain lg:bg-[position:calc(100%+400px)_top] bg-no-repeat"
            style={{ backgroundImage: "url('/solar-system.svg')" }}
          >
            <Navbar />
            <Hero />
            <LogoSlider />
          </section>
        </main>
      </header>
    
  );
}


