import FigureCircle from "./FigureCircle";
import FigureCircleDotBottom from "./FigureCircleDotBottom";
import FigureCircleDotLeft from "./FigureCircleDotLeft";
import FigureCircleDotRight from "./FigureCircleDotRight";
import FigureCircleDotTop from "./FigureCircleDotTop";

const CircleMap = new Map<number, React.FC<React.SVGProps<SVGSVGElement>>>();
CircleMap.set(1, FigureCircle);
CircleMap.set(2, FigureCircleDotBottom);
CircleMap.set(3, FigureCircleDotLeft);
CircleMap.set(4, FigureCircleDotRight);
CircleMap.set(5, FigureCircleDotTop);

export default CircleMap;