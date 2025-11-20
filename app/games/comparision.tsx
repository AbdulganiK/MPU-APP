import React from 'react'
import FigureCircle from '@/public/assets/circle/FigureCircle'
import FigureCircleDotBottom from '@/public/assets/circle/FigureCircleDotBottom'
import FigureCircleDotLeft from '@/public/assets/circle/FigureCircleDotLeft'
import FigureCircleDotTop from '@/public/assets/circle/FigureCircleDotTop'
import FigureCircleDotRight from '@/public/assets/circle/FigureCircleDotRight'


const Comparision = () => {
  return (
    <div className="relative w-full h-[90%] max-h-[600px]">
            <div className="grid grid-flow-col grid-rows-1 gap-4 justify-center items-center mx-auto">
    <div className="rounded-2xl border-2 border-[#d6b48b] p-4 shadow-sm bg-[#f7e6cc]">
        <FigureCircle width={200} height={200} stroke="black" />
    </div>
    <div className="rounded-2xl border-2 border-[#d6b48b] p-4 shadow-sm bg-[#f7e6cc]">
        <FigureCircle width={200} height={200} stroke="black" />
    </div>
    <div className="rounded-2xl border-2 border-[#d6b48b] p-4 shadow-sm bg-[#f7e6cc]">
        <FigureCircle width={200} height={200} stroke="black" />
    </div>
    <div className="rounded-2xl border-2 border-[#d6b48b] p-4 shadow-sm bg-[#f7e6cc]">
        <FigureCircle width={200} height={200} stroke="black" />
    </div>
</div>



    </div>
  )
}

export default Comparision