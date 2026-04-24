import { MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Region {
  name: string;
  imageUrl: string;
}

const regions: Region[] = [
  {
    name: "Buku",
    imageUrl:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=100&h=100&fit=crop",
  },
  {
    name: "Dabaye",
    imageUrl:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&h=100&fit=crop",
  },
  {
    name: "Dakbor",
    imageUrl:
      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?w=100&h=100&fit=crop",
  },
  {
    name: "Alaka",
    imageUrl:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=100&h=100&fit=crop",
  },
  {
    name: "Bantineka",
    imageUrl:
      "https://images.unsplash.com/photo-1495556650867-99590cea3657?w=100&h=100&fit=crop",
  },
  {
    name: "Kojowa",
    imageUrl:
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=100&h=100&fit=crop",
  },
  {
    name: "Deri Kidame",
    imageUrl:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=100&h=100&fit=crop",
  },
  {
    name: "Haro Sorsa",
    imageUrl:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=100&h=100&fit=crop",
  },
  {
    name: "Bulye",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
  },
  {
    name: "Geshe Bomite",
    imageUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=100&h=100&fit=crop",
  },
  {
    name: "Wamena",
    imageUrl:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=100&h=100&fit=crop",
  },
];

export function CoffeeRegions() {
  return (
    <section id="coffee" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground font-heading">
            Our Coffee Origins
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We source our premium coffee from multiple regions within Hambella,
            each contributing unique characteristics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                  <ImageWithFallback
                    src={region.imageUrl}
                    alt={region.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-foreground font-medium text-sm">
                    {region.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
