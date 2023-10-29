import React, { useState } from 'react';

function GuessInput({onGuessSubmit, disabled}) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleGuessSubmission(e) {
    e.preventDefault();
  
    onGuessSubmit(tentativeGuess);
    setTentativeGuess("");
  }

  return (
  <form className="guess-input-wrapper" onSubmit={handleGuessSubmission}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      disabled={disabled}
      required
      minLength={5}
      maxLength={5}
      pattern='[a-zA-Z]{5}'
      id="guess-input"
      type="text"
      value={tentativeGuess}
      title='5 letter word'
      onChange={e => setTentativeGuess(e.target.value.toUpperCase())}/>
  </form>);
}

export default GuessInput;
