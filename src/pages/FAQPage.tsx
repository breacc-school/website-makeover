import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
