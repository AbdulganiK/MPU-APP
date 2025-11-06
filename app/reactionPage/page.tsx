'use client'


import React from 'react'
import Navbar from "@/components/navbar";
import Canvas from '@/components/canvas';

const ReactionPage = () => {
  const draw = (context: CanvasRenderingContext2D | null) => {
    if (!context) return;
    context.beginPath();
    context.rect(20, 20, 150, 100);
    context.stroke();
  };

  return (
    <>
        <Navbar />
        <Canvas draw={draw} height={800} width={800} />
    </>
  )
}

export default ReactionPage