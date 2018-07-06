import React from 'react';

const CartItem = (props) => {
  return (
    <div class="list-group-item">
      <div class="row">
        <div class="col-md-8">{props.product.name}</div>
        <div class="col-md-2">{props.product.priceInCents}</div>
        <div class="col-md-2">{props.quantity}</div>
      </div>
    </div>
  )
}

export default CartItem;
