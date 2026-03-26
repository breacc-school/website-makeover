import { useState } from "react";
import { Mail, Facebook, Instagram, FileText, Briefcase, Send, CheckCircle } from "lucide-react";

const Footer = () => {
  const [formResult, setFormResult] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormResult("sending");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "6177ef28-39ee-41fc-a21d-305fe814d0eb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setFormResult("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setFormResult("error");
      }
    } catch {
      setFormResult("error");
    }
  };

  return (
    <footer id="contato" className="py-16 bg-foreground">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto">
            Venha para o BREACC! Entre em contato para matrículas e mais informações.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="max-w-lg mx-auto mb-12 flex flex-col gap-4"
        >
          <input type="hidden" name="subject" value="Nova mensagem pelo site do BREACC" />
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              required
              className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <textarea
            name="message"
            placeholder="Sua mensagem..."
            rows={4}
            required
            className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
          />
          <button
            type="submit"
            disabled={formResult === "sending"}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary text-secondary-foreground font-bold px-6 py-3 text-sm hover:brightness-110 transition-all disabled:opacity-60"
          >
            {formResult === "sending" ? (
              "Enviando..."
            ) : (
              <>
                <Send className="w-4 h-4" />
                Enviar mensagem
              </>
            )}
          </button>
          {formResult === "success" && (
            <p className="flex items-center justify-center gap-2 text-sm text-green-400">
              <CheckCircle className="w-4 h-4" />
              Mensagem enviada com sucesso!
            </p>
          )}
          {formResult === "error" && (
            <p className="text-sm text-red-400 text-center">
              Erro ao enviar. Tente novamente ou envie um email para info@breacc.com.
            </p>
          )}
        </form>

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

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
          <a
            href="https://www.breacc.org.uk/politicas-regras-e-itens-importantes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <FileText className="w-4 h-4" />
            Políticas e Regras
          </a>
          <a
            href="https://www.breacc.org.uk/politicas-regras-e-itens-importantes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <Briefcase className="w-4 h-4" />
            Trabalhe Conosco
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
