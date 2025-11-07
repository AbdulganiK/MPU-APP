import React, { useEffect } from 'react'
import CanvasProps from './canvasProps'


const Canvas = ({startDrawing, draw, endDrawing, height, width }: CanvasProps) => {
    const ref = React.useRef<HTMLCanvasElement | null>(null)

    const clearDrawing = (context: CanvasRenderingContext2D | null) => {
        if (!context) return;
        context.clearRect(0, 0, 800, 800);
    }

    // Start Drawing
    // Menus and Explanations to the game
    // only rendered once
    useEffect(() => {

        const canva = ref.current;
        if (!canva) return; // canvas evtl. noch null

        const context: CanvasRenderingContext2D | null = canva.getContext("2d");
        startDrawing(context);
    });

return (
  <div className="w-screen h-screen flex items-center justify-center">
    <canvas
      ref={ref}
      width={width}
      height={height}
      className="w-[90%] h-[90%] max-w-[900px] max-h-[600px] rounded-3xl border border-border shadow-xl bg-[#FFEACB]"
    ></canvas>
  </div>
);
}

export default Canvas;