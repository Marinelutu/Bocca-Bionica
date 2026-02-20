const scams = [
  {
    title: "Denti fissi in 24 ore",
    text: "che se va bene sono da buttare entro 6 mesi…",
    image: "https://turismodentale.it/wp-content/uploads/2024/07/mockup01.webp"
  },
  {
    title: "Implantologia computer guidata",
    text: "tipica dei neofiti che non hanno mai messo mano sulla bocca di un paziente…",
    image: "https://turismodentale.it/wp-content/uploads/2024/07/mockup02.webp"
  },
  {
    title: "Preventivi sottostimati",
    text: "per far sembrare i prezzi bassi quando in realtà non lo sono…",
    image: "https://turismodentale.it/wp-content/uploads/2024/07/mockup03.webp"
  },
  {
    title: "Altre atrocità",
    text: "scopri come evitare di essere truffato dai finti esperti.",
    image: "https://turismodentale.it/wp-content/uploads/2024/07/mockup04.webp"
  }
];

const ScamWarning = () => (
  <section className="bg-warning-bg py-16 md:py-24">
    <div className="container mx-auto max-w-4xl space-y-8 px-4 md:px-8">
      <div className="text-center space-y-4">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
          Attento però! All'estero è un attimo essere truffati…
        </h2>
        <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
          Il settore odontoiatrico all'estero nasconde molti più inganni e problemi a lungo termine di quanto
          immagini. Sulla rete trovi numerosi video in cui smonto diverse truffe ad opera di dentisti sprovveduti:
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {scams.map((s, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden bg-muted relative">
              <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <span className="text-4xl drop-shadow-lg">▶️</span>
              </div>
            </div>
            <div className="p-4">
              <p className="font-semibold text-foreground">{s.title}</p>
              <p className="text-xs text-muted-foreground">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-muted-foreground text-center">
        <p>
          Nonostante tutto questo, all'estero si può accedere a spazi e tecnologie incredibilmente avanzate, riuscendo ad abbassare la spesa che un paziente dovrebbe affrontare per delle lavorazioni estreme.
        </p>
        <p>
          Al contrario di molte realtà là fuori, infatti, il mio modus operandi è incentrato unicamente sulla
          qualità del servizio, la ricerca, lo sviluppo e la trasparenza verso chi si affida a me e alla mia equipe
          di esperti. Non peraltro siamo l'Istituto con più testimonianze in Europa (oltre 8.500 testimonianze).
        </p>
      </div>
    </div>
  </section>
);

export default ScamWarning;
