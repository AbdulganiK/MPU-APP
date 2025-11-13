import React, { useEffect, useState } from "react";
import CanvasProps from "./canvasProps";

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
      <div className="absolute top-3 right-4 text-xl font-bold text-gray-700 bg-white/80 px-3 py-1 rounded-lg shadow">
        {counter}/{totalRounds}
      </div>

      {/* Hinweis unten links */}
      <div className="absolute bottom-3 left-4 text-sm font-semibold text-gray-700 px-3 py-1">
        Leertaste drücken - grün und Ton = Punkt
      </div>

      {/* --- Statistik-Overlay --- */}
      {gameFinished && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm text-white rounded-3xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4">🎯 Spiel beendet!</h1>
          <p className="text-2xl mb-2">
            Richtige Treffer: <span className="font-bold">{correctCounter}</span>
          </p>
          <p className="text-2xl mb-6">
            Gesamte Gewinnsymbole:{" "}
            <span className="font-bold">{correctTotal}</span>
          </p>
          <p className="text-3xl font-semibold text-green-300">
            Trefferquote: {accuracy}%
          </p>
        </div>
      )}
    </div>
  );
};

export default Canvas;
