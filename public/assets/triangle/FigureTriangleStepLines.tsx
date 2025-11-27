import React from "react";

const FigureTriangleStepLines: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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

      {/* obere „Stufe“ */}
      <line x1={30} y1={55} x2={70} y2={55} stroke={stroke} strokeWidth={3} />
      {/* untere „Stufe“ */}
      <line x1={20} y1={70} x2={80} y2={70} stroke={stroke} strokeWidth={3} />

      {/* Punkt rechts an der Basislinie */}
      <circle cx={78} cy={80} r={4} fill={stroke} />
    </svg>
  );
};

export default FigureTriangleStepLines;
