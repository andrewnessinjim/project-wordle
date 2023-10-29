import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED)
      .map(() => "")
  );
  const [attemptNum, setAttemtNum] = React.useState(0);

  function onGuessSubmit(tentativeGuess) {
    if (attemptNum < NUM_OF_GUESSES_ALLOWED) {
      const nextGuessList = [...guessList];
      nextGuessList.splice(attemptNum, 1, tentativeGuess);
      setGuessList(nextGuessList);
      setAttemtNum(attemptNum + 1);
    }
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer}/>
      <GuessInput onGuessSubmit={onGuessSubmit}/>
    </>
  )
}

export default Game;
