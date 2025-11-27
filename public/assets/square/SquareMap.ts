import FigureSquareFull from "./FigureSquareFull";
import FigureSquareMissingHorizontal from "./FigureSquareMissingHorizontal";
import FigureSquareMissingVertical from "./FigureSquareMissingVertical";
import FigureSquareNoDiagonals from "./FigureSquareNoDiagonals";
import FigureSquareOnlyDiagonals from "./FigureSquareOnlyDiagonals";


const SquareMap = new Map<number, React.FC<React.SVGProps<SVGSVGElement>>>();
SquareMap.set(1, FigureSquareFull)
SquareMap.set(2, FigureSquareMissingHorizontal)
SquareMap.set(3, FigureSquareMissingVertical)
SquareMap.set(4, FigureSquareNoDiagonals)
SquareMap.set(5, FigureSquareOnlyDiagonals)


export default SquareMap;