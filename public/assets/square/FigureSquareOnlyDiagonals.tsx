import React from "react";

const FigureSquareOnlyDiagonals: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const stroke = props.stroke ?? "black";

  return (
    <svg
      width={props.width ?? 120}
      height={props.height ?? 120}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Äußeres Quadrat */}
      <rect
        x={15}
        y={15}
        width={70}
        height={70}
        fill="none"
        stroke={stroke}
        strokeWidth={4}
      />

      {/* Diagonale von links oben nach rechts unten */}
      <line x1={15} y1={15} x2={85} y2={85} stroke={stroke} strokeWidth={3} />

      {/* Diagonale von rechts oben nach links unten */}
      <line x1={85} y1={15} x2={15} y2={85} stroke={stroke} strokeWidth={3} />
    </svg>
  );
};

export default FigureSquareOnlyDiagonals;
