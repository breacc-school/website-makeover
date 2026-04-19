import { useState } from "react";
import { Mail, Facebook, Instagram, FileText, Briefcase, Send, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [formResult, setFormResult] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { t } = useTranslation();

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
            {t("footer.title")}
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto">
            {t("footer.subtitle")}
          </p>
        </div>

        <div className="max-w-lg mx-auto mb-6 text-center">
          <a
            href="https://forms.gle/9SpcurUZGr6RSjyr6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary text-secondary-foreground font-bold px-6 py-3 text-sm hover:brightness-110 transition-all"
          >
            {t("footer.enrol_button")}
          </a>
          <p className="mt-4 text-primary-foreground/60 text-sm">
            {t("footer.enrol_or")}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="max-w-lg mx-auto mb-12 flex flex-col gap-4"
        >
          <input type="hidden" name="subject" value={t("footer.form_subject")} />
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder={t("footer.name")}
              required
              className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="email"
              name="email"
              placeholder={t("footer.email")}
              required
              className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <textarea
            name="message"
            placeholder={t("footer.message")}
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
              t("footer.sending")
            ) : (
              <>
                <Send className="w-4 h-4" />
                {t("footer.send")}
              </>
            )}
          </button>
          {formResult === "success" && (
            <p className="flex items-center justify-center gap-2 text-sm text-green-400">
              <CheckCircle className="w-4 h-4" />
              {t("footer.success")}
            </p>
          )}
          {formResult === "error" && (
            <p className="text-sm text-red-400 text-center">
              {t("footer.error")}
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
            href="https://www.facebook.com/breaccbournemouth"
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
            href="#/politicas"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <FileText className="w-4 h-4" />
            {t("footer.policies")}
          </a>
          <a
            href="https://www.breacc.org.uk/politicas-regras-e-itens-importantes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <Briefcase className="w-4 h-4" />
            {t("footer.careers")}
          </a>
        </div>

        <div className="text-center">
          <p className="text-primary-foreground/50 text-sm max-w-2xl mx-auto leading-relaxed">
            {t("footer.charity_info")}{" "}
            <a
              href="http://beta.charitycommission.gov.uk/charity-details/?regid=1087726&subid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground/70"
            >
              {t("footer.charity_link")}
            </a>
            .
          </p>
          <p className="text-primary-foreground/30 text-xs mt-6">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
