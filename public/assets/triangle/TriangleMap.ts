import FigureTriangleCenterDot from "./FigureTriangleCenterDot";
import FigureTriangleInvertedInner from "./FigureTriangleInvertedInner";
import FigureTriangleSplitCenter from "./FigureTriangleSplitCenter";
import FigureTriangleStepLines from "./FigureTriangleStepLines";
import FigureTriangleVertexDots from "./FigureTriangleVertexDots";

const TriangleMap = new Map<number, React.FC<React.SVGProps<SVGSVGElement>>>();

TriangleMap.set(1, FigureTriangleCenterDot);
TriangleMap.set(2, FigureTriangleInvertedInner);
TriangleMap.set(3, FigureTriangleSplitCenter);
TriangleMap.set(4, FigureTriangleStepLines);
TriangleMap.set(5, FigureTriangleVertexDots);

export default TriangleMap;