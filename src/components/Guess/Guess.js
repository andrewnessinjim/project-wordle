import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guess({guess, answer}) {
  const guessHints = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${guessHints ? guessHints[num].status : ""}`}>
          {guessHints ? guessHints[num].letter: undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
