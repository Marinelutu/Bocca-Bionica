const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const ReviewsChallenge = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto max-w-5xl space-y-12 px-4 md:px-8">
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
            Ma non finisce qui, perché si dà il caso che…
          </h2>
          <p className="font-semibold text-foreground text-lg italic">
            Il mio Policlinico è quello con più recensioni positive in tutta Europa, con oltre 10.000 recensioni a 5
            stelle.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            E se non credi alle immagini che hai appena visto, verifica tu stesso. Ti basta digitare il mio nome su
            Google o su Facebook per essere catapultato su migliaia di recensioni di pazienti soddisfatti.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://turismodentale.it/wp-content/uploads/2024/08/recensioni-_1_.webp"
            alt="Recensioni Google e Facebook"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </div>

      <div className="rounded-3xl bg-dark p-8 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl uppercase tracking-wider">
              La Sfida del <span className="text-teal">Dr. Palmas</span>
            </h3>
            <p className="text-dark-foreground opacity-80 leading-relaxed italic border-l-4 border-teal pl-4">
              "Se trovi qualcuno che ha più recensioni di noi e prezzi più bassi… Ti curiamo GRATIS!"
            </p>
            <p className="text-sm text-dark-foreground opacity-70">
              È una sfida che lancio da anni ai miei pazienti, ma che nessuno finora ha mai vinto. Se pensi di
              potercela fare, puoi iniziare a cercare in giro per il web qualche mio concorrente che soddisfi i
              parametri richiesti…
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://turismodentale.it/wp-content/uploads/2024/08/la-sfida-del-dottor-palmas.webp"
              alt="La sfida del Dr. Palmas"
              className="w-full rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 md:flex-row md:items-center pt-8 border-t border-border">
        <div className="flex-1">
          <img
            src="https://turismodentale.it/wp-content/uploads/2024/08/articoli-giornali.webp"
            alt="Articoli di giornale"
            className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-md"
          />
        </div>
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="leading-relaxed text-muted-foreground">
            Se hai capito che, semplicemente, è una sfida che NON puoi vincere… E vuoi
            ottenere il prima possibile un nuovo, fantastico e iper-realistico sorriso… Clicca il pulsante VERDE qui
            sotto e richiedi un preventivo gratuito personalizzato in base alla tua situazione.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-lg font-bold text-cta-foreground transition-all hover:scale-105 hover:brightness-110 shadow-lg"
          >
            Richiedi Preventivo Gratuito
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default ReviewsChallenge;
