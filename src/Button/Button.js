import React from 'react';

const button = (props) => {

  const styles = {
    ".": "btn-round btn-decimal",
    "0": "btn-round btn-number",
    "1": "btn-round btn-number",
    "2": "btn-round btn-number",
    "3": "btn-round btn-number",
    "4": "btn-round btn-number",
    "5": "btn-round btn-number",
    "6": "btn-round btn-number",
    "7": "btn-round btn-number",
    "8": "btn-round btn-number",
    "9": "btn-round btn-number",
    "+": "btn-operation",
    "–": "btn-operation",
    "×": "btn-operation",
    "÷": "btn-operation",
    "x²": "btn-action",
    "√": "btn-action",
    "+/-": "btn-action",
    "SIN": "btn-action",
    "COS": "btn-action",
    "TAN": "btn-action"
  }

  let btnStyle = styles[props.symbol];

  return (
    <div className="Button">
      <button 
        type="button"
        className={"btn " +btnStyle}
        onClick={props.click}
      >
        {props.symbol}
      </button>
    </div>
  )
};

export default button;