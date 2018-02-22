import React from 'react';

const decimal = (props) => {
  return (
    <div className="Decimal">
      <button 
        type="button" 
        className="btn btn-round btn-decimal"
        onClick={props.click}
      >
        {props.symbol}
      </button>
    </div>
  )
};

export default decimal;