import * as React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Navigation,   // Straßenüberblick
  Route,        // Linienverfolgung
  Gauge,        // Belastbarkeit & Aufmerksamkeit
  ScanSearch,   // Figurenvergleich
  Zap,          // Reaktion
  Workflow,     // Kombitest
} from "lucide-react";

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Navigation,
    title: "Straßenüberblick",
    description:
      "Prüft, wie schnell du dich in komplexen Verkehrsszenen orientierst.",
  },
  {
    icon: Route,
    title: "Linienverfolgung",
    description:
      "Trainiert das sichere Verfolgen von Fahrspuren und Linien bis zum Ziel.",
  },
  {
    icon: Gauge,
    title: "Belastbarkeit & Aufmerksamkeit",
    description:
      "Misst, wie konzentriert und reaktionsfähig du unter Zeitdruck bleibst.",
  },
  {
    icon: ScanSearch,
    title: "Figurenvergleich",
    description:
      "Vergleiche Formen schnell und genau – für präzise visuelle Wahrnehmung.",
  },
  {
    icon: Zap,
    title: "Reaktionsfähigkeit",
    description:
      "Wie schnell reagierst du auf kombinierte optische und akustische Signale?",
  },
  {
    icon: Workflow,
    title: "Kombitest",
    description:
      "Vereint Orientierung, Aufmerksamkeit, Reaktion und Konzentration in einem Test.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9DEB8]">
      <div className="max-w-(--breakpoint-lg) w-full py-20 px-6">
        <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty">
          Trainiere wie bei der Verkehrsprüfung
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl">
          Übe mit interaktiven Tests deine Reaktion, Konzentration und Orientierung
        </p>

        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0"
            >
              <CardContent className="mt-auto px-0 pb-0">
                <div className="bg-muted h-40 ml-6 rounded-tl-xl" />
              </CardContent>
              <CardHeader>
                <feature.icon className="size-5 text-muted-foreground" />
                <h4 className="mt-3 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px] pb-7">
                  {feature.description}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
