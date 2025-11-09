// canvasProps.ts
export default interface CanvasProps {
  draw: (ctx: CanvasRenderingContext2D) => string | void;

  // WICHTIG: Context optional machen, damit () => void ODER (ctx) => void passt
  startDrawing?: (ctx?: CanvasRenderingContext2D | null) => void;
  endDrawing?: (ctx?: CanvasRenderingContext2D | null) => void;

  height: number;
  width: number;

  // falls schon übernommen:
  totalRounds: number;
  intervalMs: number;
}
