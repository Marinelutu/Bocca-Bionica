const reasons = [
  {
    num: "01",
    title: "Costi e prezzi più bassi per i pazienti",
    text: "per poter assicurare a tutti il diritto umano alla salute, rendendolo più accessibile.",
  },
  {
    num: "02",
    title: "Tecnologie migliori ed expertise avanzate",
    text: "per garantire una qualità sempre al top.",
  },
  {
    num: "03",
    title: "Nessun conflitto d'interesse tra medico privato e sanità pubblica",
    text: "per una sanità più etica.",
  },
  {
    num: "04",
    title: "Qui sì da importanza e valore alla ricerca",
    text: "la Moldavia investe maggiori fondi rispetto all'Italia per attirare i migliori dentisti e offrire le migliori cure ai pazienti.",
  },
];

const WhyMoldova = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col gap-10 md:flex-row md:gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
            Perché io e la mia equipe operiamo all'estero?
          </h2>
          <p className="text-muted-foreground">La risposta risiede in questo video:</p>
          <div className="aspect-video w-full rounded-xl bg-secondary flex items-center justify-center">
            <span className="text-5xl">▶️</span>
          </div>
          <p className="font-semibold text-foreground">Operiamo in Moldavia per 4 semplici motivi:</p>
        </div>
        <div className="flex-1">
          <div className="aspect-[3/4] w-full rounded-xl bg-secondary flex items-center justify-center">
            <span className="text-5xl">🗺️</span>
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reasons.map((r) => (
          <div key={r.num} className="rounded-xl border border-border p-6 space-y-2">
            <span className="text-3xl font-bold text-teal">{r.num}</span>
            <p className="font-semibold text-foreground">{r.title}</p>
            <p className="text-sm text-muted-foreground">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyMoldova;
