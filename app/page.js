import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import OurClients from "./components/OurClients";
import OurMilestone from "./components/OurMilestone";
import Services from "./components/Services";
import WhyNeurix from "./components/WhyNeurix";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <WhyNeurix/>
      <OurClients/>
      <HowItWorks/>
      <FAQSection/>
      <OurMilestone/>
      <Footer/>
    </>
  );
}
