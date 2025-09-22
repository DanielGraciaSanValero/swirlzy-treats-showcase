import { Star } from "lucide-react";
import heroCookies from "@/assets/hero-cookies.png";

const HeroSection = () => {
  return (
    <section className="relative gradient-hero rounded-3xl p-8 mx-6 mb-8 overflow-hidden shadow-soft">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="font-retro text-6xl lg:text-8xl text-white leading-none">
              SWEEE
              <br />
              EET!
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-white/90 text-lg">
            Freshly crafted treats, made just for you
          </p>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-white font-semibold">4.8</span>
            </div>
            <span className="text-white/70">since 1985</span>
          </div>

          {/* Product Icons */}
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              🍪
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              🧁
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              🍰
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image with Price Badge */}
        <div className="relative flex items-center justify-center">
          <img 
            src={heroCookies} 
            alt="Stack of delicious cookies" 
            className="w-full max-w-md h-auto animation-float"
          />
          
          {/* Price Badge positioned in bottom right of image, slightly rotated */}
          <div className="absolute bottom-8 right-8 transform rotate-12">
            <div className="bg-green-badge text-green-badge-foreground rounded-full px-6 py-3 font-bold text-lg shadow-lg">
              FROM $12
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"></div>
    </section>
  );
};

export default HeroSection;