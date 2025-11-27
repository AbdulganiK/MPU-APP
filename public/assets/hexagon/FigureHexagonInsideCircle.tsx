import React from "react";

const FigureHexagonInsideCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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

      {/* Kreis innerhalb des Sechsecks */}
      <circle cx={50} cy={50} r={30} fill="none" stroke={stroke} strokeWidth={3} />
    </svg>
  );
};

export default FigureHexagonInsideCircle;
