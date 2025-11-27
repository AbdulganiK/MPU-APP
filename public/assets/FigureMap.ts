import CircleMap from "./circle/CircleMap";
import SquareMap from "./square/SquareMap";
import TriangleMap from "./triangle/TriangleMap";
import PentagonMap from "./pentagon/PentagonMap";
import HexagonMap from "./hexagon/HexagonMap";


const FigureMaps:  Map<number, Map<number, React.FC<React.SVGProps<SVGSVGElement>>>>  = new Map() ;
FigureMaps.set(1, CircleMap)
FigureMaps.set(2, SquareMap)
FigureMaps.set(3, TriangleMap)
FigureMaps.set(4, PentagonMap)
FigureMaps.set(5, HexagonMap)


export default FigureMaps;