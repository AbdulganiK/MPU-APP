import React from "react";

const FigurePentagonInnerDots: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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

      {/* Punkte an den Ecken */}
      <circle cx={50} cy={10} r={4} fill={stroke} />
      <circle cx={90} cy={30} r={4} fill={stroke} />
      <circle cx={70} cy={75} r={4} fill={stroke} />
      <circle cx={30} cy={75} r={4} fill={stroke} />
      <circle cx={10} cy={30} r={4} fill={stroke} />
    </svg>
  );
};

export default FigurePentagonInnerDots;
