import teamPhoto from "@/assets/team.jpeg";
import flagsPhoto from "@/assets/flags.jpg";
import carnivalPhoto from "@/assets/carnival.png";
import turmaSertaoPhoto from "@/assets/Turma-sertao.jpeg";
import juninaPhoto from "@/assets/gallery/Festa Junina - 2019/festa-junina-2019-2.jpeg";
import parintinsPhoto from "@/assets/gallery/Carnaval de Parintins/Carnaval-de-Parintins-2.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { useState, useCallback, useRef } from "react";

const mobileImages = [
  { src: carnivalPhoto, alt: "Carnaval", border: "border-secondary" },
  { src: teamPhoto, alt: "Equipe", border: "border-secondary" },
  { src: turmaSertaoPhoto, alt: "Turma Sertão", border: "border-primary" },
  { src: flagsPhoto, alt: "Bandeiras", border: "border-accent" },
  { src: juninaPhoto, alt: "Festa Junina", border: "border-secondary" },
  { src: parintinsPhoto, alt: "Carnaval de Parintins", border: "border-primary" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const next = useCallback(() => setCurrent((i) => (i + 1) % mobileImages.length), []);
  const prev = () => setCurrent((i) => (i - 1 + mobileImages.length) % mobileImages.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50) next();
    else if (delta < -50) prev();
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-foreground">
      {/* Photo Bubbles — absolute overlay, hidden on mobile */}
      <div className="hidden lg:block absolute inset-0 z-0">
        {/* Bubble — carnival (top-right, pushed down to avoid navbar) */}
        <div className="absolute top-[15%] right-[2%] w-52 h-52 xl:w-60 xl:h-60 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
          <img src={carnivalPhoto} alt="Festa de carnaval do BREACC com bandeira do Brasil" className="w-full h-full object-cover" />
        </div>
        {/* Bubble — team (bottom-right) */}
        <div className="absolute bottom-[8%] right-[9%] w-48 h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
          <img src={teamPhoto} alt="Equipe do BREACC com camisetas verdes" className="w-full h-full object-cover" />
        </div>
        {/* Bubble — flags (bottom-left of cluster) */}
        <div className="absolute bottom-[12%] right-[30%] w-44 h-44 xl:w-52 xl:h-52 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
          <img src={flagsPhoto} alt="Artesanato com bandeiras do Brasil" className="w-full h-full object-cover" />
        </div>
        {/* Bubble — turma sertão (top-left of cluster) */}
        <div className="absolute top-[18%] right-[28%] w-40 h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
          <img src={turmaSertaoPhoto} alt="Turma Sertão do BREACC" className="w-full h-full object-cover" />
        </div>
        {/* Decorative circles */}
        <div className="absolute top-[18%] right-[18%] w-14 h-14 rounded-full bg-secondary/20" />
        <div className="absolute bottom-[30%] right-[3%] w-10 h-10 rounded-full bg-primary/20" />
        <div className="absolute top-[75%] right-[18%] w-8 h-8 rounded-full bg-accent/30" />
        <div className="absolute top-[3%] right-[42%] w-12 h-12 rounded-full bg-primary/15" />
        <div className="absolute top-[55%] right-[38%] w-6 h-6 rounded-full bg-secondary/25" />
        <div className="absolute bottom-[8%] right-[28%] w-14 h-14 rounded-full bg-accent/20" />
        <div className="absolute top-[68%] right-[35%] w-8 h-8 rounded-full bg-primary/10" />
        <div className="absolute bottom-[18%] right-[40%] w-10 h-10 rounded-full bg-secondary/15" />
        <div className="absolute top-[48%] right-[5%] w-6 h-6 rounded-full bg-accent/25" />
        <div className="absolute top-[8%] right-[12%] w-8 h-8 rounded-full bg-secondary/20" />
      </div>

      {/* Content */}
      <div className="container px-6 py-20 relative z-10">
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-tight">
            Bem-vindos ao{" "}
            <span className="text-secondary">BREACC.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 font-body">
            Brazilian Educational and Cultural Centre — Preservando a língua e cultura brasileira no Reino Unido desde 1997.
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

        {/* Mobile bubbles — infinite carousel */}
        <div className="lg:hidden mt-12">
          <div className="relative flex items-center justify-center">
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 z-10 w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} className={`w-56 h-72 rounded-2xl overflow-hidden border-4 ${mobileImages[current].border} shadow-xl transition-all duration-500`}>
              <img src={mobileImages[current].src} alt={mobileImages[current].alt} className="w-full h-full object-cover" />
            </div>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 z-10 w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-3">
            {mobileImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-secondary" : "bg-primary-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
