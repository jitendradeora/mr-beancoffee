import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getProductById, products } from "../data/products";
import {
  ShoppingCart,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Mountain,
  Sprout,
  Calendar,
  Package,
  CheckCircle,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [numberOfBags, setNumberOfBags] = useState(1);
  const [bagSize, setBagSize] = useState("1KG");
  const [isFavorite, setIsFavorite] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-primary/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              to="/products"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
          {/* Image Gallery */}
          <div>
            <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4 aspect-square">
              <motion.img
                key={currentImageIndex}
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-primary"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-2">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl mb-2 text-foreground font-heading">
                  {product.name}
                </h1>
              </div>
              <div className="flex gap-2 relative">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isFavorite
                      ? "bg-primary text-primary-foreground"
                      : "bg-gray-100 text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <Heart
                    className="w-5 h-5"
                    fill={isFavorite ? "currentColor" : "none"}
                  />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShareOpen(!shareOpen)}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>

                  {/* Social Share Dropdown */}
                  <AnimatePresence>
                    {shareOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        className="absolute top-12 right-0 bg-white shadow-xl rounded-lg p-4 border border-gray-200 z-10 w-56"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium">
                            Share this product
                          </span>
                          <button
                            onClick={() => setShareOpen(false)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={() =>
                              window.open(
                                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                                "_blank",
                              )
                            }
                            className="flex-1 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                          >
                            <Facebook className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() =>
                              window.open(
                                `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(product.name)}`,
                                "_blank",
                              )
                            }
                            className="flex-1 bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center"
                          >
                            <Twitter className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() =>
                              window.open(
                                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                                "_blank",
                              )
                            }
                            className="flex-1 bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
                          >
                            <Linkedin className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl text-primary font-heading">
                ${product.price}
              </span>
              <span className="text-muted-foreground">/kg</span>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-8">
              {product.inStock ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-600">In Stock</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-600">Out of Stock</span>
                </>
              )}
            </div>

            {/* Product Variations */}
            <div className="mb-8 space-y-6">
              <div>
                <label className="block text-sm mb-3">Bag Size</label>
                <select
                  value={bagSize}
                  onChange={(e) => setBagSize(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                >
                  <option value="250GM">250GM</option>
                  <option value="500GM">500GM</option>
                  <option value="1KG">1KG</option>
                  <option value="5KG">5KG</option>
                  <option value="10KG">10KG</option>
                  <option value="25KG">25KG</option>
                  <option value="60KG">60KG</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-3">Number of Bags</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-gray-200 rounded-lg">
                    <button
                      onClick={() =>
                        setNumberOfBags(Math.max(1, numberOfBags - 1))
                      }
                      className="px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={numberOfBags}
                      onChange={(e) =>
                        setNumberOfBags(
                          Math.max(1, parseInt(e.target.value) || 1),
                        )
                      }
                      className="w-24 text-center border-x-2 border-gray-200 py-3 focus:outline-none"
                    />
                    <button
                      onClick={() => setNumberOfBags(numberOfBags + 1)}
                      className="px-4 py-3 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-muted-foreground">
                    Min. order: {product.minOrder}
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-4 mb-12">
              <button
                disabled={!product.inStock}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex-1 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <Link
                to="/#contact"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                Request Product Profile
              </Link>
            </div>

            {/* Cup Profile */}
          </div>
        </div>

        {/* Product Specifications */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl mb-6 font-heading">Product Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Origin</div>
                <div className="text-foreground">{product.origin}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mountain className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Altitude</div>
                <div className="text-foreground">{product.altitude}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sprout className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Process</div>
                <div className="text-foreground">{product.process}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">
                  Harvest Season
                </div>
                <div className="text-foreground">{product.harvestSeason}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Variety</div>
                <div className="text-foreground">{product.variety}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 mt-8 mb-8">
          <h3 className="text-xl mb-4 font-heading">Cup Profile</h3>
          <div className="flex flex-wrap gap-2">
            {product.cupProfile.map((note, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Full Description */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-2xl md:text-3xl mb-6 font-heading">
            About This Coffee
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {product.details}
          </p>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl mb-8 font-heading">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                >
                  <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-foreground">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl text-primary font-heading">
                          ${relatedProduct.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          /kg
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
