import { useState } from "react";
import { GraduationCap, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import katiaPhoto from "@/assets/equipe/katia.jpeg";
import glaysonPhoto from "@/assets/equipe/glayson.jpeg";
import catiaPhoto from "@/assets/equipe/catia.png";
import michelePhoto from "@/assets/equipe/michele.jpeg";
import ritaPhoto from "@/assets/equipe/rita.jpg";

const committeeData = [
  { key: "katia", name: "Katia Fonseca", photo: katiaPhoto },
  { key: "glayson", name: "Glayson", photo: glaysonPhoto },
  { key: "aracele", name: "Aracele Danize De Luca", photo: null },
  { key: "geovanna", name: "Geovanna Celani", photo: null },
  { key: "catia", name: "Catia", photo: catiaPhoto },
  { key: "michele", name: "Michele", photo: michelePhoto },
  { key: "rita", name: "Rita Dorneles", photo: ritaPhoto },
];

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const Equipe = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const { t } = useTranslation();

  const isExpanded = (name: string) => !!expanded[name];

  const toggleExpanded = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            {t("team.badge")}
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("team.title")}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeData.map((member) => {
              const open = isExpanded(member.name);
              const bio = t(`team.${member.key}_bio`);

              return (
                <article
                  key={member.name}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-3/4 aspect-[4/5] rounded-xl object-cover object-top bg-muted"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-3/4 aspect-[4/5] rounded-xl bg-primary/10 text-primary flex items-center justify-center text-4xl font-bold">
                        {initials(member.name)}
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <h3 className="font-heading text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mt-1">{t(`team.${member.key}_role`)}</p>

                    <div
                      className="text-muted-foreground text-sm leading-relaxed mt-3 whitespace-pre-line [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_p]:mt-2"
                      dangerouslySetInnerHTML={{ __html: open ? bio : `${bio.replace(/<[^>]*>/g, "").slice(0, 100)}...` }}
                    />

                    <button
                      type="button"
                      onClick={() => toggleExpanded(member.name)}
                      className="mt-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      {open ? t("team.show_less") : t("team.read_more")}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20 rounded-2xl border border-border bg-card p-8 md:p-10">
          <div className="flex items-center gap-2 text-primary mb-3">
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">{t("team.teachers_badge")}</span>
          </div>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("team.teachers_title")}
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            {t("team.teachers_desc")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Equipe;
