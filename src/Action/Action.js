import React from 'react';

const action = (props) => {
  return (
    <div className="Action">
      <button 
        type="button" 
        className="btn btn-action" 
        onClick={props.click}
      >
      {props.symbol}
      </button>
    </div>
  )
};

export default action;