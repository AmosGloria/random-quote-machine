import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const fetchNewQuote = () => {
    const quotes = [
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
      },
      {
        text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        author: "Ralph Waldo Emerson"
      },
      {
        text: "Don’t watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
      },
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote.text);
    setAuthor(randomQuote.author);
  };

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    window.open(tweetUrl, '_top');
  };

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="quote-text">{`"${quote}"`}</div>
      <div id="author" className="quote-author">- {author}</div>
      <div className="buttons">
        <button id="new-quote" onClick={fetchNewQuote}>New Quote</button>
        <a id="tweet-quote" onClick={tweetQuote} href="#!" target="_top">Tweet Quote</a>
      </div>
    </div>
  );
}

export default App;
