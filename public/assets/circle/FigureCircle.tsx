import React from "react";

const FigureCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const stroke = props.stroke ?? "black";

  return (
    <svg
      width={props.width ?? 100}
      height={props.height ?? 100}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={stroke}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="50" cy="50" r="28" />
      </g>
    </svg>
  );
};

export default FigureCircle;
