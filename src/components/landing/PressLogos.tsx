const outlets = [
  "Ansa",
  "Il Giornale d'Italia",
  "Today",
  "La Sicilia",
  "Corriere della Sera",
  "Corriere dello Sport",
  "Il Tempo",
];

const PressLogos = () => (
  <section className="overflow-hidden bg-secondary py-8">
    <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
      Visto su
    </p>
    <div className="relative">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {[...outlets, ...outlets].map((name, i) => (
          <span
            key={i}
            className="mx-8 inline-block text-lg font-semibold text-muted-foreground/60 md:text-xl"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default PressLogos;
