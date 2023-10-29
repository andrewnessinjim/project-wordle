import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Cell({letter, hint}) {
  return (
    <span className={`cell ${hint ?? ""}`}>
      {letter}
    </span>
  )
}
function Guess({ guess, answer }) {
  const guessHints = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell key={num}
          hint={guessHints ? guessHints[num].status : undefined}
          letter={guessHints ? guessHints[num].letter : undefined}
          >
        </Cell>
      ))}
    </p>
  );
}

export default Guess;
