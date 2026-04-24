import { Coffee, Package, Shield, Truck } from 'lucide-react';
import featuresImage from '../../imports/asegedech-adane-coffee_8.jpg';

const features = [
  {
    icon: Coffee,
    title: 'Premium Arabica',
    description: 'Only the finest Arabica beans from high-altitude farms in the Guji region.'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Every batch is tested and certified to meet international quality standards.'
  },
  {
    icon: Package,
    title: 'Expert Processing',
    description: 'Carefully processed using traditional and modern techniques for optimal flavor.'
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    description: 'Fast and secure delivery to roasters and importers worldwide.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground font-heading">
              Why Choose Our Coffee?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              From our family farm to your roastery, we ensure every step meets the highest
              standards of quality, sustainability, and ethical farming practices.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={featuresImage}
              alt="Coffee quality"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
