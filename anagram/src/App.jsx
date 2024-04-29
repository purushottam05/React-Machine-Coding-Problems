import React, { useState } from 'react';

function AnagramChecker() {
    const [firstWord, setFirstWord] = useState('');
    const [secondWord, setSecondWord] = useState('');
    const [isAnagram, setIsAnagram] = useState(false);

    const checkAnagram = () => {

      const word1 = firstWord.toLowerCase().replace('/[^a-z]/g', '').split('').sort().join('');
      const word2 = secondWord.toLowerCase().replace('/[^a-z]/g', '').split('').sort().join('');
      setIsAnagram(word1 === word2);

    }

    return (
      <div>
        <input 
        type = 'text'
        value = {firstWord}
        onChange = {(e) => setFirstWord(e.target.value)}
        placeholder = 'first word'></input>

        <input 
        type = 'text'
        value = {secondWord}
        onChange = {(e) => setSecondWord(e.target.value)}
        placeholder = 'second word'></input>

        <button onClick = {checkAnagram}>Click Here</button>

        {isAnagram ? <p>This is an Anagram</p> : <p>This is not an Anagram</p>}
      </div>
    )
}
export default AnagramChecker