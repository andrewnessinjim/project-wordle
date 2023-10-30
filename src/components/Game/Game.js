import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import VisualKeyboard from '../VisualKeyboard/VisualKeyboard';
import GameOverBanner from '../GameOverBanner/GameOverBanner';


function Game() {
  const [guessList, setGuessList] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED)
      .map(() => "")
  );
  const [attemptNum, setAttemtNum] = React.useState(0);
  //- playing, won, lost
  const [gameState, setGameState] = React.useState("playing");

  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });

  function resetGame(){
    console.log("Game reset");
    setGuessList(range(NUM_OF_GUESSES_ALLOWED)
        .map(() => ""));
    setAttemtNum(0);
    setGameState("playing");
    setAnswer(sample(WORDS));
    console.info({ answer });
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

    if(hasWon()) {
      setGameState("won")
    }
    
    if(hasLost()) {
      setGameState("lost")
    }

  }

  const isGameOver = gameState !== "playing";

  return (
    <>
      <GuessList guessList={guessList} answer={answer}/>
      <GuessInput onGuessSubmit={onGuessSubmit} disabled={isGameOver}/>
      <VisualKeyboard guessList={guessList} answer={answer} />
      { isGameOver &&
          <GameOverBanner
            isWin={gameState === "won"}
            attemptNum={attemptNum}
            answer={answer}
            onRestart={() => resetGame()}/>
      }
    </>
  )
}

export default Game;
