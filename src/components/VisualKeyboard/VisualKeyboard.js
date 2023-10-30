import React from 'react';
import { checkAllGuesses } from '../../game-helpers';

const ALL_LETTERS_BY_ROWS = ["QWERTYUIOP","ASDFGHJKL","ZXCVBNM"];

function VisualKeyboard({guessList, answer}) {
  const allHints = checkAllGuesses(guessList, answer);
  return (
    <div className='visual-keyboard-wrapper'>
      {ALL_LETTERS_BY_ROWS.map((lettersRow, index) => (
        <div key={index} className='visual-keyboard-row'>
          {[...lettersRow].map(letter => (
            <span
              key={letter}
              className={`visual-keyboard-cell ${allHints[letter]??""}`}>
                {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
    );
}

export default VisualKeyboard;
