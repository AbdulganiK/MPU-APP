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
    title: "Straßenüberblickstest",
    icon: Navigation,
    description: "Überprüfung der Orientierungsfähigkeit",
    href : "#",
  },
  {
    title: "Linienverfolgungstest",
    icon: Route,
    description: "Überprüfung der Spurhaltung",
    href : "#",
  },
  {
    title: "Belastbarkeitstest",
    icon: Gauge,
    description: "Reaktion & Aufmerksamkeit im Verkehr",
    href : "#",

  },
  {
    title: "Figurenvergleichstest",
    icon: ScanSearch,
    description: "Konzentration & Genauigkeit im Straßenverkehr",
    href : "#",

  },
  {
    title: "Reaktionstest",
    icon: Zap,
    description: "Reaktionsfähigkeit im Straßenverkehr",
    href : "/reactionPage",

  },
  {
    title: "Kombitest",
    icon: Workflow,
    description: "Gesamtüberprüfung aller fahrrelevanten Fähigkeiten",
    href : "#",
  },
];