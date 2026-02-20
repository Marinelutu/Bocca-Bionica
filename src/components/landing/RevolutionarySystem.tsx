const RevolutionarySystem = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-dark text-dark-foreground py-16 md:py-24">
      <div className="container mx-auto max-w-3xl space-y-6 px-4 text-center md:px-8">
        <h2 className="font-display text-2xl font-bold md:text-4xl">
          Il Sistema Bocca Bionica è un trattamento rivoluzionario…
        </h2>
        <div className="space-y-4 text-base leading-relaxed opacity-80 text-left">
          <p>
            …che negli ultimi anni ha cambiato la vita a migliaia e migliaia di persone che prima non sarebbero
            riuscite ad ottenere nuovamente una vita normale senza spendere cifre folli.
          </p>
          <p className="font-semibold text-teal">Non importa quanto sia estremo il caso…</p>
          <p>Con le nostre tecnologie all'avanguardia, nulla è impossibile.</p>
          <p>
            Anche se soffri di gravi malattie dentali come la piorrea (paradontite). Anche se hai avuto a che fare
            con dei dentisti incompetenti che ti hanno inserito impianti dentali in maniera errata, causando
            solamente ulteriori problemi. Anche se ti hanno detto che non hai più osso per inserire i denti fissi.
          </p>
          <p>
            Perché hai davanti ai tuoi occhi, forse per la prima volta, dei veri esperti di implantologia dentale e
            riabilitazioni estreme della bocca. Che da anni si occupano di ricerca e sviluppo producendo in casa
            nuove tecnologie e ideando nuove tecniche grazie anche all'intelligenza artificiale.
          </p>
        </div>
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-lg font-semibold text-cta-foreground transition-all hover:brightness-110"
        >
          Richiedi un secondo parere GRATUITAMENTE
        </button>
      </div>
    </section>
  );
};

export default RevolutionarySystem;
