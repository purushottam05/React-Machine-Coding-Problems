import React, { useState, useEffect } from 'react';

function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    quoteGen();
  }, []);

  const quoteGen = async () => {
    try {
      const response = await fetch('https://api.quotable.io/quotes/random?tags=');
      const data = await response.json();
      setQuote(data[0].content);
      setAuthor(data[0].author);
    }
    catch (error) {
      console.error("Cannot get the Quote", error);
    }
  }

  return (
    <div>
    <p>{quote}</p>
    <p>{author}</p>
    <button onClick = {quoteGen} >Generate</button>
    </div>
  )
  
}

export default QuoteGenerator