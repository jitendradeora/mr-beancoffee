import { Leaf, Award, Globe, Users } from 'lucide-react';
import aboutImage1 from '../../imports/asegedech-adane-coffee_6.jpg';
import aboutImage2 from '../../imports/asegedech-adane-coffee_7.jpg';

const features = [
  {
    icon: Leaf,
    title: 'Sustainable Farming',
    description: 'Committed to environmentally friendly practices that preserve our land for future generations.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Every bean meets the highest international standards for specialty coffee excellence.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Exporting authentic Ethiopian coffee to discerning buyers across the world.'
  },
  {
    icon: Users,
    title: 'Family Values',
    description: 'A family-owned business supporting local farmers and their communities.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground font-heading">About Asegedech Adane Coffee</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Rooted in tradition, committed to excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
              Asegedech Adane Coffee Producing and Exporting Company is a family-owned business
              based in Ethiopia, specializing in the cultivation and export of high-quality Guji
              coffee beans from our own farm and affiliated farmers.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
              With deep roots in the renowned coffee-growing region of Hambella Wamena, we produce
              premium, ethically sourced Arabica beans known for their unique fruity and floral flavors.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our mission is to bring the authentic taste of Ethiopian coffee to global markets
              while maintaining the highest standards of sustainability and quality from farm to cup.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={aboutImage1}
              alt="Coffee farming"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src={aboutImage2}
              alt="Coffee processing"
              className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-background hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="mb-2 text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}