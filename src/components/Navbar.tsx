import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { scrollToSection } from "@/lib/scroll";

type NavLinkItem =
  | { label: string; type: "route"; href: string }
  | { label: string; type: "scroll"; id: string };

type NavItem = NavLinkItem | { label: string; type: "group"; children: NavLinkItem[] };

const navItems: NavItem[] = [
  { label: "Home", type: "route", href: "/" },
  {
    label: "Sobre",
    type: "group",
    children: [
      { label: "Sobre", type: "scroll", id: "sobre" },
      { label: "História", type: "route", href: "/historia" },
      { label: "Equipe", type: "route", href: "/equipe" },
    ],
  },
  { label: "Grupos", type: "scroll", id: "grupos" },
  { label: "Unidades", type: "scroll", id: "unidades" },
  { label: "Testemunhos", type: "scroll", id: "testemunhos" },
  { label: "Galeria", type: "route", href: "/galeria" },
  { label: "FAQ", type: "route", href: "/faq" },
  { label: "Contato", type: "scroll", id: "contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileSobreOpen, setMobileSobreOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
            <li key={item.label} className={item.type === "group" ? "relative group" : ""}>
              {item.type === "group" ? (
                <>
                  <button
                    onClick={(e) => handleNavClick(e, item.children[0])}
                    className="flex items-center gap-1 text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                    <ChevronDown size={16} className="mt-0.5" />
                  </button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="min-w-44 rounded-md border border-border bg-card shadow-lg p-1">
                      {item.children.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.type === "route" ? subItem.href : `#${subItem.id}`}
                          onClick={(e) => handleNavClick(e, subItem)}
                          className="block rounded px-3 py-2 text-sm font-semibold text-foreground/70 hover:bg-muted hover:text-primary transition-colors"
                        >
                          {subItem.label}
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
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border">
          <ul className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.type === "group" ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                      onClick={() => setMobileSobreOpen((prev) => !prev)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileSobreOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileSobreOpen && (
                      <ul className="mt-2 ml-3 pl-3 border-l border-border flex flex-col gap-3">
                        {item.children.map((subItem) => (
                          <li key={subItem.label}>
                            <a
                              href={subItem.type === "route" ? subItem.href : `#${subItem.id}`}
                              className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                              onClick={(e) => handleNavClick(e, subItem)}
                            >
                              {subItem.label}
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
                    {item.label}
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
