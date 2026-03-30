import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonialAuthors = [
  "Michelle Lopes",
  "Cris Doca",
  "Geovanna Ce",
  "Sahmylle Peixe",
  "Ruayda Rabah",
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testemunhos" className="py-24 bg-primary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-primary-foreground/80">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonialAuthors.map((author, i) => (
            <div
              key={i}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20"
            >
              <Quote className="w-8 h-8 text-secondary mb-4" />
              <p className="text-primary-foreground/90 mb-6 leading-relaxed italic">
                "{t(`testimonials.t${i + 1}`)}"
              </p>
              <p className="text-secondary font-bold text-sm">— {author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
