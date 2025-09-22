import { Button } from "@/components/ui/button";
import honeyBun from "@/assets/honey-bun.png";
import melonBun from "@/assets/melon-bun.png";

const TopPicks = () => {
  const products = [
    {
      id: 1,
      name: "Honey Bun",
      description: "Fluffy bun with sweet honey glaze",
      price: "$4.99",
      image: honeyBun,
      bgColor: "bg-primary/10"
    },
    {
      id: 2,
      name: "Melon Buns",
      description: "Light bun with smooth melon filling",
      price: "$5.50",
      image: melonBun,
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section className="px-6 mb-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-retro text-4xl text-foreground mb-8">
          TOP-5<br />
          PICKS
        </h2>
        
        <div className="space-y-4">
          {products.map((product) => (
            <div 
              key={product.id}
              className="flex items-center gap-4 p-4 bg-card rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
            >
              {/* Product Image */}
              <div className={`w-16 h-16 ${product.bgColor} rounded-full flex items-center justify-center p-2`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="font-bold text-foreground text-lg">
                  {product.price}
                </p>
                <p className="text-muted-foreground text-xs">each</p>
              </div>

              {/* Add Button */}
              <Button variant="add">
                +
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;