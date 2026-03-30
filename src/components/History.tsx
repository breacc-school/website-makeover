import { BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

const History = () => {
  const { t } = useTranslation();

  return (
    <section id="historia" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            {t("history.badge")}
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("history.title")}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>{t("history.p1")}</p>
          <p>{t("history.p2")}</p>
          <p>
            {t("history.p3").split("POLH")[0]}
            <strong className="text-primary">POLH</strong>
            {t("history.p3").split("POLH")[1] ?? ""}
          </p>
          <p className="italic text-foreground/80 border-l-4 border-primary pl-6">
            "{t("history.quote")}"
          </p>
          <p>{t("history.p5")}</p>
        </div>

      </div>
    </section>
  );
};

export default History;
