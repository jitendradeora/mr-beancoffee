import { ShoppingCart, Search, Menu, User, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../imports/Logo_1.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount] = useState(2);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const cartItems = [
    { id: 1, name: 'Guji Natural Green Coffee Beans', price: 25.00, quantity: 1, image: '/placeholder-coffee.jpg' },
    { id: 2, name: 'Ethiopian Yirgacheffe Beans', price: 28.00, quantity: 2, image: '/placeholder-coffee.jpg' }
  ];

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Asegedech Adane Coffee" className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            {isHome ? (
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About Us</a>
            ) : (
              <Link to="/#about" className="text-foreground hover:text-primary transition-colors">About Us</Link>
            )}
            {isHome ? (
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
            ) : (
              <Link to="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
            )}
            {isHome ? (
              <a href="#coffee" className="text-foreground hover:text-primary transition-colors">Our Coffee</a>
            ) : (
              <Link to="/#coffee" className="text-foreground hover:text-primary transition-colors">Our Coffee</Link>
            )}
            {isHome ? (
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            ) : (
              <Link to="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6 relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Search Dropdown */}
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-12 right-0 w-80 bg-white shadow-xl rounded-lg p-4 border border-gray-200"
                >
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      autoFocus
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <Link to="/login" className="text-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
            </Link>

            <div className="relative">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative text-foreground hover:text-primary transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              <AnimatePresence>
                {cartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-12 right-0 w-96 bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-heading text-lg">Shopping Cart ({cartCount})</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {cartItems.map((item) => (
                        <div key={item.id} className="p-4 border-b border-gray-100 flex gap-4">
                          <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0"></div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium mb-1">{item.name}</h4>
                            <p className="text-xs text-muted-foreground mb-2">Qty: {item.quantity}</p>
                            <p className="text-primary font-medium">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-gray-50">
                      <div className="flex justify-between mb-4">
                        <span className="font-medium">Total:</span>
                        <span className="text-primary font-heading text-lg">${cartTotal.toFixed(2)}</span>
                      </div>
                      <Link
                        to="/checkout"
                        className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Checkout
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/products"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 md:hidden shadow-2xl overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src={logo} alt="Asegedech Adane Coffee" className="h-12 w-auto" />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col p-6 space-y-6">
                <Link
                  to="/"
                  className="text-foreground hover:text-primary transition-colors text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                {isHome ? (
                  <a
                    href="#about"
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </a>
                ) : (
                  <Link
                    to="/#about"
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                )}
                {isHome ? (
                  <a
                    href="#products"
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Products
                  </a>
                ) : (
                  <Link
                    to="/products"
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                )}
                {isHome ? (
                  <a
                    href="#coffee"
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Coffee
                  </a>
                ) : (
                  <Link
                    to="/#coffee"
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Coffee
                  </Link>
                )}
                {isHome ? (
                  <a
                    href="#contact"
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                ) : (
                  <Link
                    to="/#contact"
                    className="text-foreground hover:text-primary transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                )}

                <div className="flex items-center space-x-6 pt-6 border-t border-border">
                  <button className="text-foreground hover:text-primary transition-colors">
                    <Search className="w-6 h-6" />
                  </button>
                  <Link to="/login" className="text-foreground hover:text-primary transition-colors">
                    <User className="w-6 h-6" />
                  </Link>
                  <button className="relative text-foreground hover:text-primary transition-colors">
                    <ShoppingCart className="w-6 h-6" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>

                <Link
                  to="/products"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors text-center mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop Now
                </Link>
              </nav>

              {/* Social Media Links */}
              <div className="p-6 border-t border-border mt-auto">
                <p className="text-sm text-muted-foreground mb-4">Follow Us</p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}