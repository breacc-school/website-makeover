import teamPhoto from "@/assets/team.jpeg";
import flagsPhoto from "@/assets/flags.jpg";
import carnivalPhoto from "@/assets/carnival.png";
import { scrollToSection } from "@/lib/scroll";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-foreground">
      {/* Content */}
      <div className="container px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left — Text */}
        <div className="flex-1 z-10 text-center lg:text-left">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-tight">
            Bem-vindos ao{" "}
            <span className="text-secondary">BREACC.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-10 font-body">
            Brazilian Educational and Cultural Centre — Preservando a língua e cultura brasileira no Reino Unido desde 1998.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#grupos"
              onClick={(e) => scrollToSection(e, "grupos")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-bold text-lg hover:brightness-110 transition-all"
            >
              Conheça nossos grupos
            </a>
            <a
              href="#contato"
              onClick={(e) => scrollToSection(e, "contato")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-bold text-lg hover:bg-primary-foreground/10 transition-all"
            >
              Agende uma visita
            </a>
          </div>
        </div>

        {/* Right — Photo Bubbles */}
        <div className="flex-1 relative min-h-[340px] md:min-h-[420px] w-full max-w-lg lg:max-w-none">
          {/* Bubble — carnival */}
          <div className="absolute top-0 right-0 md:right-8 w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-2xl z-20">
            <img
              src={carnivalPhoto}
              alt="Festa de carnaval do BREACC com bandeira do Brasil"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bubble — team */}
          <div className="absolute bottom-4 left-0 md:left-4 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-secondary shadow-2xl z-30">
            <img
              src={teamPhoto}
              alt="Equipe do BREACC com camisetas verdes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bubble — flags */}
          <div className="absolute top-[50%] right-[5%] md:right-[15%] w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent shadow-2xl z-10">
            <img
              src={flagsPhoto}
              alt="Artesanato com bandeiras do Brasil"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative circles */}
          <div className="absolute top-[15%] left-[30%] w-16 h-16 rounded-full bg-secondary/20 z-0" />
          <div className="absolute bottom-[25%] right-[40%] w-10 h-10 rounded-full bg-primary/20 z-0" />
          <div className="absolute top-[70%] right-[5%] w-8 h-8 rounded-full bg-accent/30 z-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
