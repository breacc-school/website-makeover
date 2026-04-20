import { useTranslation } from "react-i18next";
import bcpLogo from "@/assets/partners/BCP-Council-RGB-white-keyline.svg";
import canLogo from "@/assets/partners/community action network.jpg";
import communityFundLogo from "@/assets/partners/community_fund.png";
import dorsetCommLogo from "@/assets/partners/dorset_comm.jpeg";
import dorsetRaceLogo from "@/assets/partners/dorset_race.webp";

const partners = [
  { src: bcpLogo, alt: "BCP Council" },
  { src: canLogo, alt: "Community Action Network" },
  { src: communityFundLogo, alt: "Community Fund" },
  { src: dorsetCommLogo, alt: "Dorset Community" },
  { src: dorsetRaceLogo, alt: "Dorset Race Equality" },
];

const Logo = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="h-20 w-auto max-w-[200px] object-contain flex-shrink-0"
  />
);

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section className="py-14 bg-background">
      <div className="container px-4">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
            {t("partners.badge")}
          </p>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
            {t("partners.title")}
          </h2>
        </div>

        {/* Desktop: static row */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-12">
          {partners.map((p) => (
            <Logo key={p.alt} src={p.src} alt={p.alt} />
          ))}
        </div>

        {/* Mobile: auto-scrolling marquee */}
        <div className="md:hidden overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee w-max">
            {[...partners, ...partners].map((p, i) => (
              <Logo key={`${p.alt}-${i}`} src={p.src} alt={p.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
