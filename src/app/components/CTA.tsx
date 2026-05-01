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
        <h2 className="text-3xl md:text-5xl mb-12 text-white font-heading">
          Send us your email to receive a 15% discount voucher on your first
          order.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all"
          >
            15% Voucher
          </a>
        </div>
      </div>
    </section>
  );
}
