import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LearningStages from "@/components/LearningStages";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <LearningStages />
      <Locations />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
