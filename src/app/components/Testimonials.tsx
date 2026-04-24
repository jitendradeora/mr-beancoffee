import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Coffee Roaster, Portland',
    content: 'The Guji beans from Asegedech Adane have exceptional clarity and complexity. Our customers consistently rate them as favorites.',
    rating: 5
  },
  {
    name: 'Marco Rossi',
    role: 'Specialty Coffee Importer, Italy',
    content: 'Outstanding quality and reliability. The natural process beans have incredible fruit notes that make for an unforgettable cup.',
    rating: 5
  },
  {
    name: 'Jennifer Wong',
    role: 'Café Owner, Singapore',
    content: 'We have been sourcing from Asegedech Adane for two years. The consistency and ethical practices make them our trusted partner.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground font-heading">What Our Partners Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted by specialty coffee roasters and importers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl text-primary mb-2 font-heading">100%</div>
            <div className="text-sm text-muted-foreground">Organic</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <div className="text-3xl text-primary mb-2 font-heading">20+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <div className="text-3xl text-primary mb-2 font-heading">50+</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <div className="text-3xl text-primary mb-2 font-heading">500+</div>
            <div className="text-sm text-muted-foreground">Happy Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
}
