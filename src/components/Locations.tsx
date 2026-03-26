import { MapPin, Clock, ExternalLink } from "lucide-react";

const locations = [
  {
    name: "Unidade Bournemouth",
    address: "Anglo Continental School, 29-35 Wimborne RD, Bournemouth BH2 6NA",
    schedule: "Sábados, das 10:00 às 12:00",
    facebook: "https://www.facebook.com/breaccbournemouth",
  },
  {
    name: "Unidade Twickenham / Richmond",
    address: "Waldegrave School, Fifth Cross Rd, Twickenham, London TW2 5LH",
    schedule: "Sábados, das 10:30 às 12:30",
    facebook: "https://www.facebook.com/breaccbook",
  },
];

const Locations = () => {
  return (
    <section id="unidades" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossas Unidades
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">{loc.name}</h3>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-muted-foreground text-sm">{loc.address}</p>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <p className="text-muted-foreground text-sm">{loc.schedule}</p>
              </div>
              <a
                href={loc.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" /> Facebook
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
