import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router";
import logo from "../../imports/footer-logo.png";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="bg-theme-light-gray text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Mr. Bean Coffee</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Premium Ethiopian green coffee beans, ethically sourced from the
              highlands of Guji. We are a team of coffee enthusiasts who are
              passionate about coffee.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors bg-primary text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors bg-primary text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors bg-primary text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-foreground font-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-6 text-foreground font-heading">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Single Origin
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Specialty Beans
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Organic Coffee
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-foreground font-heading">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Mr. Bean Coffee Ltd. 275 New North Road, Islington, Suite 5236
                  London N1 7AA, U.K.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <a
                  href="tel:+447831576686"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  +44 (0)783-157-6686
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@mr-bean.coffee"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors break-all"
                >
                  info@mr-bean.coffee
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white text-foreground border-t border-border">
        <div className="max-w-7xl mx-auto py-4">
          <div className="border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm text-center md:text-left">
                © 2026 Mr. Bean Coffee. All Rights Reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Move to top"
                >
                  <ChevronUp className="w-4 h-4" aria-hidden />
                  Move to top
                </button>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
