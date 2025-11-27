import React from "react";

const FigureHexagonFull: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const stroke = props.stroke ?? "black";

  return (
    <svg
      width={props.width ?? 120}
      height={props.height ?? 120}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* äußeres Sechseck */}
      <path
        d="M50 10 L90 25 L90 75 L50 90 L10 75 L10 25 Z"
        fill="none"
        stroke={stroke}
        strokeWidth={4}
      />

      {/* Diagonalen, die sich im Zentrum kreuzen */}
      <line x1={50} y1={10} x2={90} y2={25} stroke={stroke} strokeWidth={3} />
      <line x1={50} y1={10} x2={10} y2={25} stroke={stroke} strokeWidth={3} />
      <line x1={50} y1={90} x2={90} y2={75} stroke={stroke} strokeWidth={3} />
      <line x1={50} y1={90} x2={10} y2={75} stroke={stroke} strokeWidth={3} />

      {/* Punkt in der Mitte */}
      <circle cx={50} cy={50} r={4} fill={stroke} />
    </svg>
  );
};

export default FigureHexagonFull;
