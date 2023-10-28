import React from 'react';

function Guess({guess}) {
  return (
    <p className="guess">
      {guess.padEnd(5).split("").map((char, index) => (
        <span key={index} className="cell">{char}</span>
      ))}
    </p>
  );
}

export default Guess;
