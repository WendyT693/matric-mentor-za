import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UniversityList from "@/components/UniversityList";
import DeadlineTimeline from "@/components/DeadlineTimeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <UniversityList />
      <DeadlineTimeline />
      <Footer />
    </div>
  );
};

export default Index;
