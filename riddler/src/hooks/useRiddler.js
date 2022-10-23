import { useState } from "react"
 
const useRiddler = (solution) => {
    const [turn, setTurn] = useState(0) // tracks the number guess the user is on
    const [currentGuess, setCurrentGuess] = useState('') // tracks current guess, updated everytime they hit keyboard
    const [guesses, setGuesses] = useState([]) // adds past guesses to array, starts empty
    const [history, setHistory] = useState([]) // adds past guesses to array, might not be needed
    const [isCorrect, setIsCorrect] = useState(false) // track if guess is correct

    //check guess against solution word
    const checkGuess = () => {
        let solutionArray = solution.split(" ")
        let enteredGuess = currentGuess.split(" ").map((l) => {
            return {key: l, color: 'grey'}
        })
        
        // find if word is in solution and in right spot
        enteredGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                enteredGuess[i].color = 'green'
                solutionArray[i] = null
            }
        });

        //find if word is in solution but not in right spot
        enteredGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                enteredGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return enteredGuess
    }

    //add a new guess to the guesses state
    //update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }

    //handle keyup event & track current guess
    //if user presses enter, add the new guess
    const handleKeyup = ({key}) => {
        if (key === 'Enter') {
            //make sure turn is not greater than 4
            if (turn > 5) { 
                console.log("too many turns")
                return
            }

            //do not allow duplicate guesses
            if (history.includes(currentGuess)) {
                console.log("already tried it!")
                return
            }

            const enteredWord = checkGuess()
            console.log(enteredWord)
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
        }
        
        if (/^[A-Za-z  ]$/.test(key)) {
            
            setCurrentGuess((prev) => {
                return prev + key
            })
        }
    }

    return {
        turn, currentGuess, guesses, isCorrect, handleKeyup
    }

}

export default useRiddler