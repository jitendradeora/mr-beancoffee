import { motion } from 'motion/react';
import { Link } from 'react-router';
import heroImage from '../../imports/asegedech-adane-coffee_1.jpg';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-end bg-background overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ethiopian Coffee Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content - Wrapped in container and aligned to bottom-left */}
      <div className="relative w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-5 text-white font-heading leading-tight">
                Ethiopian Specialty Green Coffee Beans
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed"
            >
              Sustainably sourced, delivering exceptional quality and unique flavor profiles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/products"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-center"
              >
                Explore Beans
              </Link>
              <a
                href="https://mr-bean.coffee/contact/"
                className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-foreground transition-all text-center"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      
    </section>
  );
}