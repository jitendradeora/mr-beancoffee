import { ArrowRight, Mail } from "lucide-react";
import ctaImage from "../../imports/asegedech-adane-coffee_9.jpg";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaImage}
          alt="Coffee beans"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 to-foreground/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl mb-6 text-white font-heading">
          Ready to Experience Ethiopian Excellence?
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Partner with us for premium green coffee beans that will elevate your
          roasting business. Contact us today for samples and pricing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all"
          >
            Browse Products
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl text-primary mb-2 font-heading">100%</div>
            <div className="text-sm text-gray-300">Ethiopian Origin</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-primary mb-2 font-heading">24/7</div>
            <div className="text-sm text-gray-300">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-primary mb-2 font-heading">ISO</div>
            <div className="text-sm text-gray-300">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-primary mb-2 font-heading">Fair</div>
            <div className="text-sm text-gray-300">Trade Prices</div>
          </div>
        </div>
      </div>
    </section>
  );
}
