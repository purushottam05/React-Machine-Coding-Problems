import React, {useState} from 'react';

function GenerateCount() {
  const [text, setText] = useState('');
  const [word, setWord] = useState(0);
  const [para, setPara] = useState(0);
  const [char, setChar] = useState(0);

  

    const countWord = () => {
      const word = text.split(/\s+/)
       return word.length
    }

    const countPara = () => {
      const para = text.split(/\n\n+/)
       return para.length
    }

    const countChar = () => {
      
       return text.length
    }

    const handleCount = () => {

      setWord(countWord())
      setPara(countPara())
      setChar(countChar())
  }

  return (
    <div>
      <textarea 
      type = 'text'
      value = {text}
      onChange = {(e) => setText(e.target.value)}
      cols = {60}
      rows = {5}
      placeholder = "type something..." />

      <button onClick = {handleCount}> Generate</button>

      <p> Char : {char}</p>
      <p> Word : {word}</p>
      <p> Para : {para}</p>
      </div>
  )

}

export default GenerateCount