import { Target, Sprout, Globe2, Users } from 'lucide-react';

const goals = [
  {
    icon: Target,
    title: 'Produce High-Quality Specialty Coffee',
    description: 'We cultivate and export premium-grade Guji coffee that meets international specialty standards, ensuring consistent flavor and excellence.'
  },
  {
    icon: Sprout,
    title: 'Sustainable & Ethical Production',
    description: 'We follow environmentally responsible farming practices and ensure fair working conditions while supporting organic methods.'
  },
  {
    icon: Globe2,
    title: 'Expand Global Market Reach',
    description: 'We aim to build strong partnerships with roasters, importers, and distributors across Europe, North America, Australia, and Asia.'
  },
  {
    icon: Users,
    title: 'Support Farmers & Communities',
    description: 'We empower local farmers through training, fair compensation, and community development initiatives.'
  }
];

export function Commitment() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground font-heading">Our Commitment</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dedicated to excellence, sustainability, and community empowerment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 text-foreground font-heading">{goal.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
