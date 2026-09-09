import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import calendarBH from "@/assets/Calendario_BH_2526.png";
import calendarTW from "@/assets/Calendario_TW_2526.png";
import calendarBH2627 from "@/assets/Calendario_BH_2627.png";
import calendarTW2627 from "@/assets/Calendario_TW_2627.png";

const faqCount = 14;
const calendarQuestion = 6;
const calendarQuestion2627 = 14;

const FAQ = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [openValue, setOpenValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    const num = (location.state as { openFaq?: number } | null)?.openFaq;
    if (num === undefined) return;

    setOpenValue(`faq-${num - 1}`);
    const timeoutId = window.setTimeout(() => {
      const el = document.getElementById(`faq-item-${num - 1}`);
      if (el) {
        const isMobile = window.innerWidth < 768;
        el.scrollIntoView({ behavior: isMobile ? "auto" : "smooth", block: "center" });
      }
      navigate(location.pathname, { replace: true, state: null });
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.state, navigate]);

  return (
    <section id="faq" className="py-20 bg-muted/40">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            {t("faq.badge")}
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            value={openValue}
            onValueChange={setOpenValue}
          >
            {Array.from({ length: faqCount }, (_, i) => {
              const num = i + 1;
              return (
                <AccordionItem
                  key={i}
                  id={`faq-item-${i}`}
                  value={`faq-${i}`}
                  className="bg-card rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {t(`faq.q${num}`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {t(`faq.a${num}`)}
                    {num === calendarQuestion && (
                      <ul className="mt-3 space-y-1">
                        <li>
                          <a
                            href={calendarBH}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:underline"
                          >
                            {t("faq.calendar_bh")}
                          </a>
                        </li>
                        <li>
                          <a
                            href={calendarTW}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:underline"
                          >
                            {t("faq.calendar_tw")}
                          </a>
                        </li>
                      </ul>
                    )}
                    {num === calendarQuestion2627 && (
                      <ul className="mt-3 space-y-1">
                        <li>
                          <a
                            href={calendarBH2627}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:underline"
                          >
                            {t("faq.calendar_bh_2627")}
                          </a>
                        </li>
                        <li>
                          <a
                            href={calendarTW2627}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-semibold hover:underline"
                          >
                            {t("faq.calendar_tw_2627")}
                          </a>
                        </li>
                      </ul>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
