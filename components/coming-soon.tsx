import { Button } from "@/components/ui/button";
import Link from "next/link";

type ComingSoonProps = {
  title?: string;
  description?: string;
};

export default function ComingSoon({
  title = "Coming Soon",
  description = "Diese Seite ist in Arbeit. Wir arbeiten hart daran, dir bald das beste Erlebnis zu bieten.",
}: ComingSoonProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary/80 to-primary/40 mb-4">
            {title}
          </div>
        </div>

        <p className="text-lg text-foreground/70 mb-8">
          {description}
        </p>

        <Button asChild size="lg" className="rounded-full">
          <Link href="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    </div>
  );
}
