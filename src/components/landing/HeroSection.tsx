const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-dark text-dark-foreground pt-20">
      <div
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://turismodentale.it/wp-content/uploads/2024/08/back-vsl_palmas.webp")' }}
      />
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 py-16 md:flex-row md:gap-12 md:px-8 md:py-24 lg:py-32">
        {/* Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal md:text-sm">
            Hai perso tutti i denti, porti la dentiera o ti hanno detto che non hai più osso per un impianto fisso?
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight md:text-5xl lg:text-6xl text-white">
            Torna a Sorridere Senza Vergogna con i Denti Fissi
          </h1>
          <p className="text-base leading-relaxed opacity-80 md:text-lg">
            e gusta i tuoi cibi preferiti senza avvertire dolore grazie a degli innovativi denti fissi e iper
            realistici godendoti il turismo dentale in Moldavia, come altri 8.500 italiani hanno già fatto!
          </p>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <img
              src="https://turismodentale.it/wp-content/uploads/2024/07/stelle.webp"
              alt="Rating 5 stelle"
              className="h-6 w-auto"
            />
            <span className="text-sm opacity-70">
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
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <img
          src="https://turismodentale.it/wp-content/uploads/2024/08/frecciagiu1.png"
          alt="Scorri giù"
          className="h-8 w-auto opacity-50"
        />
      </div>
    </section>
  );
};

export default HeroSection;
