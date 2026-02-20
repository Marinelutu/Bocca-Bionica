const credentials = [
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/08/nyuniversity.webp",
    text: "Studente della New York University"
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/chisei02-1.png",
    text: "Fondatore di 8 dipartimenti Maxillo-Facciali tra Italia e Moldavia."
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/chisei03-1.png",
    text: "Promotore della 1° petizione europea per il dentista gratuito"
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/chisei04-1.png",
    text: "Autore di 2 Libri sulle cure transfrontaliere e sulla ricostruzione avanzata della bocca."
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/08/film_palmas.webp",
    text: 'Protagonista del film documentario "Il futuro dei dentisti in Europa".'
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/chisei05.png",
    text: "Creatore del 1° blog in Italia sul Turismo Dentale."
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/08/sdt.webp",
    text: 'A capo dell\'equipe Multinazionale "Smile Dent Team" con oltre 500 operatori.'
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/chisei06-1.png",
    text: "Innovatore che ha fatto risparmiare oltre 87 Milioni di € ai cittadini europei."
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/08/testimonials.png",
    text: "Migliaia di testimonianze verificate video e scritte."
  }
];

const DrPalmas = () => (
  <section className="bg-background py-16 md:py-24 overflow-hidden">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
          Chi è il <span className="text-teal">Dr. Palmas</span>?
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground italic">
          L'esperto in riabilitazioni estreme della bocca che può farti tornare a sorridere
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1">
          <img
            src="https://turismodentale.it/wp-content/uploads/2024/08/IMG_3458-copia.webp"
            alt="Dr. Palmas"
            className="w-full max-w-md mx-auto rounded-3xl shadow-2xl block"
          />
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((c, i) => (
            <div key={i} className="flex items-center gap-4 bg-secondary/50 p-4 rounded-xl border border-border/50 hover:bg-white hover:shadow-md transition-all group">
              <img
                src={c.icon}
                alt=""
                className="h-12 w-12 min-w-[48px] object-contain transition-transform group-hover:scale-110"
              />
              <p className="text-[12px] font-medium text-foreground leading-tight">{c.text}</p>
            </div>
          ))}
          <div className="md:col-span-2 mt-4 p-6 bg-teal/10 rounded-2xl border border-teal/20">
            <p className="font-bold text-teal text-lg">
              Equipe di oltre 500 persone
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mt-2">
              Distribuite in 8 Dipartimenti Maxillo Facciali, in 2 Nazioni e 3 Città diverse, impegnate quotidianamente nella ricostruzione estrema della bocca.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DrPalmas;
