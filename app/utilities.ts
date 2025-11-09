
  function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const drawCircle = (context: CanvasRenderingContext2D | null, color: string, x_pos: number, y_pos: number) => {
    if (!context) return;    
    context.beginPath();
    context.arc(x_pos, y_pos, 150, 0, Math.PI * 2, false);
    context.fillStyle = color;
    context.fill();
    context.stroke();
  }

export {getRandomInt, drawCircle};