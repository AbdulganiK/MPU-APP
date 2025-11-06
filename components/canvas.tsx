import React, { useEffect } from 'react'
type CanvasProps = {
    draw: (context: CanvasRenderingContext2D | null) => void;
    height: number;
    width: number;
};

const Canvas = ({ draw, height, width }: CanvasProps) => {
    const ref = React.useRef<HTMLCanvasElement | null>(null)

    const clearDrawing = (context: CanvasRenderingContext2D | null) => {
        if (!context) return;
        context.clearRect(0, 0, 800, 800);
    }

    useEffect(() => {

        const canva = ref.current;
        if (!canva) return; // canvas evtl. noch null

        const context: CanvasRenderingContext2D | null = canva.getContext("2d");
        draw(context)
    });

    return (
        <canvas ref={ref} width={width} height={height}></canvas>
    )
}

export default Canvas;