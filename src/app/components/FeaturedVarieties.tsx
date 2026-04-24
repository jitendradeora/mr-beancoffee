import { Coffee, Sparkles } from 'lucide-react';

const varieties = [
  {
    name: 'Deri Kidame',
    description: 'Fruity notes, floral aroma, tea-like body, and crisp acidity with a clean finish.'
  },
  {
    name: 'Buku Peaberry',
    description: 'Unique single-bean structure offering rich and concentrated flavor.',
    special: true
  },
  {
    name: 'Dabaye',
    description: 'Complex profile with strong floral and fruit notes and a refreshing finish.'
  },
  {
    name: 'Bulye',
    description: 'Berry and wine-like characteristics for vibrant flavor lovers.'
  },
  {
    name: 'Bantineka',
    description: 'Sweet, floral, and delicate cup profile.'
  },
  {
    name: 'Geshe Bomite',
    description: 'Bold, complex flavors with spice, fruit, and subtle sweetness.'
  }
];

export function FeaturedVarieties() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground font-heading">Signature Coffee Profiles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover the unique flavor characteristics of our premium Hambella coffee varieties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {varieties.map((variety, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all ${
                variety.special ? 'bg-primary/5 border-2 border-primary' : 'bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  variety.special ? 'bg-primary' : 'bg-primary/10'
                }`}>
                  {variety.special ? (
                    <Sparkles className="w-6 h-6 text-white" />
                  ) : (
                    <Coffee className="w-6 h-6 text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-foreground font-heading">
                    {variety.name}
                    {variety.special && (
                      <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                        Special
                      </span>
                    )}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {variety.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
