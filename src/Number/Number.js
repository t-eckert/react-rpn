import React from 'react';

const number = (props) => {
  return (
    <div className="Number">
      <button 
        type="button" 
        className="btn btn-round btn-number"
        onClick={props.click}
      >
        {props.symbol}
      </button>
    </div>
  )
};

export default number;