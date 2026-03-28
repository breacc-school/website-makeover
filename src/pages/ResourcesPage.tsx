import Navbar from "@/components/Navbar";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

const ResourcesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <Resources />
    </div>
    <Footer />
  </div>
);

export default ResourcesPage;
