import InteractiveEuropeMap from "./InteractiveEuropeMap";

const patientGroups = [
  "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-7.webp",
  "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-8.webp",
  "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-9.webp",
  "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-10.webp",
  "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-11.webp",
  "https://turismodentale.it/wp-content/uploads/2024/07/Gruppo-di-maschere-12.webp",
];

const quotes = [
  "Il viaggio è sicuro al 100%, ed avendo compagnia è anche meno stressante",
  "Viaggiare in gruppo mi fa stare tranquilla e serena perché è tutto organizzato",
  "Mi sono sentita al sicuro, mi sono divertita e ho fatto nuove amicizie",
  "Viaggiare in gruppo risolve il problema del sentirsi soli, è una sicurezza aggiuntiva",
];

const GroupTravel = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
            Ma prima, se pensi che muoverti verso l'estero possa risultare complicato per te…
          </h2>
          <p className="font-semibold text-foreground">
            Ecco tutto ciò che devi sapere riguardo i viaggi di gruppo in Moldavia:
          </p>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Spostarsi da una qualunque città europea all'estero per sistemarsi i denti, seppur per pochi giorni, è un
              argomento che a volte intimorisce chi ancora non ha avuto modo di testare la qualità del nostro operato.
              Per questo motivo, lascia che ti dica una cosa: Puoi stare sereno. Perché si tratta di un processo
              totalmente guidato, in cui sarai sempre accompagnato.
            </p>
            <p>
              Ci sono viaggi di gruppo che partono da Milano, Roma, Parigi, Londra, Berlino e molte altre città europee,
              verso la Moldavia… Viaggi che in oltre 10 anni di attività, migliaia di persone hanno affrontato senza
              alcun tipo di problema.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <InteractiveEuropeMap />
        </div>
      </div>

      <div className="mt-16 space-y-8">
        <h3 className="text-center font-display text-xl font-bold text-foreground md:text-2xl">
          E se hai ancora qualche dubbio, eccoti qualche feedback di chi ha già intrapreso questo percorso:
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-lg border-l-4 border-teal bg-secondary p-5 shadow-sm">
              <p className="text-sm italic text-foreground">"{q}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {patientGroups.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gruppo pazienti ${i + 7}`}
            className="aspect-square w-full rounded-lg object-cover shadow-sm transition-transform hover:scale-105"
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <img
          src="https://turismodentale.it/wp-content/uploads/2024/08/VIAGGI-DI-GRUPPO.png"
          alt="Banner viaggi di gruppo"
          className="mx-auto h-auto max-w-full rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default GroupTravel;
