import { BookOpen, Users, Heart, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const featureKeys = [
  { icon: BookOpen, titleKey: "teaching_title", descKey: "teaching_desc", iconBg: "bg-primary/10", iconColor: "text-primary" },
  { icon: Users, titleKey: "community_title", descKey: "community_desc", iconBg: "bg-accent/10", iconColor: "text-accent" },
  { icon: Heart, titleKey: "culture_title", descKey: "culture_desc", link: "#/galeria", iconBg: "bg-secondary/20", iconColor: "text-secondary-foreground" },
  { icon: Globe, titleKey: "identity_title", descKey: "identity_desc", iconBg: "bg-primary/10", iconColor: "text-primary" },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("about.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureKeys.map((f) => (
            <div
              key={f.titleKey}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-lg ${f.iconBg} flex items-center justify-center mb-5`}>
                <f.icon className={`w-7 h-7 ${f.iconColor}`} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{t(`about.${f.titleKey}`)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(`about.${f.descKey}`)}</p>
              {f.link && (
                <a href={f.link} className="inline-block mt-3 text-sm font-bold text-primary hover:underline">
                  {t("about.view_gallery")}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
