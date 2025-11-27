import React from "react";

const FigureTriangleCenterDot: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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

      {/* inneres kleines Dreieck */}
      <path
        d="M50 25 L25 75 H75 Z"
        fill="none"
        stroke={stroke}
        strokeWidth={3}
      />

      {/* Punkt in der Mitte */}
      <circle cx={50} cy={55} r={4} fill={stroke} />
    </svg>
  );
};

export default FigureTriangleCenterDot;
