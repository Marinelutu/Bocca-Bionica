import { useState } from "react";

const LeadFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", email: "", tel: "", panoramica: "" });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Inserisci il tuo nome";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Email non valida";
    if (!form.tel.trim()) e.tel = "Inserisci il tuo telefono";
    if (!form.panoramica) e.panoramica = "Seleziona un'opzione";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="lead-form" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl rounded-2xl bg-card p-6 shadow-lg md:p-10">
          {submitted ? (
            <div className="text-center space-y-4 py-8">
              <span className="text-5xl">✅</span>
              <h3 className="font-display text-2xl font-bold">Richiesta inviata!</h3>
              <p className="text-muted-foreground">Sarai ricontattato in 24/48 ore da un nostro consulente.</p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Richiedi <span className="text-cta">GRATIS</span> un preventivo personalizzato:
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                compila i campi qui sotto e premi il pulsante verde per essere ricontattato in 24/48 ore
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {[
                  { key: "name", label: "Nome e Cognome", type: "text", placeholder: "Mario Rossi" },
                  { key: "email", label: "Email", type: "email", placeholder: "mario@email.com" },
                  { key: "tel", label: "Telefono", type: "tel", placeholder: "+39 333 1234567" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="mb-1 block text-sm font-medium text-foreground">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, [f.key]: e.target.value }));
                        setErrors((p) => ({ ...p, [f.key]: "" }));
                      }}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary"
                    />
                    {errors[f.key] && <p className="mt-1 text-xs text-destructive">{errors[f.key]}</p>}
                  </div>
                ))}
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Hai già una panoramica della tua bocca?
                  </label>
                  <select
                    value={form.panoramica}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, panoramica: e.target.value }));
                      setErrors((p) => ({ ...p, panoramica: "" }));
                    }}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Seleziona...</option>
                    <option value="si">Sì, ho già una panoramica</option>
                    <option value="no">No, non ho una panoramica</option>
                  </select>
                  {errors.panoramica && <p className="mt-1 text-xs text-destructive">{errors.panoramica}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-cta py-4 text-base font-semibold text-cta-foreground transition-all hover:brightness-110"
                >
                  Richiedi un secondo parere GRATUITAMENTE
                </button>
              </form>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Sarai ricontattato in 24/48 ore da un nostro consulente per definire i prossimi passi da seguire
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
