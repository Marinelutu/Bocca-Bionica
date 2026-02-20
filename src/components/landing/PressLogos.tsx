const outlets = [
  { name: "Ansa", logo: "https://turismodentale.it/wp-content/uploads/2024/07/1.png" },
  { name: "Il Giornale d'Italia", logo: "https://turismodentale.it/wp-content/uploads/2024/07/2.png" },
  { name: "Today", logo: "https://turismodentale.it/wp-content/uploads/2024/07/3.png" },
  { name: "La Sicilia", logo: "https://turismodentale.it/wp-content/uploads/2024/07/4.png" },
  { name: "Corriere della Sera", logo: "https://turismodentale.it/wp-content/uploads/2024/07/5.png" },
  { name: "Corriere dello Sport", logo: "https://turismodentale.it/wp-content/uploads/2024/07/6.png" },
  { name: "Il Tempo", logo: "https://turismodentale.it/wp-content/uploads/2024/07/7-1.png" },
];

const PressLogos = () => (
  <section className="overflow-hidden bg-white py-12">
    <div className="container mx-auto px-4">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Visto su
      </p>
      <div className="relative">
        <div className="flex animate-scroll-left whitespace-nowrap items-center">
          {[...outlets, ...outlets].map((outlet, i) => (
            <img
              key={i}
              src={outlet.logo}
              alt={outlet.name}
              className="mx-8 h-8 w-auto grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100 md:h-12"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PressLogos;
