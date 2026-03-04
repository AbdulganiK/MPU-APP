import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Impressum() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-foreground">
            Impressum
          </h1>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="space-y-2">
                <div>Abdulgani Korkmaz</div>
                <div>In den Freuen 62A</div>
                <div>28719 Bremen</div>
                <div>Deutschland</div>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Kontakt
              </h2>
              <p className="space-y-2">
                <div>Telefon: +49 17614677069</div>
                <div>E-Mail: abdulganikorkmaz@outlook.de</div>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="space-y-2">
                <div>Abdulgani Korkmaz</div>
                <div>In den Freuen 62A</div>
                <div>28719 Bremen</div>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Haftungsausschluss
              </h2>
              <p className="mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
              <p>
                Unsere Verpflichtung zur Schadensersatzleistung wegen fahrlässiger oder vorsätzlicher Verletzung von Sorgfaltspflichten ist auf die Höhe des vorhersehbaren Schadens begrenzt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Haftungsausschluss für externe Links
              </h2>
              <p>
                Diese Website enthält Links zu Websites von Drittanbietern („externe Links"). Solange die externe Links nicht zu illegalen Inhalten führen, haben wir keine Kontrolle über die fremden Inhalte. Die Verantwortung für die Inhalte verlinkter Seiten trägt der jeweilige Anbieter oder Betreiber der Seiten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Urheberrecht
              </h2>
              <p>
                Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht. Jede vom deutschen Urheberrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Autors oder Urhebers. Das gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
