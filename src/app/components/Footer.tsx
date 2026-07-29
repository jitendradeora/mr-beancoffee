import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router";
import logo from "../../imports/footer-logo.png";
import worldcoffeeresearchLogo from "../../imports/worldcoffeeresearch-logo.png";
import centercirculareconomyincoffeelogo from "../../imports/centercirculareconomyincoffeelogo.png";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="bg-theme-light-gray text-foreground bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <h3 className="text-1xl font-bold mb-4">Company Information</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              U.K. company #14789250 <br /><br />
              Mr. Bean Coffee is U.K. registered trade mark UK00003874646<br /><br />
              Shish® is a globally registered trade mark<br />
            </p>
          </div>
      {/* Our Partners */}
      <div className="lg:col-span-4">
           <h3 className="text-1xl font-bold mb-4">Our Partners</h3>
           <p>Mr. Bean Coffee is a proud active member of the following organisations:</p><br />
           <ul className="space-y-3">
            <li>
              <a href="https://worldcoffeeresearch.org/" className="text-muted-foreground hover:text-primary transition-colors">
               World Coffee Research (Seed Member)
              </a>
            </li>
            <li>
              <a href="https://www.circulareconomyincoffee.org/" className="text-muted-foreground hover:text-primary transition-colors">
                Center for Circular Economy in Coffee
              </a>
            </li>
            <li>
              <a href="https://www.intracen.org/coffee-guide-resource-hub" className="text-muted-foreground hover:text-primary transition-colors">
                International Trade Centre
              </a>
            </li>
           </ul>
            <div className="flex space-x-3 mt-4 justify-start items-center">
              <img src={worldcoffeeresearchLogo} alt="Mr. Bean Coffee" className="w-auto h-10 object-contain" />
              <img src={centercirculareconomyincoffeelogo} alt="Mr. Bean Coffee" className="w-auto h-10 object-contain" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">       
             <h3 className="text-1xl font-bold mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="https://mr-bean.coffee/investors/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Investors
                </Link>
              </li>
              <li>
                <a
                  href="https://mr-bean.coffee/resources/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                 Resources
                </a>
              </li>
              <li>
                <a
                  href="https://mr-bean.coffee/shish-home-office-cube/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Shish® Home & Office Cube Roaster
                </a>
              </li>
              <li>
                <a
                  href="https://mr-bean.coffee/shish-branded-bubble/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                 Shish® Branded Bubble Roaster
                </a>
              </li>
              <li>
                <a
                  href="https://mr-bean.coffee/shish-cafe-stakrr/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                Shish® Café Stakrr Roaster
                </a>
              </li>
              <li>
                <a
                  href="https://mr-bean.coffee/shish-farmer-glamping/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                Shish® Farmer, Glamping Roaster
                </a>
              </li>
              <li>
                <a
                  href="https://mr-bean.coffee/shish-lab-sample/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                Shish® Home/Lab Sample Roaster
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-1xl font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                
                
                 <p className="text-muted-foreground text-sm leading-relaxed font-bold">Mr. Bean Coffee Ltd.<br />
275 New North Road<br />
Islington, Suite 5236<br />
London N1 7AA, UK</p>
                 
              </li>
              <li className="flex items-start gap-3">
                 
                <a
                  href="tel:+447831576686"
                  className="text-muted-foreground text-lg leading-relaxed font-bold hover:text-primary transition-colors"
                >
                  +44 (0)783-157-6686
                </a>
              </li>
              <li className="flex items-start gap-3">
                 
                <a
                  href="mailto:info@mr-bean.coffee"
                  className="text-muted-foreground text-md underline hover:text-primary transition-colors break-all"
                >
                  info@mr-bean.coffee
                </a>
              </li>
            </ul>
            <div className="flex space-x-2 mt-4">
              <a
                href="https://www.facebook.com/shish.roasters"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary transition-colors bg-primary text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/shish.roasters/"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary transition-colors bg-primary text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Mr-Bean.Coffee"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary transition-colors bg-primary text-white"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mr-bean-coffee-roasters"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary transition-colors bg-primary text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white text-foreground border-t border-border">
        <div className="max-w-7xl mx-auto py-4">
          <div className="border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p className="text-muted-foreground text-sm text-center md:text-center">
               © Copyright 2026 Mr. Bean Coffee Ltd. All Rights Reserved. <a
                  href="https://mr-bean.coffee/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors underline"
                >
                  Privacy Policy
                </a>
              </p>
               
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
