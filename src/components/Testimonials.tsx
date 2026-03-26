import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Somos eternamente gratos pelo trabalho que o Breacc desenvolve com os nossos filhos. Nossa filha aprendeu a ler e escrever no Breacc. É um resgate emocional e cultural para nós pais.",
    author: "Michelle Lopes",
  },
  {
    text: "Uma escola super bacana, cujo objetivo é transmitir a nossa cultura e a nossa língua para as crianças de uma maneira lúdica e envolvente!",
    author: "Cris Doca",
  },
  {
    text: "Mais do que uma escola, é uma família.",
    author: "Geovanna Ce",
  },
  {
    text: "É muito bom poder compartilhar a cultura Brasileira com os meus filhos, e o Breacc nos ajuda a manter essa cultura viva nas nossas crianças que nasceram fora do Brasil.",
    author: "Sahmylle Peixe",
  },
  {
    text: "Excelente iniciativa, assim conservamos nossa cultura e língua! É gratificante saber que estas iniciativas estejam sendo aplicadas com tanto amor e dedicação!",
    author: "Ruayda Rabah",
  },
];

const Testimonials = () => {
  return (
    <section id="testemunhos" className="py-24 bg-primary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Testemunhos
          </h2>
          <p className="text-lg text-primary-foreground/80">
            O que as famílias dizem sobre o BREACC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20"
            >
              <Quote className="w-8 h-8 text-secondary mb-4" />
              <p className="text-primary-foreground/90 mb-6 leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="text-secondary font-bold text-sm">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
