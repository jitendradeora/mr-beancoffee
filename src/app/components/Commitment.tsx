import { Target, Sprout, Globe2, Users } from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "SDG 1-Zero Poverty",
    description:
      "We cultivate and export premium-grade Guji coffee that meets international specialty standards, ensuring consistent flavor and excellence.",
  },
  {
    icon: Sprout,
    title: "SDG 5-Gender Equality",
    description:
      "We follow environmentally responsible farming practices and ensure fair working conditions while supporting organic methods.",
  },
  {
    icon: Globe2,
    title: "SDG 8-Decent Work",
    description:
      "We aim to build strong partnerships with roasters, importers, and distributors across Europe, North America, Australia, and Asia.",
  },
  {
    icon: Users,
    title: "SDG 9-Industry, Innovation",
    description:
      "We empower local farmers through training, fair compensation, and community development initiatives.",
  },
  {
    icon: Globe2,
    title: "SDG 12-Responsible Consumption",
    description:
      "Developing new industrial innovations for society by selling/donating Shish® green bean roasters that generate crop profiles for buyers.",
  },
  {
    icon: Users,
    title: "SDG 17-Partnering for Goals",
    description:
      "We empower local farmers through training, fair compensation, and community development initiatives.",
  },
];

export function Commitment() {
  return (
    <section className="py-20 custom-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-heading">
            Our Sustainable Development Goal (SDG) targets
          </h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dedicated to excellence, sustainability, and community empowerment
          </p> */}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-6">
                  {/* <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div> */}
                  <div>
                    <h3 className="text-xl text-foreground font-heading">
                      {goal.title}
                    </h3>
                    {/* <p className="text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p> */}
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
