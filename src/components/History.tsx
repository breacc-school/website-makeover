import { BookOpen } from "lucide-react";

const History = () => {
  return (
    <section id="historia" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            Desde 1997
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossa História
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            O BREACC é uma instituição sem fins lucrativos, criada e mantida por pais e mães
            voluntários, que no desejo de verem sua língua e cultura brasileiras transmitidas para
            os filhos, se reuniram e organizaram um pequeno grupo que hoje cresceu e encontra-se
            estruturado com centros em Richmond e Bournemouth.
          </p>
          <p>
            Sendo a escola de Português como Língua de Herança mais antiga da Inglaterra,
            estabelecida em 1997, o BREACC orgulha-se por fazer parte da história de centenas de
            famílias que contribuíram para sua criação, desenvolvimento e também se beneficiaram
            desse projeto.
          </p>
          <p>
            Muito mais do que apenas ensinar a Língua Portuguesa de forma tradicional, nosso
            objetivo é apresentar às crianças diferentes caminhos de aprendizagem, que passam por
            meio da diversidade cultural brasileira, envolvendo artesanatos, música, poesia,
            literatura, história, lendas, teatro e alimentação — tudo isso em português. E é esse
            processo de ensino/aprendizagem diferenciado que denominamos{" "}
            <strong className="text-primary">POLH</strong>.
          </p>
          <p className="italic text-foreground/80 border-l-4 border-primary pl-6">
            "Quando aprendemos uma Língua de Herança estamos, na verdade, conhecendo nossas raízes
            e construindo nossa identidade."
          </p>
          <p>
            E assim, o BREACC vem ao longo dos anos, ensinando em português, como ser brasileiro
            na terra da rainha.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;