import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pb-50 md:pb-24">
      <div className="text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
Fit für die Zulassungsprüfung
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          Mit interaktiven Tests trainierst du Reaktion, Konzentration und Aufmerksamkeit - Schritt für Schritt zur erfolgreichen Führerschein Zulassungsprüfung.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Jetzt starten <ArrowUpRight className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="size-5" /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
