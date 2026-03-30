import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import { scrollToSection } from "@/lib/scroll";

type NavLinkItem =
  | { key: string; type: "route"; href: string }
  | { key: string; type: "scroll"; id: string };

type NavItem = NavLinkItem | { key: string; type: "group"; children: NavLinkItem[] };

const navItems: NavItem[] = [
  { key: "home", type: "route", href: "/" },
  {
    key: "about",
    type: "group",
    children: [
      { key: "about", type: "scroll", id: "sobre" },
      { key: "history", type: "route", href: "/historia" },
      { key: "team", type: "route", href: "/equipe" },
      { key: "groups", type: "scroll", id: "grupos" },
      { key: "locations", type: "scroll", id: "unidades" },
    ],
  },
  { key: "events", type: "scroll", id: "eventos" },
  { key: "testimonials", type: "scroll", id: "testemunhos" },
  { key: "gallery", type: "route", href: "/galeria" },
  { key: "resources", type: "route", href: "/recursos" },
  { key: "faq", type: "route", href: "/faq" },
  { key: "contact", type: "scroll", id: "contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileSobreOpen, setMobileSobreOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const label = (key: string) => t(`nav.${key}`);

  const toggleLang = () => {
    const next = i18n.language?.startsWith("pt") ? "en" : "pt";
    i18n.changeLanguage(next);
  };

  const handleNavClick = (e: React.MouseEvent, item: NavLinkItem) => {
    if (item.type === "route") {
      e.preventDefault();
      navigate(item.href);
      setOpen(false);
      setMobileSobreOpen(false);
    } else {
      if (location.pathname === "/") {
        scrollToSection(e, item.id);
      } else {
        e.preventDefault();
        navigate("/", { state: { scrollTo: item.id } });
      }
      setOpen(false);
      setMobileSobreOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="flex items-center gap-2">
          <img src={logo} alt="BREACC Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.key + item.type} className={item.type === "group" ? "relative group" : ""}>
              {item.type === "group" ? (
                <>
                  <button
                    onClick={(e) => handleNavClick(e, item.children[0])}
                    className="flex items-center gap-1 text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                  >
                    {label(item.key)}
                    <ChevronDown size={16} className="mt-0.5" />
                  </button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="min-w-44 rounded-md border border-border bg-card shadow-lg p-1">
                      {item.children.map((subItem) => (
                        <a
                          key={subItem.key}
                          href={subItem.type === "route" ? subItem.href : `#${subItem.id}`}
                          onClick={(e) => handleNavClick(e, subItem)}
                          className="block rounded px-3 py-2 text-sm font-semibold text-foreground/70 hover:bg-muted hover:text-primary transition-colors"
                        >
                          {label(subItem.key)}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.type === "route" ? item.href : `#${item.id}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                >
                  {label(item.key)}
                </a>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1.5 text-sm font-semibold hover:bg-muted/80 transition-colors"
              aria-label="Toggle language"
            >
              <span className="text-base">{i18n.language?.startsWith("pt") ? "🇧🇷" : "🇬🇧"}</span>
              <span className="text-foreground/70">{i18n.language?.startsWith("pt") ? "PT" : "EN"}</span>
            </button>
          </li>
        </ul>

        {/* Mobile toggle + lang */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-sm font-semibold hover:bg-muted/80 transition-colors"
            aria-label="Toggle language"
          >
            <span className="text-base">{i18n.language?.startsWith("pt") ? "🇧🇷" : "🇬🇧"}</span>
            <span className="text-foreground/70">{i18n.language?.startsWith("pt") ? "PT" : "EN"}</span>
          </button>
          <button
            className="text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border">
          <ul className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <li key={item.key + item.type}>
                {item.type === "group" ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                      onClick={() => setMobileSobreOpen((prev) => !prev)}
                    >
                      <span>{label(item.key)}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileSobreOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileSobreOpen && (
                      <ul className="mt-2 ml-3 pl-3 border-l border-border flex flex-col gap-3">
                        {item.children.map((subItem) => (
                          <li key={subItem.key}>
                            <a
                              href={subItem.type === "route" ? subItem.href : `#${subItem.id}`}
                              className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                              onClick={(e) => handleNavClick(e, subItem)}
                            >
                              {label(subItem.key)}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={item.type === "route" ? item.href : `#${item.id}`}
                    className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {label(item.key)}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
