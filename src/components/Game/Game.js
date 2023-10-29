import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList';
import Banner from '../Banner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function GameOverBanner({isWin, attemptNum}) {
  const winMessage = <>
                        <strong>Congratulations!</strong> Got it in{' '}
                        <strong>{attemptNum} guesses</strong>.
                     </>;
  const lostMessage = <>Sorry, the correct answer is <strong>{answer}</strong>.</>

  return(
      <Banner
        state={isWin? "happy" : "sad"}>
          {isWin ? winMessage : lostMessage}
      </Banner>    
  )
}

function Game() {
  const [guessList, setGuessList] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED)
      .map(() => "")
  );
  const [attemptNum, setAttemtNum] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [isWin, setIsWin] = React.useState(false);

  function handleWin() {
    setIsGameOver(true);
    setIsWin(true);
  }

  function handleLoss() {
    setIsGameOver(true);
    setIsWin(false);
  }
  function onGuessSubmit(tentativeGuess) {
    const nextAttemptNum = attemptNum + 1;

    function hasLost() {
      return nextAttemptNum === NUM_OF_GUESSES_ALLOWED;
    }

    function hasWon() {
      return answer === tentativeGuess;
    }

    if (attemptNum < NUM_OF_GUESSES_ALLOWED) {
      const nextGuessList = [...guessList];
      nextGuessList.splice(attemptNum, 1, tentativeGuess);
      setGuessList(nextGuessList);
      setAttemtNum(nextAttemptNum);
    }

    if(hasWon()) handleWin();
    
    if(hasLost()) handleLoss();

  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer}/>
      <GuessInput onGuessSubmit={onGuessSubmit} disabled={isGameOver}/>
      { isGameOver &&
          <GameOverBanner
            isWin={isWin}
            attemptNum={attemptNum}/>
      }
    </>
  )
}

export default Game;
