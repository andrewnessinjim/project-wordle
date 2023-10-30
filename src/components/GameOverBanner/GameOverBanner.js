import React from 'react';
import Banner from '../Banner';

function GameOverBanner({isWin, attemptNum, answer}) {
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

export default GameOverBanner;
