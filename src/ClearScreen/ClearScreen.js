import React from 'react';

const clearScreen = (props) => {
  return (
    <div className="ClearScreen">
      <button type="button" className="btn btn-action btn-clear-screen" onClick={props.click}>{props.symbol}</button>
    </div>
  )
};

export default clearScreen;