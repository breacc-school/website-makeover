import { CalendarDays, MapPin, Clock } from "lucide-react";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  type: "open-day" | "festa";
  description: string;
}

const events: Event[] = [
  {
    title: "Festa Junina 2026",
    date: "Em breve",
    time: "A confirmar",
    location: "A confirmar",
    type: "festa",
    description: "Nossa tradicional Festa Junina com comidas típicas, quadrilha e muita diversão!",
  },
];

const typeStyles = {
  "open-day": "bg-primary/10 text-primary border-primary/20",
  festa: "bg-secondary/10 text-secondary border-secondary/20",
};

const typeBadge = {
  "open-day": "Open Day",
  festa: "Festa",
};

const UpcomingEvents = () => (
  <section id="eventos" className="py-10 md:py-16 bg-muted/40">
    <div className="container px-6">
      <div className="text-center mb-12">
        <span className="inline-block text-sm font-bold tracking-wider uppercase text-secondary mb-2">
          Agenda
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground">
          Próximos Eventos
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Fique por dentro dos nossos próximos eventos e venha participar!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {events.map((ev, i) => (
          <div
            key={i}
            className={`rounded-xl border-2 p-6 flex flex-col gap-4 transition-shadow hover:shadow-lg ${typeStyles[ev.type]}`}
          >
            <span className="self-start text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-background">
              {typeBadge[ev.type]}
            </span>
            <h3 className="font-heading text-lg font-bold text-foreground">{ev.title}</h3>
            <p className="text-sm text-muted-foreground flex-1">{ev.description}</p>
            <div className="space-y-1.5 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 shrink-0" />
                <span>{ev.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{ev.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{ev.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingEvents;
