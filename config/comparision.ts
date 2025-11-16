import {
    BadgeDollarSign,
    ListChecks,
    Route,
    ShieldCheck,
    Target,
    Timer,
    Truck,
    Undo2,
    UserRoundCheck,
} from "lucide-react";
import GameExplanation from "./gameExplanation";




const c_explanations: GameExplanation[] = [
  {
    icon: ListChecks,
    heading: "Regeln",
    text: "Oben werden vier Zeichen angezeigt, unten ein einzelnes Zeichen. Deine Aufgabe ist es, das untere Zeichen mit den oberen zu vergleichen.",
  },
  {
    icon: Timer,
    heading: "Ablauf",
    text: "Stimmt das untere Zeichen mit einem der oberen überein, drücke J für Ja. Stimmt es mit keinem überein, drücke N für Nein.",
  },
  {
    icon: Target,
    heading: "Ziel",
    text: "Der Test misst deine Aufmerksamkeit und Konzentrationsfähigkeit, indem er untersucht, wie schnell und korrekt du visuelle Figuren vergleichen kannst.",
  },
];
export default c_explanations;