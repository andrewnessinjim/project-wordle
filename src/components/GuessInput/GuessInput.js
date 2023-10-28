import React, { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState("");

  function handleGuessSubmission(e) {
    e.preventDefault();
    console.log({guess});
    setGuess("");
  }

  return (
  <form className="guess-input-wrapper" onSubmit={handleGuessSubmission}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      required
      minLength={5}
      maxLength={5}
      pattern='[a-zA-Z]{5}'
      id="guess-input"
      type="text"
      value={guess}
      title='5 letter word'
      onChange={e => setGuess(e.target.value.toUpperCase())}/>
  </form>);
}

export default GuessInput;
