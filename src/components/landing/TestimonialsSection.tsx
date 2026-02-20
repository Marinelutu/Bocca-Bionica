const testimonials = [
  { name: "Gianluca", avatar: "https://turismodentale.it/wp-content/uploads/2024/07/7.png", text: "Dopo anni di vergogna, finalmente posso sorridere senza sentirmi a disagio. Un'esperienza che consiglio a tutti." },
  { name: "Mariella", avatar: "https://turismodentale.it/wp-content/uploads/2024/07/9.png", text: "Non credevo fosse possibile tornare ad avere dei denti così belli in così poco tempo. Grazie di cuore!" },
  { name: "Roberto", avatar: "https://turismodentale.it/wp-content/uploads/2024/07/8.png", text: "La professionalità del Dr. Palmas e della sua equipe è fuori dal comune. Mi hanno ridato la gioia di mangiare." },
];

const TestimonialsSection = () => (
  <section className="bg-secondary py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-foreground md:text-4xl">
        Proprio come è successo a loro:
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-xl bg-card p-6 shadow-md text-center space-y-4 hover:shadow-lg transition-shadow">
            <img
              src={t.avatar}
              alt={t.name}
              className="mx-auto h-20 w-20 rounded-full object-cover border-4 border-white shadow-sm"
            />
            <p className="font-semibold text-foreground">{t.name}</p>
            <p className="text-sm italic text-muted-foreground">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
