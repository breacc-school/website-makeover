import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { scrollToSection } from "@/lib/scroll";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Sobre", id: "sobre" },
  { label: "Grupos", id: "grupos" },
  { label: "Unidades", id: "unidades" },
  { label: "Testemunhos", id: "testemunhos" },
  { label: "Contato", id: "contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" onClick={(e) => scrollToSection(e, "home")} className="flex items-center gap-2">
          <img src={logo} alt="BREACC Logo" className="h-12 w-auto" />
        </a>
        
        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
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
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                  onClick={(e) => {
                    scrollToSection(e, item.id);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
