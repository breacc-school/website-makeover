import { CalendarDays, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLangPath } from "@/lib/i18n-routing";

interface Event {
  titleKey: string;
  dateKey: string;
  timeKey: string;
  locationKey: string;
  descriptionKey: string;
  type: "open-day" | "festa";
  startDate: string;
  endDate: string;
  venueName: string;
  street: string;
  city: string;
  postal: string;
}

const events: Event[] = [
  {
    titleKey: "festa_junina_bh",
    dateKey: "fj_bh_date",
    timeKey: "fj_time",
    locationKey: "fj_bh_address",
    descriptionKey: "fj_description",
    type: "festa",
    startDate: "2026-06-28T12:00:00+01:00",
    endDate: "2026-06-28T17:00:00+01:00",
    venueName: "Anglo Continental School",
    street: "29-35 Wimborne Rd",
    city: "Bournemouth",
    postal: "BH2 6NA",
  },
  {
    titleKey: "festa_junina_tw",
    dateKey: "fj_tw_date",
    timeKey: "fj_time",
    locationKey: "fj_tw_address",
    descriptionKey: "fj_description",
    type: "festa",
    startDate: "2026-07-04T12:00:00+01:00",
    endDate: "2026-07-04T17:00:00+01:00",
    venueName: "Waldegrave School",
    street: "Fifth Cross Rd, Twickenham",
    city: "London",
    postal: "TW2 5LH",
  },
];

const typeStyles = {
  "open-day": "bg-primary/10 text-primary border-primary/20",
  festa: "bg-secondary/10 text-secondary border-secondary/20",
};

const UpcomingEvents = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const faqPath = useLangPath("/faq");

  const typeBadge = {
    "open-day": t("events.open_day"),
    festa: t("events.party"),
  };

  const eventJsonLd = events.map((ev) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: t(`events.${ev.titleKey}`),
    description: t(`events.${ev.descriptionKey}`),
    image: ["https://breacc.org.uk/og-image.png"],
    startDate: ev.startDate,
    endDate: ev.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: ev.venueName,
      address: {
        "@type": "PostalAddress",
        streetAddress: ev.street,
        addressLocality: ev.city,
        postalCode: ev.postal,
        addressCountry: "GB",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "BREACC — Brazilian Educational and Cultural Centre",
      url: "https://breacc.org.uk",
    },
    performer: {
      "@type": "Organization",
      name: "BREACC — Brazilian Educational and Cultural Centre",
      url: "https://breacc.org.uk",
    },
    offers: {
      "@type": "Offer",
      url: "https://breacc.org.uk/",
      availability: "https://schema.org/SoldOut",
      price: "0",
      priceCurrency: "GBP",
      validFrom: "2026-01-01T00:00:00+00:00",
    },
  }));

  return (
    <section id="eventos" className="py-10 md:py-16 bg-muted/40">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(eventJsonLd)}</script>
      </Helmet>
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
          <a
            href={faqPath}
            onClick={(e) => {
              e.preventDefault();
              navigate(faqPath, { state: { openFaq: 14 } });
            }}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:brightness-110 transition-all"
          >
            <CalendarDays className="w-5 h-5" />
            {t("faq.calendars_cta")}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {events.map((ev, i) => (
            <div
              key={i}
              className={`rounded-xl border-2 p-6 flex flex-col gap-4 transition-shadow hover:shadow-lg ${typeStyles[ev.type]}`}
            >
              <span className="self-start text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-background">
                {typeBadge[ev.type]}
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground">{t(`events.${ev.titleKey}`)}</h3>
              <div className="space-y-1.5 text-sm text-foreground/70 flex-1">
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
              <div className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-muted text-muted-foreground font-bold text-base border border-border">
                <CheckCircle2 className="w-5 h-5" />
                {t("events.event_passed")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
