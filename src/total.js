import React from 'react';

const Total = (props) => {
  return (
    <div className="container">
      <div className="row">
        <p>Cart Total: {props.added}</p>
      </div>
    </div>
  )
}

export default Total;
