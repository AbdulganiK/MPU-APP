"use client";

import CanvasMenu from '@/components/canvasMenu'
import Navbar from '@/components/navbar'
import { useWindowSize } from '@uidotdev/usehooks';
import React from 'react'
import Comparision from '../games/comparision';
import c_explanations from '@/config/comparision';
import { comparision_heading, comparision_title } from '@/config/title_heading';

const comparisionPage = () => {
    const size = useWindowSize();
    const canvasHeight = size?.height ?? 0;
    const canvasWidth = size?.width ?? 0;

    return (
        <>
            <Navbar />
            <CanvasMenu
                GameComponent={Comparision}
                height={canvasHeight}
                width={canvasWidth}
                r_explanations={c_explanations}
                title={comparision_title}
                heading={comparision_heading}
            />
        </>
    )
}

export default comparisionPage