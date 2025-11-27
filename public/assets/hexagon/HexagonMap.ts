import FigurePentagonEdges from "../pentagon/FigurePentagonEdges";
import FigurePentagonExploded from "../pentagon/FigurePentagonExploded";
import FigurePentagonFull from "../pentagon/FigurePentagonFull";
import FigurePentagonInnerDots from "../pentagon/FigurePentagonInnerDots";
import FigurePentagonSplit from "../pentagon/FigurePentagonSplit";
import FigureHexagonCenterCross from "./FigureHexagonCenterCross";
import FigureHexagonEdges from "./FigureHexagonEdges";
import FigureHexagonFull from "./FigureHexagonFull";
import FigureHexagonInsideCircle from "./FigureHexagonInsideCircle";
import FigureHexagonSpiral from "./FigureHexagonSpiral";


const HexagonMap = new Map<number, React.FC<React.SVGProps<SVGSVGElement>>>();
HexagonMap.set(1, FigureHexagonCenterCross)
HexagonMap.set(2, FigureHexagonEdges)
HexagonMap.set(3, FigureHexagonFull)
HexagonMap.set(4, FigureHexagonInsideCircle)
HexagonMap.set(5, FigureHexagonSpiral)

export default HexagonMap;