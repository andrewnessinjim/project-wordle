import React from 'react';
import Guess from '../Guess/Guess';

function GuessList({guessList, answer}) {
  
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
          <Guess guess={guess} key={index} answer={answer}/>
      ))}
    </div>
  )
}

export default GuessList;
