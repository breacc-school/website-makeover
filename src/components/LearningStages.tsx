import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const groups = [
  {
    name: "Turma Jardim",
    age: "2 a 3 anos",
    emoji: "🌱",
    color: "bg-primary/10",
    description:
      "As crianças de 2 a 3 anos desenvolvem competências de socialização e interação em Língua Portuguesa, através das cantigas, brincadeiras e repertórios folclóricos. Este é um grupo especial, uma vez que os pais participam ativamente das atividades, passando assim aos seus filhos toda a sua vivência, história e herança de forma lúdica e prazerosa. Desta forma, as crianças aprendem desde cedo o amor à nossa cultura, como ponto de partida para o aprendizado do POLH.",
  },
  {
    name: "Cante e Brinque",
    age: "4 a 5 anos",
    emoji: "🎵",
    color: "bg-secondary/30",
    description:
      "As crianças com idade entre 4 e 5 aprendem as cantigas e brincadeiras tradicionais da cultura brasileira. O ensino se desenvolve de maneira lúdica, sem enfoque ortográfico, haja vista que a alfabetização é um fenômeno único e as crianças já estão sendo ou serão alfabetizadas no ensino básico britânico. Com bastante interação, as crianças são estimuladas a trabalhar de forma independente e em grupo.",
  },
  {
    name: "Turma Pantanal",
    age: "6 a 7 anos",
    emoji: "🐊",
    color: "bg-accent/10",
    description:
      "Com idades compreendidas entre os 6 e 7 anos, o grupo Pantanal oferece às crianças, através de jogos e brincadeiras, a possibilidade de desenvolvimento de suas competências de oralidade, escrita e compreensão. Com atividades diversificadas de pesquisas e projetos os alunos são levados a evoluir em suas habilidades de leitura e escrita.",
  },
  {
    name: "Turma Sertão",
    age: "8 a 9 anos",
    emoji: "🌵",
    color: "bg-primary/10",
    description:
      "Crianças de 8 a 9 anos são encorajadas a aprofundar suas habilidades linguísticas de oralidade e escrita no grupo Sertão. Com diversidade metodológica, utilizando sempre a ludicidade como ponto de partida, esses alunos progridem em suas competências comunicativas, sempre utilizando a língua portuguesa como fio condutor.",
  },
  {
    name: "Turma Amazônia",
    age: "10 a 12 anos",
    emoji: "🌿",
    color: "bg-secondary/30",
    description:
      "Dos 10 aos 12 anos, esse grupo expande a habilidade de comunicação oral da criança e enfoca vários aspectos da expressão em Língua Portuguesa. A criança é exposta a músicas, jogos e textos gradualmente mais complexos e começa a desenvolver maior apreciação pelo uso da língua. As atividades em grupo visam a interação entre as crianças e a troca efetiva de experiências.",
  },
  {
    name: "Turma Cerrado",
    age: "a partir de 13 anos",
    emoji: "🌾",
    color: "bg-accent/10",
    description:
      "Se utiliza de atividades pedagógicas para consolidar habilidades gramaticais, literárias, lúdicas e numéricas baseadas nas necessidades dos jovens. Com adolescentes a partir de 13 anos de idade, esse grupo oferece grande apoio àqueles que querem se preparar para o Certificado de Estudos Gerais Secundários (GCSE) em português. Os alunos são motivados a escreverem de forma mais acadêmica, expressando suas opiniões e fazendo releituras de obras literárias e artísticas.",
  },
];

const LearningStages = () => {
  return (
    <section id="grupos" className="py-24 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Estágios de Aprendizagem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seis estágios distintos que desenvolvem habilidades sociais, motoras e linguísticas de formas variadas.
          </p>
        </div>

        <Accordion type="single" collapsible className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <AccordionItem
              key={g.name}
              value={g.name}
              className={`${g.color} rounded-xl border border-border hover:shadow-lg transition-all duration-300`}
            >
              <AccordionTrigger className="px-8 pt-8 pb-4 hover:no-underline">
                <div className="text-left">
                  <span className="text-5xl mb-4 block">{g.emoji}</span>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                    {g.name}
                  </h3>
                  <p className="text-muted-foreground font-semibold">{g.age}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="text-muted-foreground leading-relaxed">{g.description}</p>
                <a
                  href="mailto:info@breacc.com"
                  className="inline-flex items-center mt-4 text-sm font-bold text-primary hover:underline"
                >
                  Fale Conosco →
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default LearningStages;
