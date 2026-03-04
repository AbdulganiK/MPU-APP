import {
  Navigation,
  Route,
  Gauge,
  Grape,
  ScanSearch,
  Zap,
  Workflow,
} from "lucide-react";

export const testTypes = [
  {
    title: "Figurenvergleichstest",
    icon: ScanSearch,
    description: "Konzentration & Genauigkeit im Straßenverkehr",
    href: "/comparisionPage",

  },
  {
    title: "Reaktionstest",
    icon: Zap,
    description: "Reaktionsfähigkeit im Straßenverkehr",
    href: "/reactionPage",

  },
  {
    title: "Straßenüberblickstest",
    icon: Navigation,
    description: "Überprüfung der Orientierungsfähigkeit",
    href: "/coming-soon",
  },
  {
    title: "Linienverfolgungstest",
    icon: Route,
    description: "Überprüfung der Spurhaltung",
    href: "/coming-soon",
  },
  {
    title: "Belastbarkeitstest",
    icon: Gauge,
    description: "Reaktion & Aufmerksamkeit im Verkehr",
    href: "/coming-soon",

  },
  {
    title: "Kombitest",
    icon: Workflow,
    description: "Gesamtüberprüfung aller fahrrelevanten Fähigkeiten",
    href: "/coming-soon",
  },
];