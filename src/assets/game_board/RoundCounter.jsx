/* eslint-disable react/prop-types */

export default function RoundCounter(props) {
    
    const { gameOver, roundNum } = props;

    return (
        <div className="h-fit text-sm text-black bg-[#D9D9D9] p-2 font-bold mb-14 border border-black">
            {gameOver ? "Game Over" : `Round ${roundNum}`}

        </div>
    )

}