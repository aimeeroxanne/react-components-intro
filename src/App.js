import React, { Component } from 'react';
import CartHeader from './header.js';
import CartFooter from './footer.js';
import CartItems from './CartItems.js'

class App extends Component {
  render() {
    return (
      <div>
        <CartHeader />
        <CartItems />
        <CartFooter />
      </div>
    );
  }
}

export default App;
