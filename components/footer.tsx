import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">
              MPU-APP
            </h3>
            <p className="text-sm text-foreground/70">
              Trainiere effektiv für deine Zulassungsprüfung mit interaktiven Tests.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Über mich
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/70">
              © {currentYear} MPU-APP. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link
                href="/impressum"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
