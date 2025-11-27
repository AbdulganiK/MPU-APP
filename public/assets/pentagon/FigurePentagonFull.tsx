import React from "react";

const FigurePentagonFull: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const stroke = props.stroke ?? "black";

  return (
    <svg
      width={props.width ?? 120}
      height={props.height ?? 120}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* äußeres Pentagon */}
      <path
        d="M50 10 L90 30 L70 75 L30 75 L10 30 Z"
        fill="none"
        stroke={stroke}
        strokeWidth={4}
      />

      {/* Innere Linien: von den Ecken zum Zentrum */}
      <line x1={50} y1={10} x2={50} y2={45} stroke={stroke} strokeWidth={3} />
      <line x1={90} y1={30} x2={50} y2={45} stroke={stroke} strokeWidth={3} />
      <line x1={70} y1={75} x2={50} y2={45} stroke={stroke} strokeWidth={3} />
      <line x1={30} y1={75} x2={50} y2={45} stroke={stroke} strokeWidth={3} />
      <line x1={10} y1={30} x2={50} y2={45} stroke={stroke} strokeWidth={3} />

      {/* Punkt in der Mitte */}
      <circle cx={50} cy={45} r={4} fill={stroke} />
    </svg>
  );
};

export default FigurePentagonFull;
