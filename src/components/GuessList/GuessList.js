import React from 'react';
import Guess from '../Guess/Guess';

function GuessList({guessList}) {
  
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <p className="guess" key={index}>
          <Guess guess={guess}/>
        </p>
      ))}
    </div>
  )
}

export default GuessList;
