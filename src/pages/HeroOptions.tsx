import heroBg from "@/assets/carnaval_1.JPG";
import heroCartoon from "@/assets/hero_cartoon.jpg";

const options = [
  {
    title: "Option 1: Original Photo",
    description: "Your real carnival photo, cropped to hide the finger",
    bg: (
      <>
        <img src={heroBg} alt="Carnival photo" className="w-full h-full object-cover object-[60%_center] scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
      </>
    ),
  },
  {
    title: "Option 2: Cartoon Illustration",
    description: "AI-generated cartoon style, vibrant and playful",
    bg: (
      <>
        <img src={heroCartoon} alt="Cartoon carnival" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/50" />
      </>
    ),
  },
  {
    title: "Option 3: Gradient Background",
    description: "Clean gradient with Brazilian colours, no photo needed",
    bg: (
      <div className="w-full h-full bg-gradient-to-br from-[hsl(140,60%,30%)] via-[hsl(50,90%,50%)] to-[hsl(210,80%,40%)] opacity-90" />
    ),
  },
];

const HeroOptions = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-heading font-bold text-foreground mb-2 text-center">Hero Banner Options</h1>
      <p className="text-muted-foreground text-center mb-10">Compare the three styles — pick your favourite!</p>
      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {options.map((opt, i) => (
          <div key={i}>
            <h2 className="text-xl font-bold text-foreground mb-1">{opt.title}</h2>
            <p className="text-muted-foreground mb-3 text-sm">{opt.description}</p>
            <div className="relative h-[50vh] rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0">{opt.bg}</div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h3 className="font-heading text-4xl md:text-6xl font-black text-primary-foreground mb-4">
                  Bem-vindos ao BREACC
                </h3>
                <p className="text-lg text-primary-foreground/90 max-w-xl">
                  Brazilian Educational and Cultural Centre — Preservando a língua e cultura brasileira no Reino Unido desde 1998.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroOptions;
