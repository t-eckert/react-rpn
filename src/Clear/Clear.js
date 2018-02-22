import React from 'react';

const clear = (props) => {
  return (
    <div className="Clear">
      <button type="button" className="btn btn-round btn-clear" onClick={props.click}><i className="fas fa-arrow-left"></i></button>
    </div>
  )
};

export default clear;