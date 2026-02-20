const scams = [
  { title: "Denti fissi in 24 ore", text: "che se va bene sono da buttare entro 6 mesi…" },
  { title: "Implantologia computer guidata", text: "tipica dei neofiti che non hanno mai messo mano sulla bocca di un paziente…" },
  { title: "Preventivi sottostimati", text: "per far sembrare i prezzi bassi quando in realtà non lo sono…" },
];

const ScamWarning = () => (
  <section className="bg-warning-bg py-16 md:py-24">
    <div className="container mx-auto max-w-3xl space-y-6 px-4 md:px-8">
      <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
        Attento però! All'estero è un attimo essere truffati…
      </h2>
      <p className="leading-relaxed text-muted-foreground">
        Il settore odontoiatrico all'estero nasconde molti più inganni e problemi a lungo termine di quanto
        immagini. Il web è pieno di gente che promette risultati allettanti tramite tecniche apparentemente
        rivoluzionarie e sicure, che hanno prezzi ridicoli rispetto al mercato Italiano… Ma la realtà è che spesso
        si tratta di vere e proprie truffe. Sono ben consapevole di tutto ciò e negli anni ho anche cercato di fare
        informazione a riguardo… Infatti nei miei canali online puoi trovare numerosi video in cui smonto diverse
        truffe ad opera di dentisti sprovveduti da tutta Europa, come ad esempio:
      </p>
      <div className="space-y-4">
        {scams.map((s, i) => (
          <div key={i} className="flex gap-4 rounded-xl border-2 border-destructive/30 bg-card p-5">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-semibold text-foreground">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          E una marea di altre atrocità che girano in questo ambiente. Nonostante tutto questo, all'estero, se si
          vuole lavorare seriamente (come io faccio da oltre 10 anni a questa parte)… Si può accedere a spazi e
          tecnologie incredibilmente avanzate, riuscendo ad abbassare la spesa che un paziente dovrebbe affrontare
          per delle lavorazioni estreme.
        </p>
        <p>
          Al contrario di molte realtà là fuori, infatti, il mio modus operandi è incentrato unicamente sulla
          qualità del servizio, la ricerca, lo sviluppo e la trasparenza verso chi si affida a me e alla mia equipe
          di esperti. Non peraltro siamo l'Istituto con più testimonianze in Europa (oltre 8.500 testimonianze).
        </p>
        <p>
          Ma non solo. Per abbattere eventuali dubbi, sappi che sto per mostrarti gli esatti step su cui si basa il
          nostro Sistema Bocca Bionica, con la massima trasparenza.
        </p>
      </div>
    </div>
  </section>
);

export default ScamWarning;
