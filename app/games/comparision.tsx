import React, { useEffect, useMemo, useState } from "react";
import { getRandomNumber1to5, getRandomNumber1toX } from "@/lib/utils";
import CircleMap from "@/public/assets/circle/CircleMap";
import FigureMaps from "@/public/assets/FigureMap";

type GameBaseProps = {
  height: number;
  width: number;
  totalRounds: number;
  intervalMs: number;
};

const Comparision = ({ height, width, totalRounds, intervalMs }: GameBaseProps) => {
  // Zufallszahlen nur einmal pro Mount berechnen
  const [counter, setCounter] = useState(0);

  // Korrekt erratene Figuren
  const [correctGuessedcounter, setcorrectGuessedCounter] = useState(0);

  // pro Runde nur ein Space erlauben
  const pressedThisRoundRef = React.useRef(false);

  // UseEffect for counting and changing rounds
  useEffect(() => {


    let timer: number | undefined;

    if (counter < totalRounds) {
      timer = window.setTimeout(() => {
        // pro Runde nur ein Space erlauben
        pressedThisRoundRef.current = false;
        setCounter((prev) => prev + 1);
      }, intervalMs);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [counter]);



  const { topNumbers, bottomNumber } = useMemo(() => {
    const allNumbers = [1, 2, 3, 4, 5];


    // Fisher-Yates Shuffle
    for (let i = allNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
    }

    const topNumbers = allNumbers.slice(0, 4); // 4 unterschiedliche oben
    const bottomNumber = getRandomNumber1to5(); // zufällige unten

    return { topNumbers, bottomNumber };
  }, []);

  // useEffect for checking keypress J and validating it
  useEffect(() => {
    const handleKeyYesUp = (event: KeyboardEvent) => {
      if (event.code !== "KeyJ") return;
      if (pressedThisRoundRef.current) return;
      if (topNumbers.includes(bottomNumber)) {
        setcorrectGuessedCounter((prev) => prev + 1);
      }
      pressedThisRoundRef.current = true;
    };

    window.addEventListener("keyup", handleKeyYesUp);
    return () => window.removeEventListener("keyup", handleKeyYesUp);
  }, [counter]);

  // useEffect for checking keypress N and validating it
  useEffect(() => {
    const handleKeyNoUp = (event: KeyboardEvent) => {
      if (event.code !== "KeyN") return;
      if (pressedThisRoundRef.current) return;
      if (!topNumbers.includes(bottomNumber)) {
        setcorrectGuessedCounter((prev) => prev + 1);
      }
      pressedThisRoundRef.current = true;
    };

    window.addEventListener("keyup", handleKeyNoUp);
    return () => window.removeEventListener("keyup", handleKeyNoUp);
  }, [counter]);

  const figureMap = FigureMaps.get(getRandomNumber1toX(FigureMaps.size)) ?? CircleMap;
  const BottomFigure = figureMap.get(bottomNumber);

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
      <div className="mt-4 grid grid-cols-4 gap-4 pt-20">
        <div className="col-span-1 rounded-2xl border-2 border-[#d6b48b] p-4 shadow-sm bg-[#f7e6cc]">
          {BottomFigure && (
            <BottomFigure width={200} height={200} stroke="black" />
          )}
        </div>
      </div>

      {/* Rundenzähler oben rechts */}
      <div className="absolute top-3 right-4 text-xl font-bold text-gray-700 bg-white/80 px-3 py-1 rounded-lg shadow">
        {counter}/{totalRounds}
      </div>

    </div>
  );
};

export default Comparision;
