const features = [
  {
    icon: "🍽️",
    title: "Restituirti la libertà di mangiare",
    text: "i tuoi cibi preferiti senza più soffrire.",
  },
  {
    icon: "😄",
    title: "Sorridere di nuovo a pieni denti",
    text: "senza alcun disagio o imbarazzo nelle interazioni sociali.",
  },
  {
    icon: "💪",
    title: "Farti ritrovare quella fiducia in te stesso",
    text: "che da troppo tempo ti manca, permettendoti di affrontare le tue giornate con uno spirito completamente diverso.",
  },
];

const WhatIsBoccaBionica = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto flex flex-col gap-10 px-4 md:flex-row md:gap-16 md:px-8">
      <div className="flex-1 space-y-6">
        <h2 className="font-display text-2xl font-bold leading-tight text-foreground md:text-4xl">
          Cos'è il Sistema Bocca Bionica e come può funzionare anche nei casi più estremi?
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          Bocca Bionica è il sistema che consente a me e alla mia equipe di esperti di donare ai nostri pazienti
          dei nuovi denti fissi, durevoli e indistinguibili da quelli naturali. Questo perché si tratta di una
          soluzione innovativa, efficace, rapida e senza rischi, fatta per durare nel tempo grazie all'utilizzo
          dei migliori materiali e delle tecnologie più all'avanguardia (inclusa l'intelligenza artificiale).
        </p>
        <p className="font-semibold text-foreground">Una soluzione capace di:</p>
        <div className="space-y-5">
          {features.map((f, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-3xl">{f.icon}</span>
              <div>
                <p className="font-semibold text-foreground">{f.title}</p>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="aspect-square w-full max-w-sm rounded-2xl bg-secondary flex items-center justify-center">
          <span className="text-6xl">🦷</span>
        </div>
      </div>
    </div>
  </section>
);

export default WhatIsBoccaBionica;
