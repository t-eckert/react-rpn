import React from 'react';

const operandButton = (props) => {
  let btnStyle = "";

  if(props.symbol === "."){
    btnStyle = "btn-decimal"
  }
  else {
    btnStyle = "btn-number"
  }

  console.log(btnStyle)

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

export default operandButton;