const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-dark text-dark-foreground py-16 md:py-24">
      <div className="container mx-auto max-w-2xl space-y-6 px-4 text-center">
        <h2 className="font-display text-2xl font-bold md:text-4xl">
          Prepara le valigie e ritrova il tuo sorriso perduto!
        </h2>
        <p className="opacity-80">Clicca il pulsante qui sotto e i tuoi denti torneranno a essere perfetti.</p>
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 rounded-full bg-cta px-10 py-5 text-xl font-semibold text-cta-foreground transition-all hover:brightness-110"
        >
          → Richiedi un secondo parere GRATUITAMENTE
        </button>
        <p className="text-sm opacity-60">Preventivo gratuito · Risposta in 24/48h · Nessun impegno</p>
      </div>
    </section>
  );
};

export default FinalCTA;
