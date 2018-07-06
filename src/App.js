import React, { Component } from 'react';
import CartHeader from './header.js';
import CartFooter from './footer.js';
import CartItems from './items.js'
import CartItem from './item.js'

class App extends Component {

  render() {
    const cartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
    ]
    return (
      <div>
        <CartHeader />
        <CartItems items={cartItemsList}/>
        <CartFooter copyright="2018" />
      </div>
    );
  }
}

export default App;
