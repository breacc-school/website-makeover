import { Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="py-16 bg-foreground">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto">
            Quer saber mais sobre o BREACC? Entre em contato ou visite nossas redes sociais.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          <a
            href="mailto:info@breacc.com"
            className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:brightness-110 transition-all"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-primary-foreground" />
          </a>
          <a
            href="https://www.facebook.com/Breaccbook"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-accent flex items-center justify-center hover:brightness-110 transition-all"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 text-accent-foreground" />
          </a>
          <a
            href="https://www.instagram.com/breaccschool/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center hover:brightness-110 transition-all"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-secondary-foreground" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-primary-foreground/50 text-sm max-w-2xl mx-auto leading-relaxed">
            O BREACC é uma instituição de caridade registrada na Inglaterra e País de Gales sob o número 1087726.{" "}
            <a
              href="http://beta.charitycommission.gov.uk/charity-details/?regid=1087726&subid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground/70"
            >
              Visite o site da Comissão de Instituições de Caridade
            </a>
            .
          </p>
          <p className="text-primary-foreground/30 text-xs mt-6">
            © {new Date().getFullYear()} BREACC — Brazilian Educational and Cultural Centre
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
