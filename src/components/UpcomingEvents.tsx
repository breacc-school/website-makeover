import { CalendarDays, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Event {
  titleKey: string;
  dateKey: string;
  timeKey: string;
  locationKey: string;
  type: "open-day" | "festa";
  descKey: string;
}

const events: Event[] = [
  {
    titleKey: "festa_junina",
    dateKey: "coming_soon",
    timeKey: "tbc",
    locationKey: "tbc",
    type: "festa",
    descKey: "festa_junina_desc",
  },
];

const typeStyles = {
  "open-day": "bg-primary/10 text-primary border-primary/20",
  festa: "bg-secondary/10 text-secondary border-secondary/20",
};

const UpcomingEvents = () => {
  const { t } = useTranslation();

  const typeBadge = {
    "open-day": t("events.open_day"),
    festa: t("events.party"),
  };

  return (
    <section id="eventos" className="py-10 md:py-16 bg-muted/40">
      <div className="container px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold tracking-wider uppercase text-secondary mb-2">
            {t("events.badge")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground">
            {t("events.title")}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            {t("events.subtitle")}
          </p>
        </div>

        <div className="flex justify-center max-w-md mx-auto">
          {events.map((ev, i) => (
            <div
              key={i}
              className={`rounded-xl border-2 p-6 flex flex-col gap-4 transition-shadow hover:shadow-lg ${typeStyles[ev.type]}`}
            >
              <span className="self-start text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-background">
                {typeBadge[ev.type]}
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground">{t(`events.${ev.titleKey}`)}</h3>
              <p className="text-sm text-muted-foreground flex-1">{t(`events.${ev.descKey}`)}</p>
              <div className="space-y-1.5 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 shrink-0" />
                  <span>{t(`events.${ev.dateKey}`)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>{t(`events.${ev.timeKey}`)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{t(`events.${ev.locationKey}`)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
