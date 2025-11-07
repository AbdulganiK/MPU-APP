'use client'


import React from 'react'
import Navbar from "@/components/navbar";
import Canvas from '@/components/canvas';
import { useWindowSize } from "@uidotdev/usehooks";
import CanvasMenu from '@/components/canvasMenu';


const ReactionPage = () => {
  const size = useWindowSize();


  const draw = (context: CanvasRenderingContext2D | null) => {
    if (!context) return;
    context.beginPath();
    context.rect(20, 20, 150, 100);
    context.stroke();
  };

const startDrawing = (context: CanvasRenderingContext2D | null) => {
  if (!context) return;

  const canvas = context.canvas;
  const { width, height } = canvas;

  // Hintergrund zeichnen
  context.fillStyle = "#FFEACB"; // helles Amber
  context.fillRect(0, 0, width, height);

  // Titel
  context.fillStyle = "#222222";
  context.font = "bold 36px Arial";
  context.textAlign = "center";
  context.fillText("Reaktionstest", width / 2, height * 0.25);

  // Untertitel
  context.font = "20px Arial";
  context.fillStyle = "#444444";
  context.fillText("Teste deine Reaktionsgeschwindigkeit", width / 2, height * 0.35);

  // Beschreibung
  context.font = "18px Arial";
  context.fillStyle = "#555555";
  context.textAlign = "center";
  const explanation = [
    "Es werden mehrere Formen angezeigt",
    "Sobald du einen grünen Kreis und einen Ton hörst",
    "musst du so schnell wie möglich die leer Taste drücken. Dabei ist zu beachten:",
    "",
  ];

  // Mehrzeiligen Text mittig platzieren
  const lineHeight = 26;
  let y = height * 0.45;
  explanation.forEach((line) => {
    context.fillText(line, width / 2, y);
    y += lineHeight;
  });

  // Rahmen / optischer Fokus
  context.strokeStyle = "rgba(0,0,0,0.1)";
  context.lineWidth = 4;
  context.strokeRect(30, 30, width - 60, height - 60);

  // Footer
  context.font = "14px Arial";
  context.fillStyle = "#888";
  context.fillText("© 2025 Portino-MPU", width / 2, height - 50);
};


  const endDrawing = (context: CanvasRenderingContext2D | null) => {
    if (!context) return;
    context.beginPath();
    context.rect(20, 20, 150, 100);
    context.stroke();
  };

  

  return (
    <>
        <Navbar />
        <CanvasMenu draw={draw} startDrawing={startDrawing} endDrawing={endDrawing} height={(size?.height ?? 0)} width={size?.width ?? 0} />
    </>
  )
}

export default ReactionPage