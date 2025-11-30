import React, { useEffect, useState } from "react";
import CanvasProps from "./canvasProps";
import Statistic from "./statistics";
import { stat } from "fs";
import RoundCounter from "./roundCounter";
import GameHint from "./GameHint";

const Canvas = ({ startDrawing, draw, endDrawing, height, width, totalRounds, intervalMs }: CanvasProps) => {
  const ref = React.useRef<HTMLCanvasElement | null>(null);
  const [counter, setCounter] = useState(0);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [correctTotal, setCorrectTotal] = useState(0);
  const [drawing, setDrawing] = useState("");

  // hält immer den neuesten drawing-Wert für Key-Handler
  const drawingRef = React.useRef(drawing);
  useEffect(() => {
    drawingRef.current = drawing;
  }, [drawing]);

  // pro Runde nur ein Space erlauben
  const pressedThisRoundRef = React.useRef(false);

  useEffect(() => {
    const canva = ref.current;
    if (!canva) return;

    const context: CanvasRenderingContext2D | null = canva.getContext("2d");
    if (!context) return;

    let timer: number | undefined;

    if (counter < totalRounds) {
      timer = window.setTimeout(() => {
        // neue Runde startet → Reset „Space bereits gedrückt?“
        pressedThisRoundRef.current = false;

        setCounter((prev) => prev + 1);

        if (typeof draw === "function") {
          const result = draw(context); // nur einmal aufrufen
          if (typeof result === "string") {
            setDrawing(result);
            if (result === "win") {
              setCorrectTotal((prev) => prev + 1);
            }
          }
        }
      }, intervalMs);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [counter, draw, totalRounds, intervalMs]);

  useEffect(() => {

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code !== "Space") return;

      // nur der erste Space in dieser Runde zählt
      if (pressedThisRoundRef.current) return;
      pressedThisRoundRef.current = true;

      if (drawingRef.current === "win") {
        setCorrectCounter((prev) => prev + 1);
      }

      // Debug
      console.log("Space (einmalig in Runde)", counter, "->", drawingRef.current);
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [counter]);

  // Hilfswerte für Statistik

  const gameFinished = counter >= totalRounds;
  const accuracy =
    correctTotal > 0
      ? ((correctCounter / correctTotal) * 100).toFixed(1) // z.B. 33.3%
      : "0";
  const stats = <Statistic correctCounter={correctCounter} correctTotal={correctTotal} accuracy={accuracy} stats_text="Gesammte Gewinnsymbole"/>;
  
  
  return (
    <div className="relative w-full h-[90%] max-h-[600px]">
      {/* Canvas */}
      <canvas
        ref={ref}
        width={width}
        height={height}
        className="w-full h-full rounded-3xl border border-border shadow-xl bg-[#FFEACB]"
      />

      {/* Rundenzähler oben rechts */}
      <RoundCounter counter={counter} totalRounds={totalRounds}/>

      {/* Hinweis unten links */}
      <GameHint hint_text="Leertaste drücken - grün und Ton = Punkt"/>

      {/* --- Statistik-Overlay --- */}
      {gameFinished && (stats)}
    </div>
  );
};

export default Canvas;
