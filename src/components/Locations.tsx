import { MapPin, Clock, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const locations = [
  {
    key: "bournemouth",
    address: "Anglo Continental School, 29-35 Wimborne RD, Bournemouth BH2 6NA",
    socials: [
      { url: "https://www.facebook.com/breaccbournemouth", label: "Facebook · breaccobournemouth" },
      { url: "https://www.instagram.com/breaccbournemouth/", label: "Instagram · @BREACCBournemouth" },
    ],
  },
  {
    key: "twickenham",
    address: "Waldegrave School, Fifth Cross Rd, Twickenham, London TW2 5LH",
    socials: [
      { url: "https://www.facebook.com/breaccschool", label: "Facebook · BREACCSCHOOL" },
      { url: "https://www.instagram.com/breaccschool/", label: "Instagram · @breaccschool" },
    ],
  },
];

const Locations = () => {
  const { t } = useTranslation();

  return (
    <section id="unidades" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("locations.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.key}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">{t(`locations.${loc.key}_name`)}</h3>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-muted-foreground text-sm">{loc.address}</p>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <p className="text-muted-foreground text-sm">{t(`locations.${loc.key}_schedule`)}</p>
              </div>
              <div className="flex flex-col gap-2">
                {loc.socials.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" /> {s.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
