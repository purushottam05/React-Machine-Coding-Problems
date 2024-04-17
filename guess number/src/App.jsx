import React, { useState } from 'react'

function NumberGuesser() {
    const [guess, setGuess] = useState('');
    const [target, setTarget] = useState(Math.floor(Math.random() * 101));

    const handleGuess = () => {
      const integer = parseInt(guess);
      
        if (!isNaN(integer)) {
            if (integer === target){
              alert('Congratulations, you got the right number');
              setTarget(Math.floor(Math.random() * 101))
            }
              else {
              alert("Try again");
            }
          } else {
            alert("Please enter a valid number");
        }
        setGuess('');
    }

    return (
      <div>
        <p>Please enter a number between 1 to 100</p>
        <input 
        type = 'number'
        value = {guess}
        onChange = {(e) => setGuess(e.target.value)}>
        </input>

        <button onClick = {handleGuess}>Submit</button>
        
        
    
        
      </div>
    )
}

export default NumberGuesser;

