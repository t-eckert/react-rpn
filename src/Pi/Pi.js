import React from 'react';

const pi_button = (props) => {
  return (
    <div className="Pi_Button">
      <button 
        type="button" 
        className="btn btn-round btn-pi"
        onClick={props.click}
      >
        {props.symbol}
      </button>
    </div>
  )
};

export default pi_button;