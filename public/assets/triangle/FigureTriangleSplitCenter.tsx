import React from "react";

const FigureTriangleSplitCenter: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const stroke = props.stroke ?? "black";

  // Mittelpunkt auf der Hälfte der Höhe
  const centerX = 50;
  const centerY = 55;

  return (
    <svg
      width={props.width ?? 120}
      height={props.height ?? 120}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* äußeres Dreieck */}
      <path
        d="M50 10 L10 85 H90 Z"
        fill="none"
        stroke={stroke}
        strokeWidth={4}
      />

      {/* Mittelachse von Spitze zum Mittelpunkt der Basis */}
      <line x1={50} y1={10} x2={50} y2={85} stroke={stroke} strokeWidth={3} />

      {/* Diagonalen vom Mittelpunkt zu den Basis-Ecken */}
      <line x1={centerX} y1={centerY} x2={10} y2={85} stroke={stroke} strokeWidth={3} />
      <line x1={centerX} y1={centerY} x2={90} y2={85} stroke={stroke} strokeWidth={3} />
    </svg>
  );
};

export default FigureTriangleSplitCenter;
