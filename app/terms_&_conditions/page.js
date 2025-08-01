import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TermsAndConditions() {
  return (
    <main>
      <div
        className="bg-cover bg-bottom lg:bg-right bg-no-repeat pb-16 md:pb-26"
        style={{ backgroundImage: "url('/light-bg.jpg')" }}
      >
        <Navbar />
      </div>
      <div className="h-dvh text-white p-6">
        <h1 className="text-5xl">Our Terms and Conditions</h1>
        <p className="w-4/6 mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          doloribus, ab eaque iste assumenda atque quis vel modi, quisquam
          maiores iure aliquam blanditiis sit! Nulla id, quas magni architecto
          sint fuga, ex laudantium vel labore atque animi aliquid cupiditate
          perferendis quis veniam eius. Assumenda provident aliquam corrupti
          ipsum sapiente perspiciatis!
        </p>
      </div>
      <Footer />
    </main>
  );
}
