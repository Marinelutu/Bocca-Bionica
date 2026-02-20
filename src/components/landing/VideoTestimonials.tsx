const videos = [
  { title: "Parodontite grave: da una bocca insicura a un sorriso nuovo", quote: "Le aspettative sono state stra-superate, sono una persona nuova" },
  { title: "Dalla perdita di denti alla riabilitazione estrema su impianti", quote: "L'accoglienza è incredibile, ti tengono a tuo agio come se fossi a casa" },
  { title: "Dal Sorriso Nascosto al Gusto Riscoperto, la Mia Rinascita Dentale", quote: "Ora sono felice, mi sento libera" },
  { title: "Da Una Caduta in Bici alla Clinica in Moldavia: Il Percorso Dentale di Rosi", quote: "Non mi aspettavo delle tecnologie così all'avanguardia, mi sono sentita in un ambiente protetto" },
  { title: "Denti persi: da disperazione a felicità", quote: "È un cambiamento enorme, sono rinata" },
  { title: "Dr Palmas: Il futuro dei denti artificiali.", quote: "Il Dr.Palmas è avanti col cervello… e manda avanti anche gli altri" },
  { title: "Denti rotti: un sorriso nuovo soluzione in Moldavia", quote: "Lo rifarei altre mille volte, prima non sorridevo più" },
  { title: "Giam Battista, mi lavavo i denti 7-8 volte al giorno, senza risultati.", quote: "Esteticamente mi sono piaciuto subito, ho una nuova energia da vivere" },
  { title: "Il poter mangiare tranquillamente, è Impagabile!!", quote: "Mi ha ridato vita questo sorriso… e poter mangiare tranquillamente è impagabile" },
];

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const VideoTestimonials = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-foreground md:text-4xl">
        Ecco cosa dice chi ha già avuto a che fare con il Sistema Bocca Bionica:
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {videos.map((v, i) => (
          <div key={i} className="overflow-hidden rounded-xl bg-card shadow-md">
            <div className="relative aspect-video bg-dark flex items-center justify-center">
              <span className="text-5xl text-dark-foreground/40">▶️</span>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-sm font-semibold text-foreground leading-snug">{v.title}</p>
              <p className="text-xs italic text-muted-foreground">"{v.quote}"</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-lg font-semibold text-cta-foreground transition-all hover:brightness-110"
        >
          Richiedi un secondo parere GRATUITAMENTE
        </button>
      </div>
    </div>
  </section>
);

export default VideoTestimonials;
