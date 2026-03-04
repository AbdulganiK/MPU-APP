import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-foreground">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Datenschutz auf einen Blick
              </h2>
              <p>
                Die folgenden Angaben geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. Allgemeine Hinweise
              </h2>
              <p>
                Diese Datenschutzerklärung gilt für die Datenverarbeitung durch uns als Verantwortliche und durch von uns beauftragte Auftragsverarbeiter. Bei der Erhebung von Daten auf dieser Website gelten die Bestimmungen der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. Datenerfassung auf unserer Website
              </h2>

              <div className="ml-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Cookies
                  </h3>
                  <p>
                    Die Internetseiten verwenden an mehreren Stellen sogenannte Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie ermöglichen es uns, Ihren Besuch auf unserer Website komfortabler zu gestalten.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Server-Log-Dateien
                  </h3>
                  <p>
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind IP-Adresse, Browsertyp und -version, verwendetes Betriebssystem, Referrer URL und Hostname des zugreifenden Rechners.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Ihre Rechte
              </h2>
              <p className="mb-4">
                Sie haben das Recht, jederzeit über die bei uns gespeicherten personenbezogenen Daten Auskunft zu erhalten. Ebenfalls haben Sie das Recht auf Berichtigung, Einschränkung oder Löschung dieser Daten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Kontakt
              </h2>
              <p>
                Wenn Sie Fragen zum Datenschutz haben, nehmen Sie bitte Kontakt mit uns auf:
              </p>
              <p className="mt-4 space-y-2">
                <div>E-Mail: abdulganikorkmaz@outlook.de</div>
                <div>Telefon: +49 17614677069</div>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Beschwerderecht
              </h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutzbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                7. Änderungen dieser Datenschutzerklärung
              </h2>
              <p>
                Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Bitte informieren Sie sich regelmäßig, um sich mit etwaigen Änderungen vertraut zu machen.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
