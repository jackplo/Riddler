import { useState } from "react"
 
const useRiddler = (answer) => {
    const [turn, setTurn] = useState(0) // tracks the number guess the user is on
    const [currentGuess, setCurrentGuess] = useState('') // tracks current guess, updated everytime they hit keyboard
    const [guesses, setGuesses] = useState([]) // adds past guesses to array, starts empty
    const [history, setHistory] = useState([]) // adds past guesses to array, might not be needed
    const [isCorrect, setIsCorrect] = useState(false) // track if guess is correct

    //add a new guess to the guesses state
    //update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }

    //handle keyup event & track current guess
    //if user presses enter, add the new guess
    const handleKeyup = () => {

    }

    return {
        turn, currentGuess, guesses, isCorrect, handleKeyup
    }

}

export default useRiddler