import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import History from "@/components/History";
import LearningStages from "@/components/LearningStages";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <History />
      <LearningStages />
      <Locations />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
