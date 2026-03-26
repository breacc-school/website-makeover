import Navbar from "@/components/Navbar";
import Equipe from "@/components/Equipe";
import Footer from "@/components/Footer";

const EquipePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Equipe />
      </div>
      <Footer />
    </div>
  );
};

export default EquipePage;
