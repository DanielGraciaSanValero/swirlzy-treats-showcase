import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SidebarCards from "@/components/SidebarCards";
import TopPicks from "@/components/TopPicks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <HeroSection />
            <TopPicks />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 p-6">
            <SidebarCards />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
