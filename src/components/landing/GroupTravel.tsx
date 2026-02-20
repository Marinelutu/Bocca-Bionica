const quotes = [
  "Il viaggio è sicuro al 100%, ed avendo compagnia è anche meno stressante",
  "Viaggiare in gruppo mi fa stare tranquilla e serena perché è tutto organizzato",
  "Mi sono sentita al sicuro, mi sono divertita e ho fatto nuove amicizie",
  "Viaggiare in gruppo risolve il problema del sentirsi soli, è una sicurezza aggiuntiva",
];

const GroupTravel = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto max-w-3xl space-y-6 px-4 md:px-8">
      <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
        Ma prima, se pensi che muoverti verso l'estero possa risultare complicato per te…
      </h2>
      <p className="font-semibold text-foreground">
        Ecco tutto ciò che devi sapere riguardo i viaggi di gruppo in Moldavia:
      </p>
      <p className="leading-relaxed text-muted-foreground">
        Spostarsi da una qualunque città europea all'estero per sistemarsi i denti, seppur per pochi giorni, è un
        argomento che a volte intimorisce chi ancora non ha avuto modo di testare la qualità del nostro operato.
        Per questo motivo, lascia che ti dica una cosa: Puoi stare sereno. Perché si tratta di un processo
        totalmente guidato, in cui sarai sempre accompagnato. Avrai infatti un supporto completo dall'inizio alla
        fine (documenti, biglietti e prenotazioni alberghiere)… E la possibilità di viaggiare assieme ad altri
        pazienti che, come te, attendono di tornare a sorridere come un tempo.
      </p>
      <p className="leading-relaxed text-muted-foreground">
        Ci sono viaggi di gruppo che partono da Milano, Roma, Parigi, Londra, Berlino e molte altre città europee,
        verso la Moldavia… Viaggi che in oltre 10 anni di attività, migliaia di persone hanno affrontato senza
        alcun tipo di problema.
      </p>

      <h3 className="font-display text-xl font-bold text-foreground">
        E se hai ancora qualche dubbio, eccoti qualche feedback di chi ha già intrapreso questo percorso
        indimenticabile:
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {quotes.map((q, i) => (
          <div key={i} className="rounded-lg border-l-4 border-teal bg-secondary p-5">
            <p className="text-sm italic text-foreground">"{q}"</p>
          </div>
        ))}
      </div>

      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          Come hai potuto vedere, è tutto sotto controllo… Viaggiare in gruppo significa fare nuove amicizie e
          creare legami con persone che condividono esperienze simili alle tue. Il mio staff organizzerà per te non
          solo un'operazione dentale, ma anche un'esperienza alla scoperta della Moldavia.
        </p>
        <p>
          Infatti, molti nostri pazienti decidono di portare con sé la propria famiglia, perché organizziamo veri e
          propri tour e non una semplice toccata e fuga per il tuo trattamento dentale. Fatta questa premessa,
          finalmente è arrivato il momento di scoprire…
        </p>
      </div>
    </div>
  </section>
);

export default GroupTravel;
