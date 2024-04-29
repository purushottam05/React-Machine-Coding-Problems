import React, { useState } from 'react';

function GuessNumber() {

  const [number, setNumber] = useState((Math.floor(Math.random() * 100) + 1));
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const userGuess = parseInt(guess)

    if(isNaN(userGuess)) {
      setMessage("Please enter a Valid number");
    }
      else if( userGuess < number) {
        setMessage("Number lower than expected")
      }
      else if( userGuess > number ) {
        setMessage("Number higher than expected")
      }
      else {
        setMessage("Congratulations, you got the correct number");
      }

      setGuess('');
     

    
  }

  return (
    <div>
      <input 
      type = "text"
      value = {guess}
      onChange = {(e) => setGuess(e.target.value)}
      placeholder = "Enter between 1 and 100">

      </input>
      <button onClick = {handleGuess}>Generate</button>

      <p>{message}</p>
    </div>
  )


}

export default GuessNumber