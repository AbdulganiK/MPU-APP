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

const r_explanations = [
  {
    icon: ListChecks,
    heading: "Regeln",
    text: "Auf dem Bildschirm erscheinen abwechselnd rote oder grüne Kreise. Manchmal ertönt zusätzlich ein Ton – dieser kann gemeinsam mit einem Kreis oder auch allein auftreten. Du darfst nur reagieren, wenn der grüne Kreis und der Ton gleichzeitig erscheinen.",
  },
  {
    icon: Timer,
    heading: "Ablauf",
    text: "Sobald der Test startet, werden die Reize in zufälliger Reihenfolge angezeigt. Drücke so schnell wie möglich die Leertaste, wenn grün und Ton gleichzeitig erscheinen. Bei allen anderen Kombinationen darfst du nicht reagieren.",
  },
  {
    icon: Target,
    heading: "Ziel",
    text: "Der Test misst deine Reaktionsgeschwindigkeit und Aufmerksamkeit. Er zeigt, wie sicher du zwischen relevanten und irrelevanten Reizen unterscheiden kannst – eine wichtige Fähigkeit im Straßenverkehr.",
  },
];
export default r_explanations;