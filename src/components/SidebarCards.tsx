import { Button } from "@/components/ui/button";
import chefPortrait from "@/assets/chef-portrait.png";
import berryTart from "@/assets/berry-tart.png";

const SidebarCards = () => {
  return (
    <div className="space-y-6">
      {/* School Card */}
      <div className="gradient-blue rounded-3xl p-6 shadow-soft">
        <div className="space-y-4">
          <h3 className="font-retro text-2xl text-blue-section-foreground">
            SCHOOL
          </h3>
          <p className="text-blue-section-foreground/80">
            Learn to bake deliciously
          </p>
          
          <div className="flex items-center gap-4">
            <img 
              src={chefPortrait} 
              alt="Professional chef" 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-sm text-blue-section-foreground/60 mb-2">JOIN NOW</p>
              <Button variant="explore" size="sm">
                EXPLORE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Everyday Card */}
      <div className="gradient-orange rounded-3xl p-6 shadow-soft relative overflow-hidden">
        <div className="space-y-4">
          <h3 className="font-retro text-2xl text-orange-section-foreground">
            EVERYDAY
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="bg-green-badge text-green-badge-foreground rounded-full px-4 py-2 font-bold text-lg inline-block">
                $10
              </div>
              <p className="text-orange-section-foreground/80 text-sm">
                Freshly baked, delivered daily<br />
                right to your door!
              </p>
            </div>
            
            <div className="relative">
              <img 
                src={berryTart} 
                alt="Berry tart" 
                className="w-24 h-24 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Decorative sparkles */}
        <div className="absolute top-4 right-4 text-white text-xl">✨</div>
        <div className="absolute bottom-6 left-6 text-white text-sm">✨</div>
      </div>
    </div>
  );
};

export default SidebarCards;