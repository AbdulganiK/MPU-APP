import React from "react";

const FigurePentagonSplit: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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

      {/* Diagonale durch das Pentagon */}
      <line x1={50} y1={10} x2={10} y2={30} stroke={stroke} strokeWidth={3} />
      <line x1={50} y1={10} x2={90} y2={30} stroke={stroke} strokeWidth={3} />
      <line x1={50} y1={10} x2={70} y2={75} stroke={stroke} strokeWidth={3} />
      <line x1={50} y1={10} x2={30} y2={75} stroke={stroke} strokeWidth={3} />
      <line x1={50} y1={10} x2={10} y2={30} stroke={stroke} strokeWidth={3} />
    </svg>
  );
};

export default FigurePentagonSplit;
