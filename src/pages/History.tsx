import Navbar from "@/components/Navbar";
import History from "@/components/History";
import Footer from "@/components/Footer";

const HistoryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <History />
      </div>
      <Footer />
    </div>
  );
};

export default HistoryPage;
