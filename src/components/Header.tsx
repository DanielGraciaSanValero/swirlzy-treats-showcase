import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-background/95 backdrop-blur-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold text-foreground">SWIRLZY</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Life & News</a>
          <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
          <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Store</a>
          <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Recipes</a>
        </div>

        {/* Cart Button */}
        <div className="relative">
          <Button variant="cart" size="lg" className="gap-2">
            <ShoppingCart className="w-5 h-5" />
            CART
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;