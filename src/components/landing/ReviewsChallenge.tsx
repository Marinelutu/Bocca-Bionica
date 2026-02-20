const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const ReviewsChallenge = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto max-w-3xl space-y-6 px-4 md:px-8">
      <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
        Ma non finisce qui, perché si dà il caso che…
      </h2>
      <p className="font-semibold text-foreground">
        Il mio Policlinico è quello con più recensioni positive in tutta Europa, con oltre 10.000 recensioni a 5
        stelle:
      </p>
      {/* Reviews mockup */}
      <div className="flex items-center gap-8 rounded-xl bg-secondary p-6">
        <div className="text-center">
          <p className="text-3xl font-bold text-foreground">4.9</p>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          <p className="text-xs text-muted-foreground">Google</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-foreground">4.9</p>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          <p className="text-xs text-muted-foreground">Facebook</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-teal">10.000+</p>
          <p className="text-xs text-muted-foreground">Recensioni totali</p>
        </div>
      </div>

      <p className="leading-relaxed text-muted-foreground">
        E se non credi alle immagini che hai appena visto, verifica tu stesso. Ti basta digitare il mio nome su
        Google o su Facebook per essere catapultato su migliaia di recensioni di pazienti soddisfatti. Anzi, ti
        spingo a farlo… Perché nel caso trovassi qualche mio competitor che fa prezzi come i nostri o più bassi…
        Che ha più recensioni Facebook e Google di noi… E con un punteggio superiore al nostro in entrambe le
        piattaforme…
      </p>

      <div className="rounded-xl bg-dark p-8 text-center">
        <p className="font-display text-3xl font-bold text-dark-foreground md:text-4xl">TI CURIAMO GRATIS!</p>
      </div>

      <p className="leading-relaxed text-muted-foreground">
        È una sfida che lancio da anni ai miei pazienti, ma che nessuno finora ha mai vinto. Se pensi di
        potercela fare, puoi iniziare a cercare in giro per il web qualche mio concorrente che soddisfi i
        parametri richiesti… Oppure, se hai capito che, semplicemente, è una sfida che NON puoi vincere… E vuoi
        ottenere il prima possibile un nuovo, fantastico e iper-realistico sorriso… Clicca il pulsante VERDE qui
        sotto e richiedi un preventivo gratuito personalizzato in base alla tua situazione.
      </p>

      <div className="text-center">
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-lg font-semibold text-cta-foreground transition-all hover:brightness-110"
        >
          Richiedi un secondo parere GRATUITAMENTE
        </button>
      </div>
    </div>
  </section>
);

export default ReviewsChallenge;
