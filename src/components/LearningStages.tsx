import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const groups = [
  { key: "jardim", emoji: "🌱", color: "bg-primary/10" },
  { key: "cante", emoji: "🎵", color: "bg-secondary/30" },
  { key: "pantanal", emoji: "🐊", color: "bg-accent/10" },
  { key: "sertao", emoji: "🌵", color: "bg-primary/10" },
  { key: "amazonia", emoji: "🌿", color: "bg-secondary/30" },
  { key: "cerrado", emoji: "🌾", color: "bg-accent/10" },
  { key: "gcse", emoji: "📚", color: "bg-primary/10" },
];

const LearningStages = () => {
  const { t } = useTranslation();

  return (
    <section id="grupos" className="py-24 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("groups.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("groups.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <Accordion key={g.key} type="single" collapsible>
              <AccordionItem
                value={g.key}
                className={`${g.color} rounded-xl border border-border hover:shadow-lg transition-all duration-300`}
              >
                <AccordionTrigger className="px-8 pt-8 pb-4 hover:no-underline">
                  <div className="text-left">
                    <span className="text-5xl mb-4 block">{g.emoji}</span>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                      {t(`groups.${g.key}_name`)}
                    </h3>
                    <p className="text-muted-foreground font-semibold">{t(`groups.${g.key}_age`)}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <p className="text-muted-foreground leading-relaxed">{t(`groups.${g.key}_desc`)}</p>
                  <a
                    href="mailto:info@breacc.com"
                    className="inline-flex items-center mt-4 text-sm font-bold text-primary hover:underline"
                  >
                    {t("groups.contact")}
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningStages;
