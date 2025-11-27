import React from "react";

const FigurePentagonExploded: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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

      {/* Linien, die aus dem Pentagon heraus "explodieren" */}
      <line x1={50} y1={10} x2={10} y2={0} stroke={stroke} strokeWidth={3} />
      <line x1={90} y1={30} x2={100} y2={15} stroke={stroke} strokeWidth={3} />
      <line x1={70} y1={75} x2={85} y2={90} stroke={stroke} strokeWidth={3} />
      <line x1={30} y1={75} x2={15} y2={90} stroke={stroke} strokeWidth={3} />
      <line x1={10} y1={30} x2={0} y2={15} stroke={stroke} strokeWidth={3} />
    </svg>
  );
};

export default FigurePentagonExploded;
