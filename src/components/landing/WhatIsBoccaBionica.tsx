const features = [
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/collage01.webp",
    title: "Restituirti la libertà di mangiare",
    text: "i tuoi cibi preferiti senza più soffrire.",
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/collage02.webp",
    title: "Sorridere di nuovo a pieni denti",
    text: "senza alcun disagio o imbarazzo nelle interazioni sociali.",
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/collage03.webp",
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
        <div className="space-y-8 mt-6">
          {features.map((f, i) => (
            <div key={i} className="flex gap-6 items-center">
              <img src={f.icon} alt="" className="h-28 w-28 min-w-[112px] rounded-xl object-cover shadow-md" />
              <div>
                <p className="font-bold text-lg text-foreground">{f.title}</p>
                <p className="text-base text-muted-foreground mt-1">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <img
          src="https://turismodentale.it/wp-content/uploads/2024/07/Progetto-senza-titolo-_1_.webp"
          alt="Sistema Bocca Bionica"
          className="w-full rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </section>
);

export default WhatIsBoccaBionica;
