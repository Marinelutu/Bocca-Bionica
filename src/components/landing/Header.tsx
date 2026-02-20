import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        <span className="font-display text-lg font-bold tracking-tight text-foreground md:text-xl">
          Turismo Dentale
        </span>
        <button
          onClick={scrollToForm}
          className="rounded-full bg-cta px-4 py-2 text-sm font-semibold text-cta-foreground transition-all hover:brightness-110 md:px-6 md:text-base"
        >
          → Richiedi Preventivo
        </button>
      </div>
    </header>
  );
};

export default Header;
