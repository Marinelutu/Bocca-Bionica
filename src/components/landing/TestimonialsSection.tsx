const testimonials = [
  { name: "Gianluca", video: "https://www.youtube.com/embed/Z4E-Fx-C7V8", text: "Dopo anni di vergogna, finalmente posso sorridere senza sentirmi a disagio. Un'esperienza che consiglio a tutti." },
  { name: "Mariella", video: "https://www.youtube.com/embed/gDwG0qCcOIo", text: "Non credevo fosse possibile tornare ad avere dei denti così belli in così poco tempo. Grazie di cuore!" },
  { name: "Roberto", video: "https://www.youtube.com/embed/6PKKqOSnQ0E", text: "La professionalità del Dr. Palmas e della sua equipe è fuori dal comune. Mi hanno ridato la gioia di mangiare." },
];

const TestimonialsSection = () => (
  <section className="bg-secondary py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-foreground md:text-4xl">
        Proprio come è successo a loro:
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-xl bg-card shadow-md transition-shadow hover:shadow-lg">
            <div className="aspect-video w-full bg-muted">
              <iframe
                width="100%"
                height="100%"
                src={t.video}
                title={`Testimonianza di ${t.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
            <div className="p-6 text-center space-y-4 flex-1 flex flex-col justify-between">
              <p className="font-bold text-foreground text-lg">{t.name}</p>
              <p className="text-sm italic text-muted-foreground leading-relaxed">"{t.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
