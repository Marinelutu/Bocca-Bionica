const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const aiBenefits = [
  { icon: "✅", title: "Precisione estrema", text: "garantisce un adattamento perfetto dei denti, migliorando sia l'aspetto estetico che la funzionalità." },
  { icon: "⚡", title: "Velocità", text: "la progettazione digitale accelera il processo, riducendo significativamente i tempi di attesa." },
  { icon: "🦷", title: "Denti iper-realistici", text: "ogni set di denti è una replica di denti reali, adattati alle specifiche del viso del paziente, garantendo il massimo comfort e naturalezza." },
  { icon: "🛡️", title: "Sicurezza", text: "queste tecnologie riducono il rischio di errori umani, aumentando la sicurezza e l'affidabilità del trattamento." },
];

const steps = [
  {
    num: "01",
    title: "Rimozione dei denti non salvabili e posizionamento degli Impianti",
    text: "Se hai denti o impianti danneggiati a causa di parodontite, errori chirurgici o protesi mal fatte, provvederemo a rimuoverli. Inoltre, nello stesso intervento, i miei chirurghi orali inseriranno degli impianti dentali in titanio nell'arcata inferiore o superiore priva di denti. E se in passato altri dentisti ti hanno detto che ti manca completamente l'osso e non puoi inserire gli impianti… No problem, riusciamo a inserirli comunque. In situazioni particolarmente complesse come questa, andiamo ad inserire impianti più lunghi nell'osso zigomatico o pterigoideo… Mentre in casi ancora più estremi, creiamo direttamente degli impianti personalizzati su misura.",
  },
  {
    num: "02",
    title: "Digitalizzazione e progettazione dei nuovi denti",
    text: "Digitalizziamo tutte le informazioni della tua bocca, che vengono poi inviate al mio team di design. In poche ore progettiamo i denti desiderati, che vengono poi testati avvitandoli sugli impianti per verificare l'adattamento e l'estetica.",
  },
  {
    num: "03",
    title: "Creazione dei denti con Intelligenza Artificiale",
    text: `Nei miei Centri di sviluppo e ricerca utilizziamo l'Intelligenza Artificiale per creare denti che si integrano perfettamente con l'estetica del viso e la masticazione. Oltre 20 macchinari di ultima generazione riproducono in fisico i denti che i nostri Designer progettano in Cloud. Ci impegniamo a rimanere al passo con le innovazioni per offrire ai pazienti le migliori soluzioni possibili… I nostri software, analizzano i movimenti della bocca e adattano automaticamente la forma dei denti per un risultato ottimale. Grazie all'IA ti mostreremo esattamente come apparirà la tua bocca!

L'Intelligenza Artificiale, nel campo della medicina e della salute, ad oggi è una risorsa altamente preziosa in grado di migliorare alcuni processi, abbattendone i costi e i tempi. Non stiamo parlando di chat gpt o simili, ma di tecnologie all'avanguardia in grado di fare, oggi, cose che solo 5 anni fa erano inimmaginabili. È uno strumento molto potente che consente di ottenere i seguenti benefici:`,
    benefits: true,
  },
  {
    num: "04",
    title: "Produzione e backup dei nuovi denti",
    text: "Dopo aver confermato il design, in poche ore i nuovi denti vengono prodotti con caratteristiche di iper-realismo e avvitati sopra i tuoi impianti dentali. In più, una copia di backup dei tuoi denti sarà disponibile sui nostri server a vita. Ciò significa che, in caso di necessità, grazie ai dati che abbiamo salvato in archivio è possibile sostituire, modificare o ristampare facilmente e a tuo piacimento i tuoi nuovi denti.\n\nTutto questo processo avviene in laboratori di nostra proprietà, ubicati all'interno delle stesse strutture dove tu verrai trattato. E se stai pensando a tutti gli avanti e indietro che dovrai fare in caso di eventuali modifiche o problemi, ti tranquillizzo subito: Dispongo di 8 centri di assistenza dislocati in modo strategico in tutta Europa.",
  },
];

const FourSteps = () => (
  <section className="bg-secondary py-16 md:py-24">
    <div className="container mx-auto max-w-4xl space-y-12 px-4 md:px-8">
      <h2 className="text-center font-display text-2xl font-bold text-foreground md:text-4xl">
        Gli esatti step con cui il sistema "Bocca Bionica" può donarti un nuovo sorriso in modo rapido e senza
        rischi:
      </h2>
      {steps.map((step, i) => (
        <div
          key={step.num}
          className={`flex flex-col gap-6 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="flex-1 flex items-center justify-center">
            <div className="aspect-[4/3] w-full max-w-sm rounded-xl bg-card shadow flex items-center justify-center">
              <span className="text-5xl text-muted-foreground/30">🦷</span>
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <span className="text-5xl font-bold text-teal">{step.num}</span>
            <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
            <p className="whitespace-pre-line leading-relaxed text-sm text-muted-foreground">{step.text}</p>
            {step.benefits && (
              <div className="mt-4 space-y-3">
                <p className="text-sm font-semibold text-foreground">Quindi puoi stare tranquillo, sei in buonissime mani.</p>
                {aiBenefits.map((b, j) => (
                  <div key={j} className="flex gap-3 rounded-lg bg-card p-4 shadow-sm">
                    <span className="text-xl">{b.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{b.title}</p>
                      <p className="text-xs text-muted-foreground">{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="text-center">
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

export default FourSteps;
