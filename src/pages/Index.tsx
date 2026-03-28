import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import About from "@/components/About";
import LearningStages from "@/components/LearningStages";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!sectionId) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const isMobile = window.innerWidth < 768;
        el.scrollIntoView({ behavior: isMobile ? "auto" : "smooth" });
      }
      navigate(location.pathname, { replace: true, state: null });
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.state, navigate]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <UpcomingEvents />
      <LearningStages />
      <Locations />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
