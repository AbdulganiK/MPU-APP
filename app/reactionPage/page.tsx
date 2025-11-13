// ReactionPage.tsx
"use client";

import Navbar from "@/components/navbar";
import Canvas from "@/components/canvas";
import { useWindowSize } from "@uidotdev/usehooks";
import CanvasMenu from "@/components/canvasMenu";
import { drawCircle, getRandomInt } from "../utilities";
import r_explanations from "@/config/reaction";
import { reaction_heading, reaction_title } from "@/config/title_heading";

const ReactionPage = () => {
  const size = useWindowSize();

  const playGreenSound = () => {
    const audio = new Audio("sounds/green.mp3");
    audio.play();
  };

  const draw = (context: CanvasRenderingContext2D | null) => {
    if (!context) return;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    const random = getRandomInt(1, 6);

    context.canvas.width = context.canvas.offsetWidth;
    context.canvas.height = context.canvas.offsetHeight;

    let current_symbol: "win" | "lose" = "lose";

    if (random === 1) {
      drawCircle(
        context,
        "red",
        context.canvas.width / 2,
        context.canvas.height / 2
      );
      const random_tone = getRandomInt(1, 2);
      if (random_tone === 1) {
        playGreenSound();
      }
    } else if (random === 2) {
      drawCircle(
        context,
        "green",
        context.canvas.width / 2,
        context.canvas.height / 2
      );
      playGreenSound();
      current_symbol = "win";
    } else if (random === 3) {
      drawCircle(
        context,
        "green",
        context.canvas.width / 2 + 200,
        context.canvas.height / 2
      );
      drawCircle(
        context,
        "red",
        context.canvas.width / 2 - 200,
        context.canvas.height / 2
      );
      const random_tone = getRandomInt(1, 2);
      if (random_tone === 1) {
        playGreenSound();
      }
    } else if (random === 4) {
      drawCircle(
        context,
        "red",
        context.canvas.width / 2,
        context.canvas.height / 2
      );
      const random_tone = getRandomInt(1, 2);
      if (random_tone === 1) {
        playGreenSound();
      }
    } else if (random === 5) {
      const random_tone = getRandomInt(1, 2);
      if (random_tone === 1) {
        playGreenSound();
      }
    } else if (random === 6) {
      drawCircle(
        context,
        "green",
        context.canvas.width / 2,
        context.canvas.height / 2
      );
    }

    return current_symbol;
  };

  const startDrawing = (context: CanvasRenderingContext2D | null) => {
    
  };

  const endDrawing = (context: CanvasRenderingContext2D | null) => {
    if (!context) return;
    context.beginPath();
    context.rect(20, 20, 150, 100);
    context.stroke();
  };

  const canvasHeight = size?.height ?? 0;
  const canvasWidth = size?.width ?? 0;

  return (
    <>
      <Navbar />
      <CanvasMenu
        GameComponent={Canvas}
        height={canvasHeight}
        width={canvasWidth}
        r_explanations={r_explanations}
        title={reaction_title}
        heading={reaction_heading}
        gameProps={{
          draw,
          startDrawing,
          endDrawing,
        }}
      />
    </>
  );
};

export default ReactionPage;
