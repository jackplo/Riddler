// entire UI of game
import React, { useEffect } from "react";
import useRiddler from "../hooks/useRiddler";

export default function Riddle({ solution }) {
    const { currentGuess, handleKeyup } = useRiddler(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    return (
        <div>
            <div>solution - {solution}</div>
            <div>current guess - {currentGuess}</div>
        </div>
    )   
}