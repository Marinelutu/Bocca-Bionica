const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const aiBenefits = [
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/AnyConv.com__3.webp",
    title: "Precisione estrema",
    text: "garantisce un adattamento perfetto dei denti, migliorando sia l'aspetto estetico che la funzionalità."
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/AnyConv.com__5.webp",
    title: "Velocità",
    text: "la progettazione digitale accelera il processo, riducendo significativamente i tempi di attesa."
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/AnyConv.com__1.webp",
    title: "Denti iper-realistici",
    text: "ogni set di denti è una replica di denti reali, adattati alle specifiche del viso del paziente."
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/AnyConv.com__2.webp",
    title: "Sicurezza",
    text: "queste tecnologie riducono il rischio di errori umani, aumentando la sicurezza del trattamento."
  },
  {
    icon: "https://turismodentale.it/wp-content/uploads/2024/07/AnyConv.com__4.webp",
    title: "Tecnologia Avanzata",
    text: "utilizziamo software proprietari non basati su modelli standard come GPT."
  },
];

const steps = [
  {
    num: "01",
    image: "https://turismodentale.it/wp-content/uploads/2024/07/step1.png",
    title: "Rimozione dei denti non salvabili e posizionamento degli Impianti",
    text: "Se hai denti o impianti danneggiati a causa di parodontite, errori chirurgici o protesi mal fatte, provvederemo a rimuoverli. Inoltre, nello stesso intervento, i miei chirurghi orali inseriranno degli impianti dentali in titanio nell'arcata inferiore o superiore priva di denti. E se in passato altri dentisti ti hanno detto che ti manca completamente l'osso e non puoi inserire gli impianti… No problem, riusciamo a inserirli comunque.",
  },
  {
    num: "02",
    image: "https://turismodentale.it/wp-content/uploads/2024/07/step2.png",
    title: "Digitalizzazione e progettazione dei nuovi denti",
    text: "Digitalizziamo tutte le informazioni della tua bocca, che vengono poi inviate al mio team di design. In poche ore progettiamo i denti desiderati, che vengono poi testati avvitandoli sugli impianti per verificare l'adattamento e l'estetica.",
  },
  {
    num: "03",
    image: "https://turismodentale.it/wp-content/uploads/2024/07/step3.png",
    title: "Creazione dei denti con Intelligenza Artificiale",
    text: `Nei miei Centri di sviluppo e ricerca utilizziamo l'Intelligenza Artificiale per creare denti che si integrano perfettamente con l'estetica del viso e la masticazione. 
    
    L'Intelligenza Artificiale, nel campo della medicina e della salute, ad oggi è una risorsa altamente preziosa in grado di migliorare alcuni processi, abbattendone i costi e i tempi. È uno strumento molto potente che consente di ottenere i seguenti benefici:`,
    benefits: true,
    extraImage: "https://turismodentale.it/wp-content/uploads/2024/08/palmas-AI-denti-prima-e-dopo_2-1.gif"
  },
  {
    num: "04",
    image: "https://turismodentale.it/wp-content/uploads/2024/07/AnyConv.com__gruppo9.webp",
    title: "Produzione e backup dei nuovi denti",
    text: "Dopo aver confermato il design, in poche ore i nuovi denti vengono prodotti con caratteristiche di iper-realismo e avvitati sopra i tuoi impianti dentali. In più, una copia di backup dei tuoi denti sarà disponibile sui nostri server a vita.",
    extraImage: "https://turismodentale.it/wp-content/uploads/2024/08/mockuprendering.webp"
  },
];

const FourSteps = () => (
  <section className="bg-secondary py-16 md:py-24">
    <div className="container mx-auto max-w-5xl space-y-12 px-4 md:px-8">
      <div className="text-center space-y-4">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
          Gli esatti step con cui il sistema "Bocca Bionica" può donarti un nuovo sorriso
        </h2>
        <img
          src="https://turismodentale.it/wp-content/uploads/2024/08/frecciafucsia.webp"
          alt="decoration"
          className="mx-auto h-8 w-auto opacity-50"
        />
      </div>

      {steps.map((step, i) => (
        <div
          key={step.num}
          className={`flex flex-col gap-10 md:flex-row items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="flex-1">
            <img src={step.image} alt={step.title} className="w-full rounded-2xl shadow-lg border-4 border-white" />
          </div>
          <div className="flex-1 space-y-4">
            <span className="text-6xl font-black text-teal/20">{step.num}</span>
            <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
            <p className="leading-relaxed text-sm text-muted-foreground">{step.text}</p>

            {step.benefits && (
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {aiBenefits.map((b, j) => (
                  <div key={j} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm border border-border/50">
                    <img src={b.icon} alt="" className="h-10 w-10 min-w-[40px] rounded-lg object-contain" />
                    <div>
                      <p className="text-[11px] font-bold text-foreground leading-tight">{b.title}</p>
                      <p className="text-[10px] text-muted-foreground leading-tight">{b.text.substring(0, 40)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step.extraImage && (
              <img src={step.extraImage} alt="Dettaglio tecnica" className="mt-4 w-full rounded-xl shadow-md" />
            )}
          </div>
        </div>
      ))}

      <div className="text-center pt-10">
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 rounded-full bg-cta px-10 py-5 text-xl font-bold text-cta-foreground transition-all hover:scale-105 hover:brightness-110 shadow-xl"
        >
          Inizia Ora la Tua Trasformazione
        </button>
      </div>
    </div>
  </section>
);

export default FourSteps;
