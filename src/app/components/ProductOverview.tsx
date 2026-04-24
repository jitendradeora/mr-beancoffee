import { Mountain, Coffee, Award } from "lucide-react";
import coffeeImage from "../../imports/asegedech-adane-coffee_11.png";

export function ProductOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground font-heading">
            Why Our Coffee is Special
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Hambella coffee, grown in the Guji Zone of southern Ethiopia, is
              known for its exceptional quality and distinctive flavor profiles.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Cultivated at elevations between 1,900 and 2,200 meters, these
              beans offer complex tasting notes including floral, fruity, and
              citrus flavors with bright acidity.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Ethiopia is widely regarded as the birthplace of coffee, and
              Hambella coffee represents some of the finest Arabica available to
              global buyers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-background rounded-lg">
                <Mountain className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl text-primary mb-1 font-heading">
                  1,900-2,200m
                </div>
                <div className="text-sm text-muted-foreground">Elevation</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg">
                <Coffee className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl text-primary mb-1 font-heading">
                  100% Arabica
                </div>
                <div className="text-sm text-muted-foreground">
                  Heirloom Varietals
                </div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl text-primary mb-1 font-heading">
                  Specialty
                </div>
                <div className="text-sm text-muted-foreground">
                  Grade Quality
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={coffeeImage}
              alt="Hambella Coffee"
              className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
