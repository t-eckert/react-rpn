import React from 'react';

const operand = (props) => {
  let btnStyle = "";

  if(props.symbol === "."){
    btnStyle = "btn-decimal"
  }
  else {
    btnStyle = "btn-number"
  }

  return (
    <div className="Number">
      <button 
        type="button" 
        className={"btn btn-round "+btnStyle}
        onClick={props.click}
      >
        {props.symbol}
      </button>
    </div>
  )
};

export default operand;