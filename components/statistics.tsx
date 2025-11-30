import React from 'react'

interface StatisticProps {
  correctCounter: number;
  correctTotal: number;
  accuracy: string | number;
  stats_text: string
}

function Statistic({ correctCounter, correctTotal, accuracy, stats_text }: StatisticProps) {
    
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm text-white rounded-3xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4">🎯 Spiel beendet!</h1>
          <p className="text-2xl mb-2">
            Richtige Treffer: <span className="font-bold">{correctCounter}</span>
          </p>
          <p className="text-2xl mb-6">
            
            {stats_text}:{" "}
            <span className="font-bold">{correctTotal}</span>
          </p>
          <p className="text-3xl font-semibold text-green-300">
            Trefferquote: {accuracy}%
          </p>
        </div>
  )
}

export default Statistic