const BeforeAfterGallery = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="mb-10 text-center font-display text-2xl font-bold text-foreground md:text-4xl">
        Prima e Dopo
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary"
          >
            <div className="flex h-full items-center justify-center text-4xl text-muted-foreground/30">🦷</div>
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-dark/60 text-dark-foreground text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded bg-destructive/80 px-2 py-1">Prima</span>
              <span className="rounded bg-cta/80 px-2 py-1">Dopo</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterGallery;
