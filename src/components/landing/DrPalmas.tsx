const credentials = [
  { icon: "🎓", text: "Studente della New York University" },
  { icon: "🏥", text: "Fondatore di 8 dipartimenti Maxillo-Facciali tra Italia e Moldavia." },
  { icon: "📜", text: "Promotore della 1° petizione europea per il dentista gratuito" },
  { icon: "📚", text: "Autore di 2 Libri sulle cure transfrontaliere in Europa (Turismo Dentale) e sulla ricostruzione avanzata della bocca su impianti dentali: Bocca Bionica." },
  { icon: "🎬", text: 'Protagonista del film documentario "Il futuro dei dentisti in Europa".' },
  { icon: "💻", text: "Creatore del 1° blog in Italia sul Turismo Dentale redatto con l'aiuto di oltre 100 cliniche europee che si occupano di turismo medico." },
  { icon: "👥", text: 'A capo dell\'equipe Multinazionale "Smile Dent Team" con oltre 500 operatori.' },
  { icon: "💶", text: "Innovatore e \"cervello in fuga\" che ha fatto risparmiare oltre 87 Milioni di € ai cittadini europei per farsi curare tutta la bocca a causa di parodontite, incidenti gravi o errori medici di altre equipe chirurgiche." },
];

const DrPalmas = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-foreground md:text-4xl">
        Chi è il Dr. Palmas e perché è l'esperto in riabilitazioni estreme della bocca che può farti tornare a
        sorridere?
      </h2>
      <div className="flex flex-col gap-10 md:flex-row md:gap-16">
        <div className="flex flex-1 items-start justify-center">
          <div className="aspect-[3/4] w-full max-w-sm rounded-2xl bg-secondary flex items-center justify-center">
            <span className="text-6xl">👨‍⚕️</span>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          {credentials.map((c, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-xl">{c.icon}</span>
              <p className="text-sm text-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
          <p className="mt-6 font-semibold text-foreground leading-relaxed">
            La mia equipe conta oltre 300 persone impegnate quotidianamente nella ricostruzione estrema della
            bocca… …distribuite in 8 Dipartimenti Maxillo Facciali, in 2 Nazioni e 3 Città diverse
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default DrPalmas;
