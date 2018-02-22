import React from 'react';

const push = (props) => {
  return (
    <div className="Push">
      <button type="button" className="btn btn-round btn-push" onClick={props.click}><i className="fas fa-arrow-up"></i></button>
    </div>
  )
};

export default push;