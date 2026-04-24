import { ProductCard } from "./ProductCard";
import { getFeaturedProducts } from "../data/products";
import { Link } from "react-router";

const products = getFeaturedProducts();

export function Products() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground font-heading">
            Our Premium Specialty Coffee
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our carefully curated collection of Ethiopian green coffee
            beans, each with its unique flavor profile and story.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
            All Beans
          </button>
          <button className="px-6 py-2 bg-white text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
            Single Origin
          </button>
          <button className="px-6 py-2 bg-white text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
            Bulk Orders
          </button>
          <button className="px-6 py-2 bg-white text-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
            Specialty Beans
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
