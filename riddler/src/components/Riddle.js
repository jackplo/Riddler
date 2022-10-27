// entire UI of game
import React, { useEffect, useState } from "react";
import useRiddler from "../hooks/useRiddler";
import Grid from "./Grid";

export default function Riddle({ solution }) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useRiddler(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

    return (
        <div>
            <div>solution - {solution}</div>
            <div>current guess - {currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} solution={solution}/>
        </div>
    )   
}