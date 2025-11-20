import React from "react";

const FigureSquareNoDiagonals: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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

      {/* Vertikale Mittellinie */}
      <line x1={50} y1={15} x2={50} y2={85} stroke={stroke} strokeWidth={3} />

      {/* Horizontale Mittellinie */}
      <line x1={15} y1={50} x2={85} y2={50} stroke={stroke} strokeWidth={3} />
    </svg>
  );
};

export default FigureSquareNoDiagonals;
