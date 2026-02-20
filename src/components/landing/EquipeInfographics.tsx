const EquipeInfographics = () => (
    <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 space-y-16">
            <div className="text-center space-y-4">
                <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl uppercase">
                    La Nostra <span className="text-teal">Equipe</span> & Infrastruttura
                </h2>
                <p className="max-w-3xl mx-auto text-muted-foreground">
                    Un'organizzazione capillare e professionale per garantirti il massimo della sicurezza e del risultato in ogni fase del trattamento.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <img
                        src="https://turismodentale.it/wp-content/uploads/2025/09/1.png"
                        alt="Infografica Equipe 1"
                        className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                    />
                    <img
                        src="https://turismodentale.it/wp-content/uploads/2025/09/Progetto-senza-titolo-4.png"
                        alt="Infografica Equipe 2"
                        className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-6">Mappa dei Dipartimenti</h3>
                    <img
                        src="https://turismodentale.it/wp-content/uploads/2025/09/Creative-Sales-Page-2.png"
                        alt="Mappa Dipartimenti"
                        className="w-full rounded-2xl shadow-2xl border-8 border-white"
                    />
                    <p className="mt-6 text-muted-foreground leading-relaxed italic">
                        "Grazie alla nostra presenza capillare in Europa, siamo in grado di seguire i nostri pazienti prima, durante e dopo l'intervento con la massima efficienza."
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default EquipeInfographics;
