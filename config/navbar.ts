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
  },
  {
    title: "Linienverfolgungstest",
    icon: Route,
    description: "Überprüfung der Spurhaltung",
  },
  {
    title: "Belastbarkeitstest",
    icon: Gauge,
    description: "Reaktion & Aufmerksamkeit im Verkehr",
  },
  {
    title: "Figurenvergleichstest",
    icon: ScanSearch,
    description: "Konzentration & Genauigkeit im Straßenverkehr",
  },
  {
    title: "Reaktionstest",
    icon: Zap,
    description: "Reaktionsfähigkeit im Straßenverkehr",
  },
  {
    title: "Kombitest",
    icon: Workflow,
    description: "Gesamtüberprüfung aller fahrrelevanten Fähigkeiten",
  },
];