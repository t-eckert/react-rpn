import React from 'react';

const operation = (props) => {
  return (
    <div className="Operation">
      <button 
        type="button" 
        className="btn btn-operation" 
        onClick={props.click}
      >
      {props.symbol}
      </button>
    </div>
  )
};

export default operation;