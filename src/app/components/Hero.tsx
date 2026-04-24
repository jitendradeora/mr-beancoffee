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
                Premium Ethiopian Green Coffee Beans
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed"
            >
              Sustainably sourced from the rich highlands of Hambella, Guji – delivering exceptional quality and unique flavor profiles.
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
                href="#contact"
                className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-foreground transition-all text-center"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}