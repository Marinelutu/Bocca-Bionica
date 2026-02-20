const FacebookGroup = () => (
  <section className="bg-teal text-teal-foreground py-16 md:py-24">
    <div className="container mx-auto max-w-5xl space-y-10 px-4 md:px-8">
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <h2 className="font-display text-2xl font-bold md:text-4xl">E se sei ancora indeciso sul da farsi…</h2>
          <p className="text-lg opacity-90 leading-relaxed italic">
            …sappi che puoi accedere a un gruppo Facebook da oltre 12.000 membri in cui puoi esporre ogni tuo dubbio
            riguardo il nostro servizio
          </p>
          <p className="text-base opacity-80 leading-relaxed">
            Oltre 8.500 persone al suo interno sono miei pazienti provenienti da tutta Europa. Si tratta del più grande
            gruppo consumatori di riabilitazioni dentali in Europa… E puoi sfruttarlo a tuo vantaggio per chiarire ogni
            tua eventuale perplessità.
          </p>
          <a
            href="https://m.me/turismo.dentale.sos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-8 py-4 text-teal font-bold shadow-lg transition-transform hover:scale-105"
          >
            Entra nel Gruppo Facebook
          </a>
        </div>
        <div className="flex-1">
          <img
            src="https://turismodentale.it/wp-content/uploads/2024/08/gruppofacebookpalmas.webp"
            alt="Gruppo Facebook Palma"
            className="w-full rounded-2xl shadow-2xl transition-transform hover:-rotate-2"
          />
        </div>
      </div>
    </div>
  </section>
);

export default FacebookGroup;
