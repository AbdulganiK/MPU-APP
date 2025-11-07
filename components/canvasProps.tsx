type CanvasProps = {
    startDrawing: (context: CanvasRenderingContext2D | null) => void;
    draw: (context: CanvasRenderingContext2D | null) => void;
    endDrawing: (context: CanvasRenderingContext2D | null) => void;
    height: number;
    width: number;
};

export default CanvasProps;