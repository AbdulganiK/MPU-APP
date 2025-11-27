import React from "react";

const FigureTriangleVertexDots: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const stroke = props.stroke ?? "black";

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

      {/* Punkte an den Ecken */}
      <circle cx={50} cy={10} r={4} fill={stroke} />
      <circle cx={10} cy={85} r={4} fill={stroke} />
      <circle cx={90} cy={85} r={4} fill={stroke} />
    </svg>
  );
};

export default FigureTriangleVertexDots;
