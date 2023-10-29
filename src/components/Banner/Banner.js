import React from 'react';

function Banner({state, children}) {
  return (
    <p className={`banner ${state}`}>
      {children}
    </p>
  );
}

export default Banner;
