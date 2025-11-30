import React, { useEffect, useMemo, useRef, useState } from "react";
import { getRandomNumber1to5, getRandomNumber1toX } from "@/lib/utils";
import CircleMap from "@/public/assets/circle/CircleMap";
import FigureMaps from "@/public/assets/FigureMap";
import RoundCounter from "@/components/roundCounter";
import Statistic from "@/components/statistics";

type GameBaseProps = {
  height: number;
  width: number;
  totalRounds: number;
  intervalMs: number;
};

const Comparision = ({ height, width, totalRounds, intervalMs }: GameBaseProps) => {
  const [counter, setCounter] = useState(0);
  const [correctGuessedcounter, setcorrectGuessedCounter] = useState(0);
  const timerRef = useRef<number | undefined>(undefined);

  // UseRef für Werte, die in Event-Listenern verwendet werden
  const gameStateRef = useRef({
    pressedThisRound: false,
    currentShouldBeIncluded: false
  });

  const { topNumbers, bottomNumber, shouldBeIncluded } = useMemo(() => {
    const allNumbers = [1, 2, 3, 4, 5];

    // Fisher-Yates Shuffle
    for (let i = allNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
    }

    const topNumbers = allNumbers.slice(0, 4);
    const remainingNumber = allNumbers[4];
    const shouldBeIncluded = Math.random() > 0.5;
    
    const bottomNumber = shouldBeIncluded 
      ? topNumbers[Math.floor(Math.random() * topNumbers.length)]
      : remainingNumber;

    // Update ref mit aktuellen Werten
    gameStateRef.current = {
      pressedThisRound: false,
      currentShouldBeIncluded: shouldBeIncluded
    };

    return { topNumbers, bottomNumber, shouldBeIncluded };
  }, [counter]);

  // Timer-Effect
  useEffect(() => {
    if (counter >= totalRounds) return;

    timerRef.current = window.setTimeout(() => {
      if (!gameStateRef.current.pressedThisRound) {
        // Keine Eingabe in dieser Runde - automatisch zur nächsten Runde
        setCounter(prev => prev + 1);
      }
    }, intervalMs);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [counter, totalRounds, intervalMs]);

  // SINGLE useEffect für Tastatureingaben
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      const { pressedThisRound, currentShouldBeIncluded } = gameStateRef.current;
      
      // Frühzeitig return bei ungültigen Eingaben
      if (pressedThisRound) return;
      if (counter >= totalRounds) return;
      
      let isCorrect = false;
      
      if (event.code === "KeyJ") {
        // J gedrückt - Benutzer sagt "ist enthalten"
        isCorrect = currentShouldBeIncluded;
      } else if (event.code === "KeyN") {
        // N gedrückt - Benutzer sagt "ist nicht enthalten"
        isCorrect = !currentShouldBeIncluded;
      } else {
        return; // Andere Taste - ignorieren
      }
      
      // Korrekte Antwort zählen
      if (isCorrect) {
        setcorrectGuessedCounter((prev) => prev + 1);
      }
      
      // Markiere diese Runde als bearbeitet
      gameStateRef.current.pressedThisRound = true;
      
      // Timer für diese Runde stoppen
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      
      // Sofort zur nächsten Runde wechseln
      setCounter(prev => prev + 1);
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [counter, totalRounds]); // counter als Dependency hinzugefügt

  const figureMap = FigureMaps.get(getRandomNumber1toX(FigureMaps.size)) ?? CircleMap;
  const BottomFigure = figureMap.get(bottomNumber);

  const gameFinished = counter >= totalRounds;
  
  // Korrekte Berechnung der Statistik
  const accuracy =
    totalRounds > 0
      ? ((correctGuessedcounter / totalRounds) * 100).toFixed(1)
      : "0";
    
  const stats = <Statistic 
    correctCounter={correctGuessedcounter} 
    correctTotal={totalRounds} 
    accuracy={accuracy} 
    stats_text="Gesamte Symbolanzahl"
  />;

  return (
    <div className="relative w-full h-[90%] max-h-[600px]">
      {/* Obere 4 Figuren (alle unterschiedlich) */}
      <div className="grid grid-cols-4 gap-4 justify-center items-center mx-auto">
        {topNumbers.map((num) => {
          const Figure = figureMap.get(num);
          if (!Figure) return null;

          return (
            <div
              key={num}
              className="rounded-2xl border-2 border-[#d6b48b] p-4 shadow-sm bg-[#f7e6cc]"
            >
              <Figure width={200} height={200} stroke="black" />
            </div>
          );
        })}
      </div>

      {/* Untere Figur */}
      <div className="mt-4 grid grid-cols-4 gap-4">
        <div className="col-span-1 rounded-2xl border-2 border-[#d6b48b] p-4 shadow-sm bg-[#f7e6cc]">
          {BottomFigure && (
            <BottomFigure width={200} height={200} stroke="black" />
          )}
        </div>
      </div>
      
      {/* --- Rundezähler --- */}
      <RoundCounter counter={counter} totalRounds={totalRounds}/>

      {/* --- Statistik-Overlay --- */}
      {gameFinished && stats}
      
      {/* Debug Info (optional entfernen) 
      <div className="mt-2 text-sm text-gray-600 text-center">
        Runde: {counter}/{totalRounds} | Korrekt: {correctGuessedcounter} | Enthalten: {shouldBeIncluded ? "Ja" : "Nein"}
      </div>*/}
    </div>
  );
};

export default Comparision;