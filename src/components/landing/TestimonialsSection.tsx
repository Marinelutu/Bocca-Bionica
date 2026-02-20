const testimonials = [
  { name: "Nome Testimonial", text: "Lorem ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet" },
  { name: "Nome Testimonial", text: "Lorem ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet" },
  { name: "Nome Testimonial", text: "Lorem ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet" },
];

const TestimonialsSection = () => (
  <section className="bg-secondary py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-foreground md:text-4xl">
        Proprio come è successo a loro:
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-xl bg-card p-6 shadow-md text-center space-y-4">
            <div className="mx-auto h-16 w-16 rounded-full bg-muted flex items-center justify-center text-2xl">👤</div>
            <p className="font-semibold text-foreground">{t.name}</p>
            <p className="text-sm italic text-muted-foreground">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
