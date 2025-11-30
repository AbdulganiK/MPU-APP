import React from 'react'
interface GameHintProps {
    hint_text: string 
}


function GameHint({hint_text} : GameHintProps) {
    return (
        <div className="absolute bottom-3 left-4 text-sm font-semibold text-gray-700 px-3 py-1">
            {hint_text}
        </div>
    )
}

export default GameHint