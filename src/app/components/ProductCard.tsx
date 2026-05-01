import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router";

interface ProductCardProps {
  id?: string;
  name: string;
  image: string;
  description: string;
  price: string;
  origin: string;
}

export function ProductCard({
  id,
  name,
  image,
  description,
  price,
  origin,
}: ProductCardProps) {
  const isContactPricing = price.toLowerCase().includes("contact");

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const CardContent = (
    <>
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
          <span className="text-white text-sm bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
            {origin}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground ml-1">
              {" "}
              B2C & B2B{" "}
            </span>
          </div>
          {!isContactPricing && (
            <button
              onClick={handleAddToCart}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 group-hover:gap-3 text-sm"
            >
              <span>Select Sizes</span>
            </button>
          )}
        </div>
      </div>
    </>
  );

  if (id) {
    return (
      <Link to={`/products/${id}`}>
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
          {CardContent}
        </div>
      </Link>
    );
  }

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {CardContent}
    </div>
  );
}
