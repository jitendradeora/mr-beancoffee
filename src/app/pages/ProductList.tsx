import { useState } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { products, getProductsByCategory } from '../data/products';
import { Filter, SlidersHorizontal } from 'lucide-react';

const categories = ['All Beans', 'Single Origin', 'Bulk Orders', 'Specialty Beans'];

export function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('All Beans');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFilteredProducts(getProductsByCategory(category));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-primary/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Products</span>
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl text-foreground font-heading">
            Our Coffee Collection
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Explore our full range of premium Ethiopian green coffee beans, 
            sourced directly from our family farms in the highlands.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white text-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg hover:border-primary transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Filter className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or browse all products
            </p>
            <button
              onClick={() => handleCategoryChange('All Beans')}
              className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
