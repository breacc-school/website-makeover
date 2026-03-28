export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const el = document.getElementById(sectionId);
  if (el) {
    const isMobile = window.innerWidth < 768;
    el.scrollIntoView({ behavior: isMobile ? "auto" : "smooth" });
  }
};
