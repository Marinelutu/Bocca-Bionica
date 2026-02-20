const conventionPhotos = [
    "https://turismodentale.it/wp-content/uploads/2024/07/convention1.webp",
    "https://turismodentale.it/wp-content/uploads/2024/07/convention2.webp",
    "https://turismodentale.it/wp-content/uploads/2024/07/convention3.webp",
    "https://turismodentale.it/wp-content/uploads/2024/07/convention4.webp",
    "https://turismodentale.it/wp-content/uploads/2024/07/convention5.webp",
];

const ConventionGallery = () => (
    <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 space-y-10">
            <div className="text-center space-y-4">
                <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl uppercase">
                    Le Nostre <span className="text-teal">Convention</span> & Cliniche
                </h2>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                    Momenti di condivisione e formazione nelle nostre strutture all'avanguardia, dove la tecnologia incontra l'eccellenza clinica.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {conventionPhotos.map((src, i) => (
                    <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl shadow-md transition-transform hover:scale-105">
                        <img
                            src={src}
                            alt={`Convention photo ${i + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ConventionGallery;
