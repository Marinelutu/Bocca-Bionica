const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-dark text-dark-foreground pt-20">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 py-16 md:flex-row md:gap-12 md:px-8 md:py-24 lg:py-32">
        {/* Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal md:text-sm">
            Hai perso tutti i denti, porti la dentiera o ti hanno detto che non hai più osso per un impianto fisso?
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Torna a Sorridere Senza Vergogna con i Denti Fissi
          </h1>
          <p className="text-base leading-relaxed opacity-80 md:text-lg">
            e gusta i tuoi cibi preferiti senza avvertire dolore grazie a degli innovativi denti fissi e iper
            realistici godendoti il turismo dentale in Moldavia, come altri 8.500 italiani hanno già fatto!
          </p>
          <div className="flex items-center justify-center gap-1 md:justify-start">
            <span className="text-xl">⭐⭐⭐⭐⭐</span>
            <span className="ml-2 text-sm opacity-70">
              Direttamente dal policlinico con più <strong>RECENSIONI POSITIVE</strong> in tutta Europa — con quasi
              10.000 recensioni a 5 stelle
            </span>
          </div>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-lg font-semibold text-cta-foreground transition-all hover:brightness-110"
          >
            → Richiedi Preventivo Gratuito
          </button>
        </div>
        {/* Image placeholder */}
        <div className="flex-1">
          <div className="mx-auto aspect-[4/3] max-w-md rounded-2xl bg-dark-foreground/10 flex items-center justify-center">
            <span className="text-6xl">😁</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
