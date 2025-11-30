import React from 'react'

interface roundCounterInterface {
  counter: number;
  totalRounds: number;
}

function RoundCounter({counter, totalRounds} : roundCounterInterface) {
    return (
        <div className="absolute top-3 right-4 text-xl font-bold text-gray-700 bg-white/80 px-3 py-1 rounded-lg shadow">
            {counter}/{totalRounds}
        </div>

    )
}

export default RoundCounter;