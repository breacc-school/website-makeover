import { FileText, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import aimsPdf from "@/assets/policies/Aims-us.pdf";
import childProtectionPdf from "@/assets/policies/Child-Protection-and-safeguarding.pdf";
import codeBehaviourPdf from "@/assets/policies/Code-of-behaviour.pdf";
import eSafetyPdf from "@/assets/policies/E-Safety.pdf";
import equalitiesPdf from "@/assets/policies/Equalities.pdf";
import offSiteVisitsPdf from "@/assets/policies/Procedures-for-off-sites-visits.pdf";
import proceduresPdf from "@/assets/policies/Procedures.pdf";
import safetyAdvicePdf from "@/assets/policies/Safety-advice.pdf";
import whistleblowPdf from "@/assets/policies/Whistlebow-Policy.pdf";

const policies = [
  { title: "Aims (Objetivos)", file: aimsPdf },
  { title: "Child Protection and Safeguarding", file: childProtectionPdf },
  { title: "Code of Behaviour", file: codeBehaviourPdf },
  { title: "E-Safety", file: eSafetyPdf },
  { title: "Equalities", file: equalitiesPdf },
  { title: "Procedures for Off-Site Visits", file: offSiteVisitsPdf },
  { title: "Procedures", file: proceduresPdf },
  { title: "Safety Advice", file: safetyAdvicePdf },
  { title: "Whistleblow Policy", file: whistleblowPdf },
];

const PoliciesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <FileText className="w-4 h-4" />
                Documentos
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                Políticas e Regras
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Confira abaixo os documentos com as políticas, regras e procedimentos do BREACC.
              </p>
            </div>

            <div className="max-w-2xl mx-auto grid gap-4">
              {policies.map((policy) => (
                <a
                  key={policy.title}
                  href={policy.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-foreground flex-1">
                    {policy.title}
                  </span>
                  <Download className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PoliciesPage;
