import { useTranslation } from "react-i18next";
import bcpLogo from "@/assets/partners/BCP-Council-RGB-white-keyline.svg";
import canLogo from "@/assets/partners/community action network.jpg";
import communityFundLogo from "@/assets/partners/community_fund.png";
import dorsetCommLogo from "@/assets/partners/dorset_comm.jpeg";
import dorsetRaceLogo from "@/assets/partners/dorset_race.webp";

const partners = [
  { src: bcpLogo, alt: "BCP Council", dark: true },
  { src: canLogo, alt: "Community Action Network", dark: false },
  { src: communityFundLogo, alt: "Community Fund", dark: false },
  { src: dorsetCommLogo, alt: "Dorset Community", dark: false },
  { src: dorsetRaceLogo, alt: "Dorset Race Equality", dark: false },
];

const LogoCard = ({ src, alt, dark }: { src: string; alt: string; dark: boolean }) => (
  <div
    className={`flex-shrink-0 flex items-center justify-center rounded-xl px-6 py-4 h-20 w-40 ${
      dark ? "bg-primary" : "bg-card border border-border"
    }`}
  >
    <img src={src} alt={alt} className="max-h-12 max-w-full object-contain" />
  </div>
);

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-muted/40">
      <div className="container px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">
            {t("partners.badge")}
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {t("partners.title")}
          </h2>
        </div>

        {/* Desktop: static row */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {partners.map((p) => (
            <LogoCard key={p.alt} {...p} />
          ))}
        </div>

        {/* Mobile: auto-scrolling marquee */}
        <div className="md:hidden overflow-hidden">
          <div className="flex gap-4 animate-marquee w-max">
            {[...partners, ...partners].map((p, i) => (
              <LogoCard key={`${p.alt}-${i}`} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
