import { BookOpen, Users, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Ensino de Português",
    desc: "Aulas semanais que desenvolvem a leitura, escrita e comunicação em português.",
  },
  {
    icon: Users,
    title: "Comunidade",
    desc: "Um espaço de convivência para famílias brasileiras e lusófonas no Reino Unido.",
  },
  {
    icon: Heart,
    title: "Cultura Viva",
    desc: "Celebrações, música, dança e tradições que mantêm a cultura brasileira viva.",
  },
  {
    icon: Globe,
    title: "Identidade Bilíngue",
    desc: "Ajudamos crianças a desenvolverem uma identidade bicultural forte e orgulhosa.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre o BREACC
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O BREACC é uma instituição de caridade registrada na Inglaterra (nº 1087726) dedicada à educação e cultura brasileira para crianças e jovens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
