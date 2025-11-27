import FigurePentagonEdges from "./FigurePentagonEdges";
import FigurePentagonExploded from "./FigurePentagonExploded";
import FigurePentagonFull from "./FigurePentagonFull";
import FigurePentagonInnerDots from "./FigurePentagonInnerDots";
import FigurePentagonSplit from "./FigurePentagonSplit";

const PentagonMap = new Map<number, React.FC<React.SVGProps<SVGSVGElement>>>();
PentagonMap.set(1, FigurePentagonEdges);
PentagonMap.set(2, FigurePentagonExploded);
PentagonMap.set(3, FigurePentagonFull);
PentagonMap.set(4, FigurePentagonInnerDots);
PentagonMap.set(5, FigurePentagonSplit);


export default PentagonMap;