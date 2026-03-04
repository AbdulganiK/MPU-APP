import { CheckCircle2 } from "lucide-react";

export default function HomeStats() {
  const stats = [
    { number: "1000+", label: "Unlimitierte Versuche" },
    { number: "0%", label: "Kosten" },
    { number: "6", label: "Verschiedene Tests" },
    { number: "24/7", label: "Jederzeit verfügbar" },
  ];

  const benefits = [
    "Realistische Prüfungssimulation",
    "Detailliertes Feedback und Ergebnisse",
    "Fortschrittstracking und Statistiken",
    "Mobile Nutzung möglich",
    "Schnelle Reaktion",
    "Handmade",
  ];

  return (
    <>
      {/* Stats Section */}
      <div className="bg-[#FBBF24]-50 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
            Was an dieser Seite geschätz wird
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-2xl border border-border/50 text-center transition hover:shadow-md"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-sm md:text-base text-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-foreground">
            Warum Portino-MPU wählen?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-primary mt-1 shrink-0" />
                <span className="text-foreground/80 leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-primary/10 to-primary/5 px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
            Bereit, dich vorzubereiten?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Starte noch heute und meistere deine Zulassungsprüfung mit
            Zuversicht.
          </p>

          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md">
            Jetzt kostenlos testen
          </button>
        </div>
      </div>
    </>
  );
}