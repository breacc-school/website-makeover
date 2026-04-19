import { BookOpen, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projetoPdf from "@/assets/projeto_pedagogico.pdf";

const stages = [
  { name: "Turma Jardim", pt: "2 e 3 anos", uk: "Nursery / pré-escolar" },
  { name: "Cante e Brinque", pt: "4 e 5 anos", uk: "Reception e Year 1" },
  { name: "Turma Pantanal", pt: "6 e 7 anos", uk: "Year 2 e Year 3" },
  { name: "Turma Sertão", pt: "8 e 9 anos", uk: "Year 4 e Year 5" },
  { name: "Turma Amazônia", pt: "10 e 11 anos", uk: "Year 6 e Year 7" },
  { name: "Turma Cerrado", pt: "12 anos em diante", uk: "Year 8 em diante" },
  { name: "Preparatório GCSE", pt: "a partir dos 13 anos", uk: "Year 9 em diante — requer falar e compreender português" },
];

const ProjetoPedagogicoPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-20 bg-background">
          <div className="container px-4 max-w-3xl mx-auto">

            {/* Header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <BookOpen className="w-4 h-4" />
                {t("pedagogy.badge")}
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
                {t("pedagogy.title")}
              </h1>
            </div>

            {/* 1. Tema Transversal */}
            <div className="mb-16 rounded-2xl bg-primary text-primary-foreground p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-widest text-primary-foreground/60 mb-3">
                {t("pedagogy.tema_label")}
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-black mb-2 leading-snug">
                {t("pedagogy.tema_title")}
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                {t("pedagogy.tema_desc")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {(["p1", "p2", "p3"] as const).map((p) => (
                  <div key={p} className="rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">{t(`pedagogy.${p}_period`)}</p>
                    <p className="font-semibold text-primary-foreground leading-snug">{t(`pedagogy.${p}_label`)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Projeto Pedagógico quote */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                {t("pedagogy.project_title")}
              </h2>
              <blockquote className="border-l-4 border-primary pl-6 space-y-4 text-muted-foreground leading-relaxed text-lg italic">
                <p>{t("pedagogy.project_text")}</p>
              </blockquote>
              <p className="mt-4 ml-6 text-sm font-semibold text-primary">
                — Rita Dorneles, {t("pedagogy.rita_role")}
              </p>
            </div>

            {/* PDF download */}
            <div className="mb-16">
              <a
                href={projetoPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <span className="font-semibold text-foreground">{t("pedagogy.pdf_link")}</span>
              </a>
              <p className="mt-2 ml-1 text-xs text-muted-foreground">{t("pedagogy.pdf_note")}</p>
            </div>

            {/* 3. Estágios de aprendizagem */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                {t("pedagogy.stages_title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("pedagogy.stages_intro")}
              </p>
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary/10 text-left">
                      <th className="px-5 py-3 font-semibold text-foreground">{t("pedagogy.col_group")}</th>
                      <th className="px-5 py-3 font-semibold text-foreground">{t("pedagogy.col_age")}</th>
                      <th className="px-5 py-3 font-semibold text-foreground">{t("pedagogy.col_year")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stages.map((s, i) => (
                      <tr key={s.name} className={i % 2 === 0 ? "bg-card" : "bg-muted/40"}>
                        <td className="px-5 py-3 font-semibold text-foreground">{s.name}</td>
                        <td className="px-5 py-3 text-muted-foreground">{s.pt}</td>
                        <td className="px-5 py-3 text-muted-foreground">{s.uk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProjetoPedagogicoPage;
