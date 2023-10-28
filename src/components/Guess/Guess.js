import React from 'react';

function Guess({guess}) {
  return (
    guess.padEnd(5).split("").map((char, index) => (
      <span key={index} className="cell">{char}</span>
    ))
  );
}

export default Guess;
