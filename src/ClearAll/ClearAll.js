import React from 'react';

const clearAll = (props) => {
  return (
    <div className="ClearAll">
      <button type="button" className="btn btn-action btn-clear-all" onClick={props.click}>{props.symbol}</button>
    </div>
  )
};

export default clearAll;