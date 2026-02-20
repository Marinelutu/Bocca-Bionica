import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Cos'è il Sistema Bocca Bionica e come può funzionare anche nei casi più estremi?",
    a: "Bocca Bionica è il sistema che consente a me e alla mia equipe di esperti di donare ai nostri pazienti dei nuovi denti fissi, durevoli e indistinguibili da quelli naturali. Questo perché si tratta di una soluzione innovativa, efficace, rapida e senza rischi. Una soluzione capace di: Restituirti la libertà di mangiare i tuoi cibi preferiti senza più soffrire. Sorridere di nuovo a pieni denti, senza alcun disagio o imbarazzo nelle interazioni sociali. Farti ritrovare quella fiducia in te stesso che da troppo tempo ti manca, permettendoti di affrontare le tue giornate con uno spirito completamente diverso.",
  },
  {
    q: "Viaggi all'estero in Moldavia: come funziona il tutto?",
    a: "Spostarsi da una qualunque città europea all'estero per sistemarsi i denti, seppur per pochi giorni, è un argomento che a volte intimorisce chi ancora non ha avuto modo di testare la qualità del nostro operato. Puoi stare sereno. Perché si tratta di un processo totalmente guidato, in cui sarai sempre accompagnato. Avrai infatti un supporto completo dall'inizio alla fine (documenti, biglietti e prenotazioni alberghiere)… E la possibilità di viaggiare assieme ad altri pazienti che, come te, attendono di tornare a sorridere come un tempo.",
  },
  {
    q: "Quali sono gli esatti step con cui il Sistema Bocca Bionica può donarmi un nuovo sorriso in modo rapido e senza rischi?",
    a: "STEP 1 – Rimozione dei denti non salvabili e posizionamento degli Impianti. STEP 2 – Digitalizzazione e progettazione dei nuovi denti: In poche ore progettiamo i denti desiderati. STEP 3 – Creazione con Intelligenza Artificiale: I nostri software analizzano i movimenti della bocca e adattano la forma dei denti per un risultato ottimale. STEP 4 – Produzione e backup dei nuovi denti: I denti vengono prodotti con iper-realismo e una copia di backup sarà disponibile sui nostri server a vita.",
  },
  {
    q: "Se nel post-intervento dovessi avere dei problemi, devo tornare all'estero?",
    a: "No! Nel remoto caso in cui dovessi avere dei problemi con i tuoi nuovi denti fissi, non dovrai fare necessariamente avanti e indietro dall'Italia all'estero. Abbiamo infatti diversi centri di assistenza in Italia che ti permettono di risolvere la tua situazione nel migliore dei modi.",
  },
  {
    q: "Ho ancora dei dubbi, c'è modo di parlare con chi ha già avuto a che fare con il Sistema Bocca Bionica?",
    a: "Assolutamente sì. Abbiamo un gruppo Facebook da oltre 12.000 membri in cui puoi esporre ogni tuo dubbio riguardo il nostro servizio chiamato: 'Riabilitazioni Estreme con sistema Bocca Bionica'. Oltre 8.500 persone al suo interno sono nostri pazienti provenienti da tutta Europa.",
  },
  {
    q: "Chi mi assicura che non si tratta di un servizio ingannevole come molti altri dentisti all'estero?",
    a: "Si dà il caso che siamo il Policlinico con più recensioni positive in tutta Europa, con quasi 10.000 recensioni a 5 stelle. Puoi verificarlo tu stesso: ti basta digitare il mio nome su Google o su Facebook per essere catapultato in migliaia di recensioni di pazienti soddisfatti. TI CURIAMO GRATIS se trovi un competitor con prezzi migliori, più recensioni e punteggio superiore su entrambe le piattaforme!",
  },
];

const FAQSection = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto max-w-3xl px-4 md:px-8">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-foreground md:text-4xl">
        Domande Frequenti
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline md:text-base">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
